import colors from './colors';

let timerId = 0;
const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);

function onClickStart() {
  if (refs.btnStart.disabled) return;
  refs.btnStart.disabled = true;
  timerId = setInterval(() => {
    const arrId = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[arrId];
  }, 1000);
}

function onClickStop() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
