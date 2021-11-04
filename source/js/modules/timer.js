export default () => {
  const timerMinutes = document.querySelector(`.game__counter-min`);
  const timerSeconds = document.querySelector(`.game__counter-sec`);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const draw = (min, sec) => {
    timerMinutes.textContent = formatTime(min);
    timerSeconds.textContent = formatTime(sec);
  };

  const calcTimerData = (ms) => {
    const date = new Date(ms);
    return {
      min: date.getMinutes(),
      sec: date.getSeconds(),
    };
  };

  const startGameSessionTimer = (timeMinutes) => {
    let currentTime = timeMinutes * 60 * 1000;
    const timer = setInterval(() => {
      currentTime -= 1000;
      const {min, sec} = calcTimerData(currentTime);
      requestAnimationFrame(() => {
        draw(min, sec);
      });

      if (currentTime <= 0) {
        timer.clear();
      }
    }, 1000);
  };

  startGameSessionTimer(5);
};
