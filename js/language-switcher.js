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
                titleSelector: '.feature-card:nth-child(1) h3',
                descSelector: '.feature-card:nth-child(1) p',
                btnSelector: '.feature-card:nth-child(1) .feature-link',
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
                titleSelector: '.feature-card:nth-child(3) h3',
                descSelector: '.feature-card:nth-child(3) p',
                btnSelector: '.feature-card:nth-child(3) .feature-link',
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
        document.querySelectorAll('.game-difficulty').forEach(element => {
            const stars = element.innerHTML.split('难度:')[1];
            element.innerHTML = translations['game_difficulty'][currentLang] + stars;
        });
        
        // 翻译游戏按钮
        document.querySelectorAll('#popular-games .btn-outline').forEach(btn => {
            if (btn.textContent.includes('开始游戏')) {
                btn.textContent = translations['btn_play_game'][currentLang];
            } else if (btn.textContent.includes('敬请期待')) {
                btn.textContent = translations['btn_coming_soon'][currentLang];
            }
        });
        
        // 翻译查看全部游戏按钮
        translateElement('#popular-games .text-center .btn-primary', 'btn_view_all_games');
        
        // 翻译用户评价
        translateElement('#testimonials .section-header h2', 'testimonials_title');
        translateElement('#testimonials .section-header p', 'testimonials_desc');
    }
    
    // 翻译知识科普页面
    function translateKnowledgePage() {
        // 翻译中医发展史
        translateElement('#history .section-header h2', 'tcm_history_title');
        translateElement('#history .section-header p', 'tcm_history_desc');
        translateElement('.tab-btn[data-tab="origin"]', 'tab_origin');
        translateElement('.tab-btn[data-tab="development"]', 'tab_development');
        translateElement('.tab-btn[data-tab="culture"]', 'tab_culture');
        
        // 翻译中药材库
        translateElement('#herbs .section-header h2', 'herbs_title');
        translateElement('#herbs .section-header p', 'herbs_desc');
        
        // 翻译人体五脏
        translateElement('#meridians .section-header h2', 'meridians_title');
        translateElement('#meridians .section-header p', 'meridians_desc');
        
        // 翻译诊疗方法
        translateElement('#diagnosis .section-header h2', 'diagnosis_title');
        translateElement('#diagnosis .section-header p', 'diagnosis_desc');
        
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
        
        // 翻译诊疗方法卡片
        translateElement('.method-card:nth-of-type(1) h4', 'inspection_title');
        translateElement('.method-card:nth-of-type(1) > p', 'inspection_desc');
        translateElement('.method-card:nth-of-type(2) h4', 'auscultation_title');
        translateElement('.method-card:nth-of-type(2) > p', 'auscultation_desc');
        translateElement('.method-card:nth-of-type(3) h4', 'inquiry_title');
        translateElement('.method-card:nth-of-type(3) > p', 'inquiry_desc');
        translateElement('.method-card:nth-of-type(4) h4', 'pulse_taking_title');
        translateElement('.method-card:nth-of-type(4) > p', 'pulse_taking_desc');
        
        // 翻译知识内容
        translateElementsByClass('knowledge-item-title', 'knowledge_item_title_');
        translateElementsByClass('knowledge-item-desc', 'knowledge_item_desc_');
    }
    
    // 翻译微课页面
    function translateMicrocoursesPage() {
        // 翻译页面标题和描述
        translateElement('.section-header h1', 'courses_title');
        translateElement('.section-header p', 'courses_desc');
        
        // 翻译课程卡片内容
        translateElementsByClass('course-card h3', 'course_title_');
        translateElementsByClass('course-card p', 'course_desc_');
        translateElementsByClass('course-card .btn', 'btn_view_course');
    }
    
    // 翻译游戏页面
    function translateGamesPage() {
        // 翻译页面标题和描述
        translateElement('.section-header h1', 'games_title');
        translateElement('.section-header p', 'games_desc');
        
        // 翻译游戏卡片内容
        translateElementsByClass('game-card h3', 'game_title_');
        translateElementsByClass('game-card p', 'game_desc_');
        translateElementsByClass('game-card .btn', 'btn_play_game');
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
        translateElementsByClass('ai-feature-card h3', 'ai_feature_title_');
        translateElementsByClass('ai-feature-card p', 'ai_feature_desc_');
    }
    
    // 翻译论坛页面
    function translateForumPage() {
        // 翻译页面标题和描述
        translateElement('.section-header h2', 'forum_title');
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
            'zh': '系列微课',
            'en': 'Courses'
        },
        'courses_desc': {
            'zh': '中医知识锦囊',
            'en': 'Treasure Trove of TCM'
        },
        
        // 微课内容
        'course_title_1': {
            'zh': '一分钟了解五行相生',
            'en': 'One Minute Guide to the Five-Element Mutual Generation (Wuxing Theory)'
        },
        'course_desc_1': {
            'zh': '解析木、火、土、金、水五种元素间"相互滋生"的关系',
            'en': 'Analysis of the "mutual generation" relationship between the five elements: wood, fire, earth, metal, and water'
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
        'feature_ai_title': {
            'zh': '时珍智脑',
            'en': 'AI Li Shizhen'
        },
        'feature_ai_desc': {
            'zh': '与明代医药学家李时珍智能对话，探索中医药文化的奥秘，获取专业的中医知识指导。',
            'en': 'Intelligent dialogue with Ming Dynasty medical scientist Li Shizhen, explore the mysteries of TCM culture, and get professional TCM knowledge guidance.'
        },
        'feature_knowledge_title': {
            'zh': '智识中医',
            'en': 'TCM Knowledge'
        },
        'feature_knowledge_desc': {
            'zh': '系统全面的中医基础知识，包括中医发展史、中药材库、人体五脏、诊疗方法、名医名篇等。',
            'en': 'Comprehensive TCM basic knowledge, including TCM history, herbal database, five organs, diagnostic methods, famous doctors and classics.'
        },
        'feature_courses_title': {
            'zh': '智课星链',
            'en': 'TCM Micro Courses'
        },
        'feature_courses_desc': {
            'zh': '精选优质中医课程，短小精悍，深入浅出，让您轻松掌握中医知识。',
            'en': 'Selected quality TCM courses, concise and easy to understand, helping you master TCM knowledge effortlessly.'
        },
        'feature_games_title': {
            'zh': '五行智羿',
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
            'zh': '最新微课',
            'en': 'Latest Courses'
        },
        'latest_courses_desc': {
            'zh': '精选优质中医微课程，随时随地学习',
            'en': 'Selected quality TCM micro-courses, learn anytime, anywhere'
        },
        'course_duration': {
            'zh': '分钟',
            'en': 'min'
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
            'zh': '热门互动游戏',
            'en': 'Popular Interactive Games'
        },
        'popular_games_desc': {
            'zh': '寓教于乐，边玩边学中医知识',
            'en': 'Learn while playing TCM knowledge'
        },
        'game_difficulty': {
            'zh': '难度:',
            'en': 'Difficulty:'
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
        'tab_origin': {
            'zh': '中医文化起源',
            'en': 'TCM Origin'
        },
        'tab_development': {
            'zh': '历史发展',
            'en': 'Historical Development'
        },
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
    // translatePage();
});
