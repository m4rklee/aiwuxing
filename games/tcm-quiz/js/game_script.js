// 游戏数据
const gameData = {
    levels: [
        // 第一关：五脏
        {
            cards: [
                { text: "肝", element: "木" },
                { text: "心", element: "火" },
                { text: "脾", element: "土" },
                { text: "肺", element: "金" },
                { text: "肾", element: "水" }
            ],
            description: "第一关：请将五脏与对应的五行匹配"
        },
        // 第二关：五味
        {
            cards: [
                { text: "酸", element: "木" },
                { text: "苦", element: "火" },
                { text: "甘", element: "土" },
                { text: "辛", element: "金" },
                { text: "咸", element: "水" }
            ],
            description: "第二关：请将五味与对应的五行匹配"
        },
        // 第三关：五色
        {
            cards: [
                { text: "青", element: "木" },
                { text: "赤", element: "火" },
                { text: "黄", element: "土" },
                { text: "白", element: "金" },
                { text: "黑", element: "水" }
            ],
            description: "第三关：请将五色与对应的五行匹配"
        },
        // 第四关：五情
        {
            cards: [
                { text: "怒", element: "木" },
                { text: "喜", element: "火" },
                { text: "思", element: "土" },
                { text: "悲", element: "金" },
                { text: "恐", element: "水" }
            ],
            description: "第四关：请将五情与对应的五行匹配"
        },
        // 第五关：混合
        {
            cards: [
                { text: "肝", element: "木" },
                { text: "苦", element: "火" },
                { text: "黄", element: "土" },
                { text: "肺", element: "金" },
                { text: "恐", element: "水" },
                { text: "酸", element: "木" },
                { text: "心", element: "火" },
                { text: "脾", element: "土" },
                { text: "白", element: "金" },
                { text: "肾", element: "水" }
            ],
            description: "第五关：挑战混合关卡，请将所有概念与对应的五行匹配"
        }
    ]
};

// 游戏状态
let gameState = {
    currentLevel: 0,
    score: 0,
    cardsPlaced: 0,
    totalCards: 0
};

// DOM 元素
const cardsContainer = document.getElementById('cards-container');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const feedbackElement = document.getElementById('feedback');
const nextLevelButton = document.getElementById('next-level');
const restartButton = document.getElementById('restart');
const introModal = document.getElementById('intro-modal');
const startGameButton = document.getElementById('start-game');
const levelTransition = document.getElementById('level-transition');
const completedLevelElement = document.getElementById('completed-level');
const imgCard = document.getElementById('bonus-card')
const nextLevelNumElement = document.getElementById('next-level-num');
const dropZones = document.querySelectorAll('.element-drop-zone');
const finishedLevelTransition = document.getElementById('finished-level-transition');

// 初始化游戏
function initGame() {
    // 显示介绍弹窗
    introModal.style.display = 'flex';
    
    // 绑定开始游戏按钮事件
    startGameButton.addEventListener('click', () => {
        introModal.style.display = 'none';
        loadLevel(0);
    });
    
    // 绑定下一关按钮事件
    nextLevelButton.addEventListener('click', () => {
        showLevelTransition();
    });
    
    // 绑定重新开始按钮事件
    restartButton.addEventListener('click', () => {
        resetGame();
    });
    
    // 设置拖放区域事件
    setupDropZones();
}

// 加载指定关卡
function loadLevel(levelIndex) {
    // 更新游戏状态
    gameState.currentLevel = levelIndex;
    gameState.cardsPlaced = 0;
    gameState.totalCards = gameData.levels[levelIndex].cards.length;
    
    // 更新UI
    levelElement.textContent = levelIndex + 1;
    nextLevelButton.disabled = true;
    
    // 清空卡片容器
    cardsContainer.innerHTML = '';
    
    // 清空所有放置区域
    document.querySelectorAll('.element-drop-zone').forEach(zone => {
        zone.innerHTML = '';
    });
    
    // 显示关卡描述
    feedbackElement.textContent = gameData.levels[levelIndex].description;
    feedbackElement.className = 'feedback-container';
    
    // 创建卡片
    const uniqueCards = Array.from(new Set(gameData.levels[levelIndex].cards.map(JSON.stringify))).map(JSON.parse);
    const shuffledCards = [...uniqueCards].sort(() => Math.random() - 0.5);
    
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card.text;
        cardElement.dataset.element = card.element;
        cardElement.draggable = true;
        
        // 添加拖拽事件
        cardElement.addEventListener('dragstart', dragStart);
        cardElement.addEventListener('dragend', dragEnd);
        
        cardsContainer.appendChild(cardElement);
    });
}

// 设置拖放区域事件
function setupDropZones() {
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('dragenter', dragEnter);
        zone.addEventListener('dragleave', dragLeave);
        zone.addEventListener('drop', drop);
    });
}

// 修改后的拖放处理逻辑
let draggedElement = null;

// 拖拽开始
function dragStart(e) {
    // e.dataTransfer.setData('text/plain', e.target.textContent);
    // e.target.classList.add('dragging');
    // e.dataTransfer.effectAllowed = 'move';
    // e.target.classList.add('dragging');
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.textContent);
}

// 拖拽结束
function dragEnd(e) {
    // e.target.classList.remove('dragging');
    e.target.classList.remove('dragging');
    draggedElement = null;
}

// 拖拽经过
function dragOver(e) {
    e.preventDefault();
}

// 拖拽进入
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('highlight');
}

// 拖拽离开
function dragLeave(e) {
    e.target.classList.remove('highlight');
}

// 放置卡片
function drop(e) {
    // e.preventDefault();
    // const dropZone = e.target.closest('.element-drop-zone');
    // dropZone.classList.remove('highlight');
    
    // const cardText = e.dataTransfer.getData('text/plain');
    // const draggedCard = document.querySelector(`.card:not(.placed-card):not(.card-correct):not(.card-wrong)[draggable="true"]:not([style*="display: none"])`);
    
    // if (!draggedCard) return;
    e.preventDefault();
    const dropZone = e.target.closest('.element-drop-zone');
    dropZone.classList.remove('highlight');
    
    // 直接获取被拖动的元素
    const cardText = e.dataTransfer.getData('text/plain');
    const draggedCard = document.querySelector('.dragging');
    if (!draggedCard) return;
    
    const targetElement = dropZone.closest('.element-box').dataset.element;
    const cardElement = draggedCard.dataset.element;
    
    // 检查是否正确
    if (cardElement === targetElement) {
        // 正确
        gameState.score += 10;
        gameState.cardsPlaced++;
        
        // 创建一个新的卡片放在放置区域
        const placedCard = document.createElement('div');
        placedCard.className = 'card placed-card card-correct';
        placedCard.textContent = cardText;
        dropZone.appendChild(placedCard);
        
        // 隐藏原卡片
        draggedCard.style.display = 'none';
        
        // 显示反馈
        feedbackElement.textContent = `正确！${cardText}属于${targetElement}。`;
        feedbackElement.className = 'feedback-container correct';
    } else {
        // 错误
        gameState.score = Math.max(0, gameState.score - 5);
        
        // 显示错误动画
        draggedCard.classList.add('card-wrong');
        setTimeout(() => {
            draggedCard.classList.remove('card-wrong');
        }, 1000);
        
        // 显示反馈
        feedbackElement.textContent = `错误！${cardText}不属于${targetElement}，请再试一次。`;
        feedbackElement.className = 'feedback-container wrong';
    }
    
    // 更新分数
    scoreElement.textContent = gameState.score;
    
    // 检查是否完成关卡
    checkLevelCompletion();
}

// 检查关卡是否完成
function checkLevelCompletion() {
    if (gameState.cardsPlaced === gameState.totalCards) {
        feedbackElement.textContent = `恭喜！你已完成第${gameState.currentLevel + 1}关！`;
        imgCard.src = `imgs/${gameState.currentLevel + 1}.png`;
        feedbackElement.className = 'feedback-container correct';
        
        // 如果不是最后一关，启用下一关按钮
        if (gameState.currentLevel < gameData.levels.length - 1) {
            nextLevelButton.disabled = false;
        } else {
            finished();
            feedbackElement.textContent = '恭喜！你已完成所有关卡！最终得分：' + gameState.score;
        }
    }
}

// 显示关卡过渡动画
function showLevelTransition() {
    completedLevelElement.textContent = gameState.currentLevel + 1;
    nextLevelNumElement.textContent = gameState.currentLevel + 2;
    
    levelTransition.classList.add('show');
    
    // 启动进度条动画
    const progressBar = document.querySelector('.loading-progress');
    progressBar.style.width = '0%';

    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);
    
    // 3秒后加载下一关
    setTimeout(() => {
        levelTransition.classList.remove('show');
        loadLevel(gameState.currentLevel + 1);
    }, 3000);
}

function finished(){
    finishedLevelTransition.classList.add('show')
}

// 重置游戏
function resetGame() {
    gameState.currentLevel = 0;
    gameState.score = 0;
    gameState.cardsPlaced = 0;
    transitionRestart.style = 'display: none';
    scoreElement.textContent = '0';
    loadLevel(0);
}

// 新增处理函数
function handleCorrectDrop(card, dropZone) {
    gameState.score += 10;
    gameState.cardsPlaced++;
    
    const placedCard = card.cloneNode(true);
    placedCard.className = 'card placed-card card-correct';
    placedCard.draggable = false;
    dropZone.appendChild(placedCard);
    
    card.remove();
    
    feedbackElement.textContent = `正确！${card.textContent}属于${dropZone.closest('.element-box').dataset.element}。`;
    feedbackElement.className = 'feedback-container correct';
}

function handleWrongDrop(card) {
    gameState.score = Math.max(0, gameState.score - 5);
    
    card.classList.add('card-wrong');
    setTimeout(() => {
        card.classList.remove('card-wrong');
        card.style.removeProperty('transform');
    }, 1000);
    
    // 添加抖动动画
    card.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 300,
        iterations: 2
    });
    
    feedbackElement.textContent = `错误！${card.textContent}不属于${card.dataset.element}，请再试一次。`;
    feedbackElement.className = 'feedback-container wrong';
}


// 初始化游戏
document.addEventListener('DOMContentLoaded', initGame);