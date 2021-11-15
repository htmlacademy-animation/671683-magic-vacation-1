export default () => {
  const updateImg = (selector, newSrc) => {
    const imgWrap = document.querySelector(selector);
    imgWrap.src = newSrc;
  };

  updateImg(`.primary-award`, `img/module-3/primary-award.svg?` + new Date().getTime());
  setTimeout(() => {
    updateImg(`.secondary-award`, `img/module-3/secondary-award.svg?` + new Date().getTime());
  }, 2500);
  setTimeout(() => {
    updateImg(`.additional-award`, `img/module-3/additional-award.svg?` + new Date().getTime());
  }, 4500);
};
