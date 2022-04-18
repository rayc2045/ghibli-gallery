export function getRandomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function isVisible(el) {
  return el.getBoundingClientRect().bottom > 0;
}
