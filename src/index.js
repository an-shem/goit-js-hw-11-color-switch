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
  if (refs.btnStart.disablet) return;
  timerId = setInterval(() => {
    const arrId = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[arrId];
    refs.btnStart.disablet = true;
  }, 1000);
}

function onClickStop() {
  clearInterval(timerId);
  refs.btnStart.disablet = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
