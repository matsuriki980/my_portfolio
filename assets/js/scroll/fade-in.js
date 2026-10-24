/*
  複数要素の順次フェードイン処理
*/
export function initFadeIn() {
  // ① 監視対象の親要素を取得
  const fadeInTriggers = document.querySelectorAll(".js-fade-in-trigger");

  // ② 親要素が存在しなければ終了
  if (fadeInTriggers.length === 0) return;

  // ③ 交差状態が変化したときの処理
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      // ④ 画面内に入っていなければスキップ
      if (!entry.isIntersecting) return;

      // ⑤ 今回の親要素内の子要素を取得
      const fadeInItems = entry.target.querySelectorAll(".js-fade-in-item");

      // ⑥ 子要素があればGSAPを実行
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
          },
        );
      }

      // ⑦ 一度実行した親要素の監視を解除
      observer.unobserve(entry.target);
    });
  };

  // ⑧ 監視オプション
  const options = {
    root: null,
    rootMargin: "0px 0px -40% 0px",
    threshold: 0,
  };

  // ⑨ Observerを生成
  const observer = new IntersectionObserver(handleIntersect, options);

  // ⑩ 各親要素の監視を開始
  fadeInTriggers.forEach((trigger) => {
    observer.observe(trigger);
  });
}
