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

export function getRandomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function isVisible(el) {
  return el.getBoundingClientRect().bottom > 0;
}
