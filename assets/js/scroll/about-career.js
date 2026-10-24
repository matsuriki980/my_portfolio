/* 
 about-career borderの高さを取得する関数
*/

export function initUpdateCareerLine() {
  const updateCareerLine = () => {
    const inner = document.querySelector(".js-about-career__inner");
    const border = document.querySelector(".js-about-career__border");
    const circles = document.querySelectorAll(".js-about-career__circle");

    if (!inner || circles.length < 2) return; // about-career__itemが1つ以下なら処理を止める

    const innerRect = inner.getBoundingClientRect();
    const firstRect = circles[0].getBoundingClientRect();
    const lastRect = circles[circles.length - 1].getBoundingClientRect();

    const startX = firstRect.left + firstRect.width / 2 - innerRect.left;
    const startY = firstRect.top + firstRect.height / 2 - innerRect.top;
    const endY = lastRect.top + lastRect.height / 2 - innerRect.top;

    const lineHeight = Math.max(0, endY - startY);

    // CSSカスタムプロパティに値を渡す
    border.style.setProperty("--line-left", `${startX}px`);
    border.style.setProperty("--line-top", `${startY}px`);
    border.style.setProperty("--line-height", `${lineHeight}px`);
  };

  // 初期化
  updateCareerLine();

  // リサイズ時、borderの長さを再計算
  window.addEventListener("resize", updateCareerLine);
}
