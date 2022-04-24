import{createApp,reactive}from"./petite-vue@0.4.1.js";import{getParamsByUrl,getRandomNum,isVisible}from"./utils.js";import works from"../data/works.js";const titleEl=document.querySelector("#title"),originalHref=window.location.href,STORAGE_KEY="ghibli-album-id",albumIdxStorage={fetch:()=>JSON.parse(localStorage.getItem(STORAGE_KEY)),save(e){localStorage.setItem(STORAGE_KEY,JSON.stringify(e))},remove(){localStorage.removeItem(STORAGE_KEY)}},Slider=reactive({isShow:!1,currentImageUrl:"https://www.ghibli.jp/gallery/chihiro001.jpg",get max(){return works.find((e=>this.currentImageUrl.includes(e.albumFolder))).numOfImages},get currentImageIdx(){return Number(this.currentImageUrl.slice(-7).split(".")[0])},get progress(){return`${String(this.currentImageIdx).padStart(String(this.max).length,"0")} / ${this.max}`},showSlider(e){this.isShow=!0,this.currentImageUrl=e},prev(){const e=`${String(1===this.currentImageIdx?this.max:this.currentImageIdx-1).padStart(3,"0")}.jpg`;this.currentImageUrl=this.currentImageUrl.replace(this.currentImageUrl.slice(-7),e)},next(){const e=`${String(this.currentImageIdx===this.max?1:this.currentImageIdx+1).padStart(3,"0")}.jpg`;this.currentImageUrl=this.currentImageUrl.replace(this.currentImageUrl.slice(-7),e)},close(){this.isShow=!1}}),App={works:works,Slider:Slider,language:getParamsByUrl().en?"en":"jp",isLoading:!0,isTopButtonHide:!0,currentAlbumIdx:0,get currentAlbum(){return this.works[this.currentAlbumIdx]},get bodyStyle(){return this.isLoading||Slider.isShow?"overflow: hidden;":""},get bodyWidth(){return document.body.clientWidth},init(){const e=albumIdxStorage.fetch();if(e)return this.currentAlbumIdx=e;this.currentAlbumIdx=getRandomNum(0,this.works.length),albumIdxStorage.save(this.currentAlbumIdx)},endLoading(e){setTimeout((()=>this.isLoading=!1),1e3*e)},handleScroll(){if(isVisible(titleEl))return this.isTopButtonHide=!0;this.isTopButtonHide=!1},moveToTop(){window.scrollTo(0,0)},getImageUrl(e){return`https://www.ghibli.jp/gallery/${this.currentAlbum.albumFolder}${String(e+1).padStart(3,"0")}.jpg`},changeAlbum(e){this.currentAlbumIdx=e,albumIdxStorage.save(this.currentAlbumIdx),setTimeout((()=>{window.history.replaceState({},"",originalHref)}))}};createApp(App).mount(),window.onload=()=>{App.moveToTop(),App.endLoading(1)},window.onscroll=()=>App.handleScroll(),window.onresize=()=>Slider.close(),window.onfocus=()=>albumIdxStorage.save(App.currentAlbumIdx),window.onblur=()=>albumIdxStorage.remove();