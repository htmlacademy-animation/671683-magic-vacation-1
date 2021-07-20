export default () => {
  const storySlider = document.querySelector(`.slider`);

  const definePaginationType = function () {
    const pagination = document.querySelector(`.swiper-pagination`);
    const isBullets = pagination.classList.contains(`swiper-pagination-bullets`);
    if (isBullets) {
      storySlider.classList.add(`bullet-type`);
    } else {
      storySlider.classList.add(`arrow-type`);
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider.classList.contains(`bullet-type`)) {
      storySlider.classList.remove(`bullet-type`);
    }

    if (storySlider.classList.contains(`arrow-type`)) {
      storySlider.classList.remove(`arrow-type`);
    }

    definePaginationType();
  });

  definePaginationType();
};
