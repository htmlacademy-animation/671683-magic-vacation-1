export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  const updateImg = (selector, newSrc) => {
    const imgWrap = document.querySelector(selector);
    imgWrap.src = newSrc;
  };

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function () {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
      if (menuLinks[i].classList.contains(`prizes-link`)) {
        updateImg(`.primary-award`, `img/module-3/primary-award.svg?` + new Date().getTime());
        updateImg(`.secondary-award`, `img/module-3/secondary-award.svg?` + new Date().getTime());
        updateImg(`.additional-award`, `img/module-3/additional-award?` + new Date().getTime());
      }
    });
  }
};
