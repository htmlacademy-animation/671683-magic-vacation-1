export class AnimatedNumbers {
  constructor({selector, delay, fps, startNumber, endNumber, step}) {
    this.element = document.querySelector(selector);
    this.delay = delay || 0;
    this.step = step || 1;
    this.fps = fps || 12;
    this.startNumber = startNumber || 1;
    this.endNumber = endNumber;
    this.intervalAnimationId = null;
    this.requestAnimationId = null;
  }

  setStartNumber() {
    this.element.textContent = this.startNumber;
  }

  draw(number) {
    this.element.textContent = number;
  }

  animate() {
    const fpsInterval = 1000 / this.fps;
    let number = this.startNumber;

    setTimeout(() => {
      this.intervalTimerId = setInterval(() => {
        let step = this.step;
        number = number + step;
        this.requestAnimationId = requestAnimationFrame(() => {
          this.draw(number);
        });

        if (number >= this.endNumber) {
          this.clear();
          this.element.textContent = this.endNumber;
        }
      }, fpsInterval);
    }, this.delay);
  }

  clear() {
    clearInterval(this.intervalTimerId);
    cancelAnimationFrame(this.requestAnimationId);
  }
}
