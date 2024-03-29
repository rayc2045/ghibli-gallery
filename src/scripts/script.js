import { createApp, reactive } from './petite-vue@0.4.1.js';
import { getQueryParams, getRandomNum, isVisible } from './utils.js';
import works from '../data/works.js';

const titleEl = document.querySelector('#title');
const originalHref = window.location.href;
const galleryEndpoint = 'https://www.ghibli.jp/gallery/';

const STORAGE_KEY = 'ghibli-album-id';
const albumIdxStorage = {
  fetch() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  },
  save(id) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(id));
  },
  remove() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

const Slider = reactive({
  isShow: false,
  isCloseButtonShow: false,
  currentImageUrl: `${galleryEndpoint}${works[0].albumFolder}001.jpg`,
  get max() {
    return works.find(album =>
      this.currentImageUrl.includes(album.albumFolder)
    ).numOfImages;
  },
  get currentImageIdx() {
    return Number(this.currentImageUrl.slice(-7).split('.')[0]);
  },
  get progress() {
    return `${String(this.currentImageIdx).padStart(
      String(this.max).length,
      '0'
    )} / ${this.max}`;
  },
  showSlider(url) {
    this.isShow = true;
    this.currentImageUrl = url;
  },
  handleMouseMove() {
    if (this.isCloseButtonShow) return;
    this.isCloseButtonShow = true;
    setTimeout(() => (this.isCloseButtonShow = false), 2000);
  },
  prev() {
    const prevPadIdx = `${String(
      this.currentImageIdx === 1 ? this.max : this.currentImageIdx - 1
    ).padStart(3, '0')}.jpg`;

    this.currentImageUrl = this.currentImageUrl.replace(
      this.currentImageUrl.slice(-7),
      prevPadIdx
    );
  },
  next() {
    const nextPadIdx = `${String(
      this.currentImageIdx === this.max ? 1 : this.currentImageIdx + 1
    ).padStart(3, '0')}.jpg`;

    this.currentImageUrl = this.currentImageUrl.replace(
      this.currentImageUrl.slice(-7),
      nextPadIdx
    );
  },
  close() {
    this.isShow = this.isCloseButtonShow = false;
  },
});

const App = {
  works,
  Slider,
  language: 'en' in getQueryParams() ? 'en' : 'jp',
  isLoading: true,
  isTopButtonHide: true,
  currentAlbumIdx: 0,
  get currentAlbum() {
    return this.works[this.currentAlbumIdx];
  },
  get bodyStyle() {
    if (this.isLoading) return 'overflow: hidden;';
    if (Slider.isShow) return 'overflow: hidden;';
    return '';
  },
  get bodyWidth() {
    return document.body.clientWidth;
  },
  // get compressedImageWidth() {
  //   if (this.bodyWidth < 1080) return Math.floor(this.bodyWidth * 98.6 / 100);
  //   const originalImageWidth = 1920;
  //   const calcImageWidth = Math.floor(this.bodyWidth * (50 - 0.7 * 2) / 100);
  //   return calcImageWidth < originalImageWidth
  //     ? calcImageWidth
  //     : originalImageWidth;
  // },
  init() {
    const localAlbumIdx = albumIdxStorage.fetch();
    if (localAlbumIdx) return (this.currentAlbumIdx = localAlbumIdx);
    this.currentAlbumIdx = getRandomNum(0, this.works.length);
    albumIdxStorage.save(this.currentAlbumIdx);
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
  getImageUrl(idx) {
    return `${galleryEndpoint}${this.currentAlbum.albumFolder}${String(
      idx + 1
    ).padStart(3, '0')}.jpg`;
  },
  changeAlbum(idx) {
    this.currentAlbumIdx = idx;
    albumIdxStorage.save(this.currentAlbumIdx);
    setTimeout(() => {
      window.history.replaceState({}, '', originalHref);
    });
  },
};

createApp(App).mount();

window.onload = () => {
  App.moveToTop();
  App.endLoading(1);
};

window.onscroll = () => App.handleScroll();
window.onresize = () => Slider.close();
window.onfocus = () => albumIdxStorage.save(App.currentAlbumIdx);
window.onblur = () => albumIdxStorage.remove();