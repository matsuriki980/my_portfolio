/* 
 works-detail キャプション画像切り替え処理
*/

export function initWorksTabBtn() {
  const tabs = document.querySelectorAll("[data-tab]");
  const imgs = document.querySelectorAll("[data-img]");

  if (!tabs || !imgs) return;

  const switchTab = (target, tabData) => {
    // タブの切り替え
    tabs.forEach((tab) => {
      const isActive = tab === target;
      tab.classList.toggle("is-active", isActive);
    });

    imgs.forEach((img) => {
      const isActive = img.dataset.img === tabData;
      img.classList.toggle("u-sp-hidden", !isActive);
    });
  };

  // タブにクリックイベントを設定
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      switchTab(tab, tab.dataset.tab);
    });
  });
}
