export function getQueryParams(url = window.location.href) {
  const urlSearch = url.split('?')[1];
  const urlSearchParams = new URLSearchParams(urlSearch);
  return Object.fromEntries(urlSearchParams.entries());
}

export function getRandomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function isVisible(el) {
  return el.getBoundingClientRect().bottom > 0;
}
