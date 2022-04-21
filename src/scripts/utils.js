export function getParamsByUrl(url = window.location.href) {
  const urlSearch = url.split('?')[1];
  const urlSearchParams = new URLSearchParams(urlSearch);
  const entries = Object.fromEntries(urlSearchParams.entries());
  Object.keys(entries).forEach(entry => {
    const split = entries[entry].split(' ');
    if (split.length === 1 && split[0] === '') return (entries[entry] = []);
    entries[entry] = split;
  });
  return entries;
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageKey(key) {
  localStorage.removeItem(key);
}

export function getRandomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function isVisible(el) {
  return el.getBoundingClientRect().bottom > 0;
}
