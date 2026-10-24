/*
  複数要素の順次フェードイン処理
*/
export function initFadeIn() {
  // 監視対象の親要素を取得
  const fadeInTriggers = document.querySelectorAll(".js-fade-in-trigger");

  // 親要素が存在しなければ終了
  if (fadeInTriggers.length === 0) return;

  // 交差状態が変化したときの処理
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      // 画面内に入っていなければスキップ
      if (!entry.isIntersecting) return;

      // 今回の親要素内の子要素を取得
      const fadeInItems = entry.target.querySelectorAll(".js-fade-in-item");

      // out-careerのトリガーか判定
      const aboutCareer = entry.target.closest(".js-about-career");

      // 子要素があればGSAPを実行
      if (fadeInItems.length > 0) {
        gsap.fromTo(
          fadeInItems,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,

            // out-careerなら、同セクションのフェードインアニメーションが終わってからborderを伸ばす

            onComplete: () => {
              // out-careerセクション以外なら処理を終了
              if (!aboutCareer) return;

              const aboutCareerBorder = document.querySelector(
                ".js-about-career__border",
              );

              if (aboutCareerBorder) {
                setTimeout(() => {
                  aboutCareerBorder.classList.add("is-active");
                }, 1000);
              }
            },
          },
        );
      }

      // 一度実行した親要素の監視を解除
      observer.unobserve(entry.target);
    });
  };

  // 監視オプション
  const options = {
    root: null,
    rootMargin: "0px 0px -65% 0px",
    threshold: 0,
  };

  // Observerを生成
  const observer = new IntersectionObserver(handleIntersect, options);

  // 各親要素の監視を開始
  fadeInTriggers.forEach((trigger) => {
    observer.observe(trigger);
  });
}
