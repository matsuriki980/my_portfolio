/* 
  お問い合わせThank you画面 処理
*/

export function initThanks() {
  const contactThanks = document.querySelector(".js-thanks");

  if (!contactThanks) return;

  const thanksBtn = contactThanks.querySelector(".c-btn");

  // ボタンクリックでトップページに移動する
  thanksBtn.addEventListener("click", () => {
    window.location.href = "/";
  });
}
