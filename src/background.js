
const body = document.querySelector("body");
const IMG_NUMBER = 10;

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `src/image/${imgNumber+1}.jpg`;
  image.classList.add("bgImage");
  console.log(image);
  body.appendChild(image);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
