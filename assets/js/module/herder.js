/* 
  ヘッダー背景 表示・非表示切り替え
*/

export function initHeader() {
  const header = document.querySelector(".js-header");
  const headerScrollTrigger = document.querySelector(
    ".js-header__scroll-trigger",
  );

  const scrollY = window.scrollY; // スクロール量を取得
  const headerScrollTriggerTop =
    headerScrollTrigger.getBoundingClientRect().top + window.scrollY; // ページトップからトリガー要素までの距離を取得

  // ヘッダー背景を切り替える処理を書く
  const headerToggleClass = (scrollY) => {
    if (scrollY > headerScrollTriggerTop) {
      header.classList.add("is-active");
    } else {
      header.classList.remove("is-active");
    }
  };

  // ページトップからのスクロール量が、ページトップからトリガー要素までの高さを超えたら実行
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    headerToggleClass(scrollY);
  });

  // リロード時に判定を行う
  headerToggleClass(scrollY);
}
