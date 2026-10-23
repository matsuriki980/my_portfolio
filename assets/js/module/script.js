/* 
  ヘッダー背景 表示・非表示切り替え / ハンバーガーメニュー開閉処理 
*/

export function initScript() {
  const header = document.querySelector(".js-header");
  const headerScrollTrigger = document.querySelector(
    ".js-header__scroll-trigger",
  );
  const hamburgerMenu = document.querySelector(".js-hamburger-menu");
  const hamburgerBtn = document.querySelector(".js-hamburger__btn");

  const scrollY = window.scrollY; // スクロール量を取得
  const headerScrollTriggerTop =
    headerScrollTrigger.getBoundingClientRect().top + window.scrollY; // ページトップからトリガー要素までの距離を取得

  const hamburgerMenuPlug = hamburgerMenu.classList.contains("is-open"); // ハンバーガーメニュー開閉状態判定プラグ

  // ----------------------------------------------------------------------------
  // header-bg
  // ----------------------------------------------------------------------------
  const headerToggleClass = (scrollY, hamburgerMenuPlug) => {
    if (scrollY > headerScrollTriggerTop && !hamburgerMenuPlug) {
      header.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
    }
  };

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // スクロール量を取得
    headerToggleClass(scrollY);
  });

  // ----------------------------------------------------------------------------
  // hamburger-menu
  // ----------------------------------------------------------------------------
  hamburgerBtn.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("is-open");
    header.classList.toggle("is-open");
    const scrollY = window.scrollY; // スクロール量を取得
    const hamburgerMenuPlug = hamburgerMenu.classList.contains("is-open");

    headerToggleClass(scrollY, hamburgerMenuPlug);
  });

  // リサイズ時、ヘッダーとハンバーガーメニューについているis-openを外す
  const handleResize = () => {
    const windowWidth = window.innerWidth;

    const pcFunction = () => {
      hamburgerMenu.classList.remove("is-open");
      header.classList.remove("is-open");
    };

    if (windowWidth > 1080) {
      pcFunction();
    }
  };

  // ----------------------------------------------------------------------------
  // 初期化
  // ----------------------------------------------------------------------------
  headerToggleClass(scrollY, hamburgerMenuPlug);

  // ----------------------------------------------------------------------------
  // リサイズ時
  // ----------------------------------------------------------------------------
  window.addEventListener("resize", handleResize);
}
