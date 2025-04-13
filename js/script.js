document.addEventListener('DOMContentLoaded', function () {
    // 导航栏激活状态
    // const navLinks = document.querySelectorAll('nav a');
    // const sections = document.querySelectorAll('.section');

    // window.addEventListener('scroll', function () {
    //     let current = '';

    //     sections.forEach(section => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;
    //         if (pageYOffset >= sectionTop - 200) {
    //             current = section.getAttribute('id');
    //         }
    //     });

    //     navLinks.forEach(link => {
    //         link.classList.remove('active');
    //         if (link.getAttribute('href').includes(current)) {
    //             link.classList.add('active');
    //         }
    //     });
    // });

    // 轮播图
    // const slides = document.querySelectorAll('.slide');
    // const dots = document.querySelectorAll('.dot');
    // const prevBtn = document.querySelector('.prev-btn');
    // const nextBtn = document.querySelector('.next-btn');
    // let currentSlide = 0;

    // function showSlide(n) {
    //     slides.forEach(slide => slide.classList.remove('active'));
    //     dots.forEach(dot => dot.classList.remove('active'));

    //     currentSlide = (n + slides.length) % slides.length;

    //     slides[currentSlide].classList.add('active');
    //     dots[currentSlide].classList.add('active');
    // }

    // function nextSlide() {
    //     showSlide(currentSlide + 1);
    // }

    // function prevSlide() {
    //     showSlide(currentSlide - 1);
    // }

    // nextBtn.addEventListener('click', nextSlide);
    // prevBtn.addEventListener('click', prevSlide);

    // dots.forEach((dot, index) => {
    //     dot.addEventListener('click', () => {
    //         showSlide(index);
    //     });
    // });

    // // 自动轮播
    // let slideInterval = setInterval(nextSlide, 5000);

    // const slider = document.querySelector('.slider');
    // slider.addEventListener('mouseenter', () => {
    //     clearInterval(slideInterval);
    // });

    // slider.addEventListener('mouseleave', () => {
    //     slideInterval = setInterval(nextSlide, 5000);
    // });

    // 标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            const tabPane = document.getElementById(tabId);
            const tabContainer = this.closest('.tabs');

            tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            tabContainer.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            tabPane.classList.add('active');
        });
    });

    // 中药材库
    const cabinetDrawers = document.querySelectorAll('.cabinet-drawer');
    const herbModal = document.getElementById('herbModal');
    const closeHerbModal = herbModal.querySelector('.close-modal');

    const herbData = {
        'ginseng': {
            name: '人参',
            nature: '甘、微苦，微温',
            meridian: '脾、肺、心经',
            effect: '大补元气，复脉固脱，补脾益肺，生津养血，安神益智',
            description: '人参为五加科植物人参的干燥根，主产于吉林、辽宁等地。人参是名贵的中药材，被誉为"百草之王"，具有极高的药用价值。',
            usage: '内服：煎汤，3-9g；或研末，1-3g；或浸酒，或入丸、散。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Ginseng" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/213a2e16b77041839e91ceb63dbc2b4b/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ginseng-213a2e16b77041839e91ceb63dbc2b4b?utm_medium=embed&utm_campaign=share-popup&utm_content=213a2e16b77041839e91ceb63dbc2b4b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ginseng </a> by <a href="https://sketchfab.com/Laomo01?utm_medium=embed&utm_campaign=share-popup&utm_content=213a2e16b77041839e91ceb63dbc2b4b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> KaMi </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=213a2e16b77041839e91ceb63dbc2b4b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'astragalus': {
            name: '黄芪',
            nature: '甘，微温',
            meridian: '脾、肺经',
            effect: '补气固表，利水消肿，托毒排脓，生肌',
            description: '黄芪为豆科植物蒙古黄芪或膜荚黄芪的干燥根，主产于内蒙古、山西、黑龙江等地。黄芪是常用的补气药，具有增强机体免疫力的作用。',
            usage: '内服：煎汤，9-30g；或研末；或浸酒。外用：研末撒或调敷。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="黄芪（ Astragalus）" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4feb5bc673774c52852d63b976d17157/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/astragalus-4feb5bc673774c52852d63b976d17157?utm_medium=embed&utm_campaign=share-popup&utm_content=4feb5bc673774c52852d63b976d17157" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> 黄芪（ Astragalus） </a> by <a href="https://sketchfab.com/Mark.Q?utm_medium=embed&utm_campaign=share-popup&utm_content=4feb5bc673774c52852d63b976d17157" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Mark.Q </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4feb5bc673774c52852d63b976d17157" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'angelica': {
            name: '当归',
            nature: '甘、辛，温',
            meridian: '心、肝、脾经',
            effect: '补血活血，调经止痛，润肠通便',
            description: '当归为伞形科植物当归的干燥根，主产于甘肃、云南、四川等地。当归是重要的补血药，被誉为"女性之友"。',
            usage: '内服：煎汤，3-15g；或浸酒，或入丸、散。',
            model:'<div class="sketchfab-embed-wrapper"> <iframe title="Angelica sinensis" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/752de590890e409f85262684d42debbb/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/angelica-sinensis-752de590890e409f85262684d42debbb?utm_medium=embed&utm_campaign=share-popup&utm_content=752de590890e409f85262684d42debbb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Angelica sinensis </a> by <a href="https://sketchfab.com/Laomo01?utm_medium=embed&utm_campaign=share-popup&utm_content=752de590890e409f85262684d42debbb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> KaMi </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=752de590890e409f85262684d42debbb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'licorice': {
            name: '甘草',
            nature: '甘，平',
            meridian: '心、肺、脾、胃经',
            effect: '补脾益气，清热解毒，祛痰止咳，缓急止痛，调和诸药',
            description: '甘草为豆科植物甘草、胀果甘草或光果甘草的干燥根及根茎，主产于内蒙古、甘肃、新疆等地。甘草是最常用的中药之一，具有"十二经络引经药"的美誉。',
            usage: '内服：煎汤，2-10g；或研末。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Licorice_ Root_ Bundle_0218075714_texture_obj" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/452d7ad88ecd48d3848bf47bb6547597/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/licorice--root--bundle-0218075714-texture-obj-452d7ad88ecd48d3848bf47bb6547597?utm_medium=embed&utm_campaign=share-popup&utm_content=452d7ad88ecd48d3848bf47bb6547597" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Licorice_ Root_ Bundle_0218075714_texture_obj </a> by <a href="https://sketchfab.com/go3452?utm_medium=embed&utm_campaign=share-popup&utm_content=452d7ad88ecd48d3848bf47bb6547597" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> go3452 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=452d7ad88ecd48d3848bf47bb6547597" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'cinnamon': {
            name: '肉桂',
            nature: '辛、甘，热',
            meridian: '肾、脾、心、肝经',
            effect: '补火助阳，引火归源，散寒止痛，活血通经',
            description: '肉桂为樟科植物肉桂的干燥树皮，主产于广西、云南、广东等地。肉桂是重要的温里药，具有很好的温阳作用。',
            usage: '内服：煎汤，1-5g；或研末，0.5-1g；或浸酒，或入丸、散。'
        },
        'ginger': {
            name: '生姜',
            nature: '辛，微温',
            meridian: '肺、脾、胃经',
            effect: '解表散寒，温中止呕，温肺止咳，解毒',
            description: '生姜为姜科植物姜的新鲜根茎，全国大部分地区均有种植。生姜是常用的调味品，也是重要的药食两用品。',
            usage: '内服：煎汤，3-10g；或切片，或绞汁。外用：切片敷或捣敷。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Ginger Root" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/14d7deb215f84f6ea2c10a9da12e60fd/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ginger-root-14d7deb215f84f6ea2c10a9da12e60fd?utm_medium=embed&utm_campaign=share-popup&utm_content=14d7deb215f84f6ea2c10a9da12e60fd" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ginger Root </a> by <a href="https://sketchfab.com/Papheoo?utm_medium=embed&utm_campaign=share-popup&utm_content=14d7deb215f84f6ea2c10a9da12e60fd" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Paweł Somogyi </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=14d7deb215f84f6ea2c10a9da12e60fd" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'rhubarb': {
            name: '大黄',
            nature: '苦，寒',
            meridian: '脾、胃、大肠、肝、心包经',
            effect: '泻热通便，凉血解毒，逐瘀通经',
            description: '大黄为蓼科植物掌叶大黄、唐古特大黄或药用大黄的干燥根及根茎，主产于四川、甘肃、青海等地。大黄是重要的泻下药。',
            usage: '内服：煎汤，3-15g；后下。生用泻下力强，酒制泻下力弱而活血力强。',

        },
        'peony': {
            name: '芍药',
            nature: '苦、酸，微寒',
            meridian: '肝、脾经',
            effect: '养血敛阴，柔肝止痛，平抑肝阳',
            description: '芍药为毛茛科植物芍药的干燥根，主产于安徽、浙江、四川等地。芍药是常用的补血药，具有很好的镇痛作用。',
            usage: '内服：煎汤，5-15g；或浸酒，或入丸、散。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Paeonia lactiflora Karl Rosenfield Pion or Peon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/67c8b601b47d48a984b0d9298622ad3d/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/paeonia-lactiflora-karl-rosenfield-pion-or-peon-67c8b601b47d48a984b0d9298622ad3d?utm_medium=embed&utm_campaign=share-popup&utm_content=67c8b601b47d48a984b0d9298622ad3d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Paeonia lactiflora Karl Rosenfield Pion or Peon </a> by <a href="https://sketchfab.com/3DImaginationHub?utm_medium=embed&utm_campaign=share-popup&utm_content=67c8b601b47d48a984b0d9298622ad3d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> 3DImaginationHub </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=67c8b601b47d48a984b0d9298622ad3d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'chrysanthemum': {
            name: '菊花',
            nature: '甘、苦，微寒',
            meridian: '肺、肝经',
            effect: '疏散风热，平抑肝阳，清热解毒，明目',
            description: '菊花为菊科植物菊的干燥头状花序，主产于安徽、浙江、河南等地。菊花是常用的清热药，也是重要的药食两用品。',
            usage: '内服：煎汤，5-15g；或泡茶。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Chrysanthemum Yellow" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4b4cfc4f95374100bb0e5894cf213721/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/chrysanthemum-yellow-4b4cfc4f95374100bb0e5894cf213721?utm_medium=embed&utm_campaign=share-popup&utm_content=4b4cfc4f95374100bb0e5894cf213721" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Chrysanthemum Yellow </a> by <a href="https://sketchfab.com/heyyodd?utm_medium=embed&utm_campaign=share-popup&utm_content=4b4cfc4f95374100bb0e5894cf213721" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> heyyodd </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4b4cfc4f95374100bb0e5894cf213721" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'wolfberry': {
            name: '枸杞',
            nature: '甘，平',
            meridian: '肝、肾经',
            effect: '滋补肝肾，益精明目，养血，生津',
            description: '枸杞为茄科植物宁夏枸杞或中华枸杞的干燥成熟果实，主产于宁夏、青海、甘肃等地。枸杞是常用的滋补药，也是重要的药食两用品。',
            usage: '内服：煎汤，6-15g；或泡茶，或浸酒，或嚼服。',
        },
        'poria': {
            name: '茯苓',
            nature: '甘、淡，平',
            meridian: '心、肺、脾、肾经',
            effect: '利水渗湿，健脾，宁心安神',
            description: '茯苓为多孔菌科真菌茯苓的干燥菌核，主产于云南、安徽、湖北等地。茯苓是常用的利水渗湿药，具有很好的健脾作用。',
            usage: '内服：煎汤，9-15g；或研末，3-9g；或入丸、散。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="China root / Poria (茯苓)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cc4801a72085433b95ab33a1f071aea9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/china-root-poria-cc4801a72085433b95ab33a1f071aea9?utm_medium=embed&utm_campaign=share-popup&utm_content=cc4801a72085433b95ab33a1f071aea9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> China root / Poria (茯苓) </a> by <a href="https://sketchfab.com/motpanda?utm_medium=embed&utm_campaign=share-popup&utm_content=cc4801a72085433b95ab33a1f071aea9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> MotPanda </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=cc4801a72085433b95ab33a1f071aea9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'atractylodes': {
            name: '白术',
            nature: '苦、甘，温',
            meridian: '脾、胃经',
            effect: '健脾益气，燥湿利水，止汗，安胎',
            description: '白术为菊科植物白术或北沙参的干燥根茎，主产于浙江、安徽、湖北等地。白术是常用的健脾药，具有很好的利水作用。',
            usage: '内服：煎汤，6-12g；或研末，或浸酒，或入丸、散。',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="โกษฐ์เขมา" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/47747bbe0cf44c3db95df95f7ed45522/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/47747bbe0cf44c3db95df95f7ed45522?utm_medium=embed&utm_campaign=share-popup&utm_content=47747bbe0cf44c3db95df95f7ed45522" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> โกษฐ์เขมา </a> by <a href="https://sketchfab.com/rujirada?utm_medium=embed&utm_campaign=share-popup&utm_content=47747bbe0cf44c3db95df95f7ed45522" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> SCPHC </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=47747bbe0cf44c3db95df95f7ed45522" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        }
    };

    cabinetDrawers.forEach(drawer => {
        drawer.addEventListener('click', function () {
            const herbId = this.getAttribute('data-herb');
            const herb = herbData[herbId];

            document.getElementById('herbName').textContent = herb.name;
            document.getElementById('herbNature').textContent = herb.nature;
            document.getElementById('herbMeridian').textContent = herb.meridian;
            document.getElementById('herbEffect').textContent = herb.effect;
            document.getElementById('herbDescription').textContent = herb.description;
            document.getElementById('herbUsage').textContent = herb.usage;
            document.getElementById('herbImage').src = `pics/herbs/${herb.name}.jpg`;
            document.getElementById('herbModel').innerHTML = herb.model ? herb.model : '暂无';
            herbModal.style.display = 'block';
        });
    });

    closeHerbModal.addEventListener('click', function () {
        herbModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === herbModal) {
            herbModal.style.display = 'none';
        }
    });

    // 经络穴位
    const hotspots = document.querySelectorAll('.hotspot');
    const organInfo = document.getElementById('organInfo');

    const organData = {
        'heart': {
            name: '心',
            element: '火',
            function: '主血脉、主神明',
            description: '心在五行属火，为五脏六腑之大主，主管血脉运行和精神活动。心开窍于舌，其华在面，其充在血脉。心与小肠相表里。',
            symptoms: '心病症状：心悸、胸闷、失眠、健忘、舌质异常等。'
        },
        'liver': {
            name: '肝',
            element: '木',
            function: '主疏泄、藏血',
            description: '肝在五行属木，主管疏泄和藏血功能。肝开窍于目，其华在爪，其充在筋。肝与胆相表里。',
            symptoms: '肝病症状：胁痛、眩晕、情志异常、视力障碍、肢体麻木等。'
        },
        'spleen': {
            name: '脾',
            element: '土',
            function: '主运化、统血',
            description: '脾在五行属土，主管消化吸收和统摄血液功能。脾开窍于口，其华在唇，其充在肉。脾与胃相表里。',
            symptoms: '脾病症状：食欲不振、腹胀、腹泻、倦怠乏力、出血倾向等。'
        },
        'lung': {
            name: '肺',
            element: '金',
            function: '主气、司呼吸、通调水道',
            description: '肺在五行属金，主管呼吸和水液代谢。肺开窍于鼻，其华在毛，其充在皮。肺与大肠相表里。',
            symptoms: '肺病症状：咳嗽、气喘、多痰、感冒易发、皮肤干燥等。'
        },
        'kidney': {
            name: '肾',
            element: '水',
            function: '主水、藏精、主骨生髓',
            description: '肾在五行属水，主管生殖发育和水液代谢。肾开窍于耳，其华在发，其充在骨。肾与膀胱相表里。',
            symptoms: '肾病症状：腰膝酸软、耳鸣、脱发、性功能减退、尿量异常等。'
        },
        'gallbladder': {
            name: '胆',
            element: '木',
            function: '主贮藏和排泄胆汁',
            description: '胆在五行属木，为六腑之一，主管贮藏和排泄胆汁。胆与肝相表里，胆汁的分泌与肝的疏泄功能密切相关。',
            symptoms: '胆病症状：胁肋胀痛、口苦、恶心、呕吐、胆怯等。'
        },
        'stomach': {
            name: '胃',
            element: '土',
            function: '主受纳和腐熟水谷',
            description: '胃在五行属土，为六腑之一，主管接受和消化食物。胃与脾相表里，共同完成消化吸收功能。',
            symptoms: '胃病症状：胃脘痛、嗳气、反酸、呕吐、纳食异常等。'
        },
        'largeIntestine': {
            name: '大肠',
            element: '金',
            function: '主传导和排泄废物',
            description: '大肠在五行属金，为六腑之一，主管传导和排泄废物。大肠与肺相表里，共同参与水液代谢。',
            symptoms: '大肠病症状：便秘、腹泻、腹痛、腹胀、排便异常等。'
        },
        'smallIntestine': {
            name: '小肠',
            element: '火',
            function: '主分清泌浊',
            description: '小肠在五行属火，为六腑之一，主管分离食物中的精华和废物。小肠与心相表里。',
            symptoms: '小肠病症状：腹痛、腹泻、消化不良等。'
        },
        'bladder': {
            name: '膀胱',
            element: '水',
            function: '主贮存和排泄尿液',
            description: '膀胱在五行属水，为六腑之一，主管贮存和排泄尿液。膀胱与肾相表里，共同参与水液代谢。',
            symptoms: '膀胱病症状：尿频、尿急、尿痛、尿失禁等。'
        }
    };

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function () {
            const organId = this.getAttribute('data-organ');
            const organ = organData[organId];

            let elementClass = '';
            switch (organ.element) {
                case '木': elementClass = 'wood'; break;
                case '火': elementClass = 'fire'; break;
                case '土': elementClass = 'earth'; break;
                case '金': elementClass = 'metal'; break;
                case '水': elementClass = 'water'; break;
            }

            organInfo.innerHTML = `
                    <h3>${organ.name}（${organ.element}）</h3>
                    <div class="organ-element ${elementClass}">
                        <div class="element-icon"><i class="fas fa-${getElementIcon(organ.element)}"></i></div>
                        <div class="element-name">${organ.element}</div>
                    </div>
                    <p><strong>功能：</strong>${organ.function}</p>
                    <p>${organ.description}</p>
                    <p class="organ-symptoms">${organ.symptoms}</p>
                `;
        });
    });

    function getElementIcon(element) {
        switch (element) {
            case '木': return 'tree';
            case '火': return 'fire';
            case '土': return 'mountain';
            case '金': return 'coins';
            case '水': return 'water';
            default: return 'circle';
        }
    }

    // 名医详情
    const doctorBtns = document.querySelectorAll('[data-doctor]');
    const doctorModal = document.getElementById('doctorModal');
    const closeDoctorModal = doctorModal.querySelector('.close-modal');

    const doctorData = {
        'bian-que': {
            name: '扁鹊',
            title: '中医医祖',
            period: '春秋战国时期',
            bio: '扁鹊，姓秦名越，号扁鹊，是中国古代著名的医学家，被誉为"医祖"。他创立了"望、闻、问、切"四诊法，奠定了中医诊断学的基础。',
            contribution: '创立"望、闻、问、切"四诊法，开创了中医诊断学的先河。擅长脉诊，能够通过望诊断病，医术精湛。',
            works: '《扁鹊内经》、《扁鹊外经》等，但已失传。',
            stories: '扁鹊"三见齐桓公"的故事广为流传，展现了他高超的医术和预防疾病的理念。据说他能透视人体，看到五脏六腑，被称为"神医"。'
        },
        'hua-tuo': {
            name: '华佗',
            title: '外科鼻祖',
            period: '东汉末年',
            bio: '华佗，字元化，是中国古代著名的医学家，被誉为"外科鼻祖"。他开创了麻醉术和外科手术，并创立了"五禽戏"养生法。',
            contribution: '开创了"麻沸散"麻醉法，进行外科手术；创立"五禽戏"养生法；精通内、外、妇、儿各科。',
            works: '《华佗神医秘传》、《青囊经》等，但大部分已失传。',
            stories: '华佗为曹操治头痛的故事广为流传。他创立的"五禽戏"模仿虎、鹿、熊、猿、鸟五种动物的动作，对强身健体有很好的效果。'
        },
        'zhang-zhongjing': {
            name: '张仲景',
            title: '医圣',
            period: '东汉末年',
            bio: '张仲景，名机，字仲景，是中国古代著名的医学家，被誉为"医圣"。他总结了汉代以前的医学成就，创立了"辨证论治"的原则。',
            contribution: '创立了"辨证论治"原则；系统总结了六经辨证方法；创制了大量有效的方剂，如桂枝汤、麻黄汤等。',
            works: '《伤寒杂病论》，后世分为《伤寒论》和《金匮要略》两部分。',
            stories: '张仲景目睹了东汉末年瘟疫流行，自己的家族也因病死亡了多人，这促使他潜心研究医术，著书立说，造福后世。'
        },
        'sun-simiao': {
            name: '孙思邈',
            title: '药王',
            period: '唐代',
            bio: '孙思邈，字思邈，号药王，是中国古代著名的医学家和道士。他一生致力于医学研究和实践，对中医药学的发展有重大贡献。',
            contribution: '提出"大医精诚"的医德思想；总结了丰富的临床经验；系统整理了大量方剂；重视养生保健。',
            works: '《备急千金要方》、《千金翼方》等。',
            stories: '孙思邈提出"上医治国，中医治人，下医治病"的观点，强调预防疾病的重要性。他还提出了著名的"大医精诚"医德思想，对后世医学伦理产生了深远影响。'
        },
        'li-shizhen': {
            name: '李时珍',
            title: '本草学家',
            period: '明代',
            bio: '李时珍，字东璧，号濒湖，是中国明代著名的医学家和博物学家。他历时27年编撰了《本草纲目》，被誉为"东方医学巨典"。',
            contribution: '编撰《本草纲目》，系统整理了中国古代的本草学知识；改革了本草分类方法；亲自考察、实验，纠正了前人的错误。',
            works: '《本草纲目》、《濒湖脉学》、《奇经八脉考》等。',
            stories: '李时珍为编撰《本草纲目》，亲自采药、尝药，多次冒险考察，历经艰辛。他的著作不仅是药学巨著，也是重要的博物学、文化学著作。'
        },
        'ge-hong': {
            name: '葛洪',
            title: '东晋医学家',
            period: '东晋时期',
            bio: '葛洪，字稚川，号抱朴子，是东晋时期著名的医学家、道士和炼丹家。他在医学、炼丹术和道教理论方面都有重要贡献。',
            contribution: '著有《肘后备急方》，是中国最早的急救医学专著；记载了多种传染病的症状和治疗方法；在炼丹术和药物炮制方面有重要贡献。',
            works: '《肘后备急方》、《抱朴子》等。',
            stories: '葛洪提出了"金石可以成药，草木可以疗疾"的观点，强调了矿物药和植物药的重要性。他还记载了世界上最早的疟疾治疗方法，使用含有青蒿素的青蒿治疗疟疾。'
        },
        'qian-yi': {
            name: '钱乙',
            title: '儿科之圣',
            period: '东晋时期',
            bio: '钱乙，字仲阳，北宋郓州（今山东东平）人。幼年丧母，由姑父吕氏抚养并习医，专攻儿科，医术精湛。后因治愈长公主之女疾病，被荐入翰林医官院，官至太医丞。晚年归隐乡里，潜心著述。',
            contribution: '首次将儿科从内科中分离，系统论述小儿生理病理特点，提出“脏腑柔弱、易虚易实”理论，奠定中医儿科学基础。',
            works: '《小儿药证直诀》。',
            stories: '宋神宗皇子患惊厥，钱乙以“黄土汤”（伏龙肝为主药）治愈，解释为“土虚木亢，故风动”，需补土平木，彰显其辨证精妙。'
        },
        'ye-gui': {
            name: '叶桂',
            title: '天医星',
            period: '清代',
            bio: '叶桂，字天士，号香岩，江苏吴县（今苏州）人。出身医学世家，幼承家学，后广拜名医，博采众长。行医足迹遍及江南，晚年隐居著述，门人整理其医案传世，成为清代最具影响力的临床医家之一。',
            contribution: '系统总结温病（外感热病）诊疗规律，创立“卫气营血”辨证纲领，提出“温邪上受，首先犯肺”等核心理论，革新外感病治疗体系。',
            works: '《温热论》、《临证指南医案》等。',
            stories: '传说叶桂与同代医家薛雪（号扫雪）因学术分歧互称“扫叶”“踏雪”，后叶桂以薛雪方治愈己病，二人冰释前嫌，传为医林佳话。'
        },
        'huangpu-mi': {
            name: '皇甫谧',
            title: '针灸鼻祖',
            period: '晋代',
            bio: '皇甫谧，字士安，号玄晏先生，安定朝那（今宁夏固原）人。幼年家贫，勤学经史，博通百家，后因患风痹症而潜心医学。屡拒朝廷征召，终身未仕，专注著述与医学研究，是魏晋时期集文学、史学、医学成就于一身的大家。',
            contribution: '整理《素问》《针经》（即《灵枢》）等古籍，结合临床实践，编成《针灸甲乙经》，确立针灸学独立学科地位，系统归纳穴位、针法及适应症。',
            works: '《针灸甲乙经》等。',
            stories: '少年时游荡无度，经叔母教诲后发奋读书，常“带经而农”（边种田边读书），因痴迷典籍被称“书淫”。'
        },

    };

    doctorBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const doctorId = this.getAttribute('data-doctor');
            const doctor = doctorData[doctorId];

            document.getElementById('doctorDetailName').textContent = doctor.name;
            document.getElementById('doctorDetailTitle').textContent = doctor.title;
            document.getElementById('doctorDetailPeriod').textContent = doctor.period;
            document.getElementById('doctorDetailBio').textContent = doctor.bio;
            document.getElementById('doctorDetailContribution').textContent = doctor.contribution;
            document.getElementById('doctorDetailWorks').textContent = doctor.works;
            document.getElementById('doctorDetailStories').textContent = doctor.stories;
            document.getElementById('doctorDetailImage').src = `pics/300px/${doctor.name}.png`;

            doctorModal.style.display = 'block';
        });
    });

    closeDoctorModal.addEventListener('click', function () {
        doctorModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === doctorModal) {
            doctorModal.style.display = 'none';
        }
    });

    // 名篇详情
    const bookBtns = document.querySelectorAll('[data-book]');
    const bookModal = document.getElementById('bookModal');
    const closeBookModal = bookModal.querySelector('.close-modal');

    const bookData = {
        'huangdi-neijing': {
            title: '《黄帝内经》',
            author: '佚名',
            period: '春秋战国时期',
            background: '《黄帝内经》是中国最早的医学典籍，成书于春秋战国时期，是黄帝与岐伯、雷公等人对话的形式记录的医学著作。它总结了先秦时期的医学理论和实践经验，奠定了中医理论体系的基础。',
            content: '《黄帝内经》分为《素问》和《灵枢》两部分，共18卷，162篇。《素问》主要论述脏腑经络、病因病机、诊法、治则等基础理论；《灵枢》主要论述针灸、经络、腧穴等内容。',
            value: '《黄帝内经》确立了中医的整体观念、阴阳五行学说、藏象学说、经络学说等基础理论，为中医学的发展奠定了坚实的基础。它是中医理论体系的奠基之作，对后世医学产生了深远的影响。',
            influence: '《黄帝内经》是中医理论的源头，历代医家都以它为基础进行研究和发展。它不仅影响了中国医学的发展，也对东亚医学产生了重要影响，是世界医学史上的重要著作。'
        },
        'shanghan-zabinglun': {
            title: '《伤寒杂病论》',
            author: '张仲景',
            period: '东汉末年',
            background: '《伤寒杂病论》是东汉末年张仲景所著，原书已佚。现存《伤寒论》和《金匮要略》是后人根据原书整理而成。张仲景目睹了东汉末年瘟疫流行，自己的家族也因病死亡了多人，这促使他潜心研究医术，著书立说。',
            content: '《伤寒论》主要论述外感病的诊断和治疗，创立了六经辨证体系；《金匮要略》主要论述内伤杂病的诊断和治疗。书中记载了大量有效的方剂，如桂枝汤、麻黄汤、白虎汤等。',
            value: '《伤寒杂病论》确立了"辨证论治"的原则，创立了六经辨证的方法，系统总结了汉代以前的医学成就，为中医临床实践提供了重要指导。',
            influence: '《伤寒杂病论》被誉为中医临床的奠基之作，对后世医学产生了深远的影响。历代医家都以它为基础进行研究和发展，形成了众多医学流派，如温病学派、伤寒学派等。'
        },
        'bencao-gangmu': {
            title: '《本草纲目》',
            author: '李时珍',
            period: '明代',
            background: '《本草纲目》是明代李时珍历时27年编撰而成，成书于1578年。李时珍为编撰此书，亲自采药、尝药，多次冒险考察，历经艰辛。',
            content: '《本草纲目》共52卷，收载药物1892种，附图1109幅，记载药方11096个。书中对药物进行了系统分类，分为16部60类，每种药物都详细记载了名称、产地、性状、功效、用法等内容。',
            value: '《本草纲目》是中国古代本草学的集大成者，系统总结了明代以前的药物学知识，纠正了前人的错误，增加了大量新药，改革了本草分类方法，为中药学的发展做出了重大贡献。',
            influence: '《本草纲目》不仅是药学巨著，也是重要的博物学、文化学著作，被誉为"东方医学巨典"。它对中国和世界医药学的发展都产生了深远的影响，被翻译成多种文字在世界范围内传播。'
        },
        'qianjin-yaofang': {
            title: '《千金要方》',
            author: '孙思邈',
            period: '唐代',
            background: '《千金要方》是唐代孙思邈所著，成书于公元652年。孙思邈一生致力于医学研究和实践，晚年隐居终南山，潜心著述，完成了这部医学巨著。',
            content: '《千金要方》共30卷，收载方剂5300余首，涵盖内、外、妇、儿、五官等各科疾病的诊断和治疗。书中还详细论述了养生、预防、针灸、食疗等内容。',
            value: '《千金要方》是我国现存最早的医学百科全书，系统总结了唐代以前的医学成就，尤其在妇科、儿科方面有重要贡献。书中提出的"大医精诚"医德思想，对后世医学伦理产生了深远影响。',
            influence: '《千金要方》对中国和东亚医学的发展都产生了重要影响，是中医学发展史上的重要著作。它与《本草纲目》、《伤寒论》并称为中医"三大经典"。'
        },
        'nanjing': {
            title: '《难经》',
            author: '佚名',
            period: '战国至秦汉时期',
            background: '《难经》又称《黄帝八十一难经》，成书于战国至秦汉时期，作者不详。"难"指疑难问题，全书以问答形式解释《黄帝内经》中的难点和疑点。',
            content: '《难经》共81篇，以问答形式论述了脏腑、经络、病机、诊法等中医基础理论，对《黄帝内经》中的难点和疑点进行了解释和阐发。',
            value: '《难经》是中医理论的重要补充，对《黄帝内经》进行了系统整理和发展，尤其在脉学、脏象学说方面有重要贡献。它是研究《黄帝内经》的重要参考。',
            influence: '《难经》与《黄帝内经》、《伤寒论》并称为中医"三大经典"，对后世医学产生了深远的影响。历代医家都重视对《难经》的研究和注释，形成了丰富的研究成果。'
        },
        'shennong-bencaojing':{
            title: '《神农本草经》',
            author: '佚名',
            period: '秦汉时期',
            background: '《神农本草经》成书于东汉时期（约公元1-2世纪），托名上古神农氏所著，实为历代医家集体智慧的结晶。汉代医学体系逐渐成熟，药物学知识积累日益丰富，此书在总结先秦至汉代药物经验的基础上编纂而成，是中国现存最早的药物学专著，奠定了中药学理论体系的基础。',
            content: '收录药物365种（对应周天之数），按功效与毒性分为上、中、下三品。提出中药学核心理论，包括“四气五味”（寒热温凉、辛甘酸苦咸）、“七情和合”（单行、相须、相使、相畏、相杀、相恶、相反）等配伍原则。',
            value: '确立中药学理论框架，首次系统总结药物功效、性味、配伍规律及毒性控制原则。所载药物疗效多经后世验证，如常山抗疟、麻黄平喘等至今仍具科学价值。',
            influence: '唐代《新修本草》、明代《本草纲目》均以其为蓝本增补发展。传入日本、朝鲜等地，成为东亚传统医学的共同经典，现代中医药教育仍将其列为必读典籍。'
        },
        'zhouhou-beijifang':{
            title: '《肘后备急方》',
            author: '葛洪',
            period: '东晋',
            background: '《肘后备急方》原名《肘后救卒方》，由东晋著名医药学家葛洪（约283-343年）编撰，后经南朝陶弘景增补为《补阙肘后百一方》，金代杨用道再度修订。书名“肘后”意指可随身携带的袖珍手册，旨在为基层医者与百姓提供简便、廉效的急救方案，是中国古代第一部系统总结急症救治的实用医学方书。',
            content: '涵盖急性传染病（如疟疾、天花）、外伤、中毒、寄生虫病（如沙虱病/恙虫病）、急救（卒中、蛇咬）等急危重症。',
            value: '开创中医急诊学体系，奠定“急症速效”治疗原则，强调早期干预与实用性。首次准确描述天花症状、恙虫病媒介（沙虱），比西方早千年提出疥虫致疥疮理论。',
            influence: '唐宋时期被列为医家必读，孙思邈《千金方》等后世医书大量引用其方。内容传入日本、朝鲜，被《医心方》等海外医籍收录，至今仍是研究古代急救与传染病防治的重要文献。'
        },
        'zhenjiu-jiayijing':{
            title: '《针灸甲乙经》',
            author: '皇甫谧',
            period: '西晋',
            background: '《针灸甲乙经》全称《黄帝三部针灸甲乙经》，由西晋医学家皇甫谧（215-282年）编撰于3世纪后期。作者综合《素问》《针经》（即《灵枢》）和《明堂孔穴针灸治要》三部经典，结合自身实践系统整理而成，是中国现存最早的针灸学专著，标志着针灸学从理论到临床的体系化。',
            content: '系统阐述经络学说，明确十二经脉、奇经八脉的循行路线与生理功能。厘定349个穴位（单穴49个，双穴300个），按头、背、胸、四肢等部位分类，统一名称与定位。记载九针形制及用途，总结提插捻转等基本手法，明确禁针禁灸穴位。',
            value: '首次将针灸理论与临床实践系统整合，确立针灸学独立学科地位。统一穴位名称与定位，结束汉代以前腧穴记载混乱的局面，后世针灸典籍多以其为范本。开创“辨证-选穴-手法”完整治疗模式，至今仍是针灸临床的核心方法论。',
            influence: '唐代列为太医署教材，宋代《铜人腧穴针灸图经》、明代《针灸大成》均在其基础上发展。公元7世纪传入朝鲜、日本，成为东亚针灸教育的标准教材，朝鲜《医方类聚》、日本《医心方》均引其内容。世界卫生组织（WHO）针灸穴位国际标准参考其定位，现代中医高等教育仍将其列为经典必修内容。'
        },
        'xiaoer-yaozhengzhijue':{
            title: '《小儿药证直诀》',
            author: '钱乙',
            period: '宋代',
            background: '《小儿药证直诀》由北宋儿科名医钱乙及其弟子阎孝忠整理编纂，成书于北宋宣和年间。钱乙被誉为“儿科之圣”，其学术思想源于《内经》《伤寒论》，结合临床实践系统总结儿科诊疗经验。本书是中国现存最早的儿科专著，标志着中医儿科学的独立发展。',
            content: '系统论述小儿生理病理特点（如“脏腑柔弱，易虚易实”），专论痘疹、惊风、疳积等儿科常见病。强调望诊，提出“面上证”（面部色泽分区对应五脏）、“目内证”（目睛形态辨肝病）等儿科专属诊法。',
            value: '确立中医儿科独立体系，系统提出小儿生理病理学说与诊疗规范，被后世尊为“儿科鼻祖”。六味地黄丸等名方经后世化裁，成为中医经典方剂，现代研究证实其对儿童发育障碍的调节作用。',
            influence: '元代《活幼心书》、明代《幼科发挥》等均以其为范本，清代《医宗金鉴·幼科心法》直接引用其论述。内容传入朝鲜、日本，朝鲜《医方类聚》收录其方，现代中医儿科教育仍将其列为必读典籍。'
        },
        'danxi-xinfa':{
            title: '《丹溪心法》',
            author: '朱震亨',
            period: '元代',
            background: '《丹溪心法》由元代著名医家朱震亨（字彦修，号丹溪）及其弟子整理编撰，成书于14世纪中叶。朱震亨为金元四大家之一，属“滋阴派”代表人物。本书以《内经》为理论根基，结合临床实践，系统阐述“阳常有余，阴常不足”学说，是金元医学革新思想的集大成之作，标志着中医滋阴学派理论体系的成熟。',
            content: '提出“阳有余阴不足论”“相火论”，强调人体阴精易耗、相火易妄动，主张“滋阴降火”为治病大法。倡导“滋阴降火”，慎用辛燥，创制大补阴丸、虎潜丸等经典方剂。',
            value: '系统构建滋阴理论，纠正宋金时期滥用温燥之弊，为明清温病学派提供思想源头。以“气、血、痰、郁”为核心的内伤杂病辨治体系，极大丰富了中医内科诊疗维度。',
            influence: '与刘完素、张从正、李杲并称“金元四大家”，其学说直接影响明代张景岳、清代叶天士等医家。江户时代传入日本，被后世派汉方医家奉为经典，日本《丛桂亭医事小言》等著作多受其启发。'
        }

    };

    bookBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const bookId = this.getAttribute('data-book');
            const book = bookData[bookId];

            document.getElementById('bookDetailTitle').textContent = book.title;
            document.getElementById('bookDetailAuthor').textContent = book.author;
            document.getElementById('bookDetailPeriod').textContent = book.period;
            document.getElementById('bookDetailBackground').textContent = book.background;
            document.getElementById('bookDetailContent').textContent = book.content;
            document.getElementById('bookDetailValue').textContent = book.value;
            document.getElementById('bookDetailInfluence').textContent = book.influence;
            document.getElementById('bookDetailImage').src = `pics/books/${book.title.replace(/[《》]/g, '')}.jpg`;

            bookModal.style.display = 'block';
        });
    });

    closeBookModal.addEventListener('click', function () {
        bookModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === bookModal) {
            bookModal.style.display = 'none';
        }
    });

    // 表单提交
    // const contactForm = document.getElementById('contactForm');
    // const newsletterForm = document.getElementById('newsletterForm');

    // contactForm.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     alert('感谢您的留言！我们会尽快回复您。');
    //     this.reset();
    // });

    // newsletterForm.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     alert('感谢您的订阅！');
    //     this.reset();
    // });

    // 辅助函数
    function getRandomColor() {
        const colors = ['A08052', 'AAA973', 'C58770', 'E8D5B4', 'F0C756'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
// 音乐播放器功能
const musicPlayers = document.querySelectorAll('.music-player');
let currentAudio = null; // 跟踪当前正在播放的音频
let volumeControl = null; // 音量控制元素引用

// 音乐资源映射
const musicSources = {
    'wood': {
        title: '角调·疏肝解郁',
        src: 'music/角肝.m4a' // 替换为实际的音乐文件URL
    },
    'fire': {
        title: '徵调·振奋心气',
        src: 'music/心.m4a'
    },
    'earth': {
        title: '宫调·健脾安神',
        src: 'music/脾.m4a'
    },
    'metal': {
        title: '商调·宣肺理气',
        src: 'music/商肺.m4a'
    },
    'water': {
        title: '羽调·滋肾宁心',
        src: 'music/肾水羽.m4a'
    }
};

// 创建音量控制元素但不立即添加到DOM
function createVolumeControl() {
    if (volumeControl) return volumeControl;

    volumeControl = document.createElement('div');
    volumeControl.className = 'volume-control';
    volumeControl.innerHTML = `
        <label for="volume">音量: </label>
        <input type="range" id="volume" min="0" max="1" step="0.1" value="0.7">
    `;

    // 添加样式
    volumeControl.style.position = 'fixed';
    volumeControl.style.bottom = '20px';
    volumeControl.style.left = '20px';
    volumeControl.style.backgroundColor = 'rgba(255,255,255,0.8)';
    volumeControl.style.padding = '10px';
    volumeControl.style.borderRadius = '5px';
    volumeControl.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    volumeControl.style.zIndex = '1000';
    volumeControl.style.transition = 'opacity 0.3s ease';

    return volumeControl;
}

// 显示音量控制
function showVolumeControl() {
    if (!volumeControl) {
        volumeControl = createVolumeControl();
        document.body.appendChild(volumeControl);

        // 音量控制功能
        document.getElementById('volume').addEventListener('input', function () {
            const volume = parseFloat(this.value);
            if (currentAudio) {
                currentAudio.volume = volume;
            }
        });
    } else {
        volumeControl.style.display = 'block';
        // 短暂的淡入效果
        volumeControl.style.opacity = '0';
        setTimeout(() => {
            volumeControl.style.opacity = '1';
        }, 10);
    }
}

// 隐藏音量控制
function hideVolumeControl() {
    if (volumeControl) {
        // 淡出效果
        volumeControl.style.opacity = '0';
        setTimeout(() => {
            volumeControl.style.display = 'none';
        }, 300);
    }
}

musicPlayers.forEach(player => {
    // 为每个播放器创建音频元素
    const audio = new Audio();

    // 存储音频元素和播放状态
    player.audioElement = audio;
    player.isPlaying = false;

    // 获取图标元素
    const iconElement = player.querySelector('.player-icon i');

    player.addEventListener('click', function () {
        const playerType = this.querySelector('.player-icon').classList[1];
        const musicInfo = musicSources[playerType];

        if (!musicInfo) {
            console.error('未找到对应的音乐资源');
            return;
        }

        // 如果有其他音乐正在播放，先停止它
        if (currentAudio && currentAudio !== this.audioElement) {
            currentAudio.pause();
            currentAudio.currentTime = 0;

            // 重置其他播放器的状态和图标
            musicPlayers.forEach(p => {
                if (p !== this && p.isPlaying) {
                    p.isPlaying = false;
                    const pIcon = p.querySelector('.player-icon i');
                    pIcon.classList.remove('fa-stop');
                    pIcon.classList.add('fa-play');
                }
            });
        }

        // 切换播放/暂停状态
        if (this.isPlaying) {
            // 暂停音乐
            this.audioElement.pause();
            this.isPlaying = false;

            // 更改图标为播放图标
            iconElement.classList.remove('fa-stop');
            iconElement.classList.add('fa-play');

            currentAudio = null;

            // 隐藏音量控制
            hideVolumeControl();
        } else {
            // 播放音乐
            this.audioElement.src = musicInfo.src;
            this.audioElement.play()
                .then(() => {
                    // 播放成功
                    this.isPlaying = true;

                    // 更改图标为停止图标
                    iconElement.classList.remove('fa-play');
                    iconElement.classList.add('fa-stop');

                    currentAudio = this.audioElement;

                    // 显示音量控制
                    showVolumeControl();

                    // 如果已有音量设置，应用它
                    if (volumeControl && document.getElementById('volume')) {
                        this.audioElement.volume = parseFloat(document.getElementById('volume').value);
                    }

                    // 显示通知
                    const notification = document.createElement('div');
                    notification.className = 'music-notification';
                    notification.textContent = `正在播放：${musicInfo.title}`;
                    notification.style.position = 'fixed';
                    notification.style.bottom = '20px';
                    notification.style.right = '20px';
                    notification.style.padding = '10px 15px';
                    notification.style.backgroundColor = 'rgba(0,0,0,0.7)';
                    notification.style.color = 'white';
                    notification.style.borderRadius = '5px';
                    notification.style.zIndex = '1000';
                    notification.style.animation = 'fadeInOut 3s ease';
                    document.body.appendChild(notification);

                    // 3秒后移除通知
                    setTimeout(() => {
                        if (notification.parentNode) {
                            document.body.removeChild(notification);
                        }
                    }, 3000);
                })
                .catch(error => {
                    console.error('播放失败:', error);
                    alert(`音乐播放失败，请检查音频资源: ${error.message}`);
                });
        }

        // 音频结束时的处理
        this.audioElement.onended = () => {
            this.isPlaying = false;

            // 更改图标为播放图标
            iconElement.classList.remove('fa-stop');
            iconElement.classList.add('fa-play');

            currentAudio = null;

            // 隐藏音量控制
            hideVolumeControl();
        };
    });
});

// 添加一些基本样式
const style = document.createElement('style');
style.textContent = `
    .music-player {
        cursor: pointer;
    }
    
    .player-icon {
        transition: all 0.3s ease;
    }
    
    .player-icon:hover {
        transform: scale(1.1);
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// 知识科普板块的标签切换功能已经被前面的通用标签切换代码覆盖
// 如果需要特殊处理，可以在这里添加




