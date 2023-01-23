export function getParamsByUrl(url = window.location.href) {
  const [urlSearch, params] = [url.split('?')[1], {}];
  const urlSearchParams = new URLSearchParams(urlSearch);
  for (const [key, value] of urlSearchParams.entries()) {
    value
      ? params[key] = value.split(' ')
      : params[key] = [];
  }
  return params;
}

export function getRandomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function isVisible(el) {
  return el.getBoundingClientRect().bottom > 0;
}
