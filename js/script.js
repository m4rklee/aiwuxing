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
    // const cabinetDrawers = document.querySelectorAll('.cabinet-drawer');
    // const herbModal = document.getElementById('herbModal');
    // const closeHerbModal = herbModal.querySelector('.close-modal');

    // 中药材库 - 新增分类切换功能
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 分类切换逻辑（之前已实现）
            
        });
    });

    // 更新药材抽屉选择器（选择所有分类中的抽屉）
    const cabinetDrawers = document.querySelectorAll('.medicine-cabinet .cabinet-drawer');
    const herbModal = document.getElementById('herbModal');
    const closeHerbModal = herbModal.querySelector('.close-modal');

    const herbData = {
        // 寒性药材
        'rhinoceros-horn': {
            name: '犀角 Rhinoceros Horn',
            nature: '性寒，味酸',
            natureEng: 'Cold in nature, sour in taste',
            meridian: '归心、肝经',
            meridianEng: 'Enters the Heart and Liver Meridians',
            effect: '清热，凉血，定惊，解毒',
            effectEng: 'Clears heat, cools blood, calms convulsions, and detoxifies',
            description: '犀角是传统名贵药材，具有强大的清热凉血作用。',
            usage: '内服：磨汁或研末，1-2g；煎汤，1.5-6g；或入丸、散；外用：磨汁涂。<br>For internal use: Grind into juice or powder, 1-2g; decoct in water, 1.5-6g; or prepare into pills or powder.',
            model: '暂无'
        },
        'gypsum': {
            name: '石膏 Gypsum',
            nature: '甘、辛，大寒',
            natureEng: 'Sweet, pungent, extremely cold',
            meridian: '归肺、胃经',
            meridianEng: 'Enters the Lung and Stomach channels',
            effect: '生用：清热泻火，除烦止渴；煅用：收湿，生肌，敛疮，止血',
            effectEng: 'Crude: Clears heat and purges fire; Calcined: Absorbs dampness, promotes tissue regeneration, heals sores, stops bleeding',
            description: '本品为硫酸盐类矿物石膏族石膏，主含含水硫酸钙(CaSO₄·2H₂O)。主产于湖北、安徽、山东，以湖北应城产者最佳。<br>This product is a sulfate mineral of the gypsum group, primarily containing hydrated calcium sulfate (CaSO₄·2H₂O). It is mainly produced in Hubei, Anhui, and Shandong provinces, with the highest quality specimens originating from Yingcheng, Hubei. It can be harvested year-round. After excavation, soil, sand, and impurities are removed. The material has a faint odor and a mild taste. The best quality specimens are white, large, semi-transparent, and exhibit a fibrous texture when longitudinally fractured. It is used either crushed in its raw form or calcined.',
            usage: '生石膏煎服，15～60g，宜打碎先煎。煅石膏外用适量，研末撒敷患处。<br>Gypsum Fibrosum should be decocted for oral administration, with a dosage of 15–60g. It should be crushed and decocted first. Calcined Gypsum is for external use only, applied in appropriate amounts by grinding into powder and sprinkling on the affected area.',
            model: '暂无'
        },
        'coptis': {
            name: '黄连 Coptis',
            nature: '苦，寒',
            natureEng: 'Bitter, cold',
            meridian: '归心、脾、胃、肝、胆、大肠经',
            meridianEng: 'Enters heart, spleen, stomach, liver, gallbladder, large intestine channels<br>The dried rhizomes of three plants from the Ranunculaceae family: Coptis chinensis, Coptis deltoidea, or Coptis teeta. These three varieties are commonly referred to as "Weilian,""Yalian,"and "Yunlian,"respectively.',
            effect: '清热燥湿，泻火解毒',
            effectEng: 'Clears heat and dries dampness, purges fire and detoxifies',
            description: '为毛茛科植物黄连、三角叶黄连或云连的干燥根茎，分别称"味连"、"雅连"、"云连"。',
            usage: '黄连煎汤内服时，成人每天的常规用量为2~5克，也可以入丸、散剂；外用适量研末调敷，或煎水洗，或熬膏涂，或浸汁用。黄连生用清热力较强，炒用能降低黄连的苦寒。酒黄连善于清上焦火热，可以用于治疗眼睛红、口疮等。姜黄连善于清胃和胃止呕，可以用于治疗寒热互结、湿热中阻、胀满呕吐等。萸黄连善于疏肝和胃止呕，可以用于治疗肝胃不和、呕吐吞酸等。<br>When taken as a decoction, the usual daily dose of Coptis chinensis for adults is 2–5 grams. It can also be prepared in pill or powder form. For external use, an appropriate amount can be ground into powder and applied as a paste, decocted for washing, boiled into an ointment for topical application, or soaked for liquid use.Raw Coptis has stronger heat-clearing properties, while stir-frying reduces its bitter and cold nature. Wine-processed Coptis is particularly effective for clearing upper-jiao heat and can be used to treat red eyes and mouth ulcers. Ginger-processed Coptis excels at clearing stomach heat and stopping vomiting, making it suitable for treating conditions such as cold-heat complex, damp-heat obstruction in the middle jiao, abdominal distension, and vomiting. Evodia-processed Coptis is adept at soothing the liver and stomach to stop vomiting, and is used for liver-stomach disharmony, vomiting, and acid regurgitation.',
            model: '暂无'
        },
        'scutellaria': {
            name: '黄芩 Scutellaria',
            nature: '苦，寒',
            natureEng: 'Bitter, cold',
            meridian: '归肺、胆、脾、大肠、小肠经',
            meridianEng: 'Enters lung, gallbladder, spleen, large intestine, small intestine channels',
            effect: '清热燥湿，泻火解毒，止血，安胎',
            effectEng: 'Clears heat and dries dampness, purges fire and detoxifies, stops bleeding, calms fetus',
            description: '黄芩，中药名。为唇形科黄芩属植物黄芩的干燥根。茎分枝，近无毛，或被向上至开展微柔毛；根茎肉质，分枝；叶披针形或线状披针形，先端钝，基部圆，全缘，两面无毛或疏被微柔毛；花梗被微柔毛；花萼密被微柔毛，具缘毛；花冠紫红或蓝色，密被腺柔毛，下唇中裂片三角状卵形；小坚果黑褐色，卵球形，腹面近基部具脐状突起；花期7至8月；果期8至9月。<br>Scutellaria baicalensis, a traditional Chinese medicinal herb. It refers to the dried root of the Scutellaria baicalensis plant from the Lamiaceae family. The stems are branched, nearly glabrous or sparsely covered with ascending to spreading fine hairs; the rhizome is fleshy and branched; the leaves are lanceolate or linear-lanceolate, blunt at the apex, rounded at the base, entire, and glabrous or sparsely covered with fine hairs on both surfaces; the pedicels are covered with fine hairs; the calyx is densely covered with fine hairs and has marginal hairs; the corolla is purple-red or blue, densely covered with glandular hairs, with the middle lobe of the lower lip being triangular-ovate; the nutlets are black-brown, ovoid, with a navel-like protrusion near the base on the ventral side; the flowering period is from July to August; the fruiting period is from August to September.',
            usage: '黄芩煎汁内服时，成人每天的常规用量为3~10克。也可入丸剂或散剂中，成人每天的常规用量为3～9克。外用适量，将黄芩研成粉末，调敷，或熬膏贴敷。除消食药（应该在饭后及时服药）、镇静安神药（临睡前服用）等药物以外，一般药物无论饭前还是饭后服，服药与进食都应间隔1小时左右，以免影响药效的发挥与食物的消化。用于清热燥湿时，适合生用。用于安胎时，适合炒用。用于清上焦热时，适合酒炙使用。用于止血时，适合炒炭使用。<br>For oral decoction of Scutellaria baicalensis, the conventional daily dosage for adults is 3–10 grams. It can also be incorporated into pills or powders, with a conventional daily dosage of 3–9 grams for adults. For external use, an appropriate amount of Scutellaria baicalensis should be ground into powder and applied as a poultice or prepared into an ointment for topical application.Except for digestant medications (which should be taken promptly after meals) and sedative-hypnotic drugs (taken before bedtime), most medications should be taken either before or after meals with an interval of approximately one hour to avoid interference with drug efficacy and food digestion.When used for clearing heat and drying dampness, the raw form is suitable. For preventing miscarriage, the stir-fried form is recommended. For clearing upper-jiao heat, the wine-fried preparation is appropriate. For hemostasis, the charred form should be used.',
            model: '暂无'
        },
        'ophiopogon': {
            name: '麦冬 Ophiopogon',
            nature: '甘、微苦，微寒',
            natureEng: 'Sweet, slightly bitter, slightly cold',
            meridian: '归心、肺、胃经',
            meridianEng: 'Enters heart, lung, stomach channels',
            effect: '养阴润肺、益胃生津、清心除烦',
            effectEng: 'Nourishes yin and moistens lungs, benefits stomach and promotes fluids, clears heart and relieves restlessness',
            description: '百合科植物麦冬的干燥块根。<br>This product is the dried tuberous root of the lily family plant Ophiopogon japonicus.',
            usage: '麦冬煎汁内服时，成人每天的常规用量为6～12克。或熬膏使用，或入丸、散。用于清养肺胃的阴津时，多去心用；滋阴清心时，大多连心用。<br>When decocted for oral administration, the conventional daily dosage of Ophiopogon japonicus for adults is 6-12 grams. It can also be used in concentrated paste form or incorporated into pills or powders.For nourishing the yin fluids of the lungs and stomach, the core is often removed before use. When used to nourish yin and clear heart heat, the core is typically retained.',
            model: '暂无'
        },
        'gardenia': {
            name: '栀子 Gardenia',
            nature: '苦，寒',
            natureEng: 'Bitter, cold',
            meridian: '归心、肺、三焦经',
            meridianEng: 'Enters heart, lung, triple energizer channels',
            effect: '泻火除烦，清热利湿，凉血解毒；外用消肿止痛',
            effectEng: 'Clears fire to relieve irritability, clears heat and promotes diuresis, cools blood and detoxifies; external use reduces swelling and pain',
            description: '本品为茜草科植物栀子的干燥成熟果实。主产于江西、湖南、湖 北、浙江。9～11月果实成熟呈红黄色时采收，除去果梗及杂质，蒸至上气或置沸水中略烫， 取出，干燥。本品气微，味微酸而苦。以皮薄、饱满、色黄、完整者为佳。生用或炒焦用。<br>This product is the dried ripe fruit of Gardenia jasminoides Ellis, belonging to the Rubiaceae family. It is primarily produced in Jiangxi, Hunan, Hubei, and Zhejiang provinces. Harvesting occurs from September to November when the fruit ripens and turns reddish-yellow. The fruit stalks and impurities are removed, followed by steaming until vapor rises or briefly scalding in boiling water. Afterward, the fruit is dried. This product has a faint odor and a slightly sour and bitter taste. Those with thin skin, plumpness, yellow color, and intact appearance are considered superior. It is used either in its raw form or after stir-frying until charred.',
            usage: '栀子煎汤内服时，成人每天的常规用量为6~10克，外用适量可以研末调敷。栀子也可以入丸、散服用。用于清热泻火时适合选用生栀子，用于凉血止血时适合选用焦栀子。<br>When taken as a decoction, the usual daily dosage of Gardenia for adults is 6–10 grams. For external use, an appropriate amount can be ground into powder and applied topically. Gardenia can also be consumed in pill or powder form.For clearing heat and purging fire, raw Gardenia is recommended, while charred Gardenia is suitable for cooling blood and stopping bleeding.',
            model: '暂无'
        },
        'scrophularia': {
            name: '元参（玄参） Scrophularia',
            nature: '甘、苦、咸，微寒',
            natureEng: 'Sweet, bitter, salty, slightly cold',
            meridian: '归肺、胃、肾经',
            meridianEng: 'Enters lung, stomach, kidney channels',
            effect: '清热凉血，滋阴降火，解毒散结',
            effectEng: 'Clears heat and cools blood, nourishes yin and reduces fire, detoxifies and dissipates nodules',
            description: '玄参科植物玄参及北玄参的干燥根。<br>Scrophularia, a traditional Chinese medicinal herb, refers to the dried roots of Scrophularia ningpoensis and Scrophularia buergeriana from the Scrophulariaceae family.',
            usage: '玄参煎汁内服时，成人每天的常规用量为9~15克。玄参寒滑，故脾胃虚寒，食少便溏者不宜使用。<br>When decocting Scrophulariae Radix for oral administration, the conventional daily dosage for adults is 9–15 grams.Scrophulariae Radix is cold and slippery in nature, so it should not be used by individuals with spleen-stomach deficiency-cold, poor appetite, or loose stools.',
            model: '暂无'
        },
        'sophora-flower': {
            name: '槐花 Sophora Flower',
            nature: '苦，微寒',
            natureEng: 'Bitter, slightly cold',
            meridian: '归肝、大肠经',
            meridianEng: 'Enters liver and large intestine channels',
            effect: '凉血止血，清肝泻火',
            effectEng: 'Cools blood to stop bleeding, clears liver fire and drains fire',
            description: '本品为豆科植物槐的干燥花及花蕾。前者称为“槐花”，后者习称“槐米”。<br>This product consists of the dried flowers and flower buds of the Sophora japonica L. plant from the Fabaceae family. The former is referred to as "Sophora Flower,"while the latter is commonly known as "Sophora Bud."',
            usage: '槐花煎汁内服时，成⼈每天的常规用量为5~10克；还可以入丸、散及外用。止血多炒炭用，清热泻火宜生用。<br>When taken orally as a decoction, the usual daily dosage for adults is 5–10 grams of Sophora japonica flowers. It can also be prepared into pills or powders for internal use or applied externally. For hemostatic purposes, it is often used in charred form, while for clearing heat and purging fire, the raw form is preferred.',
            model: '暂无'
        },
        
        // 温热药材
        'aconite': {
            name: '附子 Aconite',
            nature: '辛、甘，大热；有毒',
            natureEng: 'Pungent, sweet, extremely hot; toxic',
            meridian: '归心、肾、脾经',
            meridianEng: 'Enters Heart, Kidney, Spleen channels',
            effect: '回阳救逆，补火助阳，散寒止痛',
            effectEng: 'Restores yang to rescue from collapse, supplements fire to assist yang, disperses cold to relieve pain',
            description: '本品为毛莨科植物乌头的子根的加工品。主产于四川。6月下旬至8月上旬采挖，除去母根、须根及泥沙，习称“泥附子”，加工制成盐附子、黑附片（黑顺片）、白附片。盐附子气微，味咸而麻，刺舌；以个大、体重、色灰黑、表面起盐霜者为佳。黑附片（黑顺片）气微，味淡；以皮黑褐、切面油润有光泽者为佳。白附片气微，味淡；以片大、 色黄白、油润半透明者为佳。饮片炮制品有黑附片、白附片、淡附片、炮附片。<br>This product is the processed product of the daughter root of Aconitum carmichaelii Debx. of the Ranunculaceae family. It is mainly produced in Sichuan. Harvested from late June to early August, the mother root, fibrous roots, and soil are removed, commonly referred to as "mud aconite,"and processed into salt-processed aconite, black aconite slices (black shun slices), and white aconite slices. Salt-processed aconite has a slight odor, a salty and numbing taste, and a tingling sensation on the tongue; the best quality is characterized by large size, heavy weight, gray-black color, and a surface covered with salt crystals. Black aconite slices (black shun slices) have a slight odor and a bland taste; the best quality features a dark brown skin and an oily, glossy cross-section. White aconite slices have a slight odor and a bland taste; the best quality is marked by large size, yellowish-white color, and an oily, semi-transparent appearance. Processed herbal slices include black aconite slices, white aconite slices, lightly processed aconite slices, and blast-processed aconite slices.',
            usage: '附子煎汁内服时，成人每天的常规用量为3～15克，需要先煎、久煎。附子有毒，煎汁内服时应当先煎0.5~1小时，口尝至无麻辣感为度。附子还可以入丸、散。外用时适量，研末调敷。附子内服时宜用炮制品，生品外用。<br>When taking aconite decoction orally, the conventional daily dosage for adults is 3–15 grams, which requires prolonged decoction. Aconite is toxic, so when preparing the decoction for oral use, it should be boiled for 0.5–1 hour first, until tasting reveals no numbing or spicy sensation. Aconite can also be used in pills or powders. For external use, apply an appropriate amount after grinding into powder and mixing. When taken orally, processed aconite should be used, while the raw product is for external application only.',
            model: '暂无'
        },
        'ephedra': {
            name: '麻黄 Ephedra',
            nature: '辛、微苦，温',
            natureEng: 'Pungent, slightly bitter, warm',
            meridian: '归肺、膀胱经',
            meridianEng: 'Enters lung and bladder channels',
            effect: '发汗解表，宣肺平喘，利水消肿',
            effectEng: 'Induces sweating to relieve exterior, diffuses lung to relieve asthma, promotes diuresis to reduce edema',
            description: '本品为麻黄科植物草麻黄、中麻黄或木贼麻黄的干燥草质茎。主产于山西、河北、甘肃、内蒙古、 新疆。秋季采割绿色的草质茎，晒干，除去木质茎、残根及杂质，切段。本品气微香，味涩、微苦。以干燥，茎粗，淡绿色，内心充实、色红棕，味苦涩者为佳。生用、蜜炙或捣绒用。<br>This product is the dried herbaceous stem of Ephedra sinica, Ephedra intermedia, or Ephedra equisetina from the Ephedraceae family. It is primarily produced in Shanxi, Hebei, Gansu, Inner Mongolia, and Xinjiang. The green herbaceous stems are harvested in autumn, dried in the sun, and then processed by removing the woody stems, residual roots, and impurities before being cut into segments. This product has a faint aromatic odor and a taste that is astringent and slightly bitter. The preferred quality features include dryness, thick stems, light green color, a solid and reddish-brown core, and a bitter, astringent taste. It is used in its raw form, honey-fried, or crushed into wool-like fibers.',
            usage: '麻黄煎汁内服时，成人每天的常规用量为2～10克。入丸、散剂时用量为2～9克，外用时适量，研末调敷。<br>When decocting Ephedra for oral use, the conventional daily dosage for adults is 2–10 grams.For pill or powder preparations, the dosage ranges from 2–9 grams. For external use, apply an appropriate amount by grinding into powder and mixing for topical application.',
            model: '暂无'
        },
        'cinnamon-twigs': {
            name: '桂枝 Cinnamon Twigs',
            nature: '辛、甘，温',
            natureEng: 'Pungent, sweet, warm',
            meridian: '归心、肺、膀胱经',
            meridianEng: 'Enters Heart, Lung, Bladder channels',
            effect: '发汗解肌，温通经脉，助阳化气，平冲降逆',
            effectEng: 'Promotes sweating and relieves muscles, warms and unblocks meridians, assists yang transformation of qi, pacifies rebellious qi',
            description: '本品为樟科植物肉桂的干燥嫩枝。主产于广东、广西。春、夏二季采收，除去叶，晒干或切片晒干。本品有特异香气，味甜、微辛，皮部味较浓。以质嫩、色红 棕、香气浓者为佳。生用。<br>This product is the dried young branch of the Cinnamomum cassia plant from the Lauraceae family. It is primarily produced in Guangdong and Guangxi. Harvested in spring and summer, the leaves are removed, and the branches are dried in the sun or sliced before drying. This product has a distinctive aroma, with a sweet and slightly pungent taste, and the bark portion has a stronger flavor. The best quality is characterized by tender texture, reddish-brown color, and strong fragrance. It is used in its raw form.',
            usage: '煎服3～10g。<br>Decoct and take orally, 3-10g.',
            model: '暂无'
        },
        'asarum': {
            name: '细辛 Asarum',
            nature: '辛，温；有小毒',
            natureEng: 'Pungent, warm; slightly toxic',
            meridian: '归心、肺、肾经',
            meridianEng: 'Enters Heart, Lung, Kidney channels',
            effect: '解表散寒，祛风止痛，通窍，温肺化饮',
            effectEng: 'Dispels external cold, expels wind to relieve pain, unblocks orifices, warms lungs to resolve phlegm',
            description: '本品为马兜铃科植物北细辛、汉城细辛或华细辛的干燥根和根茎。前两种习称“辽细辛”,主产于辽宁、吉林、黑龙江；后一种习称“华细辛”,主产于 陕西。夏季果熟期或初秋采挖，除净地上部分和泥沙，阴干。切段。本品气辛香，味辛辣、麻舌。均以根多色灰黄，干燥，味辛辣而麻舌者为佳。生用。<br>This product consists of the dried roots and rhizomes of Asarum heterotropoides var. mandshuricum, Asarum sieboldii var. seoulense, or Asarum sieboldii from the Aristolochiaceae family. The first two are commonly referred to as "Liaoxixin"and are primarily produced in Liaoning, Jilin, and Heilongjiang provinces. The latter is known as "Huaxixin"and is mainly cultivated in Shaanxi province. It is harvested during the fruit ripening period in summer or in early autumn, with the aerial parts and soil removed, then dried in the shade and cut into segments.This herb has a pungent aroma and a spicy, numbing taste. High-quality specimens are characterized by abundant roots with a grayish-yellow color, dryness, and a strongly spicy, tongue-numbing flavor. It is used in its raw form.',
            usage: '细辛煎汁内服时，成人每天的常规用量为1~3克。散剂每次服用0.5~1克。外用适量。可以研末外敷、吹鼻或煎水含漱。<br>When taken orally as a decoction, the conventional daily dosage for adults is 1–3 grams of Asarum. For powder preparations, take 0.5–1 gram per dose. For external use, apply an appropriate amount. It can be ground into powder for topical application, blown into the nose, or used as a gargle by decocting in water.',
            model: '暂无'
        },
        'pinellia': {
            name: '半夏 Pinellia',
            nature: '辛，温；有毒',
            natureEng: 'Pungent, warm; toxic',
            meridian: '归脾、胃、肺经',
            meridianEng: 'Enters spleen, stomach, lung channels',
            effect: '燥湿化痰，降逆止呕，消痞散结',
            effectEng: 'Dries dampness and resolves phlegm, directs qi downward to stop vomiting, dissipates masses and disperses stagnation',
            description: '本品为天南星科植物半夏的干燥块茎。<br>This product is the dried tuber of Pinellia ternata, a plant belonging to the Araceae family.',
            usage: '半夏煎汁内服时，成人每天的常规用量为3～9克。内服一般选择炮制过的药品使用，如姜半夏、法半夏、清半夏等。姜半夏长于降逆止呕，法半夏长于燥湿和胃，清半夏长于化湿痰，半夏曲长于化痰消食，竹沥半夏长于清化热痰。半夏也可入丸、散剂使用。外用时取适量生品，研末用水调敷，或者用酒、醋调敷。<br>When taken orally as a decoction, the conventional daily dosage of Pinellia ternata (Banxia) for adults is 3–9 grams. For oral administration, processed forms are generally used, such as ginger-processed Pinellia (Jiang Banxia), alum-processed Pinellia (Fa Banxia), or purified Pinellia (Qing Banxia). Ginger-processed Pinellia is particularly effective for stopping vomiting and counteracting adverse rising energy, alum-processed Pinellia excels in drying dampness and harmonizing the stomach, purified Pinellia is adept at resolving damp phlegm, fermented Pinellia (Banxia Qu) is specialized in dissolving phlegm and promoting digestion, while bamboo juice-processed Pinellia (Zhuli Banxia) is best for clearing heat-phlegm. Pinellia can also be prepared in pill or powder form for oral use. For external application, an appropriate amount of the raw herb is ground into powder and mixed with water, wine, or vinegar for topical application.',
            model: '暂无'
        },
        'donkey-hide-glue': {
            name: '阿胶 Donkey-hide Glue',
            nature: '甘，平',
            natureEng: 'Sweet, neutral',
            meridian: '归肺、肝、肾经',
            meridianEng: 'Enters lung, liver, kidney channels',
            effect: '补血，止血，滋阴润燥',
            effectEng: 'Enriches blood, stops bleeding, nourishes yin, moistens dryness',
            description: '本品为马科动物驴的干燥皮或鲜皮经煎煮、浓缩制成的固体胶。<br>This product is a solid glue made from the dried or fresh hide of the donkey (Equus asinus) through decoction and concentration.',
            usage: '阿胶一般需要先加黄酒烊化，再加入到汤剂中服用（即烊化兑服），成人每天的常规用量为3～9克。阿胶用于润肺、清肺化痰宜蛤粉炒，止血宜蒲黄炒，滋阴补血多生用。炒阿胶可入汤剂或丸散。阿胶因入丸散剂不宜粉碎，可用蛤粉烫成珠后，便于粉碎，并且可以改善因滋腻影响脾胃消化功能的副作用。<br>Ejiao (donkey-hide gelatin) generally needs to be dissolved first in yellow rice wine before being added to decoctions for oral administration (i.e., dissolved and mixed). The conventional daily dosage for adults is 3–9 grams. When used for moistening the lungs, clearing lung phlegm, Ejiao is preferably stir-fried with clam powder; for hemostasis, it is stir-fried with cattail pollen; for nourishing yin and enriching blood, it is mostly used in its raw form. Stir-fried Ejiao can be added to decoctions or prepared into pills or powders. Since Ejiao is difficult to pulverize for use in pills or powders, it can be heated with clam powder to form pearls, which facilitates pulverization and mitigates the side effect of impairing spleen and stomach digestive functions due to its greasy nature.',
            model: '暂无'
        },
        
        // 平性药材
        'jujube': {
            name: '大枣 Jujube',
            nature: '甘，温',
            natureEng: 'Sweet, warm',
            meridian: '归脾、胃、心经',
            meridianEng: 'Enters spleen, stomach, heart channels',
            effect: '补中益气，养血安神',
            effectEng: 'Tonifies middle burner and augments qi, nourishes blood and calms spirit',
            description: '鼠李科植物枣的干燥成熟果实。<br>This product is the dried ripe fruit of the jujube plant from the Rhamnaceae family.',
            usage: '煎服6～15g，宜剪破入煎。<br>Decoct and take orally, 6-15g. It is advisable to crush before decocting.',
            model: '暂无'
        },
        'tangerine-peel': {
            name: '陈皮 Tangerine Peel',
            nature: '辛、苦，温',
            natureEng: 'Pungent, bitter, warm',
            meridian: '归脾、肺经',
            meridianEng: 'Enters spleen and lung channels',
            effect: '理气健脾，燥湿化痰',
            effectEng: 'Regulates qi and strengthens spleen, dries dampness and resolves phlegm',
            description: '芸香科柑橘属植物橘及其栽培变种的干燥成熟果皮。<br>Tangerine Peel, also known as Chenpi, is a traditional Chinese medicinal herb. It refers to the dried mature peel of the citrus plant from the Rutaceae family, specifically the species Citrus reticulata and its cultivated varieties.',
            usage: '陈皮煎汁内服时，成人每天的常规用量为3~10克。陈皮也可以入丸、散服用。<br>When taken as a decoction, the conventional daily dosage of dried tangerine peel for adults is 3–10 grams. Dried tangerine peel can also be consumed in pill or powder form.',
            model: '暂无'
        },
        'dendrobium': {
            name: '石斛 Dendrobium',
            nature: '甘，微寒',
            natureEng: 'Sweet, slightly cold',
            meridian: '归胃、肾经',
            meridianEng: 'Enters stomach and kidney channels',
            effect: '益胃生津，滋阴清热',
            effectEng: 'Benefits stomach and promotes fluids, nourishes yin and clears heat',
            description: '本品为兰科植物金钗石斛、霍山石斛、鼓槌石斛或流苏石斛的栽培品及其同属植物近似种的新鲜或干燥茎。<br>This product is the fresh or dried stem of cultivated Dendrobium nobile, Dendrobium huoshanense, Dendrobium chrysotoxum, or Dendrobium fimbriatum, as well as closely related species of the same genus in the Orchidaceae family.',
            usage: '石斛煎汁内服时，成人每天的常规用量为6～12克，鲜品15～30克。切断，生用。干品入汤剂宜先下。入复方宜先煎，单用久煎；研末，3～6克；或入丸、散；或熬膏。<br>When Dendrobium is decocted for oral administration, the conventional daily dosage for adults is 6–12 grams for dried product and 15–30 grams for fresh product. It should be cut into pieces and used raw. Dried product should be added first when used in decoctions. In compound prescriptions, it should be decocted first; when used alone, it requires prolonged decoction. For powder form, the dosage is 3–6 grams; it can also be prepared into pills or powders, or made into paste.',
            model: '暂无'
        },
        'mume-fruit': {
            name: '乌梅 Mume Fruit',
            nature: '酸、涩，平',
            natureEng: 'Sour, astringent, neutral',
            meridian: '归肝、脾、肺、大肠经',
            meridianEng: 'Enters liver, spleen, lung, large intestine channels',
            effect: '敛肺，涩肠，生津，安蛔',
            effectEng: 'Astringes lungs, constricts intestines, promotes fluids, calms roundworms',
            description: '蔷薇科植物梅的干燥近成熟果实。<br>This product is the dried nearly mature fruit of the Rosaceae plant Prunus mume.',
            usage: '乌梅水煎服，成人每天的常规用量为6~12克，也可以入丸、散剂；外用适量，可以烧灰存性，研末撒或者调敷。乌梅止泻适合炒炭用；乌梅敛肺、生津、安蛔适合生用。<br>Fructus Mume can be decocted in water for oral administration. The conventional daily dosage for adults is 6–12 grams. It can also be prepared into pills or powders. For external use, an appropriate amount can be charred to preserve its properties, ground into powder for sprinkling or mixed into a paste. For antidiarrheal purposes, Fructus Mume is best used in its charred form. To astringe the lungs, promote fluid production, or expel parasites, it should be used in its raw form.',
            model: '暂无'
        },
        // 原有药材保持不变（人参、黄芪等）
        'ginseng': {
            name: '人参 Ginseng',
            nature: '甘、微苦，微温',
            natureEng: 'Sweet, slightly bitter, mildly warm',
            meridian: '脾、肺、心经',
            meridianEng: 'Spleen, Lung, and Heart Meridians',
            effect: '大补元气，复脉固脱，补脾益肺，生津养血，安神益智',
            effectEng: 'Greatly tonifies primordial qi, Restores pulse and rescues collapse, Reinforces the spleen and nourishes the lungs, Generates body fluids and enriches blood, Calms the spirit and enhances cognition',
            description: `人参为五加科植物人参的干燥根，主产于吉林、辽宁等地。人参是名贵的中药材，被誉为"百草之王"，具有极高的药用价值。<br>Ginseng is the dried root of the Panax plant (Araliaceae family), mainly grown in China's Jilin and Liaoning provinces. This premium medicinal herb, revered as the 'Monarch of Medicinal Plants', offers extraordinary therapeutic benefits.`,
            usage: '内服：煎汤，3-9g；或研末，1-3g；或浸酒，或入丸、散。<br>Internal use: Decoct in water, 3-9g; or grind into powder, 1-3g; or steep in wine, or prepare as pills or powder.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Ginseng" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/213a2e16b77041839e91ceb63dbc2b4b/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ginseng-213a2e16b77041839e91ceb63dbc2b4b?utm_medium=embed&utm_campaign=share-popup&utm_content=213a2e16b77041839e91ceb63dbc2b4b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ginseng </a> by <a href="https://sketchfab.com/Laomo01?utm_medium=embed&utm_campaign=share-popup&utm_content=213a2e16b77041839e91ceb63dbc2b4b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> KaMi </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=213a2e16b77041839e91ceb63dbc2b4b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'astragalus': {
            name: '黄芪 Astragalus Root',
            nature: '甘，微温',
            natureEng: 'Sweet, slightly warm',
            meridian: '脾、肺经',
            meridianEng: 'Spleen, Lung meridians',
            effect: '补气固表，利水消肿，托毒排脓，生肌',
            effectEng: 'Tonifies qi and strengthens the exterior. Promotes urination and reduces swelling. Expels toxins and drains pus. Promotes tissue regeneration.',
            description: '黄芪为豆科植物蒙古黄芪或膜荚黄芪的干燥根，主产于内蒙古、山西、黑龙江等地。黄芪是常用的补气药，具有增强机体免疫力的作用。<br>Astragalus Root is the dried root of Astragalus mongholicus or Astragalus membranaceus (Fabaceae family), primarily produced in Inner Mongolia, Shanxi, Heilongjiang, and other regions. A commonly used qi-tonifying herb, it enhances immune function.',
            usage: '内服：煎汤，9-30g；或研末；或浸酒。外用：研末撒或调敷。<br>Internal use: Decoction, 9-30g; or ground into powder; or steeped in wine. External use: Apply powdered form topically or mix with liquid for dressing.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="黄芪（ Astragalus）" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4feb5bc673774c52852d63b976d17157/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/astragalus-4feb5bc673774c52852d63b976d17157?utm_medium=embed&utm_campaign=share-popup&utm_content=4feb5bc673774c52852d63b976d17157" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> 黄芪（ Astragalus） </a> by <a href="https://sketchfab.com/Mark.Q?utm_medium=embed&utm_campaign=share-popup&utm_content=4feb5bc673774c52852d63b976d17157" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Mark.Q </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4feb5bc673774c52852d63b976d17157" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'angelica': {
            name: '当归 Chinese Angelica',
            nature: '甘、辛，温',
            natureEng: 'Sweet, pungent, warm',
            meridian: '心、肝、脾经',
            meridianEng: 'Heart, Liver, Spleen meridians',
            effect: '补血活血，调经止痛，润肠通便',
            effectEng: 'Tonifies blood and promotes blood circulation. Regulates menstruation and alleviates pain. Moistens the intestines to relieve constipation',
            description: '当归为伞形科植物当归的干燥根，主产于甘肃、云南、四川等地。当归是重要的补血药，被誉为"女性之友"。<br>Chinese Angelica is the dried root of Angelica sinensis (Apiaceae family), primarily cultivated in Gansu, Yunnan, Sichuan, and other regions. A vital blood-tonifying herb, it is renowned as the "Women’s Herb" or "Best Friend of Women" in TCM.',
            usage: '内服：煎汤，3-15g；或浸酒，或入丸、散。<br>Internal use: Decoction, 3-15g; or steeped in wine; or prepared as pills or powder.',
            model:'<div class="sketchfab-embed-wrapper"> <iframe title="Angelica sinensis" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/752de590890e409f85262684d42debbb/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/angelica-sinensis-752de590890e409f85262684d42debbb?utm_medium=embed&utm_campaign=share-popup&utm_content=752de590890e409f85262684d42debbb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Angelica sinensis </a> by <a href="https://sketchfab.com/Laomo01?utm_medium=embed&utm_campaign=share-popup&utm_content=752de590890e409f85262684d42debbb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> KaMi </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=752de590890e409f85262684d42debbb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'licorice': {
            name: '甘草 Liquorice/Licorice Root',
            nature: '甘，平',
            natureEng: 'Sweet, neutral',
            meridian: '心、肺、脾、胃经',
            meridianEng: 'Heart, Lung, Spleen, Stomach meridians',
            effect: '补脾益气，清热解毒，祛痰止咳，缓急止痛，调和诸药',
            effectEng: 'Tonifies the spleen and replenishes qi. Clears heat and detoxifies. Eliminates phlegm and relieves cough. Alleviates spasms and pain. Harmonizes the properties of other herbs.',
            description: '甘草为豆科植物甘草、胀果甘草或光果甘草的干燥根及根茎，主产于内蒙古、甘肃、新疆等地。甘草是最常用的中药之一，具有"十二经络引经药"的美誉。<br>Licorice Root (甘草, Gancao) is the dried root and rhizome of Glycyrrhiza uralensis, Glycyrrhiza inflata, or Glycyrrhiza glabra (Fabaceae family), primarily produced in Inner Mongolia, Gansu, Xinjiang, and other regions. As one of the most frequently used herbs in Traditional Chinese Medicine (TCM), it is honored as the "Guide Herb of the Twelve Meridians" for its exceptional harmonizing properties.',
            usage: '内服：煎汤，2-10g；或研末。<br>Internal use: Decoction, 2-10g; or ground into powder.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Licorice_ Root_ Bundle_0218075714_texture_obj" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/452d7ad88ecd48d3848bf47bb6547597/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/licorice--root--bundle-0218075714-texture-obj-452d7ad88ecd48d3848bf47bb6547597?utm_medium=embed&utm_campaign=share-popup&utm_content=452d7ad88ecd48d3848bf47bb6547597" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Licorice_ Root_ Bundle_0218075714_texture_obj </a> by <a href="https://sketchfab.com/go3452?utm_medium=embed&utm_campaign=share-popup&utm_content=452d7ad88ecd48d3848bf47bb6547597" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> go3452 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=452d7ad88ecd48d3848bf47bb6547597" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'cinnamon': {
            name: '肉桂 Cinnamon Bark',
            nature: '辛、甘，热',
            natureEng: 'Pungent, sweet, hot',
            meridian: '肾、脾、心、肝经',
            meridianEng: 'Kidney, Spleen, Heart, Liver meridians',
            effect: '补火助阳，引火归源，散寒止痛，活血通经',
            effectEng: 'Reinforces fire (yang) and supports yang functions. Redirects floating fire back to its source. Dispels cold and alleviates pain. Activates blood circulation and unblocks meridians.',
            description: '肉桂为樟科植物肉桂的干燥树皮，主产于广西、云南、广东等地。肉桂是重要的温里药，具有很好的温阳作用。<br>Cinnamon Bark (肉桂, Rou Gui) is the dried bark of Cinnamomum cassia (Lauraceae family), primarily cultivated in Guangxi, Yunnan, Guangdong, and other regions. As a key herb for warming the interior, it is highly valued in TCM for its potent yang-warming properties.',
            usage: '内服：煎汤，1-5g；或研末，0.5-1g；或浸酒，或入丸、散。<br>Internal use: Decoction, 1-5g (added near the end of boiling); or ground into powder.'
        },
        'ginger': {
            name: '生姜 Ginger',
            nature: '辛，微温',
            natureEng: 'Pungent, slightly warm',
            meridian: '肺、脾、胃经',
            meridianEng: 'Lung, Spleen, Stomach meridians',
            effect: '解表散寒，温中止呕，温肺止咳，解毒',
            effectEng: 'Releases the exterior and disperses cold. Warms the middle and relieves nausea. Warms the lungs and stops coughing. Detoxifies.',
            description: '生姜为姜科植物姜的新鲜根茎，全国大部分地区均有种植。生姜是常用的调味品，也是重要的药食两用品。<br>Ginger (生姜, Zingiber officinale) is the fresh rhizome of the ginger plant (Zingiberaceae family), widely cultivated across China. It is a common culinary spice and an important dual-purpose herb (both medicinal and edible) in Traditional Chinese Medicine (TCM).',
            usage: '内服：煎汤，3-10g；或切片，或绞汁。外用：切片敷或捣敷。<br>Internal use: Decoction, 3-10g; sliced or juiced. External use: Apply sliced or mashed ginger topically.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Ginger Root" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/14d7deb215f84f6ea2c10a9da12e60fd/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ginger-root-14d7deb215f84f6ea2c10a9da12e60fd?utm_medium=embed&utm_campaign=share-popup&utm_content=14d7deb215f84f6ea2c10a9da12e60fd" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ginger Root </a> by <a href="https://sketchfab.com/Papheoo?utm_medium=embed&utm_campaign=share-popup&utm_content=14d7deb215f84f6ea2c10a9da12e60fd" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Paweł Somogyi </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=14d7deb215f84f6ea2c10a9da12e60fd" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'rhubarb': {
            name: '大黄 Rhubarb Root',
            nature: '苦，寒',
            natureEng: 'Bitter, cold',
            meridian: '脾、胃、大肠、肝、心包经',
            meridianEng: 'Spleen, Stomach, Large Intestine, Liver, Pericardium meridians',
            effect: '泻热通便，凉血解毒，逐瘀通经',
            effectEng: 'Purges heat and relieves constipation. Cools blood and detoxifies. Expels blood stasis and unblocks menstruation',
            description: '大黄为蓼科植物掌叶大黄、唐古特大黄或药用大黄的干燥根及根茎，主产于四川、甘肃、青海等地。大黄是重要的泻下药。<br>Rhubarb Root (大黄, Rhei Radix et Rhizoma) is the dried root and rhizome of Rheum palmatum, Rheum tanguticum, or Rheum officinale (Polygonaceae family), primarily produced in Sichuan, Gansu, Qinghai, and other regions. It is a crucial purgative herb in Traditional Chinese Medicine (TCM).',
            usage: '内服：煎汤，3-15g；后下。生用泻下力强，酒制泻下力弱而活血力强。<br>Internal use: Decoction, 3-12g (lower dose for laxative effect; higher dose for purgation).Note: For constipation, decoct briefly (5-10 mins); for blood-cooling, decoct longer.',

        },
        'peony': {
            name: '芍药 Peony Root',
            nature: '苦、酸，微寒',
            natureEng: 'Bitter, sour, slightly cold',
            meridian: '肝、脾经',
            meridianEng: 'Liver, Spleen meridians',
            effect: '养血敛阴，柔肝止痛，平抑肝阳',
            effectEng: 'Nourishes blood and astringes yin. Softens the liver and relieves pain. Calms and suppresses liver yang.',
            description: '芍药为毛茛科植物芍药的干燥根，主产于安徽、浙江、四川等地。芍药是常用的补血药，具有很好的镇痛作用。<br>Peony Root is the dried root of Paeonia lactiflora (Ranunculaceae family), primarily cultivated in Anhui, Zhejiang, Sichuan and other regions. As a commonly used blood-tonifying herb, it is particularly valued for its excellent analgesic effects in TCM.',
            usage: '内服：煎汤，5-15g；或浸酒，或入丸、散。<br>Internal use: Decoction, 5-15g; or steeped in wine; or prepared as pills or powder.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Paeonia lactiflora Karl Rosenfield Pion or Peon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/67c8b601b47d48a984b0d9298622ad3d/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/paeonia-lactiflora-karl-rosenfield-pion-or-peon-67c8b601b47d48a984b0d9298622ad3d?utm_medium=embed&utm_campaign=share-popup&utm_content=67c8b601b47d48a984b0d9298622ad3d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Paeonia lactiflora Karl Rosenfield Pion or Peon </a> by <a href="https://sketchfab.com/3DImaginationHub?utm_medium=embed&utm_campaign=share-popup&utm_content=67c8b601b47d48a984b0d9298622ad3d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> 3DImaginationHub </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=67c8b601b47d48a984b0d9298622ad3d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'chrysanthemum': {
            name: '菊花 Chrysanthemum Flower/Kikuka',
            nature: '甘、苦，微寒',
            natureEng: 'Sweet, bitter, slightly cold',
            meridian: '肺、肝经',
            meridianEng: 'Lung, Liver meridians',
            effect: '疏散风热，平抑肝阳，清热解毒，明目',
            effectEng: 'Dispels wind-heat. Calms and subdues liver yang. Clears heat and detoxifies. Brightens the eyes.',
            description: '菊花为菊科植物菊的干燥头状花序，主产于安徽、浙江、河南等地。菊花是常用的清热药，也是重要的药食两用品。<br>Chrysanthemum Flower (菊花, Flos Chrysanthemi) is the dried capitulum of Chrysanthemum morifolium (Asteraceae family), primarily cultivated in Anhui, Zhejiang, Henan, and other regions. It is a commonly used heat-clearing herb and an important dual-purpose medicinal and edible plant in Traditional Chinese Medicine (TCM).',
            usage: '内服：煎汤，5-15g；或泡茶。<br>Internal use: Decoction, 5-15g; or brewed as tea.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="Chrysanthemum Yellow" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4b4cfc4f95374100bb0e5894cf213721/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/chrysanthemum-yellow-4b4cfc4f95374100bb0e5894cf213721?utm_medium=embed&utm_campaign=share-popup&utm_content=4b4cfc4f95374100bb0e5894cf213721" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Chrysanthemum Yellow </a> by <a href="https://sketchfab.com/heyyodd?utm_medium=embed&utm_campaign=share-popup&utm_content=4b4cfc4f95374100bb0e5894cf213721" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> heyyodd </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4b4cfc4f95374100bb0e5894cf213721" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'wolfberry': {
            name: '枸杞 Wolfberry',
            nature: '甘，平',
            natureEng: 'Sweet, neutral',
            meridian: '肝、肾经',
            meridianEng: 'Liver, Kidney meridians',
            effect: '滋补肝肾，益精明目，养血，生津',
            effectEng: 'Nourishes liver and kidney yin. Benefits essence and brightens vision. Tonifies blood. Promotes fluid production.',
            description: '枸杞为茄科植物宁夏枸杞或中华枸杞的干燥成熟果实，主产于宁夏、青海、甘肃等地。枸杞是常用的滋补药，也是重要的药食两用品。<br>Wolfberry (枸杞, Lycii Fructus) is the dried ripe fruit of Lycium barbarum or Lycium chinense (Solanaceae family), primarily cultivated in Ningxia, Qinghai, Gansu and other regions. As a fundamental tonifying herb, it is also a prized dual-purpose medicinal and food item in Traditional Chinese Medicine.',
            usage: '内服：煎汤，6-15g；或泡茶，或浸酒，或嚼服。<br>Internal use: Decoction, 6-15g; steeped as tea; soaked in wine; or chewed directly.',
        },
        'poria': {
            name: '茯苓 Poria Cocos',
            nature: '甘、淡，平',
            natureEng: 'Sweet, bland, neutral',
            meridian: '心、肺、脾、肾经',
            meridianEng: 'Heart, Lung, Spleen, Kidney meridians',
            effect: '利水渗湿，健脾，宁心安神',
            effectEng: 'Promotes urination and drains dampness. Strengthens the spleen. Calms the spirit and soothes the mind.',
            description: '茯苓为多孔菌科真菌茯苓的干燥菌核，主产于云南、安徽、湖北等地。茯苓是常用的利水渗湿药，具有很好的健脾作用。<br>Poria (茯苓, Poria Cocos) is the dried sclerotium of the fungus Wolfiporia extensa (Polyporaceae family), primarily cultivated in Yunnan, Anhui, Hubei and other regions. As a fundamental dampness-resolving herb, it is particularly valued for its exceptional spleen-tonifying properties in Traditional Chinese Medicine.',
            usage: '内服：煎汤，9-15g；或研末，3-9g；或入丸、散。<br>Internal use: Decoction, 9-15g; ground powder, 3-9g; or prepared in pills/powder.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="China root / Poria (茯苓)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cc4801a72085433b95ab33a1f071aea9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/china-root-poria-cc4801a72085433b95ab33a1f071aea9?utm_medium=embed&utm_campaign=share-popup&utm_content=cc4801a72085433b95ab33a1f071aea9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> China root / Poria (茯苓) </a> by <a href="https://sketchfab.com/motpanda?utm_medium=embed&utm_campaign=share-popup&utm_content=cc4801a72085433b95ab33a1f071aea9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> MotPanda </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=cc4801a72085433b95ab33a1f071aea9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        },
        'atractylodes': {
            name: '白术 Atractylodes Macrocephala',
            nature: '苦、甘，温',
            natureEng: 'Bitter, sweet, warm',
            meridian: '脾、胃经',
            meridianEng: 'Spleen, Stomach meridians',
            effect: '健脾益气，燥湿利水，止汗，安胎',
            effectEng: 'Strengthens the spleen and tonifies qi. Dries dampness and promotes urination. Stops excessive sweating. Stabilizes the fetus (prevents miscarriage)',
            description: '白术为菊科植物白术或北沙参的干燥根茎，主产于浙江、安徽、湖北等地。白术是常用的健脾药，具有很好的利水作用。<br>Atractylodes Macrocephala (白术, Atractylodis Macrocephalae Rhizoma) is the dried rhizome of Atractylodes macrocephala (Asteraceae family), primarily cultivated in Zhejiang, Anhui, Hubei and other regions. As a fundamental spleen-tonifying herb, it is particularly valued for its excellent dampness-resolving properties in Traditional Chinese Medicine.',
            usage: '内服：煎汤，6-12g；或研末，或浸酒，或入丸、散。<br>Internal use: Decoction, 6-12g; ground powder; wine-soaked; or prepared in pills/powder.',
            model: '<div class="sketchfab-embed-wrapper"> <iframe title="โกษฐ์เขมา" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/47747bbe0cf44c3db95df95f7ed45522/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/47747bbe0cf44c3db95df95f7ed45522?utm_medium=embed&utm_campaign=share-popup&utm_content=47747bbe0cf44c3db95df95f7ed45522" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> โกษฐ์เขมา </a> by <a href="https://sketchfab.com/rujirada?utm_medium=embed&utm_campaign=share-popup&utm_content=47747bbe0cf44c3db95df95f7ed45522" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> SCPHC </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=47747bbe0cf44c3db95df95f7ed45522" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
        }
    };

    cabinetDrawers.forEach(drawer => {
        drawer.addEventListener('click', function () {
            const herbId = this.getAttribute('data-herb');
            const herb = herbData[herbId];

            document.getElementById('herbName').textContent = herb.name;
            document.getElementById('herbNature').textContent = herb.nature;
            document.getElementById('herbNatureEng').textContent = herb.natureEng;
            document.getElementById('herbMeridian').textContent = herb.meridian;
            document.getElementById('herbMeridianEng').textContent = herb.meridianEng;
            document.getElementById('herbEffect').textContent = herb.effect;
            document.getElementById('herbEffectEng').textContent = herb.effectEng;
            document.getElementById('herbDescription').innerHTML = herb.description;
            document.getElementById('herbUsage').innerHTML = herb.usage;
            document.getElementById('herbImage').src = `pics/herbs/${herb.name.split(' ')[0]}.jpg`;
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
            name: '扁鹊 Bian Que',
            title: '中医医祖 The Founding Father of Traditional Chinese Medicine',
            period: '春秋战国时期 Spring and Autumn and Warring States Periods',
            bio: '扁鹊，姓秦名越，号扁鹊，是中国古代著名的医学家，被誉为"医祖"。他创立了"望、闻、问、切"四诊法，奠定了中医诊断学的基础。<br>Bian Que, originally named Qin Yue and styled Bian Que, was a renowned ancient Chinese physician honored as the "Founding Father of Medicine". He established the "Four Diagnostic Methods" (observation, auscultation & olfaction, inquiry, and palpation), laying the foundation for TCM diagnostics',
            contribution: '创立"望、闻、问、切"四诊法，开创了中医诊断学的先河。擅长脉诊，能够通过望诊断病，医术精湛。<br>Created the "Four Diagnostic Methods", pioneering TCM diagnostics. Expert in pulse diagnosis and visual assessment, demonstrating extraordinary medical skills.',
            works: `《扁鹊内经》、《扁鹊外经》等，但已失传。<br>"Bian Que's Internal Classic" and "Bian Que's External Classic", though both are lost.`,
            stories: '扁鹊"三见齐桓公"的故事广为流传，展现了他高超的医术和预防疾病的理念。据说他能透视人体，看到五脏六腑，被称为"神医"。The legend of "Bian Que Meeting Duke Huan of Qi Three Times" illustrates his exceptional skills and preventive medicine philosophy. Allegedly possessing X-ray vision to observe internal organs, he was revered as the "Divine Physician"'
        },
        'hua-tuo': {
            name: '华佗 Hua Tuo',
            title: '外科鼻祖 The Founder of Surgery',
            period: '东汉末年 Late Eastern Han Dynasty',
            bio: `华佗，字元化，是中国古代著名的医学家，被誉为"外科鼻祖"。他开创了麻醉术和外科手术，并创立了"五禽戏"养生法。<br>'Hua Tuo, styled Yuanhua, was a celebrated ancient Chinese physician known as the "Founding Father of Surgery". He pioneered anesthetic techniques and surgical operations, and created the "Five-Animal Exercises" for health preservation.`,
            contribution: `开创了"麻沸散"麻醉法，进行外科手术；创立"五禽戏"养生法；精通内、外、妇、儿各科。<br>Developed "Mafeisan" anesthesia for surgeries; created the "Five-Animal Exercises"; mastered internal medicine, surgery, gynecology, and pediatrics.`,
            works: '《华佗神医秘传》、《青囊经》等，但大部分已失传。<br>"Secret Medical Records of Divine Physician Hua Tuo" and "Green Bag Classic", mostly lost.',
            stories: `华佗为曹操治头痛的故事广为流传。他创立的"五禽戏"模仿虎、鹿、熊、猿、鸟五种动物的动作，对强身健体有很好的效果。<br>Famous for treating Cao Cao's headaches. His "Five-Animal Exercises" mimicking tiger, deer, bear, monkey, and bird movements remain effective for fitness.`
        },
        'zhang-zhongjing': {
            name: '张仲景 Zhang Zhongjing',
            title: '医圣 Sage of Medicine',
            period: '东汉末年 Late Eeastern Han Dynasty',
            bio: '张仲景，名机，字仲景，是中国古代著名的医学家，被誉为"医圣"。他总结了汉代以前的医学成就，创立了"辨证论治"的原则。<br>Zhang Zhongjing, named Ji and styled Zhongjing, was a distinguished ancient Chinese physician honored as the "Sage of Medicine". He synthesized pre-Han medical achievements and established the principle of "syndrome differentiation and treatment".',
            contribution: '创立了"辨证论治"原则；系统总结了六经辨证方法；创制了大量有效的方剂，如桂枝汤、麻黄汤等。',
            works: '《伤寒杂病论》，后世分为《伤寒论》和《金匮要略》两部分。<br>Formulated the "syndrome differentiation" principle; systematized Six-Meridian diagnosis; created effective formulas like Cinnamon Decoction and Ephedra Decoction.<br>"Treatise on Cold Damage and Miscellaneous Diseases", later divided into "Treatise on Cold Damage" and "Synopsis of the Golden Chamber".',
            stories: '张仲景目睹了东汉末年瘟疫流行，自己的家族也因病死亡了多人，这促使他潜心研究医术，著书立说，造福后世。<br>Witnessing epidemic devastation during the late Han that claimed many family members, he devoted himself to medical research and authored seminal works benefiting posterity.'
        },
        'sun-simiao': {
            name: '孙思邈 Sun Simiao',
            title: '药王 King of Medicines',
            period: '唐代 Tang Dynasty',
            bio: '孙思邈，字思邈，号药王，是中国古代著名的医学家和道士。他一生致力于医学研究和实践，对中医药学的发展有重大贡献。<br>Sun Simiao (581–682 CE), courtesy name Simiao and honorific title Yaowang (King of Medicines), was a renowned physician, alchemist, and Daoist master of ancient China. He devoted his life to medical research and practice, making unparalleled contributions to the development of traditional Chinese medicine (TCM).',
            contribution: '提出"大医精诚"的医德思想；总结了丰富的临床经验；系统整理了大量方剂；重视养生保健。<br>Medical Ethics: Proposed the principle of "Great Physicians with Sincerity and Excellence" (大医精诚), emphasizing compassion, humility, and rigorous scholarship.<br>Clinical Expertise: Systematized diagnostic and treatment protocols based on empirical observations.<br>Formulary Compilation: Preserved and expanded thousands of herbal prescriptions, many still used today.<br>Preventive Medicine: Pioneered health preservation (养生) techniques, integrating Daoist longevity practices with medical science.',
            works: '《备急千金要方》等。<br>《Beiji Qianjin Yaofang》 (Essential Formulas for Emergencies Worth a Thousand Gold) – A cornerstone of clinical TCM.',
            stories: '孙思邈提出"上医治国，中医治人，下医治病"的观点，强调预防疾病的重要性。他还提出了著名的"大医精诚"医德思想，对后世医学伦理产生了深远影响。<br>"Three Levels of Healing" (上医治国，中医治人，下医治病): "The finest physician treats the nation, the middling treats the individual, and the ordinary treats disease." Highlights his preventive, holistic approach, prioritizing societal health and lifestyle over reactive cure. <br>Enduring Influence: His "Great Physicians" ethos remains a gold standard for medical ethics in East Asia. Legends describe him healing dragons and deciphering herbal secrets through Daoist enlightenment.'
        },
        'li-shizhen': {
            name: '李时珍 Li Shizhen',
            title: '本草学家 The Sage of Herbal Medicine',
            period: '明代 Ming Dynasty',
            bio: `李时珍，字东璧，号濒湖，是中国明代著名的医学家和博物学家。他历时27年编撰了《本草纲目》，被誉为"东方医学巨典"。<br>Li Shizhen (1518–1593), courtesy name Dongbi and pseudonym Binhu, was a celebrated physician, pharmacologist, and naturalist of China's Ming Dynasty. His 27-year masterwork, 《Compendium of Materia Medica》(本草纲目), is revered as the "Encyclopedia of Eastern Medicine."`,
            contribution: '编撰《本草纲目》，系统整理了中国古代的本草学知识；改革了本草分类方法；亲自考察、实验，纠正了前人的错误。<br>《Bencao Gangmu》 (Compendium of Materia Medica): Systematized 1,892 medicinal substances (plants, animals, minerals) with 11,096 prescriptions. Introduced a revolutionary classification method by natural attributes (e.g., herbs, waters, fires), replacing outdated mythological groupings.<br>Empirical Rigor: Personally tested herbs (often risking poisoning), corrected 400+ historical errors (e.g., disproved "mermaid bones" as therapeutic).<br> Pulse Studies: Authored 《Binhu Maixue》 (Binhu’s Pulse Studies), refining diagnostic techniques.',
            works: '《本草纲目》、《濒湖脉学》、《奇经八脉考》等。<br>《Bencao Gangmu》 – The most comprehensive pre-modern pharmacopoeia globally.<br>《Qijing Bamai Kao》 (Studies on the Eight Extraordinary Meridians) – Advanced acupuncture theory.',
            stories: `李时珍为编撰《本草纲目》，亲自采药、尝药，多次冒险考察，历经艰辛。他的著作不仅是药学巨著，也是重要的博物学、文化学著作。<br>"A Lifelong Quest for Truth": Trekked mountains to verify herb properties (e.g., identified Datura's anesthetic effects by self-experimentation). Interviewed farmers, miners, and folk healers to document regional remedies.<br> Multidisciplinary Impact: His work bridges medicine, botany, zoology, and chemistry – Darwin cited it for silkworm studies. UNESCO Memory of the World Register listed Bencao Gangmu in 2011.`
        },
        'ge-hong': {
            name: '葛洪 Ge Hong',
            title: '东晋医学家 The Alchemist-Physician of the Eastern Jin Dynasty',
            period: '东晋时期 Eastern Jin Dynasty',
            bio: `葛洪，字稚川，号抱朴子，是东晋时期著名的医学家、道士和炼丹家。他在医学、炼丹术和道教理论方面都有重要贡献。<br>Ge Hong (283–343 CE), courtesy name Zhichuan and pseudonym Baopuzi ("Embrace-Simplicity Master"), was a polymathic physician, alchemist, and Daoist philosopher during China's Eastern Jin Dynasty. His work bridged medicine, chemistry, and spiritual cultivation, leaving an indelible mark on East Asian science. `,
            contribution: `著有《肘后备急方》，是中国最早的急救医学专著；记载了多种传染病的症状和治疗方法；在炼丹术和药物炮制方面有重要贡献。<br>1. 《Zhouhou Beiji Fang》 (Emergency Formulas to Keep Up One's Sleeve):     China’s earliest clinical manual for emergencies, detailing treatments for: Infectious diseases (e.g., malaria, smallpox) Trauma (snakebites, fractures) Recorded the world’s first use of qinghao (Artemisia annua) for malaria – a method validated by Nobel laureate Tu Youyou in 2015.<br>2. Pharmaceutical Innovations:  Advocated "Metals and minerals can become medicines; herbs can cure ailments" (金石可以成药，草木可以疗疾), pioneering mineral-based drugs (e.g., mercury compounds for skin diseases).  <br>3. Preventive Medicine: Integrated Daoist breathing techniques and herbal regimens for longevity. `,
            works: '《肘后备急方》、《抱朴子》等。<br>《Baopuzi》 (Master Who Embraces Simplicity) – Explores alchemy, cosmology, and ethics. <br>《Shenxian Zhuan》 (Biographies of Divine Immortals) – Documents Daoist transcendence practices. ',
            stories: '葛洪提出了"金石可以成药，草木可以疗疾"的观点，强调了矿物药和植物药的重要性。他还记载了世界上最早的疟疾治疗方法，使用含有青蒿素的青蒿治疗疟疾。<br>From Alchemy to Science: His mercury-sulfur experiments laid groundwork for early chemistry, though he warned against toxic elixirs. Designed stills for extracting herbal essences, ancestor to modern distillation.<br>Global Impact: His malaria treatment with qinghao inspired artemisinin-based therapies, saving millions. UNESCO lists his texts among world documentary heritage. <br>Modern Connections: "Daoist Pharmacy" principles influence natural product drug discovery. His infection-control methods (e.g., quarantine) predate Western epidemiology.'
        },
        'qian-yi': {
            name: '钱乙 Qian Yi',
            title: '儿科之圣 Sage of Pediatrics',
            period: '东晋时期 Eastern Jin Dynasty',
            bio: '钱乙，字仲阳，北宋郓州（今山东东平）人。幼年丧母，由姑父吕氏抚养并习医，专攻儿科，医术精湛。后因治愈长公主之女疾病，被荐入翰林医官院，官至太医丞。晚年归隐乡里，潜心著述。<br>Qian Yi (1032–1113 CE), courtesy name Zhongyang, was a renowned pediatrician of the Northern Song Dynasty. Born in Yunzhou (modern Dongping, Shandong), he lost his mother in childhood and was raised by his uncle, Lü, who trained him in medicine. His exceptional skills earned him recognition after curing the daughter of a princess, leading to his appointment as Chief Physician of the Imperial Medical Bureau. In his later years, he retired to his hometown to focus on writing.',
            contribution: '首次将儿科从内科中分离，系统论述小儿生理病理特点，提出“脏腑柔弱、易虚易实”理论，奠定中医儿科学基础。<br>Founder of TCM Pediatrics: Established pediatrics as an independent discipline from internal medicine. Proposed the theory of "Delicate Organs, Prone to Deficiency and Excess" (脏腑柔弱、易虚易实), explaining children’s unique physiological and pathological characteristics. <br>Clinical Innovations: Developed specialized diagnostic and treatment protocols for childhood diseases.<br>Herbal Formulations: Created pediatric-specific remedies, such as "Yellow Earth Decoction" (黄土汤) for convulsions.',
            works: '《小儿药证直诀》。<br>《Xiao’er Yaozheng Zhijue》 (Key to Therapeutics in Children’s Diseases) – The earliest systematic pediatric text in TCM, detailing syndromes, formulas, and case studies.',
            stories: '宋神宗皇子患惊厥，钱乙以“黄土汤”（伏龙肝为主药）治愈，解释为“土虚木亢，故风动”，需补土平木，彰显其辨证精妙。<br>"Earth Controls Wood" Case Study: When Emperor Shenzong’s son suffered convulsions (惊厥), Qian Yi prescribed "Yellow Earth Decoction" (with Fulonggan, furnace clay ash). His diagnosis: "Earth deficiency leads to Wood overaction, stirring wind" (土虚木亢，故风动). The treatment tonified the Spleen (Earth) to suppress Liver-Wood hyperactivity, showcasing his mastery of Five Elements theory.<br>Enduring Influence: His text remains a cornerstone of pediatric TCM, with modern adaptations for conditions like ADHD and digestive disorders.<br>Modern Relevance: His "tonify Earth to calm Wood" principle informs treatments for pediatric epilepsy and anxiety.Research validates Fulonggan’s mineral content for neurological regulation.'
        },
        'ye-gui': {
            name: '叶桂 Ye Gui',
            title: '天医星 Celestial Medical Star',
            period: '清代 Qing Dynasty',
            bio: '叶桂，字天士，号香岩，江苏吴县（今苏州）人。出身医学世家，幼承家学，后广拜名医，博采众长。行医足迹遍及江南，晚年隐居著述，门人整理其医案传世，成为清代最具影响力的临床医家之一。<br>Ye Gui (1667–1746), courtesy name Tianshi and pseudonym Xiangyan, was a preeminent clinical physician of the Qing Dynasty. Born into a medical family in Wuxian (modern Suzhou, Jiangsu), he mastered familial knowledge before apprenticing under 17 renowned doctors, synthesizing diverse schools of thought. Practicing across Jiangnan, his later years were devoted to writing, with disciples compiling his case studies into foundational medical texts.',
            contribution: '系统总结温病（外感热病）诊疗规律，创立“卫气营血”辨证纲领，提出“温邪上受，首先犯肺”等核心理论，革新外感病治疗体系。<br>Revolutionizing Warm Disease Theory (温病学): Established the "Defense-Qi-Nutrient-Blood" (卫气营血) diagnostic framework, categorizing febrile disease progression: Defensive Level (卫): Fever, aversion to cold → release exterior Qi Level (气): High fever, thirst → clear heat Nutrient Level (营): Night fever, delirium → cool blood Blood Level (血): Hemorrhage, convulsions → stop bleeding Proposed "Warm pathogens enter via the lungs" (温邪上受，首先犯肺), shifting treatment focus to early respiratory intervention. <br> Clinical Mastery: Refined pulse diagnosis and herbal combinations (e.g., Qinghao Biejia Tang for deficient heat).',
            works: '《温热论》、《临证指南医案》等。<br>《Wenre Lun》 (Treatise on Warm-Heat Diseases) – Core text for infectious disease theory.<br>《Linzheng Zhinan Yi’an》 (Clinical Guide Medical Records) – 80+ annotated cases demonstrating adaptive therapeutics.',
            stories: '传说叶桂与同代医家薛雪（号扫雪）因学术分歧互称“扫叶”“踏雪”，后叶桂以薛雪方治愈己病，二人冰释前嫌，传为医林佳话。<br>"Sweeping Leaves vs. Trampling Snow": Rivalry with physician Xue Xue (pseudonym Saoxue, "Snow Sweeper") led to mutual nicknames ("Leaf Sweeper" vs. "Snow Trampler").Reconciliation occurred when Ye cured himself using Xue’s formula, exemplifying scholarly humility.<br>Modern Applications: His heat-clearing protocols informed COVID-19 TCM treatments. The "Four Levels" theory parallels Western sepsis staging.'
        },
        'huangpu-mi': {
            name: '皇甫谧 Huangfu Mi',
            title: '针灸鼻祖 Originator of Acupuncture',
            period: '晋代 Jin Dynasty',
            bio: `皇甫谧，字士安，号玄晏先生，安定朝那（今宁夏固原）人。幼年家贫，勤学经史，博通百家，后因患风痹症而潜心医学。屡拒朝廷征召，终身未仕，专注著述与医学研究，是魏晋时期集文学、史学、医学成就于一身的大家。<br>Huangfu Mi (215–282 CE), courtesy name Shi'an and pseudonym Master Xuanyan, was a polymath of the Jin Dynasty born in Anding Chaona (modern Guyuan, Ningxia). Despite childhood poverty, he immersed himself in classics, history, and philosophy. After developing wind-damp paralysis (风痹), he turned to medicine, rejecting imperial appointments to dedicate his life to scholarship. His legacy bridges literature, historiography, and medical science`,
            contribution: '整理《素问》《针经》（即《灵枢》）等古籍，结合临床实践，编成《针灸甲乙经》，确立针灸学独立学科地位，系统归纳穴位、针法及适应症。<br>《Zhenjiu Jiayi Jing》 (Systematic Classic of Acupuncture and Moxibustion): Synthesized 《Huangdi Neijing》 (Yellow Emperor’s Inner Canon) texts into the first standalone acupuncture compendium, defining:349 acupuncture points (with locations and depths) Needling techniques (e.g., tonification vs. sedation) Clinical indications (from pain to internal disorders) Established meridian theory as a clinical framework. <br>Standardization: Resolved contradictions in ancient texts through empirical verification.',
            works: '《针灸甲乙经》等。<br> 《Jiayi Jing》 – Recognized by UNESCO as a world medical heritage text (2011).',
            stories: '少年时游荡无度，经叔母教诲后发奋读书，常“带经而农”（边种田边读书），因痴迷典籍被称“书淫”。<br>From Prodigal to Sage: In youth, he was aimless until his aunt’s admonition spurred him to study while farming ("carrying scrolls to the fields"), earning the nickname "Book Devourer" (书淫).<br>Enduring Influence: His point prescriptions remain foundational in TCM education (e.g., LI4 (Hegu) for pain). Modern fMRI studies confirm meridian activation per his descriptions.<br>Global Impact: WHO acupuncture guidelines reference his textual system."Scholar-Physician" model inspires integrative medicine movements.'
        },
    };

    doctorBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const doctorId = this.getAttribute('data-doctor');
            const doctor = doctorData[doctorId];

            document.getElementById('doctorDetailName').textContent = doctor.name;
            document.getElementById('doctorDetailTitle').textContent = doctor.title;
            document.getElementById('doctorDetailPeriod').textContent = doctor.period;
            document.getElementById('doctorDetailBio').innerHTML = doctor.bio;
            document.getElementById('doctorDetailContribution').innerHTML = doctor.contribution;
            document.getElementById('doctorDetailWorks').innerHTML = doctor.works;
            document.getElementById('doctorDetailStories').innerHTML = doctor.stories;
            document.getElementById('doctorDetailImage').src = `pics/300px/${doctor.name.split(' ')[0]}.png`;

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
            title: `《黄帝内经》 The compilation of The Yellow Emperor's Inner Canon`,
            author: '佚名 Anonymous',
            period: '春秋战国时期 Spring and Autumn and Warring States Periods',
            background: `《黄帝内经》是中国最早的医学典籍，成书于春秋战国时期，是黄帝与岐伯、雷公等人对话的形式记录的医学著作。它总结了先秦时期的医学理论和实践经验，奠定了中医理论体系的基础。<br>The Yellow Emperor's Inner Canon, the earliest medical classic in China, was compiled during the Spring and Autumn and Warring States Periods. Structured as dialogues between the Yellow Emperor and his advisors Qibo and Leigong, it synthesizes pre-Qin medical theories and practical wisdom, establishing the foundational framework of Traditional Chinese Medicine.`,
            content: '《黄帝内经》分为《素问》和《灵枢》两部分，共18卷，162篇。《素问》主要论述脏腑经络、病因病机、诊法、治则等基础理论；《灵枢》主要论述针灸、经络、腧穴等内容。<br>The canon comprises two parts: Suwen (Plain Questions) and Lingshu (Spiritual Pivot), totaling 18 volumes with 162 chapters. Suwen focuses on core theories including visceral systems, meridians, etiology, pathology, diagnostic methods, and therapeutic principles. Lingshu elaborates on acupuncture techniques, meridian networks, and acupoint applications.',
            value: `《黄帝内经》确立了中医的整体观念、阴阳五行学说、藏象学说、经络学说等基础理论，为中医学的发展奠定了坚实的基础。它是中医理论体系的奠基之作，对后世医学产生了深远的影响。<br>This seminal work established TCM's holistic philosophy, Yin-Yang and Five Elements theory, Zang-Fu organ theory, and meridian system. Serving as the cornerstone of TCM theoretical development, it profoundly shaped subsequent medical practices with its systematic approach to human health.`,
            influence: `《黄帝内经》是中医理论的源头，历代医家都以它为基础进行研究和发展。它不仅影响了中国医学的发展，也对东亚医学产生了重要影响，是世界医学史上的重要著作。<br>As the foundational text of TCM, The Yellow Emperor's Inner Canon has guided medical scholarship for millennia. Its influence extends beyond Chinese medicine, impacting East Asian healthcare traditions and securing its status as a monumental work in global medical history.`
        },
        'shanghan-zabinglun': {
            title: '《伤寒杂病论》 Treatise on Cold Damage and Miscellaneous Diseases',
            author: '张仲景 Zhang Zhongjing',
            period: '东汉末年 Late Eastern Han Dynasty',
            background: '《伤寒杂病论》是东汉末年张仲景所著，原书已佚。现存《伤寒论》和《金匮要略》是后人根据原书整理而成。张仲景目睹了东汉末年瘟疫流行，自己的家族也因病死亡了多人，这促使他潜心研究医术，著书立说。<br>Authored by Zhang Zhongjing during the late Eastern Han Dynasty, the original text is lost. Current extant versions "Treatise on Cold Damage" and "Synopsis of the Golden Chamber" were reconstructed by later scholars. Witnessing epidemic devastation that claimed many family members, Zhang dedicated himself to medical research and authored this seminal work.',
            content: '《伤寒论》主要论述外感病的诊断和治疗，创立了六经辨证体系；《金匮要略》主要论述内伤杂病的诊断和治疗。书中记载了大量有效的方剂，如桂枝汤、麻黄汤、白虎汤等。<br>"Treatise on Cold Damage" establishes the Six-Meridian diagnostic system for externally-contracted diseases. "Synopsis of the Golden Chamber" focuses on internal disorders. Contains effective formulas like Cinnamon Decoction, Ephedra Decoction, and White Tiger Decoction.',
            value: '《伤寒杂病论》确立了"辨证论治"的原则，创立了六经辨证的方法，系统总结了汉代以前的医学成就，为中医临床实践提供了重要指导。<br>Established the "syndrome differentiation and treatment" principle and Six-Meridian diagnosis methodology, systematically synthesizing pre-Han medical achievements to guide TCM clinical practice.',
            influence: '《伤寒杂病论》被誉为中医临床的奠基之作，对后世医学产生了深远的影响。历代医家都以它为基础进行研究和发展，形成了众多医学流派，如温病学派、伤寒学派等。<br>Hailed as the cornerstone of TCM clinical practice, it profoundly influenced later generations. Medical schools like Wenbing (Warm Diseases) and Shanghan (Cold Damage) evolved from its teachings.'
        },
        'bencao-gangmu': {
            title: '《本草纲目》 Compendium of Materia Medica',
            author: '李时珍 Li Shizhen',
            period: '明代 Ming Dynasty',
            background: '《本草纲目》是明代李时珍历时27年编撰而成，成书于1578年。李时珍为编撰此书，亲自采药、尝药，多次冒险考察，历经艰辛。<br>Compiled over 27 years and completed in 1578, Li Shizhen personally collected herbs, conducted pharmacological experiments, and undertook perilous expeditions to complete this monumental work.',
            content: '《本草纲目》共52卷，收载药物1892种，附图1109幅，记载药方11096个。书中对药物进行了系统分类，分为16部60类，每种药物都详细记载了名称、产地、性状、功效、用法等内容。<br> 52 volumes documenting 1,892 medicinal substances with 1,109 illustrations and 11,096 prescriptions. Classifies herbs into 16 categories with detailed entries on nomenclature, origin, properties, and applications.',
            value: '《本草纲目》是中国古代本草学的集大成者，系统总结了明代以前的药物学知识，纠正了前人的错误，增加了大量新药，改革了本草分类方法，为中药学的发展做出了重大贡献。<br>Culmination of traditional Chinese pharmacopeia, correcting previous errors and innovating classification methods. Added 374 new herbs, revolutionizing pharmaceutical studies.',
            influence: '《本草纲目》不仅是药学巨著，也是重要的博物学、文化学著作，被誉为"东方医学巨典"。它对中国和世界医药学的发展都产生了深远的影响，被翻译成多种文字在世界范围内传播。<br>Dubbed the "Oriental Medical Encyclopedia", it impacted global pharmacology. Translated into multiple languages, its botanical insights influenced Darwin\'s evolutionary studies.'
        },
        'qianjin-yaofang': {
            title: '《千金要方》 Essential Formulas Worth a Thousand Gold',
            author: '孙思邈 Sun Simiao',
            period: '唐代 Tang Dynasty',
            background: '《千金要方》是唐代孙思邈所著，成书于公元652年。孙思邈一生致力于医学研究和实践，晚年隐居终南山，潜心著述，完成了这部医学巨著。<br>Completed in 652 AD during Sun Simiao\'s retirement on Zhongnan Mountain, synthesizing lifelong medical research and clinical experience.',
            content: '《千金要方》共30卷，收载方剂5300余首，涵盖内、外、妇、儿、五官等各科疾病的诊断和治疗。书中还详细论述了养生、预防、针灸、食疗等内容。<br>30 volumes containing 5,300+ formulas covering internal medicine, surgery, gynecology, pediatrics, and ENT. Includes preventive medicine, acupuncture, and dietary therapy.',
            value: '《千金要方》是我国现存最早的医学百科全书，系统总结了唐代以前的医学成就，尤其在妇科、儿科方面有重要贡献。书中提出的"大医精诚"医德思想，对后世医学伦理产生了深远影响。<br>Earliest surviving medical encyclopedia, pioneering pediatric and gynecological treatments. Introduced medical ethics through "Virtues of Great Physicians".',
            influence: '《千金要方》对中国和东亚医学的发展都产生了重要影响，是中医学发展史上的重要著作。它与《本草纲目》、《伤寒论》并称为中医"三大经典"。<br>Recognized as one of TCM\'s "Three Great Classics" alongside Shennong Bencaojing and Shanghan Lun. Shaped East Asian medical systems through Joseon and Japanese adaptations.'
        },
        'nanjing': {
            title: '《难经》 Classic of Difficult Issues',
            author: '佚名 Anonymous',
            period: '战国至秦汉时期 Warring States to Qin-Han Period',
            background: '《难经》又称《黄帝八十一难经》，成书于战国至秦汉时期，作者不详。"难"指疑难问题，全书以问答形式解释《黄帝内经》中的难点和疑点。<br>Also known as "The Yellow Emperor\'s Eighty-One Difficulties", this Q&A-style text clarifies ambiguities in The Yellow Emperor\'s Inner Canon.',
            content: '《难经》共81篇，以问答形式论述了脏腑、经络、病机、诊法等中医基础理论，对《黄帝内经》中的难点和疑点进行了解释和阐发。<br>81 chapters elucidating visceral theory, meridian systems, and diagnostics through dialectical explanations of Huangdi Neijing concepts.',
            value: '《难经》是中医理论的重要补充，对《黄帝内经》进行了系统整理和发展，尤其在脉学、脏象学说方面有重要贡献。它是研究《黄帝内经》的重要参考。<br>Crucial supplement to Huangdi Neijing, particularly advancing pulse diagnosis and zangxiang (organ manifestation) theory.',
            influence: '《难经》与《黄帝内经》、《伤寒论》并称为中医"三大经典"，对后世医学产生了深远的影响。历代医家都重视对《难经》的研究和注释，形成了丰富的研究成果。<br>One of TCM\'s "Three Canonical Works", its commentaries formed essential study materials for imperial medical examinations.'
        },
        'shennong-bencaojing':{
            title: '《神农本草经》 Divine Farmer\'s Materia Medica',
            author: '佚名 Anonymous',
            period: '秦汉时期 Qin and Han Dynasty',
            background: '《神农本草经》成书于东汉时期（约公元1-2世纪），托名上古神农氏所著，实为历代医家集体智慧的结晶。汉代医学体系逐渐成熟，药物学知识积累日益丰富，此书在总结先秦至汉代药物经验的基础上编纂而成，是中国现存最早的药物学专著，奠定了中药学理论体系的基础。<br>Compiled during Eastern Han (1st-2nd century AD) as collective wisdom attributed to Shennong. Foundation of Chinese pharmacopeia, categorizing 365 herbs matching celestial cycles.',
            content: '收录药物365种（对应周天之数），按功效与毒性分为上、中、下三品。提出中药学核心理论，包括“四气五味”（寒热温凉、辛甘酸苦咸）、“七情和合”（单行、相须、相使、相畏、相杀、相恶、相反）等配伍原则。<br>Classifies herbs into three tiers by toxicity. Establishes core theories: Four Qi (cold/hot/warm/cool), Five Flavors (pungent/sweet/sour/bitter/salty), and Seven Compatibility Relations.',
            value: '确立中药学理论框架，首次系统总结药物功效、性味、配伍规律及毒性控制原则。所载药物疗效多经后世验证，如常山抗疟、麻黄平喘等至今仍具科学价值。<br>Validated herbal efficacy through millennia, e.g., Dichroa febrifuga for malaria. Introduced systematic toxicity management.',
            influence: '唐代《新修本草》、明代《本草纲目》均以其为蓝本增补发展。传入日本、朝鲜等地，成为东亚传统医学的共同经典，现代中医药教育仍将其列为必读典籍。<br>Basis for Tang\'s Newly Revised Materia Medica and Li Shizhen\'s Compendium. Remains required reading in TCM education globally.'
        },
        'zhouhou-beijifang':{
            title: '《肘后备急方》 Emergency Formulas to Keep Close at Hand',
            author: '葛洪 Ge Hong',
            period: '东晋 Eastern Jin Dynasty',
            background: '《肘后备急方》原名《肘后救卒方》，由东晋著名医药学家葛洪（约283-343年）编撰，后经南朝陶弘景增补为《补阙肘后百一方》，金代杨用道再度修订。书名“肘后”意指可随身携带的袖珍手册，旨在为基层医者与百姓提供简便、廉效的急救方案，是中国古代第一部系统总结急症救治的实用医学方书。<br>China\'s first emergency manual (c. 283-343 AD), later expanded by Tao Hongjing and Yang Yongdao. "Elbow" denotes portable size for grassroots practitioners.',
            content: '涵盖急性传染病（如疟疾、天花）、外伤、中毒、寄生虫病（如沙虱病/恙虫病）、急救（卒中、蛇咬）等急危重症。<br>Covers acute epidemics (smallpox, malaria), trauma, poisoning, and parasitic diseases. Details early-stage interventions and practical first-aid.',
            value: '开创中医急诊学体系，奠定“急症速效”治疗原则，强调早期干预与实用性。首次准确描述天花症状、恙虫病媒介（沙虱），比西方早千年提出疥虫致疥疮理论。<br>Pioneered emergency TCM with accurate disease descriptions: smallpox symptoms (500 years before Rhazes), mite-borne tsutsugamushi (1000 years ahead of West).',
            influence: '唐宋时期被列为医家必读，孙思邈《千金方》等后世医书大量引用其方。内容传入日本、朝鲜，被《医心方》等海外医籍收录，至今仍是研究古代急救与传染病防治的重要文献。<br>Cited in Sun Simiao\'s works and Japanese Ishinpō. Modern research confirms its artemisinin malaria treatment precedents.'
        },
        'zhenjiu-jiayijing':{
            title: '《针灸甲乙经》 Systematic Classic of Acupuncture and Moxibustion',
            author: '皇甫谧 Huangfu Mi',
            period: '西晋 Western Jin Dynasty',
            background: '《针灸甲乙经》全称《黄帝三部针灸甲乙经》，由西晋医学家皇甫谧（215-282年）编撰于3世纪后期。作者综合《素问》《针经》（即《灵枢》）和《明堂孔穴针灸治要》三部经典，结合自身实践系统整理而成，是中国现存最早的针灸学专著，标志着针灸学从理论到临床的体系化。<br>3rd-century synthesis of Huangdi Neijing texts, establishing acupuncture as independent discipline.',
            content: '系统阐述经络学说，明确十二经脉、奇经八脉的循行路线与生理功能。厘定349个穴位（单穴49个，双穴300个），按头、背、胸、四肢等部位分类，统一名称与定位。记载九针形制及用途，总结提插捻转等基本手法，明确禁针禁灸穴位。<br>Standardized 349 acupoints with anatomical classifications. Detailed needle techniques and contraindications.',
            value: '首次将针灸理论与临床实践系统整合，确立针灸学独立学科地位。统一穴位名称与定位，结束汉代以前腧穴记载混乱的局面，后世针灸典籍多以其为范本。开创“辨证-选穴-手法”完整治疗模式，至今仍是针灸临床的核心方法论。<br>Created "diagnosis-point selection-technique" clinical framework still used globally. Resolved pre-Han acupoint nomenclature chaos.',
            influence: '唐代列为太医署教材，宋代《铜人腧穴针灸图经》、明代《针灸大成》均在其基础上发展。公元7世纪传入朝鲜、日本，成为东亚针灸教育的标准教材，朝鲜《医方类聚》、日本《医心方》均引其内容。世界卫生组织（WHO）针灸穴位国际标准参考其定位，现代中医高等教育仍将其列为经典必修内容。<br>Basis for WHO acupuncture standards. Required in TCM curricula worldwide through Song Bronze Man models and Ming developments.'
        },
        'xiaoer-yaozhengzhijue':{
            title: '《小儿药证直诀》 Key to Pediatric Medicinal Syndromes',
            author: '钱乙 Qian Yi',
            period: '宋代 Song Dynasty',
            background: '《小儿药证直诀》由北宋儿科名医钱乙及其弟子阎孝忠整理编纂，成书于北宋宣和年间。钱乙被誉为“儿科之圣”，其学术思想源于《内经》《伤寒论》，结合临床实践系统总结儿科诊疗经验。本书是中国现存最早的儿科专著，标志着中医儿科学的独立发展。<br>First independent pediatrics text (Northern Song), earning Qian Yi the title "Sage of Pediatrics".',
            content: '系统论述小儿生理病理特点（如“脏腑柔弱，易虚易实”），专论痘疹、惊风、疳积等儿科常见病。强调望诊，提出“面上证”（面部色泽分区对应五脏）、“目内证”（目睛形态辨肝病）等儿科专属诊法。<br>Details child-specific diagnostics: facial color zoning (五脏面证) and ocular signs. Covers smallpox, convulsions, and malnutrition.',
            value: '确立中医儿科独立体系，系统提出小儿生理病理学说与诊疗规范，被后世尊为“儿科鼻祖”。六味地黄丸等名方经后世化裁，成为中医经典方剂，现代研究证实其对儿童发育障碍的调节作用。Developed Liùwèi Dìhuáng Wán (Six-Ingredient Rehmannia Pill), now used in neurodevelopmental disorders.',
            influence: '元代《活幼心书》、明代《幼科发挥》等均以其为范本，清代《医宗金鉴·幼科心法》直接引用其论述。内容传入朝鲜、日本，朝鲜《医方类聚》收录其方，现代中医儿科教育仍将其列为必读典籍。<br>Foundation for Yuan-Ming pediatric texts. Korean Uibang Yuchwi incorporated its formulas.'
        },
        'danxi-xinfa':{
            title: '《丹溪心法》 Danxi\'s Master Methods',
            author: '朱震亨 Zhu Zhenheng',
            period: '元代 Yuan Dynasty',
            background: '《丹溪心法》由元代著名医家朱震亨（字彦修，号丹溪）及其弟子整理编撰，成书于14世纪中叶。朱震亨为金元四大家之一，属“滋阴派”代表人物。本书以《内经》为理论根基，结合临床实践，系统阐述“阳常有余，阴常不足”学说，是金元医学革新思想的集大成之作，标志着中医滋阴学派理论体系的成熟。<br>14th-century pinnacle of Jin-Yuan medical innovation, representing Yin-Nourishing School among Four Great Masters.',
            content: '提出“阳有余阴不足论”“相火论”，强调人体阴精易耗、相火易妄动，主张“滋阴降火”为治病大法。倡导“滋阴降火”，慎用辛燥，创制大补阴丸、虎潜丸等经典方剂。<br>Proposes "Yang Often Excessive, Yin Frequently Deficient" theory. Created formulas like Dà Bǔ Yīn Wán (Great Yin Supplementation Pill).',
            value: '系统构建滋阴理论，纠正宋金时期滥用温燥之弊，为明清温病学派提供思想源头。以“气、血、痰、郁”为核心的内伤杂病辨治体系，极大丰富了中医内科诊疗维度。<br>Counteracted Song-era overuse of warm herbs, influencing Ming-Qing Warm Disease School.',
            influence: '与刘完素、张从正、李杲并称“金元四大家”，其学说直接影响明代张景岳、清代叶天士等医家。江户时代传入日本，被后世派汉方医家奉为经典，日本《丛桂亭医事小言》等著作多受其启发。<br>Shaped Japanese Kampo medicine. Zhu\'s "Qi-Blood-Phlegm-Stagnation" framework remains essential in internal medicine.'
        }

    };

    bookBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const bookId = this.getAttribute('data-book');
            const book = bookData[bookId];
            // console.log(book.background);
            document.getElementById('bookDetailTitle').textContent = book.title;
            document.getElementById('bookDetailAuthor').textContent = book.author;
            document.getElementById('bookDetailPeriod').textContent = book.period;
            document.getElementById('bookDetailBackground').innerHTML = book.background;
            document.getElementById('bookDetailContent').innerHTML = book.content;
            document.getElementById('bookDetailValue').innerHTML = book.value;
            document.getElementById('bookDetailInfluence').innerHTML = book.influence;
            document.getElementById('bookDetailImage').src = `pics/books/${book.title.replace(/[《》]/g, '').split(' ')[0]}.jpg`;

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




