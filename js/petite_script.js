import { createApp } from 'https://unpkg.com/petite-vue?module';
import { getParamsByUrl, getRandomNum, isVisible } from './utils.js';
import works from '/data/works.js';

const titleEl = document.querySelector('h1');
const originalHref = window.location.href;

const App = {
  works,
  isLoading: true,
  isTopButtonHide: true,
  currentIdx: getRandomNum(0, works.length),
  get language() {
    const { en } = getParamsByUrl();
    return en ? 'en' : 'jp';
  },
  get bodyStyle() {
    if (this.isLoading) return 'overflow: hidden;';
  },
  get numOfImages() {
    return works[this.currentIdx].numOfImages;
  },
  init() {
    this.currentIdx = getRandomNum(0, works.length);
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
  changeAlbum(idx) {
    this.currentIdx = idx;
    setTimeout(() => {
      window.history.replaceState({}, '', originalHref);
    });
  },
  getImgUrl(idx) {
    return `https://www.ghibli.jp/gallery/${works[this.currentIdx].albumFolder}${
      idx < 9
        ? `00${idx + 1}.jpg`
        : `0${idx + 1}.jpg`
    }`;
  },
};

createApp(App).mount();

window.onload = () => {
  App.moveToTop();
  App.endLoading();
};

window.onscroll = () => App.handleScroll();
