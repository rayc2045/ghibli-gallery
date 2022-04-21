import works from '../data/works.js';
import { createApp } from './petite-vue@0.4.1.js';
import {
  getParamsByUrl, getRandomNum, isVisible,
  getLocalStorage, setLocalStorage, removeLocalStorageKey
} from './utils.js';

const localStorageKey = 'ghibli-album-id';
const titleEl = document.querySelector('h1');
const originalHref = window.location.href;

const App = {
  works,
  isLoading: true,
  isTopButtonHide: true,
  currentIdx: 0,
  get language() {
    const { en } = getParamsByUrl();
    return en ? 'en' : 'jp';
  },
  get currentAlbum() {
    return this.works[this.currentIdx];
  },
  get bodyStyle() {
    if (this.isLoading) return 'overflow: hidden;';
  },
  init() {
    const localAlbumId = getLocalStorage(localStorageKey);
    if (localAlbumId) return this.currentIdx = localAlbumId;
    this.currentIdx = getRandomNum(0, this.works.length);
    this.saveLocalAlbumId();
  },
  endLoading(sec) {
    setTimeout(() => (this.isLoading = false), sec * 1000);
  },
  handleScroll() {
    if (isVisible(titleEl)) return (this.isTopButtonHide = true);
    this.isTopButtonHide = false;
  },
  moveToTop() {
    window.scrollTo(0, 0);
  },
  getImgUrl(idx) {
    return `https://www.ghibli.jp/gallery/${this.works[this.currentIdx].albumFolder}${
      idx < 9
        ? `00${idx + 1}.jpg`
        : `0${idx + 1}.jpg`
    }`;
  },
  changeAlbum(idx) {
    this.currentIdx = idx;
    this.saveLocalAlbumId();
    setTimeout(() => {
      window.history.replaceState({}, '', originalHref);
    });
  },
  saveLocalAlbumId() {
    setLocalStorage(localStorageKey, this.currentIdx);
  },
  removeLocalAlbumId() {
    removeLocalStorageKey(localStorageKey);
  }
};

createApp(App).mount();

window.onload = () => {
  App.moveToTop();
  App.endLoading();
};

window.onscroll = () => App.handleScroll();
window.onfocus = () => App.saveLocalAlbumId();
window.onblur = () => App.removeLocalAlbumId();
