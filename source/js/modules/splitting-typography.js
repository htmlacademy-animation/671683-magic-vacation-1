const tymeOffsetArr = [0, 50, 100, 150, 200, 250];

class AccentTypographyBuild {
  constructor(
      element,
      timer,
      property
  ) {
    this.element = element;
    this.timer = timer;
    this.property = property;
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    const tymeOffsetRandom = Math.floor(Math.random() * tymeOffsetArr.length);
    span.style.transition = `${this.property} ${this.timer}ms ease ${tymeOffsetArr[tymeOffsetRandom]}ms`;
    return span;
  }

  prepareText() {
    if (!this.element) {
      return;
    }
    const text = this.element.textContent.trim().split(` `).filter((latter) => latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter) => {
        fragment.appendChild(this.createElement(latter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this.element.innerHTML = ``;
    this.element.appendChild(content);
  }
}

const animatedLettersTextNodes = document.querySelectorAll(`.animated-letters`);

animatedLettersTextNodes.forEach((node) => {
  const animatedLetters = new AccentTypographyBuild(node, 500, `transform`);
  animatedLetters.prepareText();
});
