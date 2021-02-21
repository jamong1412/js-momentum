
const clockContainer = document.querySelector(".clockContainer");
const jsClock = clockContainer.querySelector(".js-clock");

function getTime() {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  jsClock.innerText = `${formatter(hh)}:${formatter(mm)}:${formatter(ss)}`;
}

function formatter(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function init() {
  setInterval(getTime, 1000);
}

init();
