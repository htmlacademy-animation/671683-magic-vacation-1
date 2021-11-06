export class GameTimer {
  constructor({minutesSelecctor, secondsSelector, timeMinutes}) {
    this.timerMinutes = document.querySelector(minutesSelecctor);
    this.timerSeconds = document.querySelector(secondsSelector);
    this.timeMinutes = timeMinutes;
    this.intervalTimerId = null;
    this.requestAnimationId = null;
  }

  static formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  knowStartTime() {
    let obj;
    if (this.timeMinutes >= 1) {
      obj = {
        min: GameTimer.formatTime(this.timeMinutes),
        sec: `00`
      };
    } else {
      obj = {
        min: `00`,
        sec: GameTimer.formatTime(60 / this.timeMinutes)
      };
    }
    return obj;
  }

  draw(min, sec) {
    this.timerMinutes.textContent = GameTimer.formatTime(min);
    this.timerSeconds.textContent = GameTimer.formatTime(sec);
  }

  calcTimerData(ms) {
    const date = new Date(ms);
    return {
      min: date.getMinutes(),
      sec: date.getSeconds(),
    };
  }

  start() {
    let currentTime = this.timeMinutes * 60 * 1000;
    this.intervalTimerId = setInterval(() => {
      currentTime -= 1000;
      const {min, sec} = this.calcTimerData(currentTime);
      this.requestAnimationId = requestAnimationFrame(() => {
        this.draw(min, sec);
      });

      if (currentTime <= 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalTimerId);
    cancelAnimationFrame(this.requestAnimationId);
    this.timerMinutes.textContent = this.knowStartTime().min;
    this.timerSeconds.textContent = this.knowStartTime().sec;
  }
}
