const api = 'http://www.ghibli.jp/gallery/';
const works = [
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
		numsOfImage: 50
	},
	{
		name: 'かぐや姫の物語',
		nickname: 'kaguyahime',
		publicTime: 2013,
		numsOfImage: 50
	},
	{
		name: '風立ちぬ',
		nickname: 'kazetachinu',
		publicTime: 2013,
		numsOfImage: 50
	},
	{
		name: 'コクリコ坂から',
		nickname: 'kokurikozaka',
		publicTime: 2011,
		numsOfImage: 50
	},
	{
		name: '借りぐらしのアリエッティ',
		nickname: 'karigurashi',
		publicTime: 2010,
		numsOfImage: 50
	},
	{
		name: '崖の上のポニョ',
		nickname: 'ponyo',
		publicTime: 2008,
		numsOfImage: 50
	},
	{
		name: 'ゲド戦記',
		nickname: 'ged',
		publicTime: 2006,
		numsOfImage: 50
	},
	{
		name: 'ハウルの動く城',
		nickname: 'howl',
		publicTime: 2004,
		numsOfImage: 50
	},
	{
		name: '猫の恩返し',
		nickname: 'baron',
		publicTime: 2002,
		numsOfImage: 50
	},
	{
		name: 'ギブリーズ episode2',
		nickname: 'ghiblies',
		publicTime: 2002,
		numsOfImage: 50
	},
	{
		name: '千と千尋の神隠し',
		nickname: 'chihiro',
		publicTime: 2001,
		numsOfImage: 50
	},
	{
		name: 'ホーホケキョ となりの山田くん',
		nickname: 'yamada',
		publicTime: 1999,
		numsOfImage: 50
	},
	{
		name: 'もののけ姫',
		nickname: 'mononoke',
		publicTime: 1997,
		numsOfImage: 50
	},
	{
		name: '耳をすませば',
		nickname: 'mimi',
		publicTime: 1995,
		numsOfImage: 50
	}
	// {
	// 	name: '平成狸合戦ぽんぽこ',
	// 	nickname: 'pompoko',
	// 	publicTime: 1994,
	// 	numsOfImage: 50
	// },
	// {
	// 	name: '海がきこえる',
	// 	nickname: 'koeru',
	// 	publicTime: 1993,
	// 	numsOfImage: 50
	// },
	// {
	// 	name: '紅の豚',
	// 	nickname: 'buta',
	// 	publicTime: 1992,
	// 	numsOfImage: 50
	// },
	// {
	// 	name: 'おもひでぽろぽろ',
	// 	nickname: 'poro',
	// 	publicTime: 1991,
	// 	numsOfImage: 50
	// },
	// {
	// 	name: '魔女の宅急便',
	// 	nickname: 'majyo',
	// 	publicTime: 1989,
	// 	numsOfImage: 50
	// },
	// {
	// 	name: 'となりのトトロ',
	// 	nickname: 'totoro',
	// 	publicTime: 1988,
	// 	numsOfImage: 50
	// },
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
];

class GhibliGallery {
	constructor() {
		this.bodyEl = document.body;
		this.events();
	}

	events() {
		this.updateCatalog();
		this.updateGallerySection();

		this.bodyEl.onclick = (e) => {
			if (e.target.className === 'button') {
				const sectionEl = document.querySelector('section');
				this.removeElement(sectionEl);
				this.updateGallerySection(e.target.id);
				this.moveToGallery();
			}
		};
	}

	removeElement(el) {
		el.parentNode.removeChild(el);
	}

	updateCatalog() {
		const catalog = document.createElement('div');
		catalog.classList.add('catalog');
		
		for (let i = 0; i < works.length; i++) {
			const button = document.createElement('div');
			button.classList.add('button');
			button.id = i;
			button.textContent = works[i].name;
			catalog.appendChild(button);
		}

		this.bodyEl.appendChild(catalog);
	}

	updateGallerySection(id = 0) {
		const section = document.createElement('section');
		
		// Title
		const title = document.createElement('H1');
		title.textContent = `${works[id].name} (${works[id].publicTime})`;
		section.appendChild(title);

		// Images
		for (let i = 0; i < works[id].numsOfImage; i++) {
			let imgUrl = api + works[id].nickname;

			i < 9
				? imgUrl += `00${i + 1}.jpg`
				: imgUrl += `0${i + 1}.jpg`;

			const img = document.createElement('img');
			img.src = imgUrl;
			section.appendChild(img);
		}

		this.bodyEl.appendChild(section);
	}

	moveToGallery() {
		const GalleryTop = document.querySelector('section').getBoundingClientRect().top;
		window.scrollTo(0, GalleryTop)
	}
}

new GhibliGallery();
