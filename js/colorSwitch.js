const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.body;
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const DELAY = 1000;
let intervalId = null;

const setBgColor = function () {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    const bgColor = colors[index];
  bodyRef.style.backgroundColor = bgColor;
}

function onStartChange() {
  intervalId = setInterval(setBgColor, DELAY);
  startBtnRef.disabled = true;
}

function onStop() {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
}

startBtnRef.addEventListener('click', onStartChange);
stopBtnRef.addEventListener('click', onStop);