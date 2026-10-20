/* 
  お問い合わせ確認画面 処理
*/

export function initConfirm() {
  const contactConfirm = document.querySelector(".js-confirm");

  if (!contactConfirm) return;

  const confirmBtn = contactConfirm.querySelector(".c-btn");
  const confirmBtnBack = contactConfirm.querySelector(".c-btn--back");

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
    confirmBtn.addEventListener("click", async () => {
      // 二重送信を防ぐ
      confirmBtn.disabled = true;
      confirmBtn.textContent = "送信中…";

      // FormspreeのIDを書く
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbgdeqll";

      // Formspreeへ送るデータ
      const submitData = {
        subject: "ポートフォリオサイトにお問い合わせが来ています",
        contactType: formInputValues.contactTypeValue,
        name: formInputValues.name,
        email: formInputValues.email,
        tel: formInputValues.tel,
        message: formInputValues.message,
      };

      try {
        // Formspreeへの送信処理を書く
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        });

        // 送信失敗なら、完了ページへ行かない
        if (!response.ok) {
          throw new Error("送信に失敗しました");
        }

        // 成功したら保存データを削除し、完了ページへ移動
        sessionStorage.removeItem("formInputValues");
        window.location.href = "/my_portfolio/contact/thanks/";
      } catch (error) {
        // 失敗時は確認ページに留まる
        if (sendStatus) {
          sendStatus.textContent =
            "送信できませんでした。時間をおいて再度お試しください。";
        }
      }
    });

    // 訂正ボタンをクリックで入力ページに戻る
    confirmBtnBack.addEventListener("click", () => {
      window.location.href = "/my_portfolio/contact/";
    });
  }
}
