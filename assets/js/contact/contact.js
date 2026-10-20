/* 
  お問い合わせフォーム処理
*/

export function initContactForm() {
  const form = document.querySelector(".js-contact-form");

  if (!form) return;

  // ボタンをクリックしたときの処理を書く
  form.addEventListener("submit", (el) => {
    el.preventDefault(); // ページの再読み込みをキャンセル
    const contactTypeValue =
      form.querySelector('input[name="contact-type"]:checked')?.value ?? ""; // [お問い合わせの種類]

    const name = form.querySelector('input[name="user-name"]').value; // [ご氏名・企業名]
    const email = form.querySelector('input[name="email"]').value; // [メールアドレス]
    const tel = form.querySelector('input[name="tel"]').value; // [電話番号]
    const message = form.querySelector('textarea[name="message"]').value; // [お問い合わせ内容]

    // 全ての入力値を配列にする
    const formInputValues = {
      contactTypeValue,
      name,
      email,
      tel,
      message,
    };

    // 入力値をストレージに保存
    sessionStorage.setItem("formInputValues", JSON.stringify(formInputValues));

    // 入力確認ページに移動する
    window.location.href = "/contact/confirm/";
  });
}
