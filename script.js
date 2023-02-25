/* بسم الله الرحمن الرحیم */

let seconds = 120;
let isCounting = false;

const updateID = (a, b) => {
  document.getElementById(a).innerHTML = b;
};
const convertSecondsToTime = () => {
  let minsNumber = Math.floor(seconds / 60);
  if (minsNumber < 10) {
    minsNumber = `0${minsNumber}`;
  }
  let secondsNumber = seconds % 60;
  if (secondsNumber < 10) {
    secondsNumber = `0${secondsNumber}`;
  }
  return `${minsNumber}:${secondsNumber}`;
};

const countDown = () => {
  if (isCounting) {
    seconds--;
    updateID("time", convertSecondsToTime());
    if (seconds === 0) {
      isCounting = 0;
      seconds = 120;
    }
  }
};

let secondsInterval = setInterval(countDown, 10);

document.getElementById("start").addEventListener("click", () => {
  if (seconds === 0) {
      return;
    }
  isCounting = true;
});
document.getElementById("reset").addEventListener("click", () => {
  isCounting = false;
  updateID("time", "02:00");
});
