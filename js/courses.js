/* 微课和游戏  */
// 微课和游戏数据
const courseData = {
    'basic-theory': {
        title: '一分钟了解五行相生',
        img_name: 'wuxing_sheng',
        description: '本课程解析木、火、土、金、水五种元素间“相互滋生”的关系，如木生火、火生土的自然循环逻辑。',
        videoSrc: 'courses/wuxing_sheng.mp4',
        duration: '1分钟',
        chapters: [
            { title: '第一章：阴阳五行学说', duration: '3:45' },
            { title: '第二章：藏象学说', duration: '4:20' },
            { title: '第三章：经络学说', duration: '3:55' },
            { title: '第四章：气血津液', duration: '3:00' }
        ],
        resources: [
            { title: '中医基础理论思维导图', type: 'pdf', url: '#' },
            { title: '阴阳五行对照表', type: 'doc', url: '#' },
            { title: '经络穴位参考图', type: 'image', url: '#' }
        ],
        related: ['herb-identification', 'meridian-points', 'diagnosis-methods']
    },
    'herb-identification': {
        title: '一分钟了解五行相克',
        img_name: 'wuxing_ke',
        description: '本课程说明五行之间“相互制约”的规律，如水克火、火克金，维持动态平衡的哲学内涵。',
        videoSrc: 'courses/wuxing_ke.mp4',
        duration: '1分钟',
        chapters: [
            { title: '第一章：中药材分类概述', duration: '4:15' },
            { title: '第二章：根茎类中药识别', duration: '5:30' },
            { title: '第三章：花果类中药识别', duration: '5:45' },
            { title: '第四章：动物矿物类中药识别', duration: '4:30' }
        ],
        resources: [
            { title: '常用中药材图谱', type: 'pdf', url: '#' },
            { title: '中药材性味归经表', type: 'excel', url: '#' },
            { title: '中药材识别要点总结', type: 'doc', url: '#' }
        ],
        related: ['basic-theory', 'food-therapy', 'seasonal-health']
    },
    'meridian-points': {
        title: '五行音乐疗法',
        img_name: 'wuxing_music',
        description: '本课程介绍如何结合五行理论，用角、徵、宫、商、羽五音对应木火土金水，通过特定音律调节身心能量。',
        videoSrc: 'courses/music.mp4',
        duration: '1分钟',
        chapters: [
            { title: '第一章：经络系统概述', duration: '5:20' },
            { title: '第二章：十二经脉分布规律', duration: '6:45' },
            { title: '第三章：常用腧穴定位方法', duration: '7:30' },
            { title: '第四章：穴位按压保健法', duration: '5:25' }
        ],
        resources: [
            { title: '经络穴位图谱', type: 'pdf', url: '#' },
            { title: '常用穴位定位与功效表', type: 'doc', url: '#' },
            { title: '经络穴位保健操视频', type: 'video', url: '#' }
        ],
        related: ['basic-theory', 'diagnosis-methods', 'seasonal-health']
    },
    'seasonal-health': {
        title: '中医与人体',
        img_name: 'zhongyi_body',
        description: '本课程介绍探讨五行学说在中医中的应用，如五脏（肝心脾肺肾）与五行的对应关系及生理功能联动。',
        videoSrc: 'courses/tcm_body.mp4',
        duration: '1分钟',
        chapters: [
            { title: '第一章：春季养生', duration: '4:15' },
            { title: '第二章：夏季养生', duration: '4:30' },
            { title: '第三章：秋季养生', duration: '4:45' },
            { title: '第四章：冬季养生', duration: '4:30' }
        ],
        resources: [
            { title: '四季养生食材表', type: 'pdf', url: '#' },
            { title: '四季养生穴位保健图', type: 'image', url: '#' },
            { title: '四季养生食疗方案', type: 'doc', url: '#' }
        ],
        related: ['food-therapy', 'herb-identification', 'basic-theory']
    },
    'diagnosis-methods': {
        title: '五行学说简介',
        img_name: 'wuxing_intro',
        description: '本课程介绍概述五行理论的核心概念及应用领域。',
        videoSrc: 'courses/introduction.mp4',
        duration: '1分钟30秒',
        chapters: [
            { title: '第一章：望诊', duration: '5:45' },
            { title: '第二章：闻诊', duration: '4:30' },
            { title: '第三章：问诊', duration: '6:15' },
            { title: '第四章：切诊', duration: '5:30' }
        ],
        resources: [
            { title: '舌诊图谱', type: 'pdf', url: '#' },
            { title: '脉诊要点总结', type: 'doc', url: '#' },
            { title: '四诊合参案例分析', type: 'pdf', url: '#' }
        ],
        related: ['basic-theory', 'meridian-points', 'food-therapy']
    },
    'food-therapy': {
        title: '假如五行人格会说话',
        img_name: 'wuxing_talk',
        description: '本课程介绍阳木和阴木人格的特点及适合的职业发展方向。',
        videoSrc: 'courses/organ_sports.mp4',
        duration: '39秒',
        chapters: [
            { title: '第一章：食物的四气五味', duration: '4:00' },
            { title: '第二章：食物的归经和功效', duration: '4:15' },
            { title: '第三章：常见体质的食疗调理', duration: '4:45' },
            { title: '第四章：四季食疗方案', duration: '3:00' }
        ],
        resources: [
            { title: '常用食材性味归经表', type: 'excel', url: '#' },
            { title: '九种体质食疗方案', type: 'pdf', url: '#' },
            { title: '四季养生食谱', type: 'doc', url: '#' }
        ],
        related: ['seasonal-health', 'herb-identification', 'basic-theory']
    },
    'lishizhen': {
        title: '五脏与五味的对应',
        img_name: 'lishizhen',
        description: ' 阳木特质：外向积极、自信热情，如大树般生机勃发。不足：易急躁冲动，好胜心过强，忽略他人感受。行为倾向：适合创业、营销或创新领域。',
        videoSrc: 'courses/lishizhen.mp4',
        duration: '39秒',
        chapters: [
            { title: '第一章：食物的四气五味', duration: '4:00' },
            { title: '第二章：食物的归经和功效', duration: '4:15' },
            { title: '第三章：常见体质的食疗调理', duration: '4:45' },
            { title: '第四章：四季食疗方案', duration: '3:00' }
        ],
        resources: [
            { title: '常用食材性味归经表', type: 'excel', url: '#' },
            { title: '九种体质食疗方案', type: 'pdf', url: '#' },
            { title: '四季养生食谱', type: 'doc', url: '#' }
        ],
        related: ['seasonal-health', 'herb-identification', 'basic-theory']
    }
};

const gameData = {
    'herb-matching': {
        title: '中药配伍大师',
        description: '通过选择合适的中药组合来治疗不同的症状，体验中医配伍的奥妙。游戏设置多个难度级别，从简单的单方到复杂的多药组合，逐步提高挑战性。',
        difficulty: '中等',
        instructions: `
            <ol>
                <li>根据游戏提供的症状描述，从药材架上选择合适的中药。</li>
                <li>将选中的药材拖放到药煎锅中。</li>
                <li>点击"配伍"按钮，系统会评估你的选择。</li>
                <li>根据配伍的合理性获得相应分数。</li>
                <li>每关有时间限制，在规定时间内完成配伍。</li>
            </ol>
        `,
        learningPoints: [
            '了解常用中药的功效与主治',
            '掌握中药配伍的基本原则',
            '学习辨证论治的思维方法',
            '熟悉常见证型的用药规律'
        ],
        related: ['herb-recognition', 'meridian-explorer', 'tcm-quiz']
    },
    'meridian-explorer': {
        title: '经络穴位探索',
        description: '通过互动式3D人体模型，探索人体经络系统和重要穴位。游戏将引导玩家了解各条经络的走向、分布规律以及重要穴位的位置和作用。',
        difficulty: '初级',
        instructions: `
            <ol>
                <li>使用鼠标旋转3D人体模型，查看不同角度的经络分布。</li>
                <li>点击人体上的穴位标记，了解穴位信息。</li>
                <li>在"探索模式"中自由学习，在"挑战模式"中回答问题。</li>
                <li>完成经络连线任务，将散落的穴位按正确顺序连接。</li>
                <li>通过关卡挑战，解锁更多经络知识。</li>
            </ol>
        `,
        learningPoints: [
            '了解十二经脉的分布规律',
            '掌握常用穴位的位置和功效',
            '理解经络在人体中的循行路线',
            '学习穴位按压的基本方法'
        ],
        related: ['herb-matching', 'diagnosis-challenge', 'five-elements-balance']
    },
    'diagnosis-challenge': {
        title: '名医诊断挑战',
        description: '扮演中医师角色，运用望闻问切四诊法为虚拟患者进行诊断和治疗。游戏设置多种疾病类型和证型，玩家需要通过分析症状，做出正确的诊断和治疗方案。',
        difficulty: '高级',
        instructions: `
            <ol>
                <li>查看患者的基本信息和主诉。</li>
                <li>通过望诊观察患者面色、舌象等。</li>
                <li>通过闻诊了解患者的气味和声音。</li>
                <li>通过问诊询问患者的症状和病史。</li>
                <li>通过切诊检查患者的脉象。</li>
                <li>综合分析，做出诊断并制定治疗方案。</li>
            </ol>
        `,
        learningPoints: [
            '掌握望闻问切四诊法的应用',
            '学习辨证论治的思维过程',
            '了解常见疾病的证型特点',
            '提高中医诊断和治疗的综合能力'
        ],
        related: ['herb-matching', 'meridian-explorer', 'tcm-quiz']
    },
    "tcm-quiz": {
        title: "五行归类大挑战",
        description: "通过五行归类挑战，测试您的中医知识水平，了解中医五行相生相克的基本理论。",
        instructions: [
            "将左侧的中医概念卡片拖动到右侧对应的五行分类区域",
            "正确分类得10分，错误分类扣5分",
            "完成当前关卡所有卡片分类后，可进入下一关",
            "游戏共有5个关卡，难度逐渐提升"
        ],
        learningPoints: [
            "了解中医五行理论的基本概念",
            "掌握五脏、五味、五色、五情与五行的对应关系",
            "理解五行相生相克的基本规律",
            "加深对中医整体观念的认识"
        ],
        gameUrl: "games/tcm-quiz/index.html",
        relatedGames: ["herb-matching", "five-elements-balance", "meridian-explorer"]
    },
    'five-elements-balance': {
        title: '五行平衡',
        description: '通过调整五行元素的比例，达成阴阳平衡。游戏模拟五行相生相克的关系，玩家需要根据不同情境，调整五行元素的强弱，解决失衡问题。',
        difficulty: '初级',
        instructions: `
            <ol>
                <li>观察游戏场景中的五行状态。</li>
                <li>分析哪些元素过盛或不足。</li>
                <li>通过拖动滑块调整各元素的强度。</li>
                <li>注意五行相生相克的关系。</li>
                <li>达到平衡状态后进入下一关。</li>
                <li>难度逐渐提高，平衡条件更加复杂。</li>
            </ol>
        `,
        learningPoints: [
            '理解五行相生相克的关系',
            '掌握阴阳平衡的基本原理',
            '学习中医整体观念的思维方式',
            '了解五行在中医理论中的应用'
        ],
        related: ['meridian-explorer', 'tcm-quiz', 'herb-matching']
    },
    'herb-recognition': {
        title: '中药材识别挑战',
        description: '通过图像识别常用中药材，学习它们的性味归经和功效。游戏提供多种中药材的图片，玩家需要正确识别并回答相关问题。',
        difficulty: '中等',
        instructions: `
        <ol>
            <li>观察显示的中药材图片。</li>
            <li>从多个选项中选择正确的药材名称。</li>
            <li>回答关于该药材的性味归经、功效等问题。</li>
            <li>答对可获得积分，连续答对有额外奖励。</li>
            <li>游戏分为初级、中级和高级三个难度。</li>
            <li>完成挑战后可查看中药材知识库。</li>
        </ol>
    `,
        learningPoints: [
            '掌握常用中药材的外观特征',
            '了解中药材的性味归经和功效',
            '学习中药材的分类方法',
            '熟悉中药材的使用禁忌'
        ],
        related: ['herb-matching', 'food-therapy', 'tcm-quiz']
    }
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 检查当前页面
    const currentPage = window.location.pathname.split('/').pop();
    console.log(currentPage)

    // 处理微课详情页
    if ('course-detail.html'.includes(currentPage)) {
        loadCourseDetail();
    }

    // 处理游戏详情页
    if ('game-detail.html'.includes(currentPage)) {
        loadGameDetail();
    }
});

// 加载微课详情
function loadCourseDetail() {
    // 获取URL参数中的课程ID
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    if (courseId && courseData[courseId]) {
        const course = courseData[courseId];

        // 更新页面标题
        document.title = `${course.title} - 中医文化平台`;

        // 更新课程信息
        document.getElementById('courseTitle').textContent = course.title;
        document.getElementById('courseDescription').textContent = course.description;

        // 模拟视频加载
        const videoContainer = document.getElementById('courseVideo');
        videoContainer.innerHTML = `
        <div class="video-placeholder">
            <i class="fas fa-play-circle"></i>
        </div>
    `;

        // 添加视频点击事件
        videoContainer.addEventListener('click', function () {
            this.innerHTML = `
            <video controls autoplay>
                <source src="${course.videoSrc}" type="video/mp4">
                您的浏览器不支持HTML5视频标签。
            </video>
            `;
        });
        

        // 加载章节列表
        const chaptersContainer = document.getElementById('courseChapters');
        if (chaptersContainer && course.chapters) {
            chaptersContainer.innerHTML = '';
            course.chapters.forEach((chapter, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                <div class="chapter-item">
                    <span class="chapter-number">${index + 1}</span>
                    <div class="chapter-info">
                        <h4>${chapter.title}</h4>
                        <span class="chapter-duration"><i class="fas fa-clock"></i> ${chapter.duration}</span>
                    </div>
                </div>
            `;
                chaptersContainer.appendChild(li);
            });
        }

        // 加载资源列表
        const resourcesContainer = document.getElementById('courseResources');
        if (resourcesContainer && course.resources) {
            resourcesContainer.innerHTML = '';
            course.resources.forEach(resource => {
                const li = document.createElement('li');
                let iconClass = 'fa-file';

                switch (resource.type) {
                    case 'pdf': iconClass = 'fa-file-pdf'; break;
                    case 'doc': iconClass = 'fa-file-word'; break;
                    case 'excel': iconClass = 'fa-file-excel'; break;
                    case 'image': iconClass = 'fa-image'; break;
                    case 'video': iconClass = 'fa-video'; break;
                }

                li.innerHTML = `
                <a href="${resource.url}" target="_blank" class="resource-link">
                    <i class="far ${iconClass}"></i> ${resource.title}
                </a>
            `;
                resourcesContainer.appendChild(li);
            });
        }

        // 加载相关课程
        const relatedContainer = document.getElementById('relatedCourses');
        if (relatedContainer && course.related) {
            relatedContainer.innerHTML = '';
            course.related.forEach(relatedId => {
                if (courseData[relatedId]) {
                    const relatedCourse = courseData[relatedId];
                    const div = document.createElement('div');
                    div.className = 'course-card';
                    div.innerHTML = `
                    <div class="course-image">
                        <img src="pics/courses/${relatedCourse.img_name}.jpg" alt="${relatedCourse.title}">
                        <div class="course-duration"><i class="fas fa-clock"></i> ${relatedCourse.duration}</div>
                    </div>
                    <div class="course-info">
                        <h3>${relatedCourse.title}</h3>
                        <p>${truncateText(relatedCourse.description, 80)}</p>
                        <a href="course-detail.html?id=${relatedId}" class="btn-more">开始学习</a>
                    </div>
                `;
                    relatedContainer.appendChild(div);
                }
            });
        }
    } else {
        // 课程不存在，显示错误信息
        document.querySelector('.course-detail').innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h3>课程未找到</h3>
            <p>抱歉，您请求的课程不存在或已被移除。</p>
            <a href="microcourses.html" class="btn-more">返回课程列表</a>
        </div>
    `;
    }
}

// 加载游戏详情
function loadGameDetail() {
    // 获取URL参数中的游戏ID
    // const urlParams = new URLSearchParams(window.location.search);
    // const gameId = urlParams.get('id');
    // console.log(gameId)
    // if (gameId && gameData[gameId]) {
    //     const game = gameData[gameId];

    //     // 更新页面标题
    //     document.title = `${game.title} - 中医文化平台`;

    //     // 更新游戏信息
    //     document.getElementById('gameTitle').textContent = game.title;
    //     document.getElementById('gameDescription').textContent = game.description;

    //     // 模拟游戏加载
    //     const gameFrame = document.getElementById('gameFrame');
    //     setTimeout(() => {
    //         gameFrame.innerHTML = `
    //         <div class="game-placeholder">
    //             <i class="fas fa-gamepad"></i>
    //             <p>点击开始《${game.title}》</p>
    //         </div>
    //     `;

    //         // 添加游戏点击事件
    //         gameFrame.addEventListener('click', function () {
    //             this.innerHTML = `
    //             <div class="game-interface">
    //                 <h3>游戏演示界面</h3>
    //                 <p>这里将展示${game.title}的游戏界面</p>
    //                 <div class="game-controls">
    //                     <button class="game-button"><i class="fas fa-play"></i> 开始</button>
    //                     <button class="game-button"><i class="fas fa-redo"></i> 重置</button>
    //                     <button class="game-button"><i class="fas fa-question-circle"></i> 帮助</button>
    //                 </div>
    //             </div>
    //         `;
    //         });
    //     }, 1500);
    

        // // 加载游戏规则
        // const instructionsContainer = document.getElementById('gameInstructions');
        // if (instructionsContainer) {
        //     instructionsContainer.innerHTML = game.instructions;
        // }

        // // 加载学习要点
        // const learningPointsContainer = document.getElementById('gameLearningPoints');
        // if (learningPointsContainer && game.learningPoints) {
        //     learningPointsContainer.innerHTML = '';
        //     game.learningPoints.forEach(point => {
        //         const li = document.createElement('li');
        //         li.textContent = point;
        //         learningPointsContainer.appendChild(li);
        //     });
        // }
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    if (gameId && gameData[gameId]) {
        const game = gameData[gameId];
        
        // 更新页面标题和游戏信息
        document.getElementById('gameTitle').textContent = game.title;
        document.getElementById('gameDescription').textContent = game.description;
        
        // 更新游戏规则
        const instructionsEl = document.getElementById('gameInstructions');
        instructionsEl.innerHTML = '';
        const instructionsList = document.createElement('ul');
        game.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });
        instructionsEl.appendChild(instructionsList);
        
        // 更新学习要点
        const learningPointsEl = document.getElementById('gameLearningPoints');
        learningPointsEl.innerHTML = '';
        game.learningPoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            learningPointsEl.appendChild(li);
        });
        
        // 加载游戏
        const gameFrame = document.getElementById('gameFrame');
        gameFrame.innerHTML = `<iframe src="${game.gameUrl}" width="100%" height="600" frameborder="0"></iframe>`;
        // 加载相关游戏
        const relatedContainer = document.getElementById('relatedGames');
        if (relatedContainer && game.related) {
            relatedContainer.innerHTML = '';
            game.related.forEach(relatedId => {
                if (gameData[relatedId]) {
                    const relatedGame = gameData[relatedId];
                    const div = document.createElement('div');
                    div.className = 'game-card';

                    // 创建难度星级显示
                    let difficultyStars = '';
                    let starCount = 0;

                    if (relatedGame.difficulty === '初级') starCount = 1;
                    else if (relatedGame.difficulty === '中等') starCount = 2;
                    else if (relatedGame.difficulty === '高级') starCount = 3;

                    for (let i = 0; i < 3; i++) {
                        if (i < starCount) {
                            difficultyStars += '<i class="fas fa-star"></i>';
                        } else {
                            difficultyStars += '<i class="far fa-star"></i>';
                        }
                    }

                    div.innerHTML = `
                    <div class="game-image">
                        <img src="https://placeholder.pics/svg/300x200/${getRandomColor()}/FFFFFF/${relatedGame.title}" alt="${relatedGame.title}">
                        <div class="game-difficulty">难度: ${difficultyStars}</div>
                    </div>
                    <div class="game-info">
                        <h3>${relatedGame.title}</h3>
                        <p>${truncateText(relatedGame.description, 80)}</p>
                        <a href="game-detail.html?id=${relatedId}" class="btn-more">开始游戏</a>
                    </div>
                `;
                    relatedContainer.appendChild(div);
                }
            });
        }
    } else {
        // 游戏不存在，显示错误信息
        document.querySelector('.game-detail').innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h3>游戏未找到</h3>
            <p>抱歉，您请求的游戏不存在或已被移除。</p>
            <a href="games.html" class="btn-more">返回游戏列表</a>
        </div>
    `;
    }
}

// 辅助函数：截断文本
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

// 辅助函数：获取随机颜色
function getRandomColor() {
    const colors = ['A08052', 'AAA973', 'C58770', 'E8D5B4', 'F0C756'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 添加额外的CSS样式
const extraStyles = document.createElement('style');
extraStyles.textContent = `
.chapter-item {
    display: flex;
    align-items: center;
}

.chapter-number {
    width: 30px;
    height: 30px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    flex-shrink: 0;
}

.chapter-info {
    flex: 1;
}

.chapter-info h4 {
    margin-bottom: 5px;
    color: var(--color-text);
}

.chapter-duration {
    font-size: 0.9rem;
    color: var(--color-text-light);
}

.resource-link {
    display: flex;
    align-items: center;
    padding: 5px 0;
}

.resource-link i {
    margin-right: 10px;
    color: var(--color-primary);
}

.error-message {
    text-align: center;
    padding: 50px 20px;
}

.error-message i {
    font-size: 3rem;
    color: var(--color-accent);
    margin-bottom: 20px;
}

.error-message h3 {
    color: var(--color-primary);
    margin-bottom: 15px;
}

.game-interface {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light);
    color: var(--color-text);
    padding: 20px;
    text-align: center;
}

.game-controls {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

.game-button {
    background-color: var(--color-primary);
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    transition: var(--transition);
    display: flex;
    align-items: center;
}

.game-button i {
    margin-right: 5px;
}

.game-button:hover {
    background-color: var(--color-accent);
}

.game-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light);
    color: var(--color-primary);
    cursor: pointer;
}

.game-placeholder i {
    font-size: 4rem;
    margin-bottom: 20px;
}

.game-placeholder:hover {
    background-color: var(--color-secondary);
}
`;

document.head.appendChild(extraStyles);