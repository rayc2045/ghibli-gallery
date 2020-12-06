const { ref, reactive, onMounted } = Vue;

const app = {
  setup() {
    const api = 'https://www.ghibli.jp/gallery/';
    const works = reactive({
      data: [
        // {
        // 	name: 'レッドタートル ある島の物語',
        // 	nickname: 'red-turtle',
        // 	publicTime: 2016,
        // 	numsOfImage: 50
        // },
        {
          name: '思い出のマーニー',
          nickname: 'marnie',
          publicTime: 2014,
          numsOfImage: 50,
        },
        {
          name: 'かぐや姫の物語',
          nickname: 'kaguyahime',
          publicTime: 2013,
          numsOfImage: 50,
        },
        {
          name: '風立ちぬ',
          nickname: 'kazetachinu',
          publicTime: 2013,
          numsOfImage: 50,
        },
        {
          name: 'コクリコ坂から',
          nickname: 'kokurikozaka',
          publicTime: 2011,
          numsOfImage: 50,
        },
        {
          name: '借りぐらしのアリエッティ',
          nickname: 'karigurashi',
          publicTime: 2010,
          numsOfImage: 50,
        },
        {
          name: '崖の上のポニョ',
          nickname: 'ponyo',
          publicTime: 2008,
          numsOfImage: 50,
        },
        {
          name: 'ゲド戦記',
          nickname: 'ged',
          publicTime: 2006,
          numsOfImage: 50,
        },
        {
          name: 'ハウルの動く城',
          nickname: 'howl',
          publicTime: 2004,
          numsOfImage: 50,
        },
        {
          name: '猫の恩返し',
          nickname: 'baron',
          publicTime: 2002,
          numsOfImage: 50,
        },
        {
          name: 'ギブリーズ episode2',
          nickname: 'ghiblies',
          publicTime: 2002,
          numsOfImage: 50,
        },
        {
          name: '千と千尋の神隠し',
          nickname: 'chihiro',
          publicTime: 2001,
          numsOfImage: 50,
        },
        {
          name: 'ホーホケキョ となりの山田くん',
          nickname: 'yamada',
          publicTime: 1999,
          numsOfImage: 50,
        },
        {
          name: 'もののけ姫',
          nickname: 'mononoke',
          publicTime: 1997,
          numsOfImage: 50,
        },
        {
          name: '耳をすませば',
          nickname: 'mimi',
          publicTime: 1995,
          numsOfImage: 50,
        },
        {
        	name: '平成狸合戦ぽんぽこ',
        	nickname: 'tanuki',
        	publicTime: 1994,
        	numsOfImage: 50
        },
        {
        	name: '海がきこえる',
        	nickname: 'umi',
        	publicTime: 1993,
        	numsOfImage: 50
        },
        {
        	name: '紅の豚',
        	nickname: 'porco',
        	publicTime: 1992,
        	numsOfImage: 50
        },
        // {
        // 	name: 'おもひでぽろぽろ',
        // 	nickname: 'poro',
        // 	publicTime: 1991,
        // 	numsOfImage: 50
        // },
        {
        	name: '魔女の宅急便',
        	nickname: 'majo',
        	publicTime: 1989,
        	numsOfImage: 50
        },
        {
        	name: 'となりのトトロ',
        	nickname: 'totoro',
        	publicTime: 1988,
        	numsOfImage: 50
        },
        // {
        // 	name: '火垂るの墓',
        // 	nickname: 'hotarunohaka',
        // 	publicTime: 1988,
        // 	numsOfImage: 50
        // },
        // {
        // 	name: '天空の城ラピュタ',
        // 	nickname: 'laputa',
        // 	publicTime: 1986,
        // 	numsOfImage: 50
        // },
        // {
        // 	name: '風の谷のナウシカ',
        // 	nickname: 'nausicaa',
        // 	publicTime: 1984,
        // 	numsOfImage: 50
        // }
      ],
    });
    const isTopButtonHide = ref(true);
    const currentIdx = ref(0);

    const getImgUrl = (idx) => {
      return idx < 9
        ? `${api}${works.data[currentIdx.value].nickname}00${idx + 1}.jpg`
        : `${api}${works.data[currentIdx.value].nickname}0${idx + 1}.jpg`;
    };

    const changeAlbum = (idx) => {
      currentIdx.value = idx;
      // console.log(works.data[currentIdx.value]);
      const galleryTop = document.querySelector('section').getBoundingClientRect().top;
      moveTo(galleryTop);
    };

    const moveTo = (posY) => window.scrollTo(0, posY);

    onMounted(() => {
      window.onscroll = () => {
        const isTitleVisible = document.querySelector('h1').getBoundingClientRect().bottom > 0;

        isTitleVisible
          ? (isTopButtonHide.value = true)
          : (isTopButtonHide.value = false);
      };
    });

    return {
      works,
      isTopButtonHide,
      currentIdx,
      getImgUrl,
      changeAlbum,
      moveTo,
    };
  },
};

Vue.createApp(app).mount('#app');
