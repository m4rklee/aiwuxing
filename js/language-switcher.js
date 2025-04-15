// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 默认语言为中文
    let currentLang = localStorage.getItem('language') || 'zh';
    
    // 创建语言切换器并添加到导航栏
    function createLanguageSwitcher() {
        const nav = document.querySelector('nav ul');
        if (!nav) return;
        
        // 创建语言切换容器
        const langSwitcher = document.createElement('li');
        langSwitcher.className = 'lang-switcher';
        
        // 创建语言选择按钮
        const zhBtn = document.createElement('a');
        zhBtn.href = '#';
        zhBtn.textContent = '中';
        zhBtn.className = currentLang === 'zh' ? 'active' : '';
        zhBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('zh');
        });
        
        const separator = document.createTextNode(' | ');
        
        const enBtn = document.createElement('a');
        enBtn.href = '#';
        enBtn.textContent = 'EN';
        enBtn.className = currentLang === 'en' ? 'active' : '';
        enBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('en');
        });
        
        // 添加到导航栏
        langSwitcher.appendChild(zhBtn);
        langSwitcher.appendChild(separator);
        langSwitcher.appendChild(enBtn);
        nav.appendChild(langSwitcher);
    }
    
    // 切换语言
    function switchLanguage(lang) {
        if (lang === currentLang) return;
        
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // 更新语言切换按钮状态
        const zhBtn = document.querySelector('.lang-switcher a:first-child');
        const enBtn = document.querySelector('.lang-switcher a:last-child');
        if (zhBtn && enBtn) {
            zhBtn.className = lang === 'zh' ? 'active' : '';
            enBtn.className = lang === 'en' ? 'active' : '';
        }
        
        // 翻译页面
        translatePage();
    }
    
    // 翻译页面内容
    function translatePage() {
        // 翻译导航栏
        translateNavigation();
        
        // 根据当前页面路径翻译不同页面内容
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            translateHomePage();
        } else if (window.location.pathname.includes('microcourses.html') || window.location.pathname.includes('course-detail.html')) {
            translateMicrocoursesPage();
        } else if (window.location.pathname.includes('knowledge.html')) {
            translateKnowledgePage();
        } else if (window.location.pathname.includes('ailishizhen.html')) {
            translateAILiShizhenPage();
        } else if (window.location.pathname.includes('games.html') || window.location.pathname.includes('game-detail.html')) {
            translateGamesPage();
        } else if (window.location.pathname.includes('forum.html')) {
            translateForumPage();
        }
        
        // 翻译页脚（所有页面通用）
        translateFooter();
    }
    
    // 翻译导航栏
    function translateNavigation() {
        const navItems = [
            { selector: 'nav ul li:nth-child(1) a', key: 'nav_home' },
            { selector: 'nav ul li:nth-child(2) a', key: 'nav_courses' },
            { selector: 'nav ul li:nth-child(3) a', key: 'nav_knowledge' },
            { selector: 'nav ul li:nth-child(4) a', key: 'nav_ai' },
            { selector: 'nav ul li:nth-child(5) a', key: 'nav_games' },
            { selector: 'nav ul li:nth-child(6) a', key: 'nav_forum' }
        ];
        
        navItems.forEach(item => {
            const element = document.querySelector(item.selector);
            if (element) {
                // 保留图标
                const icon = element.querySelector('i');
                if (icon) {
                    element.innerHTML = '';
                    element.appendChild(icon);
                    element.appendChild(document.createTextNode(' ' + translations[item.key][currentLang]));
                } else {
                    element.textContent = translations[item.key][currentLang];
                }
            }
        });
    }
    
    // 翻译首页内容
    function translateHomePage() {
        // 翻译轮播图
        const heroSlides = [
            {
                titleSelector: '.slide:nth-child(1) .slide-content h1',
                descSelector: '.slide:nth-child(1) .slide-content p',
                btnLearnSelector: '.slide:nth-child(1) .hero-buttons a:first-child',
                btnExploreSelector: '.slide:nth-child(1) .hero-buttons a:last-child',
                titleKey: 'hero_title_1',
                descKey: 'hero_desc_1',
                btnLearnKey: 'hero_btn_learn',
                btnExploreKey: 'hero_btn_explore'
            },
            {
                titleSelector: '.slide:nth-child(2) .slide-content h1',
                descSelector: '.slide:nth-child(2) .slide-content p',
                btnLearnSelector: '.slide:nth-child(2) .hero-buttons a:first-child',
                btnExploreSelector: '.slide:nth-child(2) .hero-buttons a:last-child',
                titleKey: 'hero_title_2',
                descKey: 'hero_desc_2',
                btnLearnKey: 'hero_btn_start',
                btnExploreKey: 'hero_btn_explore'
            },
            {
                titleSelector: '.slide:nth-child(3) .slide-content h1',
                descSelector: '.slide:nth-child(3) .slide-content p',
                btnLearnSelector: '.slide:nth-child(3) .hero-buttons a:first-child',
                btnExploreSelector: '.slide:nth-child(3) .hero-buttons a:last-child',
                titleKey: 'hero_title_3',
                descKey: 'hero_desc_3',
                btnLearnKey: 'hero_btn_play',
                btnExploreKey: 'hero_btn_explore'
            },
            {
                titleSelector: '.slide:nth-child(4) .slide-content h1',
                descSelector: '.slide:nth-child(4) .slide-content p',
                btnLearnSelector: '.slide:nth-child(4) .hero-buttons a:first-child',
                btnExploreSelector: '.slide:nth-child(4) .hero-buttons a:last-child',
                titleKey: 'hero_title_4',
                descKey: 'hero_desc_4',
                btnLearnKey: 'hero_btn_dialog',
                btnExploreKey: 'hero_btn_explore'
            },
            {
                titleSelector: '.slide:nth-child(5) .slide-content h1',
                descSelector: '.slide:nth-child(5) .slide-content p',
                btnLearnSelector: '.slide:nth-child(5) .hero-buttons a:first-child',
                btnExploreSelector: '.slide:nth-child(5) .hero-buttons a:last-child',
                titleKey: 'hero_title_5',
                descKey: 'hero_desc_5',
                btnLearnKey: 'hero_btn_share',
                btnExploreKey: 'hero_btn_explore'
            }
        ];
        
        heroSlides.forEach(slide => {
            translateElement(slide.titleSelector, slide.titleKey);
            translateElement(slide.descSelector, slide.descKey);
            translateElement(slide.btnLearnSelector, slide.btnLearnKey);
            translateElement(slide.btnExploreSelector, slide.btnExploreKey);
        });
        
        // 翻译特色功能
        translateElement('#features .section-header h2', 'features_title');
        translateElement('#features .section-header p', 'features_desc');
        
        const features = [
            {
                titleSelector: '.feature-card:nth-child(3) h3',
                descSelector: '.feature-card:nth-child(3) p',
                btnSelector: '.feature-card:nth-child(3) .feature-link',
                titleKey: 'feature_ai_title',
                descKey: 'feature_ai_desc',
                btnKey: 'btn_start_chat'
            },
            {
                titleSelector: '.feature-card:nth-child(2) h3',
                descSelector: '.feature-card:nth-child(2) p',
                btnSelector: '.feature-card:nth-child(2) .feature-link',
                titleKey: 'feature_knowledge_title',
                descKey: 'feature_knowledge_desc',
                btnKey: 'btn_more'
            },
            {
                titleSelector: '.feature-card:nth-child(1) h3',
                descSelector: '.feature-card:nth-child(1) p',
                btnSelector: '.feature-card:nth-child(1) .feature-link',
                titleKey: 'feature_courses_title',
                descKey: 'feature_courses_desc',
                btnKey: 'btn_more'
            },
            {
                titleSelector: '.feature-card:nth-child(4) h3',
                descSelector: '.feature-card:nth-child(4) p',
                btnSelector: '.feature-card:nth-child(4) .feature-link',
                titleKey: 'feature_games_title',
                descKey: 'feature_games_desc',
                btnKey: 'btn_more'
            },
            {
                titleSelector: '.feature-card:nth-child(5) h3',
                descSelector: '.feature-card:nth-child(5) p',
                btnSelector: '.feature-card:nth-child(5) .feature-link',
                titleKey: 'feature_community_title',
                descKey: 'feature_community_desc',
                btnKey: 'btn_more'
            }
        ];
        
        features.forEach(feature => {
            translateElement(feature.titleSelector, feature.titleKey);
            translateElement(feature.descSelector, feature.descKey);
            
            // 翻译按钮文本但保留图标
            const btnElement = document.querySelector(feature.btnSelector);
            if (btnElement) {
                const icon = btnElement.querySelector('i');
                if (icon) {
                    btnElement.innerHTML = translations[feature.btnKey][currentLang] + ' ';
                    btnElement.appendChild(icon);
                } else {
                    btnElement.textContent = translations[feature.btnKey][currentLang];
                }
            }
        });
        
        // 翻译最新课程
        translateElement('#latest-courses .section-header h2', 'latest_courses_title');
        translateElement('#latest-courses .section-header p', 'latest_courses_desc');
        
        // 翻译具体课程
        // translateMicrocoursesPage();

        // 翻译课程按钮
        document.querySelectorAll('#latest-courses .btn-outline').forEach(btn => {
            btn.textContent = translations['btn_view_course'][currentLang];
        });
        
        // 翻译查看全部课程按钮
        translateElement('#latest-courses .text-center .btn-primary', 'btn_view_all');
        
        // 翻译热门游戏
        translateElement('#popular-games .section-header h2', 'popular_games_title');
        translateElement('#popular-games .section-header p', 'popular_games_desc');
        
        // 翻译游戏难度
        // document.querySelectorAll('.game-difficulty').forEach(element => {
        //     for (const node of element.childNodes){
                
        //         if (node.nodeType === Node.TEXT_NODE){                    
        //             // 中译英
        //             if (node.textContent.includes('难度')) {
        //                 node.textContent = node.textContent.replace('难度', translations['game_difficulty'][currentLang])
        //             }else{
        //                 // 英译中
        //                 node.textContent = node.textContent.replace('Difficulty', translations['game_difficulty'][currentLang])
    
        //             }
        //         }
        //     }    
        // });
        
        // 翻译游戏按钮
        document.querySelectorAll('#popular-games .btn-outline').forEach(btn => {
            if (btn.textContent.includes('开始游戏') || btn.textContent.includes('Game')) {
                btn.textContent = translations['btn_play_game'][currentLang];
            } else if (btn.textContent.includes('敬请期待') || btn.textContent.includes('Soon')) {
                btn.textContent = translations['btn_coming_soon'][currentLang];
            }
        });
        
        // 翻译具体游戏
        // translateGamesPage();

        // 翻译查看全部游戏按钮
        translateElement('#popular-games .text-center .btn-primary', 'btn_view_all_games');
        
        // 翻译用户评价
        translateElement('#testimonials .section-header h2', 'testimonials_title');
        translateElement('#testimonials .section-header p', 'testimonials_desc');
    }
    
    // 翻译知识科普页面
    function translateKnowledgePage() {
        // 翻译标题
        const titleTranslations = ['herbs_title', 'meridians_title', 'wuxing_title', 'tcm_history_title', 'diagnosis_title', 'masters_title']
        document.querySelectorAll('.section-header h2').forEach((title, i) => {
            translateTitle(title, titleTranslations[i])
        })

        // 翻译中医发展史
        // translateElement('#history .section-header h2', 'tcm_history_title');
        translateElement('#history .section-header p', 'tcm_history_desc');
        translateElement('.tab-btn[data-tab="origin"]', 'tab_origin');
        translateElement('.tab-btn[data-tab="development"]', 'tab_development');
        translateElement('.tab-btn[data-tab="culture"]', 'tab_culture');
        
        // 翻译中药材库
        // translateElement('#herbs .section-header h2', 'herbs_title');
        translateElement('#herbs .section-header p', 'herbs_desc');
        
        // 翻译人体五脏
        // translateElement('#meridians .section-header h2', 'meridians_title');
        translateElement('#meridians .section-header p', 'meridians_desc');
        
        // 翻译诊疗方法
        // translateElement('#diagnosis .section-header h2', 'diagnosis_title');
        translateElement('#diagnosis .section-header p', 'diagnosis_desc');
        
        // 翻译五行知识
        // translateElement('#knowledge .section-header h2', 'wuxing_title');
        translateElement('#knowledge .section-header p', 'wuxing_desc');
        translateElement('.tab-btn[data-tab="five-elements"]', 'tab_five_elements');
        translateElement('.tab-btn[data-tab="five-music"]', 'tab_music');
        translateElement('.tab-btn[data-tab="five-tastes"]', 'tab_taste');
        translateElement('.tab-btn[data-tab="five-personality"]', 'tab_personality');

        // 翻译tabs内容
        // 中医起源
        translateElement('#origin h3', 'origin_title');
        translateElement('#origin h4:nth-of-type(1)', 'ancient_times_title');
        translateElement('#origin p:nth-of-type(1)', 'ancient_times_desc');
        translateElement('#origin h4:nth-of-type(2)', 'shang_zhou_title');
        translateElement('#origin p:nth-of-type(2)', 'shang_zhou_desc');
        translateElement('#origin h4:nth-of-type(3)', 'spring_autumn_title');
        translateElement('#origin p:nth-of-type(3)', 'spring_autumn_desc');
        
        // 中医发展
        translateElement('#development h3', 'development_title');
        translateElement('#development .timeline-item:nth-of-type(1) h4', 'qin_han_title');
        translateElement('#development .timeline-item:nth-of-type(1) p', 'qin_han_desc');
        translateElement('#development .timeline-item:nth-of-type(2) h4', 'three_kingdoms_title');
        translateElement('#development .timeline-item:nth-of-type(2) p', 'three_kingdoms_desc');
        translateElement('#development .timeline-item:nth-of-type(3) h4', 'sui_tang_title');
        translateElement('#development .timeline-item:nth-of-type(3) p', 'sui_tang_desc');
        translateElement('#development .timeline-item:nth-of-type(4) h4', 'song_yuan_title');
        translateElement('#development .timeline-item:nth-of-type(4) p', 'song_yuan_desc');
        translateElement('#development .timeline-item:nth-of-type(5) h4', 'ming_qing_title');
        translateElement('#development .timeline-item:nth-of-type(5) p', 'ming_qing_desc');
        
        // 文化内涵
        translateElement('#culture h3', 'culture_title');
        translateElement('#culture .culture-item:nth-of-type(1) h4', 'holistic_concept_title');
        translateElement('#culture .culture-item:nth-of-type(1) p', 'holistic_concept_desc');
        translateElement('#culture .culture-item:nth-of-type(2) h4', 'syndrome_differentiation_title');
        translateElement('#culture .culture-item:nth-of-type(2) p', 'syndrome_differentiation_desc');
        translateElement('#culture .culture-item:nth-of-type(3) h4', 'yin_yang_five_elements_title');
        translateElement('#culture .culture-item:nth-of-type(3) p', 'yin_yang_five_elements_desc');
        translateElement('#culture .culture-item:nth-of-type(4) h4', 'prevention_first_title');
        translateElement('#culture .culture-item:nth-of-type(4) p', 'prevention_first_desc');
        
        // 翻译中药材库抽屉
        document.querySelectorAll('.cabinet-drawer').forEach(drawer => {
            const herbKey = drawer.getAttribute('data-herb');
            if (herbKey && translations['herb_' + herbKey]) {
                const span = drawer.querySelector('span');
                if (span) {
                    span.textContent = translations['herb_' + herbKey][currentLang];
                }
            }
        });
        
        // 翻译药材详情弹出层
        translateElement('#herbModal .herb-details p:nth-of-type(1) strong', 'herb_nature');
        translateElement('#herbModal .herb-details p:nth-of-type(2) strong', 'herb_meridian');
        translateElement('#herbModal .herb-details p:nth-of-type(3) strong', 'herb_effect');
        translateElement('#herbModal .herb-description h4', 'herb_description_title');
        translateElement('#herbModal .herb-usage h4', 'herb_usage_title');
        translateElement('#herbModal .herb-model h4', 'herb_model_title');
        
        // 翻译四诊法卡片
        translateElement('.method-card:nth-of-type(1) h4', 'inspection_title');
        translateElement('.method-card:nth-of-type(1) > p', 'inspection_desc');
        translateElement('.method-card:nth-of-type(2) h4', 'auscultation_title');
        translateElement('.method-card:nth-of-type(2) > p', 'auscultation_desc');
        translateElement('.method-card:nth-of-type(3) h4', 'inquiry_title');
        translateElement('.method-card:nth-of-type(3) > p', 'inquiry_desc');
        translateElement('.method-card:nth-of-type(4) h4', 'pulse_taking_title');
        translateElement('.method-card:nth-of-type(4) > p', 'pulse_taking_desc');

        // 翻译治疗方法卡片
        translateElement('.treatment-item:nth-of-type(1) h4', 'bianzheng_title');
        translateElement('.treatment-item:nth-of-type(1) > p', 'bianzheng_desc');
        translateElement('.treatment-item:nth-of-type(2) h4', 'bagang_title');
        translateElement('.treatment-item:nth-of-type(2) > p', 'bagang_desc');
        translateElement('.treatment-item:nth-of-type(3) h4', 'zhongyao_title');
        translateElement('.treatment-item:nth-of-type(3) > p', 'zhongyao_desc');
        translateElement('.treatment-item:nth-of-type(4) h4', 'zhenjiu_title');
        translateElement('.treatment-item:nth-of-type(4) > p', 'zhenjiu_desc');
        translateElement('.treatment-item:nth-of-type(5) h4', 'tuina_title');
        translateElement('.treatment-item:nth-of-type(5) > p', 'tuina_desc');
        translateElement('.treatment-item:nth-of-type(6) h4', 'shiliao_title');
        translateElement('.treatment-item:nth-of-type(6) > p', 'shiliao_desc');
        translateElement('.treatment-item:nth-of-type(7) h4', 'qigong_title');
        translateElement('.treatment-item:nth-of-type(7) > p', 'qigong_desc');
        

        // 翻译五行知识内容
        // 五行学说
        // 五行学说与身心调节
        translateElement('#knowledge h3:nth-of-type(1)', 'wuxing_theory_title');
        translateElement('#five-elements > p', 'wuxing_theory_desc')

        // 五行学说的起源与核心思想
        translateElement('#knowledge h4:nth-of-type(1)', 'wuxing_origin_title');
        translateElement('#knowledge .knowledge-section p:nth-of-type(1)', 'wuxing_origin_desc');
        
        translateElement('.wood h5', 'mu_title');
        translateElement('.wood p', 'mu_desc');

        translateElement('.fire h5', 'huo_title');
        translateElement('.fire p', 'huo_desc');

        translateElement('.earth h5', 'tu_title');
        translateElement('.earth p', 'tu_desc');

        translateElement('.metal h5', 'jin_title');
        translateElement('.metal p', 'jin_desc');

        translateElement('.water h5', 'shui_title');
        translateElement('.water p', 'shui_desc');

        // 五行生克——动态平衡的宇宙观
        translateElement('#five-elements > div:nth-child(4) > h4', 'wuxing_relationship');
        translateElement('#five-elements > div:nth-child(4) > p', 'wuxing_relationship_desc');
        translateElement('#five-elements > div:nth-child(4) > div.five-cycles > div:nth-child(1) > h5', 'wuxing_xiangsheng_title');
        translateElement('#five-elements > div:nth-child(4) > div.five-cycles > div:nth-child(2) > h5', 'wuxing_xiangke_title');
        
        translateElement('#five-elements > div:nth-child(4) > div.balance-theory > h5', 'theory_of_balance_title');
        translateElement('#five-elements > div:nth-child(4) > div.balance-theory > p', 'theory_of_balance_desc');
        
        // 五音疗法
        translateElement('#five-music > h3', 'wuyin_title');
        translateElement('#five-music > p', 'wuyin_title_desc');
        translateElement('#five-music .knowledge-section p:nth-of-type(1)', 'wuyin_desc');
        // 五音的表格
        // 标题
        translateElementsByClass('music-therapy-table tr th', 'wuyin_table_title_');
        // 第二栏
        translateElementsByClass('music-therapy-table tr td:nth-of-type(2)', 'wuyin_wuxing_');
        // 第三栏
        translateElementsByClass('music-therapy-table tr td:nth-of-type(3)', 'wuyin_organ_');
        // 第四栏
        translateElementsByClass('music-therapy-table tr td:nth-of-type(4)', 'wuyin_char_');
        // 第五栏
        translateElementsByClass('music-therapy-table tr td:nth-of-type(5)', 'wuyin_effect_');
        // 五音科学小贴士
        const tip_title = document.querySelector('#five-music > div > div.science-tip > h5');
        translateTitle(tip_title, 'wuyin_tips_title');
        const tip_desc = document.querySelector('#five-music > div > div.science-tip > p');
        tip_desc.innerHTML = translations['wuyin_tips_desc'][currentLang];

        // 五行音乐疗愈仓
        translateElement('#five-music > div > div.music-therapy-player > h5', 'wuxing_music_therapy_cell_title');
        translateElementsByClass('music-player p', 'wuxing_music_therapy_cell_desc_')

        // 五味title
        translateElement('#five-tastes h3:nth-of-type(1)', 'wuwei_title');
        translateElement('#five-tastes > p', 'wuwei_title_desc');
        
        
        // 五味起源发展
        translateElement('#five-tastes .knowledge-section h4:nth-of-type(1)', 'wuwei_origin_title');
        translateElement('#five-tastes .knowledge-section p:nth-of-type(1)', 'wuwei_origin_desc');
        
        // 核心学说
        translateElement('#five-tastes > div:nth-child(3) > div > h5', 'wuwei_core_theory');
        translateElementsByClass('classic-quotes blockquote', 'wuwei_core_theory_');

        // 五味大讲堂
        translateElement('#five-tastes > div:nth-child(4) > h4', 'wuwei_lecture_title');
        
        // 五行-五味-五脏对应关系
        translateElement('#five-tastes > div:nth-child(4) > div.tastes-table > h5', 'wuxing-wuwei-organ_title');
        // 关系表
        // 标题
        translateElementsByClass('tastes-table tr th', 'wuwei_table_title_');
        // 第一栏
        translateElementsByClass('tastes-table tr td:nth-of-type(1)', 'wuyin_wuxing_');
        // 第二栏
        translateElementsByClass('tastes-table tr td:nth-of-type(2)', 'wuwei_');
        // 第三栏
        translateElementsByClass('tastes-table tr td:nth-of-type(3)', 'wuwei_organ_');
        // 第四栏
        translateElementsByClass('tastes-table tr td:nth-of-type(4)', 'wuwei_food_');
        // 第五栏
        translateElementsByClass('tastes-table tr td:nth-of-type(5)', 'wuwei_effect_');
        // 第六栏
        translateElementsByClass('tastes-table tr td:nth-of-type(6)', 'wuwei_disease_');

        // 五味作用的生理病理机制
        translateElement('#five-tastes > div:nth-child(4) > div.taste-mechanism > h5', 'wuwei_disease_title');
        // 卡片的标题
        translateElementsByClass('mechanism-card h6', 'wuwei_disease_card_title_');
        // 单独的一个p
        translateElement('#five-tastes > div:nth-child(4) > div.taste-mechanism > div > div:nth-child(1) > p', 'wuwei_disease_card_p');
        // 多个 li
        translateElementsByClass('mechanism-card ul li', 'wuwei_disease_card_li_');
        
        // 趣味冷知识
        translateElement('#five-tastes > div:nth-child(4) > div.fun-facts > h5', 'wuwei_fun_tips_title');
        // 冷知识内容
        translateElementsByClass('fact-item p', 'wuwei_fun_tips_');

        // 五行人格
        // 理论渊源与经典文献
        translateElement('#five-personality .knowledge-section h4:nth-of-type(1)', 'wuren_origin_title');
        translateElement('#five-personality .knowledge-section p:nth-of-type(1)', 'wuren_origin_desc1');
        translateElement('#five-personality .knowledge-section p:nth-of-type(2)', 'wuren_origin_desc2');
        // translateElement('#knowledge p:nth-of-type(3)', 'spring_autumn_desc');
        // 五行人格的分类与特征
        translateElement('#knowledge h4:nth-of-type(3)', 'spring_autumn_title');
        translateElement('#knowledge p:nth-of-type(3)', 'spring_autumn_desc');
        // 五行人格测算方法
        translateElement('#knowledge h4:nth-of-type(3)', 'spring_autumn_title');
        translateElement('#knowledge p:nth-of-type(3)', 'spring_autumn_desc');

        // 翻译名医名篇
        // translateElement('#masters h2', 'masters_title');
        translateElement('.tab-btn[data-tab="famous-doctors"]', 'tab_famous_doctors');
        translateElement('.tab-btn[data-tab="famous-books"]', 'tab_famouse_books');

        // 翻译名医卡片内容
        translateElementsByClass('doctor-card h3', 'doctor_names_')
        translateElementsByClass('doctor-card .doctor-title', 'doctor_titles_')
        translateElementsByClass('doctor-card p:not(.doctor-title)', 'doctor_info_')
        
        // 名篇
        translateElementsByClass('book-info h3', 'classics_names_')
        translateElementsByClass('book-info .book-author', 'classics_author_')
        translateElementsByClass('book-info .book-period', 'classics_period_')
        translateElementsByClass('book-info .book-info', 'classics_info_')

        // 了解更多
        const btn_mores = document.querySelectorAll('.btn-more').forEach(btn => {
            btn.textContent = translations['btn_more'][currentLang];
            // translateElement(btn, 'btn_more');
        })
    }
    
    // 翻译标题，保留符号
    function translateTitle(title, translation){
        for (const node of title.childNodes){
            if(node.nodeType === Node.TEXT_NODE){
                node.textContent = translations[translation][currentLang];
            }
        }
    }

    // 翻译微课页面
    function translateMicrocoursesPage() {
        // 翻译页面标题和描述
        // 标题只翻译文本内容
        const title_1 = document.querySelectorAll('.section-header')[0];
        const title_1_title = title_1.childNodes[1];
        translateTitle(title_1_title, 'courses_title')
        // for (const node of title_1_title.childNodes){
        //     if(node.nodeType === Node.TEXT_NODE){
        //         node.textContent = translations['courses_title'][currentLang];
        //     }
        // }
        // translateElement('.section-header:nth-of-type(1) h2', 'courses_title');
        translateElement('.section-header p', 'courses_desc');

        const title_2 = document.querySelectorAll('.section-header')[1];
        const title_2_title = title_2.childNodes[1];
        translateTitle(title_2_title, 'ai_tcm_title');
        // translateElement('.section-header:nth-of-type(3) h2', 'ai_tcm_title');
        
        // 翻译课程卡片内容
        translateElementsByClass('course-card h3', 'course_title_');
        translateElementsByClass('course-card p', 'course_desc_');
        translateElementsByClass('course-card .btn', 'btn_view_course');
        
        // 翻译时间
        document.querySelectorAll('.course-duration').forEach(time => {
            // const content = time.textContent;
            // const clock = time.children[0];
            // console.log(clock)

            // 只替换文本节点部分
            for (const node of time.childNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    // 中译英
                    if (node.textContent.includes('分钟')){
                        node.textContent = node.textContent.replace('分钟', translations['course_duration'][currentLang]);
                    }
                    if (node.textContent.includes('秒')){
                        node.textContent = node.textContent.replace('秒', translations['course_duration_seconds'][currentLang]);
                    }
                    // 英译中
                    if (node.textContent.includes('min')){
                        node.textContent = node.textContent.replace('min', translations['course_duration'][currentLang]);
                    }
                    if (node.textContent.includes('seconds')){
                        node.textContent = node.textContent.replace('seconds', translations['course_duration_seconds'][currentLang]);
                    }
                }
            }
            // 中译英
            // if (content.includes('分钟')){
            //     time.textContent = content.replace('分钟', translations['course_duration'][currentLang]);
            // }
            // if (content.includes('秒')){
            //     time.textContent = time.textContent.replace('秒', translations['course_duration_seconds'][currentLang]);
            // }
            
            // // 英译中
            // if (content.includes('min')){
            //     time.textContent = time.textContent.replace('min', translations['course_duration'][currentLang]);
            // }
            // if (content.includes('seconds')){
            //     time.textContent = time.textContent.replace('seconds', translations['course_duration_seconds'][currentLang]);
            // }
            
        });

        // 翻译课程按钮
        document.querySelectorAll('.course-card .btn-more').forEach(btn => {
            btn.textContent = translations['btn_start_learning'][currentLang];
        });
        
    }
    
    // 翻译游戏页面
    function translateGamesPage() {
        // 翻译页面标题和描述
        const title = document.querySelector('.section-header h2');
        translateTitle(title, 'games_title')
        // translateElement('.section-header h2', 'games_title');
        translateElement('.section-header p', 'games_desc');
        
        // 翻译游戏卡片内容
        translateElementsByClass('game-card h3', 'game_title_');
        translateElementsByClass('game-card p', 'game_desc_');
        translateElementsByClass('game-card .btn', 'btn_play_game');

        // 翻译游戏难度
        document.querySelectorAll('.game-difficulty').forEach(element => {
            for (const node of element.childNodes){
                
                if (node.nodeType === Node.TEXT_NODE){                    
                    // 中译英
                    if (node.textContent.includes('难度')) {
                        node.textContent = node.textContent.replace('难度', translations['game_difficulty'][currentLang])
                    }else{
                        // 英译中
                        node.textContent = node.textContent.replace('Difficulty', translations['game_difficulty'][currentLang])
    
                    }
                }
            }    
        });

        // 翻译按钮
        document.querySelectorAll('.btn-more').forEach(btn => {
            if (btn.textContent.includes('开始游戏') || btn.textContent.includes('Game')) {
                btn.textContent = translations['btn_play_game'][currentLang];
            } else if (btn.textContent.includes('敬请期待') || btn.textContent.includes('Soon')) {
                btn.textContent = translations['btn_coming_soon'][currentLang];
            }
        });
    }
    
    // 翻译AI李时珍页面
    function translateAILiShizhenPage() {

        // 翻译页面标题和描述
        translateElement('.ai-hero-content h1', 'ai_title');
        translateElement('.ai-hero-content p', 'ai_desc');
        translateElement('.ai-hero-content .btn-primary', 'btn_start_chat');
        translateElement('.ai-hero-content .btn-secondary', 'btn_learn_features');
        
        // 翻译功能部分
        translateElement('#ai-features .section-header h2', 'ai_features_title');
        translateElement('#ai-features .section-header p', 'ai_features_desc');
        
        // 翻译AI功能卡片
        translateElementsByClass('feature-content h3', 'ai_feature_title_');
        translateElementsByClass('feature-content p', 'ai_feature_desc_');

        // 翻译与李时珍对话标题和描述
        translateElement('#ai-chat .section-header h2', 'ai_chat_title');
        translateElement('#ai-chat .section-header p', 'ai_chat_desc');
        
        // 翻译使用指南标题和描述
        translateElement('#ai-guide .section-header h2', 'ai_guides_title');
        translateElement('#ai-guide .section-header p', 'ai_guides_desc');
        
        // 翻译使用指南卡片
        translateElementsByClass('guide-content h3', 'ai_guide_title_');
        translateElementsByClass('guide-content p', 'ai_guide_desc_');
    }
    
    // 翻译论坛页面
    function translateForumPage() {
        // 翻译页面标题和描述
        const title = document.querySelector('.section-header h2');
        translateTitle(title, 'forum_title')
        // translateElement('.section-header h2', 'forum_title');
        translateElement('.section-header p', 'forum_desc');
        
        // 翻译论坛导航
        translateElement('.tab-btn[data-tab="personality"]', 'forum_tab_personality');
        translateElement('.tab-btn[data-tab="creative"]', 'forum_tab_creative');
        translateElement('.tab-btn[data-tab="cultural"]', 'forum_tab_cultural');
        translateElement('.tab-btn[data-tab="tags"]', 'forum_tab_tags');
        
        // 翻译论坛内容
        translateElementsByClass('forum-post-title', 'forum_post_title_');
        translateElementsByClass('forum-post-content', 'forum_post_content_');
        translateElement('.forum-action-btn.reply', 'btn_reply');
        translateElement('.forum-action-btn.like', 'btn_like');
    }
    
    // 通过类名批量翻译元素
    function translateElementsByClass(className, keyPrefix) {
        document.querySelectorAll(`.${className}`).forEach((element, index) => {
            const key = `${keyPrefix}${index + 1}`;
            if (translations[key]) {
                element.textContent = translations[key][currentLang];
            }
        });
    }
    
    // 翻译页脚
    function translateFooter() {
        translateElement('.footer-logo p', 'footer_desc');
        translateElement('.footer-links:nth-child(2) h4', 'footer_quick_links');
        translateElement('.footer-links:nth-child(3) h4', 'footer_resources');
        translateElement('.footer-bottom p', 'footer_copyright');
        
        // 翻译快速链接
        const quickLinks = [
            { selector: '.footer-links:nth-child(2) ul li:nth-child(1) a', key: 'nav_home' },
            { selector: '.footer-links:nth-child(2) ul li:nth-child(2) a', key: 'nav_courses' },
            { selector: '.footer-links:nth-child(2) ul li:nth-child(3) a', key: 'nav_knowledge' },
            { selector: '.footer-links:nth-child(2) ul li:nth-child(4) a', key: 'nav_ai' },
            { selector: '.footer-links:nth-child(2) ul li:nth-child(5) a', key: 'nav_games' },
            { selector: '.footer-links:nth-child(2) ul li:nth-child(6) a', key: 'nav_forum' }
        ];
        
        quickLinks.forEach(link => {
            translateElement(link.selector, link.key);
        });

        // 翻译学习资源
        translateElementsByClass('footer-links:nth-of-type(3) ul li a', 'learning_resources_');
    }
    
    // 通用翻译元素函数
    function translateElement(selector, translationKey) {
        const element = document.querySelector(selector);
        if (element && translations[translationKey]) {
            element.textContent = translations[translationKey][currentLang];
        }
    }
    
    // 翻译字典
    const translations = {
        
        // 导航栏
        'nav_home': {
            'zh': '首页',
            'en': 'Home'
        },
        'nav_courses': {
            'zh': '智课星链',
            'en': 'Courses'
        },
        'nav_knowledge': {
            'zh': '智识中医',
            'en': 'Knowledge'
        },
        'nav_games': {
            'zh': '五行智弈',
            'en': 'Games'
        },
        'nav_ai': {
            'zh': '时珍智脑',
            'en': 'AI Li Shizhen'
        },
        'nav_forum': {
            'zh': '智联杏林',
            'en': 'Community'
        },
        
        // 微课页面标题
        'courses_title': {
            'zh': '智课星链',
            'en': 'Courses'
        },
        'courses_desc': {
            'zh': '中医知识锦囊',
            'en': 'Treasure Trove of TCM'
        },

        'ai_tcm_title': {
            'zh': 'AI朋友说中医',
            'en': 'AI Health Coach Introduces TCM'
        },
        
        // 微课内容
        'course_title_1': {
            'zh': '一分钟了解五行相生',
            'en': 'One Minute Guide to the Five-Element Mutual Generation (Wuxing Theory)'
        },
        'course_desc_1': {
            'zh': '解析木、火、土、金、水五种元素间"相互滋生"的关系',
            'en': 'Analysis of the "mutual generation" relationship between the five elements: wood, fire, earth, metal, and water.'
        },
        'course_title_2': {
            'zh': '一分钟了解五行相克',
            'en': 'One-Minute Guide to the Five-Element Restraining Cycle (Wuxing Theory)'
        },
        'course_desc_2': {
            'zh': '说明五行之间“相互制约”的规律，如水克火、火克金，维持动态平衡的哲学内涵',
            'en': 'Restraining Law of Five Elements: eg. Water controls Fire, Fire melts Metal – The Philosophy of Dynamic Balance.'
        },
        'course_title_3': {
            'zh': '五行音乐疗法',
            'en': 'Five-Element Music Therapy'
        },
        'course_desc_3': {
            'zh': '结合五行理论，用角、徵、宫、商、羽五音对应木火土金水，通过特定音律调节身心能量',
            'en': 'A traditional healing modality that aligns the Jue (角), Zhi (徵), Gong (宫), Shang (商), and Yu (羽) pentatonic tones with Wood, Fire, Earth, Metal, and Water elements respectively. This therapeutic approach uses specific musical frequencies to harmonize mind-body energy according to TCM principles.'
        },
        'course_title_4': {
            'zh': '中医与人体',
            'en': 'TCM and the Human Body'
        },
        'course_desc_4': {
            'zh': '探讨五行学说在中医中的应用，如五脏（肝心脾肺肾）与五行的对应关系及生理功能联动',
            'en': 'This section explores the Application of Five-Element Theory in TCM, examining how the Wood, Fire, Earth, Metal, and Water elements correspond to the Five Organs (liver, heart, spleen, lungs, and kidneys) and their interconnected physiological functions.'
        },
        'course_title_5': {
            'zh': '五行学说简介',
            'en': 'Introduction to the Five-Element Theory'
        },
        'course_desc_5': {
            'zh': '概述五行理论的核心概念及应用领域',
            'en': 'This section provides an overview of the core concepts and applications of the Five-Element Theory.'
        },
        'course_title_6': {
            'zh': '假如五行人格会说话',
            'en': 'If the Five-Element Personalities Could Speak'
        },
        'course_desc_6': {
            'zh': '了解阳木和阴木人格的特点及适合的职业发展方向',
            'en': 'Understanding Yang Wood & Yin Wood Traits with Career Guidance.'
        },
        'course_title_7': {
            'zh': '五脏与五味的对应',
            'en': 'Five Organs & Five Flavors'
        },
        'course_desc_7': {
            'zh': '李时珍教你五脏与五味的对应。',
            'en': "Li Shizhen's guide to correspondences between The Five Organs and their healing flavors."
        },

        // 微课按钮
        'btn_start_learning': {
            'zh': '开始学习',
            'en': 'Start Learning'
        },
        
        // 首页轮播图
        'hero_title_1': {
            'zh': '智识中医',
            'en': 'Inheriting Thousand Years of TCM Wisdom'
        },
        'hero_desc_1': {
            'zh': '探索中华医学的深厚底蕴，感受传统智慧的力量',
            'en': 'Explore the profound heritage of Chinese medicine and feel the power of traditional wisdom'
        },
        'hero_btn_learn': {
            'zh': '了解中医文化',
            'en': 'Learn TCM Culture'
        },
        'hero_btn_explore': {
            'zh': '探索功能',
            'en': 'Explore Features'
        },
        'hero_title_2': {
            'zh': '智课星链',
            'en': 'TCM Micro Courses'
        },
        'hero_desc_2': {
            'zh': '轻松有趣的微课程，让您随时随地学习中医知识',
            'en': 'Fun and easy micro-courses for learning TCM anytime, anywhere'
        },
        'hero_btn_start': {
            'zh': '开始学习',
            'en': 'Start Learning'
        },
        'hero_title_3': {
            'zh': '五行智弈',
            'en': 'TCM Interactive Games'
        },
        'hero_desc_3': {
            'zh': '寓教于乐，通过有趣的游戏体验中医文化的魅力',
            'en': 'Learn through play, experience the charm of TCM culture through fun games'
        },
        'hero_btn_play': {
            'zh': '开始游戏',
            'en': 'Start Playing'
        },
        'hero_title_4': {
            'zh': '时珍智脑',
            'en': 'AI Li Shizhen'
        },
        'hero_desc_4': {
            'zh': '中医跨越千载，对话AI李时珍学习中医知识',
            'en': 'Traditional Chinese Medicine spans millennia. Engage in dialogue with AI Li Shizhen to learn TCM knowledge.'
        },
        'hero_btn_dialog': {
            'zh': '开始对话',
            'en': 'Start Dialogue'
        },
        'hero_title_5': {
            'zh': '智联杏林',
            'en': 'TCM Community'
        },
        'hero_desc_5': {
            'zh': '智慧社区分享空间，与国内外友人共学中医',
            'en': 'Smart Community Sharing Space: Learn Traditional Chinese Medicine with Friends from Home and Abroad.'
        },
        'hero_btn_share': {
            'zh': '开始分享',
            'en': 'Start Sharing'
        },
        
        // 特色功能
        'features_title': {
            'zh': '平台特色',
            'en': 'Platform Features'
        },
        'features_desc': {
            'zh': '多元化的中医文化学习体验',
            'en': 'Diverse TCM cultural learning experience'
        },
        'feature_courses_title': {
            'zh': '智课星链',
            'en': 'TCM Micro Courses'
        },
        'feature_courses_desc': {
            'zh': 'AI生成式系列微课，精选优质中医课程，短小精悍，深入浅出，让您轻松掌握中医知识。',
            'en': 'Selected quality TCM courses, concise and easy to understand, helping you master TCM knowledge effortlessly.'
        },
        'feature_knowledge_title': {
            'zh': '智识中医',
            'en': 'TCM Knowledge'
        },
        'feature_knowledge_desc': {
            'zh': '系统全面的中医基础知识，包括中医发展史、中药材库、人体五脏、诊疗方法、名医名篇等。',
            'en': 'Comprehensive TCM basic knowledge, including TCM history, herbal database, five organs, diagnostic methods, famous doctors and classics.'
        },
        'feature_ai_title': {
            'zh': '时珍智脑',
            'en': 'AI Li Shizhen'
        },
        'feature_ai_desc': {
            'zh': '与明代医药学家李时珍智能对话，探索中医药文化的奥秘，获取专业的中医知识指导。',
            'en': 'Intelligent dialogue with Ming Dynasty medical scientist Li Shizhen, explore the mysteries of TCM culture, and get professional TCM knowledge guidance.'
        },
        'feature_games_title': {
            'zh': '五行智弈',
            'en': 'Interactive Games'
        },
        'feature_games_desc': {
            'zh': '寓教于乐的中医主题游戏，边玩边学，增强记忆，提高学习兴趣。',
            'en': 'Educational TCM-themed games, learn while playing, enhance memory, and increase learning interest.'
        },
        'feature_community_title': {
            'zh': '智联杏林',
            'en': 'Community Sharing'
        },
        'feature_community_desc': {
            'zh': '与志同道合的中医爱好者交流经验，分享心得，共同进步。',
            'en': 'Exchange experiences with like-minded TCM enthusiasts, share insights, and progress together.'
        },
        'btn_more': {
            'zh': '了解更多',
            'en': 'Learn More'
        },
        'btn_start_chat': {
            'zh': '开始对话',
            'en': 'Start Chat'
        },
        
        // 最新课程
        'latest_courses_title': {
            'zh': '智课星链',
            'en': 'Latest Courses'
        },
        'latest_courses_desc': {
            'zh': 'AI生成式系列微课，随时随地学习',
            'en': 'Selected quality TCM micro-courses, learn anytime, anywhere'
        },
        'course_duration': {
            'zh': '分钟',
            'en': 'min'
        },
        'course_duration_seconds': {
            'zh': '秒',
            'en': 'seconds'
        },
        'btn_view_course': {
            'zh': '查看课程',
            'en': 'View Course'
        },
        'btn_view_all': {
            'zh': '查看全部课程',
            'en': 'View All Courses'
        },
        
        // 热门游戏
        'popular_games_title': {
            'zh': '五行智弈',
            'en': 'Popular Interactive Games'
        },
        'popular_games_desc': {
            'zh': '寓教于乐，边玩边学中医知识',
            'en': 'Learn while playing TCM knowledge'
        },
        'game_difficulty': {
            'zh': '难度',
            'en': 'Difficulty'
        },
        'btn_play_game': {
            'zh': '开始游戏',
            'en': 'Play Game'
        },
        'btn_coming_soon': {
            'zh': '敬请期待',
            'en': 'Coming Soon'
        },
        'btn_view_all_games': {
            'zh': '查看全部游戏',
            'en': 'View All Games'
        },
        
        // 用户评价
        'testimonials_title': {
            'zh': '用户评价',
            'en': 'Testimonials'
        },
        'testimonials_desc': {
            'zh': '听听用户怎么说',
            'en': 'What our users say'
        },
        
        // 中医发展史
        'tcm_history_title': {
            'zh': '中医发展史',
            'en': 'TCM History'
        },
        'tcm_history_desc': {
            'zh': '传承千年的中医文化历程',
            'en': 'Thousand years of TCM cultural journey'
        },

        // 中医文化起源 tab
        'tab_origin': {
            'zh': '中医文化起源',
            'en': 'TCM Origin'
        },

        'origin_title': {
            'zh': '中医起源',
            'en': 'TCM Origin'
        },

        'ancient_times_title': {
            'zh': '远古时期',
            'en': 'Ancient Times'
        },

        'ancient_times_desc': {
            'zh': '中医的起源可以追溯到远古时期，当时的先民在与自然和疾病的斗争中，逐渐积累了一些医疗经验和知识。例如，神农尝百草，伏羲制九针等传说，反映了中医的起源与古代人民的生活密切相关。',
            'en': "The origins of Traditional Chinese Medicine (TCM) can be traced back to remote antiquity, when early ancestors gradually accumulated medical experience and knowledge through their struggles with nature and diseases. Legends such as Shennong tasting hundreds of herbs and Fuxi creating the nine needles reflect how TCM's beginnings were deeply intertwined with ancient people's daily lives."
        },

        'shang_zhou_title': {
            'zh': '商周时期',
            'en': 'Shang & Zhou Dynasties'
        },

        'shang_zhou_desc': {
            'zh': '甲骨文中已有许多病症名称的记载，同时开始有除虫、洗澡、洗脸等卫生知识。《周礼》中记载了食医、疾医、疡医及兽医等医事制度。',
            'en': "Oracle bone inscriptions already recorded numerous disease names, while basic hygiene practices like pest control, bathing, and face-washing emerged. Rites of Zhou documented early medical systems, including dietary physicians, disease physicians, surgeon-dermatologist and veterinarians."
        },

        'spring_autumn_title': {
            'zh': '春秋战国时期',
            'en': 'Spring and Autumn & Warring States Period'
        },

        'spring_autumn_desc': {
            'zh': '扁鹊创立"望、闻、问、切"四诊法，奠定了中医诊断学的基础。《黄帝内经》的成书标志着中医理论体系的初步形成。',
            'en': `Bian Que established the "Four Diagnostic Methods" (inspection, auscultation, inquiry, pulse-taking), laying the foundation for TCM diagnostics. The compilation of The Yellow Emperor's Inner Canon marked the preliminary formation of TCM's theoretical framework.`
        },

        // 历史发展 tab
        'tab_development': {
            'zh': '历史发展',
            'en': 'Historical Development'
        },
        // 'development_title': {
        //     'zh': '历史发展',
        //     'en': '历史发展'
        // },

        'tab_culture': {
            'zh': '文化内涵',
            'en': 'Cultural Connotation'
        },
        
        // 中药材库
        'herbs_title': {
            'zh': '中药材库',
            'en': 'Herbal Database'
        },
        'herbs_desc': {
            'zh': '探索传统中药的神奇力量',
            'en': 'Explore the magical power of traditional Chinese herbs'
        },

        // 药材抽屉翻译
        'herb_ginseng': {
            'zh': '人参',
            'en': 'Ginseng'
        },
        
        'herb_astragalus': {
            'zh': '黄芪',
            'en': 'Astragalus Root'
        },

        'herb_angelica': {
            'zh': '当归',
            'en': 'Chinese Angelica'
        },

        'herb_licorice': {
            'zh': '甘草',
            'en': 'Liquorice/Licorice Root'
        },

        'herb_cinnamon': {
            'zh': '肉桂',
            'en': 'Cinnamon Bark'
        },

        'herb_ginger': {
            'zh': '生姜',
            'en': 'Ginger'
        },

        'herb_rhubarb': {
            'zh': '大黄',
            'en': 'Rhubarb Root'
        },

        'herb_peony': {
            'zh': '芍药',
            'en': 'Peony Root'
        },

        'herb_chrysanthemum': {
            'zh': '菊花',
            'en': 'Chrysanthemum Flower/Kikuka'
        },

        'herb_wolfberry': {
            'zh': '枸杞',
            'en': 'Wolfberry'
        },

        'herb_poria': {
            'zh': '茯苓',
            'en': 'Poria Cocos'
        },

        'herb_atractylodes': {
            'zh': '白术',
            'en': 'Atractylodes Macrocephala'
        },

        // 药材详情页
        // 'herb_nature': {
        //     'zh': ,
        //     'en': ''
        // },

        // 人体五脏
        'meridians_title': {
            'zh': '人体五脏',
            'en': 'Five Organs'
        },
        'maridians_desc': {
            'zh': '探索人体的神秘地图',
            'en': 'Exploring the Mysterious Map of the Human Body'
        },
        'meridian_info_title': {
            'zh': '五行与脏腑对应',
            'en': 'Five Elements and Their Corresponding Organs'
        },
        'meridian_info_desc': {
            'zh': '点击人体图上的脏腑，了解相关脏腑的五行属性和中医文化内涵。',
            'en': 'Click on the Five Organs in the body diagram to learn about their Five Elements attributes and TCM cultural significance.'
        },
        'meridian_click_desc': {
            'zh': '请点击左侧人体图上的穴位查看详情',
            'en': 'Please select an organ on the left-side body diagram to view details.'
        },


        // 五行知识
        'wuxing_title': {
            'zh': '五行知识',
            'en': 'The Theory of Five Elements'
        },

        'wuxing_desc': {
            'zh': '传统中医文化的智慧精髓',
            'en': '传统中医文化的智慧精髓'
        },

        // 五行元素 tab
        'tab_five_elements': {
            'zh': '五行学说',
            'en': 'Five-Element Theory'
        },
        
        'wuxing_theory_title': {
            'zh': '五行学说与身心调节',
            'en': 'The Five-Element Theory and Mind-Body Regulation'
        },

        'wuxing_theory_desc': {
            'zh': '中国传统哲学的身心平衡之道',
            'en': 'The Ancient Chinese Philosophy of Holistic Balance'
        },

        'wuxing_origin_title': {
            'zh': '五行学说的起源与核心思想',
            'en': 'Origins and Core Principles of the Five-Element Theory'
        },

        'wuxing_origin_desc': {
            'zh': '五行学说是中国古代哲学的核心理论之一，源于对自然现象的观察与抽象总结。最早见于《尚书·洪范》，成熟于战国时期。古人通过观察自然界的物质属性与变化规律，提炼出"金、木、水、火、土"五种基本元素，认为万物皆由这五类物质构成，并通过"相生相克"等关系构建了一套解释宇宙运行、自然规律及人体健康的理论体系。',
            'en': "Five-Element Theory (Wuxing) stands as one of the foundational doctrines of classical Chinese philosophy, originating from systematic observation and abstraction of natural phenomena. First documented in Book of Documents·Hong Fan and maturing during the Warring States period, this theory emerged from ancient scholars' contemplation of material properties and transformational patterns in nature. By distilling the essence of cosmic operations into five fundamental elements—Metal, Wood, Water, Fire, and Earth—the theory posits that all phenomena manifest through these categorical substances. Through dynamic interactions like mutual generation (相生) and restraint (相克), it constructs a comprehensive framework explaining cosmic order, natural laws, and human health—bridging macrocosm and microcosm in a unified system of correspondences."
        },

        'mu_title': {
            'zh': '木（生长之机）',
            'en': 'Wood (The Vitality of Growth)'
        },
        'mu_desc': {
            'zh': '象征生长、升发、条达，对应春季、东方、青色，在人体中关联肝脏与胆腑。如《黄帝内经》言："木曰曲直"，指木能屈能伸，如草木破土而出，寓意生命力与适应力。',
            'en': `Symbolizing growth, ascending, and unobstructed expansion, it corresponds to spring season, the eastern direction, and the color cyan/blue-green. In the human body, it governs the liver organ and gallbladder腑. As stated in The Yellow Emperor's Inner Classic: "Wood is said to bend and straighten" — referring to wood's flexible yet resilient nature, like young plants breaking through soil, embodying vitality and adaptability.`
        },
        'huo_title': {
            'zh': '火（热情之光）',
            'en': 'Fire (The Radiance of Passion)'
        },
        'huo_desc': {
            'zh': '代表温热、上升、光明，对应夏季、南方、红色，关联心脏与小肠。如《黄帝内经》言："火曰炎上"描述火焰向上燃烧的特性，象征热情与活力。',
            'en': `Symbolizing warmth, ascent, and radiance, it corresponds to summer, the southern direction, and the color red, governing the heart organ and small intestine in the human body. As articulated in The Yellow Emperor's Inner Classic: "Fire is said to flare upward" — capturing fire's inherent upward-surging nature, embodying passion and vitality.`
        },
        'tu_title': {
            'zh': '土（包容之母）',
            'en': 'Earth (The Embracing Mother)'
        },
        'tu_desc': {
            'zh': '象征承载、生化、稳定，对应长夏（夏秋之交）、中央、黄色，关联脾胃。如《黄帝内经》言："土爰稼穑"指土地孕育万物，如农耕依赖土壤，强调包容与滋养。',
            'en': `Symbolizing containment, transformation, and stability, it corresponds to late summer (the seasonal transition between summer and autumn), the central direction, and the color yellow, governing the spleen and stomach system in the human body. As elucidated in The Yellow Emperor's Inner Classic: "Earth is said to sow and reap" — signifying the soil's role in nurturing all life, much like agriculture depends on fertile land, emphasizing receptiveness and nourishment.`
        },
        'jin_title':{
            'zh': '金（变革之力）',
            'en': 'Metal (The Power of Transformation)'
        },
        'jin_desc': {
            'zh': '代表收敛、变革、肃杀，对应秋季、西方、白色，关联肺脏与大肠。如《黄帝内经》言："金曰从革"意为金属可锻造变革，象征决断与秩序。',
            'en': `Symbolizing astringency, transformation, and purging austerity, it corresponds to autumn, the western direction, and the color white, governing the lung organ and large intestine in human physiology. As articulated in The Yellow Emperor's Inner Classic: "Metal is said to obey and reform" — denoting metal's malleable yet defining quality, embodying decisiveness and systemic order.`
        },
        'shui_title':{
            'zh': '水（智慧之源）',
            'en': 'Water (The Source of Wisdom)'
        },
        'shui_desc': {
            'zh': '象征寒凉、流动、润下，对应冬季、北方、黑色，关联肾脏与膀胱。如《黄帝内经》言："水曰润下"指水向下渗透，如江河奔流，寓意柔韧与智慧。',
            'en': `Symbolizing coldness, fluidity, and downward nourishment, it corresponds to winter, the northern direction, and the color black, governing the kidney organ and bladder in human physiology. As proclaimed in The Yellow Emperor's Inner Classic: "Water is said to moisten and descend" — epitomizing water's permeating downward movement, like rivers flowing seaward, embodying resilience and primordial wisdom.`
        },

        'wuxing_relationship': {
            'zh': '五行生克——动态平衡的宇宙观',
            'en': `The Five Elements' Generation and Restraint — A Cosmology of Dynamic Balance`
        },

        'wuxing_relationship_desc': {
            'zh': '五行通过"相生"与"相克"形成循环，维持自然与人体系统的动态平衡，不仅是物质的分类，更体现动态平衡的宇宙观。',
            'en': 'The Five Elements (Wood, Fire, Earth, Metal, Water) achieve cyclical harmony through: Generative Cycle (相生, Xiāngshēng) and Restraining Cycle (相克, Xiāngkè). This interplay sustains dynamic equilibrium in both nature and the human body, transcending mere material classification to embody a profound cosmological principle of perpetual motion and balance.'
        },

        'wuxing_xiangsheng_title': {
            'zh': '相生关系',
            'en': 'Generative Cycle'
        },

        'wuxing_xiangke_title': {
            'zh': '相克关系',
            'en': 'Restraining Cycle'
        },

        // 平衡之道
        'theory_of_balance_title': {
            'zh': '平衡之道',
            'en': 'The Dao of Balance: Dynamic Equilibrium in the Five Elements'
        },

        'theory_of_balance_desc': {
            'zh': '五行生克并非对立，而是相互制约与依存。例如，木过旺会克土，但土生金又能克木，形成自我调节机制。中医借此解释人体病理：肝火过旺（木亢）可能影响脾胃（土虚），需通过调理肺（金）或肾（水）恢复平衡。',
            'en': `The generative (相生) and restraining (相克) cycles of the Five Elements do not represent opposition, but rather mutual regulation and interdependence. For example: 1.Excess Wood overacting on Earth: Overgrown trees deplete soil, but Earth's subsequent production of Metal (e.g., tools) can prune Wood, creating a self-correcting loop. 2.Medical Application in TCM: A patient with Liver-fire overabundance (木亢, manifesting as irritability) may develop Spleen deficiency (土虚, causing poor digestion). Treatment follows the cycle: (1) Strengthen Metal (Lung/colon function) to restrain Wood. (2) Nourish Water (Kidneys) to support Wood's healthy growth.`
        },

        // 五音疗法 tab
        'tab_music': {
            'zh': '五音疗法',
            'en': 'Five-Tone Therapy'
        },

        'wuyin_title': {
            'zh': '五音疗法',
            'en': 'Five-Tone Therapy'
        },

        'wuyin_title_desc': {
            'zh': '音乐调节身心的智慧',
            'en': 'The Wisdom of Harmonizing Body and Mind Through Music'
        },

        'wuyin_desc': {
            'zh': '古代将五声音阶（角、徵、宫、商、羽）与五行、五脏对应，发展出"五行音乐疗法"，认为特定音调可调节气血与情绪。',
            'en': 'In ancient China, the pentatonic scale (Jue, Zhi, Gong, Shang, Yu) was systematically correlated with the Five Elements and corresponding organs, giving rise to the development of "Five-Element Music Therapy." This therapeutic approach posits that specific musical tones can regulate qi-blood flow and emotional states through their resonant properties.'
        },

        'wuyin_table_title_1': {
            'zh': '五音',
            'en': 'Five-Tone'
        },

        'wuyin_table_title_2': {
            'zh': '五行',
            'en': 'Five Elements'
        },

        'wuyin_table_title_3': {
            'zh': '对应脏腑',
            'en': 'Corresponding Organs'
        },

        'wuyin_table_title_4': {
            'zh': '音乐特点',
            'en': 'Musical Characteristics'
        },

        'wuyin_table_title_5': {
            'zh': '身心作用',
            'en': 'Physiological & Psychological Effects'
        },

        'wuyin_wuxing_1': {
            'zh': '木',
            'en': 'Wood'
        },

        'wuyin_wuxing_2': {
            'zh': '火',
            'en': 'Fire'
        },

        'wuyin_wuxing_3': {
            'zh': '土',
            'en': 'Earth'
        },
        
        'wuyin_wuxing_4': {
            'zh': '金',
            'en': 'Metal'
        },

        'wuyin_wuxing_5': {
            'zh': '水',
            'en': 'Water'
        },

        'wuyin_organ_1': {
            'zh': '肝、胆',
            'en': 'Liver, Gallbladder'
        },

        'wuyin_organ_2': {
            'zh': '心、小肠',
            'en': 'Heart, Small Intestine'
        },

        'wuyin_organ_3': {
            'zh': '脾、胃',
            'en': 'Spleen, Stomach'
        },

        'wuyin_organ_4': {
            'zh': '肺、大肠',
            'en': 'Lungs, Large Intestine'
        },
        
        'wuyin_organ_5': {
            'zh': '肾、膀胱',
            'en': 'Kidneys, Bladder'
        },

        'wuyin_char_1': {
            'zh': '柔和舒展的古琴曲：轻快、悠扬（如古琴曲《高山流水》）',
            'en': 'Soft and expansive guqin melodies: Light, flowing (e.g., High Mountains and Flowing Water)'
        },

        'wuyin_char_2': {
            'zh': '欢快活泼的竹笛乐：热烈、欢快（如琵琶曲《十面埋伏》）',
            'en': 'Lively dizi bamboo flute music: Vigorous, joyful (e.g., Ambush from Ten Sides for pipa)'
        },

        'wuyin_char_3': {
            'zh': '沉稳庄重的编钟声：沉稳、平和（如埙曲《寒山钟声》）',
            'en': 'Steady and solemn bronze bell tones: Calm, balanced (e.g., Cold Mountain Bell Sound for xun)'
        },

        'wuyin_char_4': {
            'zh': '清亮高亢的磬石音：清亮、悲壮（如编钟曲《楚商》）',
            'en': 'Clear and resonant stone chime notes: Bright, heroic (e.g., Chu Shang for bianzhong)'
        },
        
        'wuyin_char_5': {
            'zh': '流水般的洞箫旋律：柔和、哀婉（如箫曲《梅花三弄》）',
            'en': 'Flowing xiao bamboo flute melodies: Gentle, melancholic (e.g., Three Variations of Plum Blossom)'
        },

        'wuyin_effect_1': {
            'zh': '疏肝解郁，缓解焦虑',
            'en': 'Soothes liver qi, relieves anxiety'
        },

        'wuyin_effect_2': {
            'zh': '振奋心气，改善抑郁',
            'en': 'Invigorates heart qi, alleviates depression'
        },

        'wuyin_effect_3': {
            'zh': '健脾安神，缓解思虑过度',
            'en': 'Strengthens the spleen, calms the mind, eases overthinking'
        },

        'wuyin_effect_4': {
            'zh': '宣肺理气，舒缓悲伤',
            'en': 'Regulates lung qi, soothes grief'
        },

        'wuyin_effect_5': {
            'zh': '滋肾宁心，缓解恐惧',
            'en': 'Nourishes kidneys, quiets the heart, reduces fear'
        },
        'wuyin_tips_title': {
            'zh': '科学小贴士',
            'en': 'Did You Know?'
        },
        'wuyin_tips_desc':{
            'zh': '临床实验表明，五行音乐可调节脑电波与心率。例如，α波助放松，角调音乐能降低皮质醇（压力激素）水平，宫调音乐可改善消化不良（《世界睡眠医学杂志》2023）。同时，五行音乐搭配中医时辰理论效果更佳哦！',
            'en': 'Clinical studies show that Five-Element Music (五行音乐) can modulate brainwaves and heart rate. For example: Alpha waves aid relaxation. Jue-tone (角调) music reduces cortisol (the stress hormone). Gong-tone (宫调) music improves digestive discomfort (World Journal of Sleep Medicine, 2023). <br>Pro Tip: Pairing Five-Element Music with TCM circadian theory (中医时辰理论) enhances its effects!'
        },
        'wuxing_music_therapy_cell_title': {
            'zh': '五行音乐疗愈舱',
            'en': 'Five-Element Music Healing Pod'
        },
        'wuxing_music_therapy_cell_desc_1': {
            'zh': '角调·疏肝解郁',
            'en': 'Jue Tone (Wood Element) • Liver Soothing & Qi Regulation'
        },
        'wuxing_music_therapy_cell_desc_2': {
            'zh': '徵调·振奋心气',
            'en': 'Zhi Tone (Fire Element) • Heart Qi Activation'
        },
        'wuxing_music_therapy_cell_desc_3': {
            'zh': '宫调·健脾安神',
            'en': 'Gong Tone (Earth Element) • Spleen Harmony & Mental Grounding'
        },
        'wuxing_music_therapy_cell_desc_4': {
            'zh': '商调·宣肺理气',
            'en': 'Shang Tone (Metal Element) • Lung Qi Diffusion'
        },
        'wuxing_music_therapy_cell_desc_5': {
            'zh': '羽调·滋肾宁心',
            'en': 'Yu Tone (Water Element) • Kidney Nourishment'
        },

        // 五味学说 tab
        'tab_taste': {
            'zh': '五味学说',
            'en': 'The Five-Flavor Theory'
        },

        'wuwei_title': {
            'zh': '五味学说',
            'en': 'The Five-Flavor Theory'
        },

        'wuwei_title_desc': {
            'zh': '饮食养生的五行密码',
            'en': 'The Dietary Code of Health Through Five Elements'
        },

        'wuwei_origin_title': {
            'zh': '起源发展',
            'en': 'Origin and Development'
        },

        'wuwei_origin_desc': {
            'zh': '五味学说是中医基础理论的重要组成部分，其雏形可追溯至先秦时期的《尚书·洪范》，书中首次提出"五行配五味"思想："水曰润下，火曰炎上，木曰曲直，金曰从革，土爰稼穑。润下作咸，炎上作苦，曲直作酸，从革作辛，稼穑作甘。"至《黄帝内经》，五味学说与脏腑、经络、病理等系统结合，形成完整的"药食同源"理论体系。',
            'en': `The Five-Flavor Theory constitutes a fundamental component of Traditional Chinese Medicine (TCM) theory. Its prototype dates back to the pre-Qin era’s Book of Documents·Hong Fan, which first proposed the concept of "Five Elements corresponding to Five Flavors": "Water moistens and descends (salty), Fire flares upward (bitter), Wood bends and straightens (sour), Metal yields and reforms (pungent), Earth permits sowing and reaping (sweet)." By the time of The Yellow Emperor's Inner Canon, the Five-Flavor Theory had become systematically integrated with zang-fu organs, meridians, and pathology, forming a complete theoretical framework of "medicinal and dietary homology".`
        },

        'wuwei_core_theory':{
            'zh': '核心学说',
            'en': 'Core Theory of Five Flavors'
        },

        'wuwei_core_theory_1': {
            'zh': '《素问·宣明五气》："五味所入：酸入肝，辛入肺，苦入心，咸入肾，甘入脾，是谓五入。"',
            'en': `"The Classic of Plain Questions: Declaration of Five Qi" states: "Five flavors enter specific organs: Sour enters the Liver, Pungent enters the Lungs, Bitter enters the Heart, Salty enters the Kidneys, Sweet enters the Spleen. This is called the Five Entries."`
        },

        'wuwei_core_theory_2': {
            'zh': '《灵枢·五味》："谷味酸，先走肝；谷味苦，先走心；谷味甘，先走脾；谷味辛，先走肺；谷味咸，先走肾。"',
            'en': '《Lingshu · Five Flavors》: "Grain flavors exhibit targeted organ tropism: Sour primarily acts on the Liver, bitter on the Heart, sweet on the Spleen, pungent on the Lungs, and salty on the Kidneys."'
        },

        'wuwei_lecture_title': {
            'zh': '五味大讲堂',
            'en': 'Five Flavors Masterclass'
        },

        'wuxing-wuwei-organ_title': {
            'zh': '五行-五味-五脏的对应关系',
            'en': 'The Corresponding Relationships Between Five Elements, Five Flavors, and Five Organs'
        },
        
        'wuwei_table_title_1': {
            'zh': '五行',
            'en': 'Element'
        },

        'wuwei_table_title_2': {
            'zh': '五味',
            'en': 'Flavor'
        },

        'wuwei_table_title_3': {
            'zh': '归经',
            'en': 'Organs'
        },
        
        'wuwei_table_title_4': {
            'zh': '代表食物',
            'en': 'Representative Foods'
        },

        'wuwei_table_title_5': {
            'zh': '生理作用',
            'en': 'Key Actions'
        },

        'wuwei_table_title_6': {
            'zh': '病理关联',
            'en': 'Clinical Indications'
        },

        'wuwei_1': {
            'zh': '酸',
            'en': 'Sour'
        },

        'wuwei_2': {
            'zh': '苦',
            'en': 'Bitter'
        },
    
        'wuwei_3': {
            'zh': '甘',
            'en': 'Sweet'
        },

        'wuwei_4': {
            'zh': '辛',
            'en': 'Pungent'
        },

        'wuwei_5': {
            'zh': '咸',
            'en': 'Salty'
        },

        'wuwei_organ_1': {
            'zh': '肝、胆',
            'en': 'Liver, Gallbladder'
        },

        'wuwei_organ_2': {
            'zh': '心、小肠',
            'en': 'Heart, Small Intestine'
        },

        'wuwei_organ_3': {
            'zh': '脾、胃',
            'en': 'Spleen, Stomach'
        },

        'wuwei_organ_4': {
            'zh': '肺、大肠',
            'en': 'Lungs, Large Intestine'
        },

        'wuwei_organ_5': {
            'zh': '肾、膀胱',
            'en': 'Kidneys, Urinary Bladder'
        },

        'wuwei_food_1': {
            'zh': '山楂、柠檬',
            'en': 'Hawthorn, Lemon'
        },

        'wuwei_food_2': {
            'zh': '苦瓜、黄连',
            'en': 'Bitter melon, Coptis'
        },

        'wuwei_food_3': {
            'zh': '红枣、蜂蜜',
            'en': 'Jujube, Honey'
        },

        'wuwei_food_4': {
            'zh': '生姜、薄荷',
            'en': 'Ginger, Peppermint'
        },

        'wuwei_food_5': {
            'zh': '海带、盐',
            'en': 'Kelp, Salt'
        },

        'wuwei_effect_1': {
            'zh': '收敛固涩（止汗、止血）',
            'en': 'Astringes & consolidates (stops sweat, bleeding)'
        },

        'wuwei_effect_2': {
            'zh': '清热泻火、燥湿坚阴',
            'en': 'Clears heat, dries dampness, firms Yin'
        },

        'wuwei_effect_3': {
            'zh': '补益和中、缓急止痛',
            'en': 'Tonifies, harmonizes, relieves cramping'
        },

        'wuwei_effect_4': {
            'zh': '发散解表、行气活血',
            'en': 'Releases exterior, moves Qi & blood'
        },

        'wuwei_effect_5': {
            'zh': '软坚散结、泻下通便',
            'en': 'Softens hardness, purges bowels'
        },

        'wuwei_disease_1': {
            'zh': '肝气郁结、筋脉挛急',
            'en': 'Liver Qi stagnation, tendon spasms'
        },

        'wuwei_disease_2': {
            'zh': '心火上炎、失眠多梦',
            'en': 'Heart fire rising, insomnia with dreams'
        },

        'wuwei_disease_3': {
            'zh': '脾虚湿盛、食欲不振',
            'en': 'Spleen deficiency with dampness, poor appetite'
        },

        'wuwei_disease_4': {
            'zh': '肺气壅滞、咳嗽痰多',
            'en': 'Lung Qi congestion, phlegmy cough'
        },

        'wuwei_disease_5': {
            'zh': '肾虚水肿、瘿瘤瘰疬',
            'en': 'Kidney deficiency edema, goiter/scrofula'
        },

        'wuwei_disease_title': {
            'zh': '五味作用的生理病理机制',
            'en': 'Physiological and Pathological Mechanisms of Five Flavors'
        },

        'wuwei_disease_card_title_1': {
            'zh': '阴阳五行动态平衡',
            'en': 'Dynamic Equilibrium of Yin-Yang and the Five Elements'
        },

        'wuwei_disease_card_title_2': {
            'zh': '气机升降理论',
            'en': 'Theory of Qi Dynamic Ascension-Descension'
        },

        'wuwei_disease_card_title_3': {
            'zh': '现代药理学相关',
            'en': 'Modern Pharmacological Correlation'
        },        
        
        'wuwei_disease_card_p': {
            'zh': '五味通过五行生克调节人体阴阳：',
            'en': 'The Five Flavors Regulate Human Yin-Yang through Five-Element Generation-Restriction Cycles: '
        },

        'wuwei_disease_card_li_1':{
            'zh': '相生调节：如"酸（木）生苦（火）"，肝藏血（酸）充足可滋心火（苦），维持心血运行。',
            'en': 'Generative regulation: The sour (Wood) flavor nurtures bitter (Fire) - adequate liver blood storage (sour) nourishes heart fire (bitter), sustaining proper cardiac circulation.'
        },

        'wuwei_disease_card_li_2':{
            'zh': '相克制约：如"甘（土）克咸（水）"，过食咸味（伤肾）可用甘味（健脾）制水，治疗水肿。',
            'en': 'Restrictive regulation: The sweet (Earth) flavor controls salty (Water) - excessive salt intake (kidney-harming) can be counterbalanced by sweet flavors (spleen-strengthening) to manage edema.'
        },

        'wuwei_disease_card_li_3':{
            'zh': '辛甘发散为阳：辛味（金）主升散（如麻黄发汗），甘味（土）主升清（如黄芪补气）。',
            'en': 'Pungent-sweet dispersing as Yang: Pungent flavors (Metal) promote outward dispersion (e.g., ephedra induces sweating), while sweet flavors (Earth) elevate the clear (e.g., astragalus boosts Qi).'
        },

        'wuwei_disease_card_li_4':{
            'zh': '酸苦涌泄为阴：酸味（木）主收敛（如五味子敛肺），苦味（火）主降泄（如大黄通便）。',
            'en': 'Sour-bitter draining as Yin: Sour flavors (Wood) promote astringency (e.g., schisandra consolidates the lungs), while bitter flavors (Fire) induce downward drainage (e.g., rhubarb purges the bowels).'
        },

        'wuwei_disease_card_li_5':{
            'zh': '酸味（木）：含有机酸（如柠檬酸）可调节肝细胞代谢（《中国中药杂志》，2021）。',
            'en': 'Sour flavor (Wood element): Contains organic acids (e.g., citric acid) that modulate hepatocyte metabolism (China Journal of Chinese Materia Medica, 2021).'
        },

        'wuwei_disease_card_li_6':{
            'zh': '苦味（火）：生物碱（如黄连素）抑制NF-κB通路，抗炎护心（《Phytomedicine》，2022）。',
            'en': 'Bitter flavor (Fire element): Alkaloids (e.g., berberine) inhibit the NF-κB pathway, providing anti-inflammatory and cardioprotective effects (Phytomedicine, 2022).'
        },

        'wuwei_disease_card_li_7':{
            'zh': '咸味（水）：碘（海带）调节甲状腺功能，印证"咸入肾"理论（《Journal of Ethnopharmacology》，2023）。',
            'en': 'Salty flavor (Water element): Iodine (from kelp) modulates thyroid function, validating the "salty enters kidney" theory (Journal of Ethnopharmacology, 2023).'
        },

        // 趣味冷知识
        'wuwei_fun_tips_title': {
            'zh': '趣味冷知识',
            'en': 'Did you know?'
        },

        'wuwei_fun_tips_1': {
            'zh': '中医"五味"涵盖药物与食物的自然属性，而非单纯味觉感受。如"咸味"包括海带、芒硝等，既指口感咸，亦指其下行、软坚的药性。',
            'en': `The 'Five Flavors' (五味) in Traditional Chinese Medicine describe the inherent nature of both herbs and foods, transcending mere taste perception. For instance, the 'salty' flavor encompasses kelp (海带) and mirabilite (芒硝), referring not only to their actual salty taste but also to their medicinal properties of promoting downward movement and softening hardness.`
        },

        'wuwei_fun_tips_2': {
            'zh': '五味学说需结合个体差异，肝郁者（木失调）宜食酸味（如醋泡黑豆），但胃溃疡患者需避免过量酸食。糖尿病患者需控制甘味摄入（《合作经济与科技》2023）。',
            'en': 'Wood-type individuals (Liver Qi stagnation) benefit from sour foods (e.g., vinegar-soaked black beans), while ulcer patients should limit acidity. Diabetics require strict sweet-flavor control – Cooperative Economy & Science 2023 confirms.'
        },

        'wuwei_fun_tips_3': {
            'zh': '古人通过"尝百草"发现五味药性，辣椒明代才传入中国，古人吃辣靠茱萸哦！',
            'en': `Chilies didn't reach China until Ming Dynasty! Scholars found in Compendium of Materia Medica that prickly ash (Zanthoxylum) was the OG 'ancient Sichuan pepper' with recorded warming properties.`
        },

        // 五行人格 tab
        'tab_personality': {
            'zh': '五行人格',
            'en': 'Five-Element Personality Theory'
        },
        
        'wuren_title': {
            'zh': '五行人格',
            'en': 'Five-Element Personality Theory'
        },

        'wuren_origin_title': {
            'zh': '理论渊源与经典文献',
            'en': 'Theoretical Origins & Classical Texts'
        },

        'wuren_origin_desc1': {
            'zh': '古典哲学五行人格理论源于《黄帝内经》的"五形人"分类，结合五行生克与阴阳学说，将人的体质、性格与自然元素对应。《灵枢·阴阳二十五人》系统论述五行人格的外貌、行为及疾病倾向，奠定"形神合一"的古典性格学框架。',
            'en': `Rooted in The Yellow Emperor's Inner Canon's classification of "Five Constitutional Types," this classical philosophy correlates human physique and temperament with natural elements through the interplay of Five-Element cycles and yin-yang theory. The Ling Shu·Twenty-Five Yin-Yang Personalities systematically details the physical traits, behavioral patterns, and disease predispositions of each elemental type, establishing the foundational framework of "body-mind unity" in classical characterology.`
        },
        
        'wuren_origin_desc2': {
            'zh': '近代发展清末民初思想家王凤仪提出"五行性理学说"，将性格缺陷（阴性）与美德（阳性）纳入五行体系，主张通过修身转化人格（如"化阴木为阳木"）。其理论融合儒家伦理与中医思想，成为民间性格修养的重要参考。',
            'en': 'During the late Qing and early Republican period, philosopher Wang Fengyi advanced the "Five-Element Nature and Principle Theory," integrating character flaws (yin aspects) and virtues (yang aspects) into the elemental system. His teachings advocated self-cultivation to transform personalities (e.g., "converting yin wood to yang wood"), blending Confucian ethics with TCM principles to create influential guidelines for moral refinement in folk traditions.'
        },

        // 诊疗方法 
        'diagnosis_title': {
            'zh': '中医诊疗方法',
            'en': 'Diagnostic & Treatment Methods'
        },
        'diagnosis_desc': {
            'zh': '传统中医的诊断与治疗智慧',
            'en': '传统中医的诊断与治疗智慧'
        },
        // 望诊
        'inspection_title': {
            'zh': '望诊',
            'en': 'Inspection'
        },
        'inspection_desc': {
            'zh': '观察患者的面色、舌象、形态等，了解病情。',
            'en': "Observing the patient's facial complexion, tongue appearance, and physical demeanor to assess their condition."
        },
        // 闻诊
        'auscultation_title': {
            'zh': '闻诊',
            'en': 'Auscultation & Olfaction'
        },
        'auscultation_desc': {
            'zh': '通过听声音、嗅气味来判断病情。',
            'en': "Assessing conditions by listening to vocal sounds and detecting body odors."
        },
        // 问诊
        'inquiry_title': {
            'zh': '问诊',
            'en': 'Inquiry'
        },
        'inquiry_desc': {
            'zh': '询问患者的症状、病史、生活习惯等，了解病情。',
            'en': "Understanding illnesses by asking about symptoms, medical history, and lifestyle habits."
        },
        // 切诊
        'pulse_taking_title': {
            'zh': '切诊',
            'en': 'Pulse-taking'
        },
        'pulse_taking_desc': {
            'zh': '通过触摸脉搏、按压身体部位等，了解病情。',
            'en': "Evaluating health status by feeling pulses and palpating body areas."
        },

        // 辨证论治
        'bianzheng_title': {
            'zh': '辨证论治',
            'en': 'Syndrome Differentiation and Treatment'
        },

        'bianzheng_desc': {
            'zh': '根据患者的症状和体征，进行综合分析，确定病因、病机和病位，制定相应的治疗方案。',
            'en': `Conduct a comprehensive analysis based on the patient's symptoms and signs to determine the cause, pathogenesis, and location of the disease, and formulate an appropriate treatment plan.`
        },

        // 八纲辨证
        'bagang_title': {
            'zh': '八纲辨证',
            'en': 'Eight-Principle Syndrome Differentiation'
        },

        'bagang_desc': {
            'zh': '将病情分为阴阳、表里、寒热、虚实八种基本类型，为治疗提供依据。',
            'en': 'Classify the condition into eight basic types—yin and yang, exterior and interior, cold and heat, deficiency and excess—to provide a basis for treatment.'
        },

        // 中药治疗
        'zhongyao_title': {
            'zh': '中药治疗',
            'en': 'Herbal Medicine Treatment'
        },

        'zhongyao_desc': {
            'zh': '根据辨证论治的原则，选用合适的中药进行治疗。',
            'en': 'Select appropriate Chinese herbs for treatment based on the principles of syndrome differentiation and treatment.'
        },

        // 针灸治疗
        'zhenjiu_title': {
            'zh': '针灸治疗',
            'en': 'Acupuncture and Moxibustion Therapy'
        },
        'zhenjiu_desc': {
            'zh': '通过针刺和灸法，疏通经络，调节气血阴阳，达到防治疾病的效果。',
            'en': 'Use needling and moxibustion to unblock meridians, regulate qi, blood, yin, and yang, and achieve disease prevention and treatment.'
        },

        // 推拿按摩
        'tuina_title': {
            'zh': '推拿按摩',
            'en': 'Tui Na (Therapeutic Massage)'
        },
        'tuina_desc': {
            'zh': '通过手法按摩，疏通经络，缓解肌肉疼痛，调节脏腑功能。',
            'en': 'Use manual techniques to unblock meridians, relieve muscle pain, and regulate organ functions.'
        },

        // 食疗
        'shiliao_title': {
            'zh': '食疗',
            'en': 'Dietary Therapy'
        },
        'shiliao_desc': {
            'zh': '根据患者的体质和病情，选用合适的食材进行调理。',
            'en': `Select suitable ingredients to regulate the body based on the patient's constitution and condition.`
        },

        // 气功
        'qigong_title': {
            'zh': '气功',
            'en': 'Qigong'
        },
        'qigong_desc': {
            'zh': '通过呼吸调节和身体姿势的调整，增强体质，调节身心。',
            'en': 'Enhance physical fitness and regulate the mind and body through breathing exercises and posture adjustments.'
        },


        // 名医名篇
        'masters_title': {
            'zh': '名医名篇',
            'en': 'Famous Doctors and Classics'
        },

        'tab_famouse_doctors': {
            'zh': '中医名人',
            'en': 'Famous Doctors'
        },

        'tab_famouse_books': {
            'zh': '中医名篇',
            'en': 'Famous Classics'
        },

        'doctor_names_1': {
            'zh': '扁鹊',
            'en': 'Bian Que'
        },
        'doctor_titles_1': {
            'zh': '中医医祖',
            'en': 'The Founding Father of Traditional Chinese Medicine'
        },
        'doctor_info_1': {
            'zh': '春秋战国时期名医，创立"望、闻、问、切"四诊法。',
            'en': 'A renowned physician during the Spring and Autumn and Warring States periods, credited with establishing the "Four Diagnostic Methods" (inspection, auscultation & olfaction, inquiry, and palpation).'
        },

        'doctor_names_2': {
            'zh': '华佗',
            'en': 'Hua Tuo'
        },
        'doctor_titles_2': {
            'zh': '外科鼻祖',
            'en': 'The Founder of Surgery'
        },
        'doctor_info_2': {
            'zh': '东汉末年医学家，开创中药麻醉法，提倡体育疗法，创立五禽戏。',
            'en': 'A renowned medical scholar in the late Eastern Han Dynasty, who pioneered herbal anesthesia, advocated physical exercise therapy, and created the Five-Animal Exercises (Wu Qin Xi).'
        },

        'doctor_names_3': {
            'zh': '张仲景',
            'en': 'Zhang Zhongjing'
        },
        'doctor_titles_3': {
            'zh': '医圣',
            'en': 'Sage of Medicine'
        },
        'doctor_info_3': {
            'zh': '东汉末年医学家，著有《伤寒杂病论》，确立"辨证论治"原则。',
            'en': 'Medical scholar of the late Eastern Han Dynasty, authored Treatise on Cold Damage and Miscellaneous Diseases, establishing the principle of "syndrome differentiation and treatment'
        },

        'doctor_names_4': {
            'zh': '孙思邈',
            'en': 'Sun Simiao'
        },
        'doctor_titles_4': {
            'zh': '药王',
            'en': 'King of Medicines'
        },
        'doctor_info_4': {
            'zh': '唐代医学家，著有《千金要方》（《千金翼方》），对中医药学发展有重大贡献。',
            'en': 'Tang Dynasty medical scholar, authored Essential Formulas Worth a Thousand in Gold for Emergencies, making monumental contributions to Chinese medicine development.'
        },

        'doctor_names_5': {
            'zh': '李时珍',
            'en': 'Li Shizhen'
        },
        'doctor_titles_5': {
            'zh': '本草学家',
            'en': 'Master Herbalist'
        },
        'doctor_info_5': {
            'zh': '明代医学家，著有《本草纲目》，集我国16世纪之前药学成就之大成。',
            'en': 'Ming Dynasty medical scholar, compiled Compendium of Materia Medica (Bencao Gangmu), synthesizing all pre-16th century Chinese pharmacological achievements.'
        },

        'doctor_names_6': {
            'zh': '葛洪',
            'en': 'Ge Hong'
        },
        'doctor_titles_6': {
            'zh': '东晋医学家',
            'en': 'Jin Dynasty Physician'
        },
        'doctor_info_6': {
            'zh': '著有《肘后备急方》，最早记载传染病如天花、恙虫病症侯及诊治。',
            'en': 'Authored Handbook of Prescriptions for Emergencies, containing the earliest records of infectious diseases like smallpox and tsutsugamushi disease symptoms/treatments.'
        },

        'doctor_names_7': {
            'zh': '钱乙',
            'en': 'Qian Yi'
        },
        'doctor_titles_7': {
            'zh': '儿科之圣',
            'en': 'Sage of Pediatrics'
        },
        'doctor_info_7': {
            'zh': '宋代医学家，著有《小儿药证直诀》，对儿科医学的发展有重要影响。',
            'en': `Song Dynasty physician, wrote Key to Therapeutics of Children's Diseases, profoundly influencing pediatric medicine development.`
        },

        'doctor_names_8': {
            'zh': '叶桂',
            'en': 'Ye Gui'
        },
        'doctor_titles_8': {
            'zh': '天医星',
            'en': 'Celestial Medical Star'
        },
        'doctor_info_8': {
            'zh': '清代医学家，温病学派集大成者，创立卫气营血辨证体系，代表著作《温热论》《临证指南医案》，被誉为“天医星”。',
            'en': `Qing Dynasty physician, synthesized Warm Disease theory school, created the Wei-Qi-Ying-Xue diagnostic system. Representative works: Discussion of Warm-Febrile Diseases and Clinical Guide Medical Records, revered as "Celestial Medical Star".`
        },

        'doctor_names_9': {
            'zh': '皇甫谧',
            'en': 'Huangfu Mi'
        },
        'doctor_titles_9': {
            'zh': '针灸鼻祖',
            'en': 'Originator of Acupuncture'
        },
        'doctor_info_9': {
            'zh': '晋代医学家，著有《针灸甲乙经》，系统总结了针灸学的理论实践。',
            'en': `Jin Dynasty physician, authored Systematic Classic of Acupuncture and Moxibustion, comprehensively summarizing acupuncture theory and practice.`
        },
        // 名篇卡片
        'classics_names_1': {
            'zh': '《黄帝内经》',
            'en': 'The compilation of The Yellow Emperor\'s Inner Canon'
        },
        'classics_author_1': {
            'zh': '佚名',
            'en': 'Anonymous'
        },
        'classics_period_1': {
            'zh': '春秋战国时期',
            'en': 'Spring and Autumn and Warring States Periods'
        },
        'classics_info_1': {
            'zh': '中医理论体系的奠基之作，分为《素问》和《灵枢》两部分，总结了古代医学的理论和实践经验。',
            'en': 'The foundational work of TCM theory, divided into Suwen (Basic Questions) and Lingshu (Spiritual Pivot), systematically summarizes ancient medical theories and practical experience.'
        },

        'classics_names_2': {
            'zh': '《伤寒杂病论》',
            'en': 'Treatise on Cold Damage and Miscellaneous Diseases'
        },
        'classics_author_2': {
            'zh': '张仲景',
            'en': 'Zhang Zhongjing'
        },
        'classics_period_2': {
            'zh': '东汉末年',
            'en': 'Late Eastern Han Dynasty'
        },
        'classics_info_2': {
            'zh': '确立了"辨证论治"原则，是中医临床的基本原则。现存《伤寒论》和《金匮要略》两部分。',
            'en': 'It established the principle of "treatment based on syndrome differentiation," which serves as the fundamental clinical approach in Traditional Chinese Medicine (TCM). The currently extant versions are divided into two parts: Treatise on Cold Damage (Shang Han Lun) and Synopsis of the Golden Chamber (Jin Gui Yao Lue).'
        },

        'classics_names_3': {
            'zh': '《本草纲目》',
            'en': 'Compendium of Materia Medica'
        },
        'classics_author_3': {
            'zh': '李时珍',
            'en': 'Li Shizhen'
        },
        'classics_period_3': {
            'zh': '明代',
            'en': 'Ming Dynasty'
        },
        'classics_info_3': {
            'zh': '集我国16世纪之前药学成就之大成，是具有世界性影响的博物学著作。',
            'en': 'This compendium represents the pinnacle of Chinese pharmaceutical knowledge before the 16th century, standing as an encyclopedic work of natural history with worldwide influence.'
        },

        'classics_names_4': {
            'zh': '《千金要方》',
            'en': 'Essential Formulas Worth a Thousand Gold'
        },
        'classics_author_4': {
            'zh': '孙思邈',
            'en': 'Sun Simiao'
        },
        'classics_period_4': {
            'zh': '唐代',
            'en': 'Tang Dynasty'
        },
        'classics_info_4': {
            'zh': '对中医药学的发展有重大贡献，是我国现存最早的医学百科全书。',
            'en': 'This work made groundbreaking contributions to the development of Chinese medicine and represents the earliest surviving medical encyclopedia in China.'
        },

        'classics_names_5': {
            'zh': '《难经》',
            'en': 'Classic of Difficult Issues'
        },
        'classics_author_5': {
            'zh': '佚名',
            'en': 'Anonymous'
        },
        'classics_period_5': {
            'zh': '战国至秦汉时期',
            'en': 'Warring States to Qin-Han Period'
        },
        'classics_info_5': {
            'zh': '中医经典著作之一，对《黄帝内经》中的难点和疑点进行了解释和阐发。',
            'en': 'ritative interpretations and elucidations of challenging concepts and ambiguities in the Yellow Emperor\'s Inner Classic.'
        },

        'classics_names_6': {
            'zh': '《神农本草经》',
            'en': 'Divine Farmer\'s Materia Medica'
        },
        'classics_author_6': {
            'zh': '佚名',
            'en': 'Anonymous'
        },
        'classics_period_6': {
            'zh': '战国至秦汉时期',
            'en': 'Warring States to Qin-Han Period'
        },
        'classics_info_6': {
            'zh': '最早的中药学专著，总结了当时的用药经验，共载药物365种。',
            'en': 'As the earliest specialized monograph on Chinese materia medica, this work systematically compiled contemporary pharmaceutical knowledge, documenting 365 medicinal substances.'
        },

        'classics_names_7': {
            'zh': '《肘后备急方》',
            'en': 'Emergency Formulas to Keep Close at Hand'
        },
        'classics_author_7': {
            'zh': '葛洪',
            'en': 'Ge Hong'
        },
        'classics_period_7': {
            'zh': '东晋',
            'en': 'Eastern Jin Dynasty'
        },
        'classics_info_7': {
            'zh': '最早记载一些传染病如天花、恙虫病症侯及诊治。',
            'en': 'This text contains the earliest documented descriptions of infectious diseases such as smallpox and tsutsugamushi disease, including their clinical manifestations and treatments.'
        },

        'classics_names_8': {
            'zh': '《针灸甲乙经》',
            'en': 'Systematic Classic of Acupuncture and Moxibustion'
        },
        'classics_author_8': {
            'zh': '皇甫谧',
            'en': 'Huangfu Mi'
        },
        'classics_period_8': {
            'zh': '西晋',
            'en': 'Western Jin Dynasty'
        },
        'classics_info_8': {
            'zh': '系统总结了针灸学的理论和实践。',
            'en': 'This work systematically summarizes both the theoretical principles and clinical applications of acupuncture and moxibustion.'
        },
        'classics_names_9': {
            'zh': '《小儿药证直诀》',
            'en': 'Key to Pediatric Medicinal Syndromes'
        },
        'classics_author_9': {
            'zh': '钱乙',
            'en': 'Qian Yi'
        },
        'classics_period_9': {
            'zh': '宋代',
            'en': 'Song Dynasty'
        },
        'classics_info_9': {
            'zh': '系统总结了针灸学的理论和实践。',
            'en': 'This work systematically synthesized both the theoretical foundations and clinical practices of acupuncture and moxibustion therapy.'
        },
        'classics_names_10': {
            'zh': '《丹溪心法》',
            'en': 'Danxi\'s Master Methods'
        },
        'classics_author_10': {
            'zh': '朱震亨',
            'en': 'Zhu Zhenheng'
        },
        'classics_period_10': {
            'zh': '元代',
            'en': 'Yuan Dynasty'
        },
        'classics_info_10': {
            'zh': '对中医温病学的发展有重要影响。',
            'en': 'It exerted significant influence on the development of Warm Disease theory in Traditional Chinese Medicine.'
        },
        
        // 页脚
        'footer_desc': {
            'zh': '传承千年中医智慧，弘扬传统医药文化',
            'en': 'Inheriting thousand years of TCM wisdom, promoting traditional medical culture'
        },
        'footer_quick_links': {
            'zh': '快速链接',
            'en': 'Quick Links'
        },
        'footer_resources': {
            'zh': '学习资源',
            'en': 'Learning Resources'
        },
        'footer_copyright': {
            'zh': '© 2025 "五行×中医"一站式智能教育网站 版权所有',
            'en': '© 2025 "Five Elements × TCM" One-stop Intelligent Education Website. All Rights Reserved'
        },

        'learning_resources_1':{
            'zh': '中药材库',
            'en': 'Herbs'
        },

        'learning_resources_2':{
            'zh': '人体五脏',
            'en': 'Five Organs'
        },

        'learning_resources_3':{
            'zh': '诊疗方法',
            'en': 'Diagnostic & Treatment Methods'
        },

        'learning_resources_4':{
            'zh': '发展变革',
            'en': 'TCM History'
        },

        'learning_resources_5':{
            'zh': '名医名篇',
            'en': 'Famous Doctors and Classics'
        },

        'learning_resources_6':{
            'zh': '五行知识',
            'en': 'The Theory of Five Elements'
        },

        
        // AI李时珍页面
        'ai_title': {
            'zh': 'AI李时珍智能体',
            'en': 'AI Li Shizhen Intelligent Agent'
        },
        'ai_desc': {
            'zh': '与明代医药学家李时珍对话，探索中医药文化的奥秘，接受专业的中医知识指导与考核',
            'en': 'Dialogue with Ming Dynasty medical scientist Li Shizhen, explore the mysteries of TCM culture, and receive professional TCM knowledge guidance and assessment'
        },
        'btn_learn_features': {
            'zh': '了解功能',
            'en': 'Learn Features'
        },
        'ai_features_title': {
            'zh': 'AI李时珍功能',
            'en': 'AI Li Shizhen Features'
        },
        'ai_features_desc': {
            'zh': '探索AI李时珍的多种功能',
            'en': 'Explore the various features of AI Li Shizhen'
        },
        'ai_feature_title_1': {
            'zh': '中医知识问答',
            'en': 'TCM Knowledge Q&A'
        },
        'ai_feature_desc_1': {
            'zh': '提供专业的中医知识解答，包括中医理论、诊断方法、治疗手段等',
            'en': 'Provide professional TCM knowledge answers, including TCM theory, diagnostic methods, treatment means, etc.'
        },
        'ai_feature_title_2': {
            'zh': '历史文化探索',
            'en': 'Historical and Cultural Exploration'
        },
        'ai_feature_desc_2': {
            'zh': '了解李时珍的生平事迹、《本草纲目》的编撰历程，感受中医药发展的历史脉络。',
            'en': `Learn about Li Shizhen's life story and the compilation journey of the Compendium of Materia Medica, and experience the historical context of Traditional Chinese Medicine's development.`
        },
        'ai_feature_title_3': {
            'zh': '知识考核评估',
            'en': 'Knowledge Assessment and Evaluation'
        },
        'ai_feature_desc_3':{
            'zh': '在对话结束后，AI李时珍会对您的学习情况进行考核，检验您对中医知识的掌握程度。',
            'en': 'To help you learn better, AI Li Shizhen will review your understanding of TCM at the end of our conversation.'
        },
        'ai_feature_title_4': {
            'zh': '个性化学习建议',
            'en': 'Personalized Learning Recommendations'
        },
        'ai_feature_desc_4': {
            'zh': '根据您的对话内容和考核结果，提供有针对性的学习建议和资源推荐。',
            'en': 'Based on your conversation and assessment results, we will provide targeted learning suggestions and personalized resource recommendations.'
        },
        
        // 与李时珍对话
        'ai_chat_title': {
            'zh': '与李时珍的对话',
            'en': 'Dialogue with AI Li Shizhen'
        },

        'ai_chat_desc': {
            'zh': '探索中医药文化的奥秘',
            'en': 'Unravel the Mysteries of Traditional Chinese Medicine Culture'
        },

        // 李时珍使用指南
        'ai_guides_title': {
            'zh': '使用指南',
            'en': 'User Guide'
        },

        'ai_guides_desc': {
            'zh': '如何与AI李时珍进行有效对话',
            'en': 'How to Have Effective Conversations with AI Li Shizhen'
        },

        // 李时珍使用指南卡片
        'ai_guide_title_1': {
            'zh': '提问技巧',
            'en': 'Tips for Asking Questions'
        },
        'ai_guide_desc_1': {
            'zh': '清晰表达您的问题，可以询问中医基础理论、药材特性、方剂配伍、李时珍生平等内容。',
            'en': 'Clearly articulate your questions—you may inquire about: Fundamental theories of Traditional Chinese Medicine (TCM). Properties of medicinal herbs. Formula compatibility. The life of Li Shizhen'
        },

        'ai_guide_title_2': {
            'zh': '持续对话',
            'en': 'Context-Aware Chat'
        },
        'ai_guide_desc_2': {
            'zh': '与AI李时珍进行连续对话，深入探讨感兴趣的话题，AI会记住对话上下文。',
            'en': 'Engage in continuous dialogue with AI Li Shizhen to deeply explore topics of interest, with AI remembering the conversation context.'
        },

        'ai_guide_title_3': {
            'zh': '知识考核',
            'en': 'Knowledge Assessment'
        },
        'ai_guide_desc_3': {
            'zh': '在一系列对话结束后，AI李时珍会对您进行知识考核，检验您的学习成果。',
            'en': 'After completing a series of conversations, AI Li Shizhen will conduct a knowledge assessment to evaluate your learning outcomes.'
        },

        'ai_guide_title_4': {
            'zh': '学习建议',
            'en': 'Learning Suggestions'
        },
        'ai_guide_desc_4': {
            'zh': '根据您的对话内容和考核结果，AI李时珍会提供个性化的学习建议。',
            'en': 'Based on your conversation history and assessment results, AI Li Shizhen will provide personalized learning suggestions.'
        },
        

        // 游戏页面
        'games_title': {
            'zh': '五行智弈',
            'en': 'Games'
        },

        'games_desc': {
            'zh': '寓教于乐，通过有趣的游戏体验中医文化的魅力',
            'en': 'Learn through play, experience the charm of TCM culture through fun games'
        },

        // 具体的游戏
        'game_title_1': {
            'zh': '五行归类大挑战',
            'en': 'Five-Element Categorization Challenge'
        },

        'game_desc_1': {
            'zh': '理解中医五行理论的基本概念及其在中医体系中的应用。',
            'en': "Master the fundamental concepts of TCM's Five-Element Theory and its clinical applications in traditional Chinese medicine."
        },

        'game_title_2': {
            'zh': '中药配伍大师',
            'en': 'Herbal Formulation Master'
        },

        'game_desc_2': {
            'zh': '根据不同症状选择合适的中药组合，体验中医配伍的奥妙。',
            'en': 'Select optimal herbal combinations for different symptoms and discover the profound wisdom of TCM compatibility principles.'
        },

        'game_title_3': {
            'zh': '经络穴位探索',
            'en': 'Meridian & Acupoint Explorer'
        },

        'game_desc_3': {
            'zh': '通过互动人体模型，学习重要经络穴位的位置和作用。',
            'en': 'Explore key acupuncture pathways and points through interactive 3D human anatomy models, learning their locations and therapeutic functions.'
        },

        'game_title_4': {
            'zh': '名医诊断挑战',
            'en': "Diagnosis Challenge: Physician's Journey"
        },

        'game_desc_4': {
            'zh': '扮演中医师角色，通过望闻问切为虚拟患者进行诊断和治疗。',
            'en': 'Role-play as a TCM doctor - practice inspection, auscultation, inquiry, and palpation to diagnose and treat virtual patients.'
        },

        'game_title_5': {
            'zh': '五行平衡',
            'en': 'Five Elements Balance'
        },
        
        'game_desc_5': {
            'zh': '通过调整五行元素的比例，达成阴阳平衡，体验中医五行理论。',
            'en': 'Adjust Wood, Fire, Earth, Metal, and Water ratios to achieve yin-yang harmony, experiencing Wuxing theory applications.'
        },
        
        'game_title_6': {
            'zh': '中药材识别挑战',
            'en': 'Herbal Recognition Challenge'
        },
        
        'game_desc_6': {
            'zh': '通过图像识别常用中药材，学习它们的性味归经和功效。',
            'en': 'Identify common Chinese herbs via image recognition while studying their nature (性味), channel tropism (归经), and clinical effects.'
        },
        

        // 论坛页面
        'forum_title': {
            'zh': '全球五行研究所 - 智联杏林',
            'en': 'Global Five Elements Research Institute - Community'
        },
        'forum_desc': {
            'zh': '探索五行智慧，连接世界灵感',
            'en': 'Explore Five Elements wisdom, connect global inspiration'
        },
        'forum_tab_personality': {
            'zh': '五行人格报告',
            'en': 'Five Elements Personality'
        },
        'forum_tab_creative': {
            'zh': '五行生活创意',
            'en': 'Five Elements Creativity'
        },
        'forum_tab_cultural': {
            'zh': '文化讨论角',
            'en': 'Cultural Discussion'
        },
        'forum_tab_tags': {
            'zh': '热门标签',
            'en': 'Popular Tags'
        },
        'btn_reply': {
            'zh': '回复',
            'en': 'Reply'
        },
        'btn_like': {
            'zh': '点赞',
            'en': 'Like'
        }
    };
    
    // 初始化语言切换器
    createLanguageSwitcher();
    
    // 初始化页面语言
    translatePage();
});
