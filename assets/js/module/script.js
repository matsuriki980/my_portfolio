/* 
  ヘッダー背景 表示・非表示切り替え / ハンバーガーメニュー開閉処理 
*/

export function initScript() {
  const header = document.querySelector(".js-header");
  const headerScrollTrigger = document.querySelector(
    ".js-header__scroll-trigger",
  );

  const scrollY = window.scrollY; // スクロール量を取得
  const headerScrollTriggerTop =
    headerScrollTrigger.getBoundingClientRect().top + window.scrollY; // ページトップからトリガー要素までの距離を取得

  // ----------------------------------------------------------------------------
  // header-bg
  // ----------------------------------------------------------------------------
  const headerToggleClass = (scrollY) => {
    if (scrollY > headerScrollTriggerTop) {
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
  // 初期化
  // ----------------------------------------------------------------------------
  headerToggleClass(scrollY);
}
