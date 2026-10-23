/* 
  topページ fv テキストフェードイン
*/

export function initTopFvTextFadeIn() {
  const windowWidth = window.innerWidth;
  let titleWords;

  // 英語テキストは単語単位でフェードイン
  const fvTextEn = () => {
    if (windowWidth < 1080) {
      const split = SplitText.create(".p-top-fv__title-en", {
        type: "words",
      });

      titleWords = split.words;
    } else {
      titleWords = gsap.utils.toArray(".p-top-fv__title-line-break");
    }

    return gsap.from(titleWords, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  };

  // 日本語テキストは1文字単位でフェードイン
  const fvTextJa = () => {
    const split = SplitText.create(".p-top-fv__title-ja", {
      type: "chars",
    });

    const titleChars = split.chars;

    // 分割されたテキストの親要素を透明にする
    gsap.set(".p-top-fv__title-ja", {
      opacity: 1,
    });

    return gsap.fromTo(
      titleChars,
      { opacity: 0, y: "1em" },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.03 },
    );
  };

  // 英語アニメーション終了後に日本語を実行
  fvTextEn().eventCallback("onComplete", () => {
    fvTextJa();
  });
}
