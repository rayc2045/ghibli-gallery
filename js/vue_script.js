const { ref, reactive, onMounted } = Vue;

const app = {
  setup() {
    const api = 'https://www.ghibli.jp/gallery/';
    const works = reactive({
      data: [
        {
          title: 'レッドタートル ある島の物語',
          titleEng: 'La Tortue Rouge',
          albumFolder: 'redturtle',
          publicTime: 2016,
          numsOfImage: 50,
        },
        {
          title: '思い出のマーニー',
          titleEng: 'When Marnie Was There',
          albumFolder: 'marnie',
          publicTime: 2014,
          numsOfImage: 50,
        },
        {
          title: 'かぐや姫の物語',
          titleEng: 'The Tale of The Princess Kaguya',
          albumFolder: 'kaguyahime',
          publicTime: 2013,
          numsOfImage: 50,
        },
        {
          title: '風立ちぬ',
          titleEng: 'The Wind Rises',
          albumFolder: 'kazetachinu',
          publicTime: 2013,
          numsOfImage: 50,
        },
        {
          title: 'コクリコ坂から',
          titleEng: 'From Up on Poppy Hill',
          albumFolder: 'kokurikozaka',
          publicTime: 2011,
          numsOfImage: 50,
        },
        {
          title: '借りぐらしのアリエッティ',
          titleEng: 'Arrietty',
          albumFolder: 'karigurashi',
          publicTime: 2010,
          numsOfImage: 50,
        },
        {
          title: '崖の上のポニョ',
          titleEng: 'Ponyo on the Cliff by the Sea',
          albumFolder: 'ponyo',
          publicTime: 2008,
          numsOfImage: 50,
        },
        {
          title: 'ゲド戦記',
          titleEng: 'Tales from Earthsea',
          albumFolder: 'ged',
          publicTime: 2006,
          numsOfImage: 50,
        },
        {
          title: 'ハウルの動く城',
          titleEng: "Howl's Moving Castle",
          albumFolder: 'howl',
          publicTime: 2004,
          numsOfImage: 50,
        },
        {
          title: '猫の恩返し',
          titleEng: 'The Cat Returns',
          albumFolder: 'baron',
          publicTime: 2002,
          numsOfImage: 50,
        },
        {
          title: 'ギブリーズ episode2',
          titleEng: 'The Ghiblies episode 2',
          albumFolder: 'ghiblies',
          publicTime: 2002,
          numsOfImage: 50,
        },
        {
          title: '千と千尋の神隠し',
          titleEng: 'Spirited Away',
          albumFolder: 'chihiro',
          publicTime: 2001,
          numsOfImage: 50,
        },
        {
          title: 'ホーホケキョ となりの山田くん',
          titleEng: 'My Neighbors the Yamadas',
          albumFolder: 'yamada',
          publicTime: 1999,
          numsOfImage: 50,
        },
        {
          title: 'もののけ姫',
          titleEng: 'Princess Mononoke',
          albumFolder: 'mononoke',
          publicTime: 1997,
          numsOfImage: 50,
        },
        {
          title: 'On Your Mark',
          titleEng: 'On Your Mark',
          albumFolder: 'onyourmark',
          publicTime: 1995,
          numsOfImage: 28,
        },
        {
          title: '耳をすませば',
          titleEng: 'Whisper of the Heart',
          albumFolder: 'mimi',
          publicTime: 1995,
          numsOfImage: 50,
        },
        {
          title: '平成狸合戦ぽんぽこ',
          titleEng: 'Pom Poko',
          albumFolder: 'tanuki',
          publicTime: 1994,
          numsOfImage: 50,
        },
        {
          title: '海がきこえる',
          titleEng: 'The Ocean Waves',
          albumFolder: 'umi',
          publicTime: 1993,
          numsOfImage: 50,
        },
        {
          title: '紅の豚',
          titleEng: 'Porco Rosso',
          albumFolder: 'porco',
          publicTime: 1992,
          numsOfImage: 50,
        },
        {
          title: 'おもひでぽろぽろ',
          titleEng: 'Only Yesterday',
          albumFolder: 'omoide',
          publicTime: 1991,
          numsOfImage: 50,
        },
        {
          title: '魔女の宅急便',
          titleEng: "Kiki's Delivery Service",
          albumFolder: 'majo',
          publicTime: 1989,
          numsOfImage: 50,
        },
        {
          title: 'となりのトトロ',
          titleEng: 'My Neighbor Totoro',
          albumFolder: 'totoro',
          publicTime: 1988,
          numsOfImage: 50,
        },
        // {
        // 	title: '火垂るの墓',
        // titleEng: '',
        // 	albumFolder: 'hotarunohaka',
        // 	publicTime: 1988,
        // 	numsOfImage: 50
        // },
        {
          title: '天空の城ラピュタ',
          titleEng: 'Castle in the Sky',
          albumFolder: 'laputa',
          publicTime: 1986,
          numsOfImage: 50,
        },
        {
          title: '風の谷のナウシカ',
          titleEng: 'Nausicaä of the Valley of the Wind',
          albumFolder: 'nausicaa',
          publicTime: 1984,
          numsOfImage: 50,
        },
      ],
    });
    const isLoading = ref(true);
    const currentIdx = ref(0);
    const originalHref = window.location.href;
    const isTopButtonHide = ref(true);

    const getRandomNum = (min, max) => Math.floor(Math.random() * max) + min;

    const endLoading = (sec) => {
      // console.log('loaded');
      setTimeout(() => {
        isLoading.value = false;
        document.body.removeAttribute('style');
      }, sec * 1000);
    };

    const changeAlbum = (idx) => {
      currentIdx.value = idx;
      // console.log(works.data[currentIdx.value]);
      setTimeout(() => {
        window.history.replaceState({}, '', originalHref);
      }, 0);
    };

    const getImgUrl = (idx) => {
      return idx < 9
        ? `${api}${works.data[currentIdx.value].albumFolder}00${idx + 1}.jpg`
        : `${api}${works.data[currentIdx.value].albumFolder}0${idx + 1}.jpg`;
    };

    const moveTo = (posY) => window.scrollTo(0, posY);

    onMounted(() => {
      currentIdx.value = getRandomNum(0, works.data.length);

      window.onscroll = () => {
        const isTitleVisible = document.querySelector('h1').getBoundingClientRect().bottom > 0;

        isTitleVisible
          ? (isTopButtonHide.value = true)
          : (isTopButtonHide.value = false);
      };
    });

    return {
      works,
      isLoading,
      currentIdx,
      isTopButtonHide,
      endLoading,
      changeAlbum,
      getImgUrl,
      moveTo,
    };
  },
};

Vue.createApp(app).mount('#app');
