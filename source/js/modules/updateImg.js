export default () => {
  const updateImg = (selector, newSrc) => {
    const imgWrap = document.querySelector(selector);
    imgWrap.src = newSrc;
  };

  updateImg(`.primary-award`, `img/module-3/primary-award.svg?` + new Date().getTime());
  updateImg(`.secondary-award`, `img/module-3/secondary-award.svg?` + new Date().getTime());
  updateImg(`.additional-award`, `img/module-3/additional-award.svg?` + new Date().getTime());
};
