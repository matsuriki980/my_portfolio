/* 
  お問い合わせ確認画面 処理
*/

export function initConfirm() {
  const contactConfirm = document.querySelector(".js-confirm");
  const confirmBtn = contactConfirm.querySelector(".c-btn");
  const confirmBtnBack = contactConfirm.querySelector(".c-btn--back");

  if (!contactConfirm) return;

  const savedData = sessionStorage.getItem("formInputValues");

  if (savedData) {
    const formInputValues = JSON.parse(savedData);

    // ----------------------------------------------------------------------------
    // 入力値の反映処理を書く
    // ----------------------------------------------------------------------------

    // お問い合わせの種類
    contactConfirm.querySelector("#contact-type").textContent =
      formInputValues.contactTypeValue;

    // ご氏名・企業名
    contactConfirm.querySelector("#user-name").textContent =
      formInputValues.name;

    // メールアドレス
    contactConfirm.querySelector("#email").textContent = formInputValues.email;

    // 電話番号
    contactConfirm.querySelector("#tel").textContent = formInputValues.tel;

    // お問い合わせ内容
    contactConfirm.querySelector("#message").textContent =
      formInputValues.message;

    // ----------------------------------------------------------------------------
    // ボタンをクリックしたときの処理を書く
    // ----------------------------------------------------------------------------

    // 送信ボタンをクリックでデータを送信後、削除して送信完了ページに移動する
    confirmBtn.addEventListener("click", () => {
      sessionStorage.removeItem("formInputValues");
      window.location.href = "/contact/thanks/";
    });

    // 訂正ボタンをクリックで入力ページに戻る
    confirmBtnBack.addEventListener("click", () => {
      window.location.href = "/contact/";
    });
  }
}
