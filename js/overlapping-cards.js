// 重叠卡片交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 为所有卡片添加点击事件
    initializeCards();
    
    // 初始化重叠卡片容器
    initializeOverlappingCards();
});

// 初始化普通卡片
function initializeCards() {
    // 获取所有卡片
    const featureCards = document.querySelectorAll('.feature-card');
    const courseCards = document.querySelectorAll('.course-card');
    const gameCards = document.querySelectorAll('.game-card');
    
    // 合并所有卡片
    const allCards = [...featureCards, ...courseCards, ...gameCards];
    
    // 为每个卡片添加点击事件
    allCards.forEach(card => {
        // 获取卡片中的链接
        const cardLink = card.querySelector('a.btn-more, a.feature-link, a.btn-outline');
        
        if (cardLink) {
            // 获取链接地址
            const linkHref = cardLink.getAttribute('href');
            
            // 如果有链接地址且不是空的
            if (linkHref && linkHref !== '#' && linkHref !== '') {
                // 为整个卡片添加点击事件
                card.addEventListener('click', function(e) {
                    // 如果点击的是链接本身，不做额外处理
                    if (e.target === cardLink || cardLink.contains(e.target)) {
                        return;
                    }
                    
                    // 添加活跃状态
                    card.classList.add('active');
                    
                    // 0.3秒后跳转到链接地址
                    setTimeout(() => {
                        window.location.href = linkHref;
                    }, 300);
                });
                
                // 添加鼠标样式
                card.style.cursor = 'pointer';
            }
        }
    });
}

// 初始化重叠卡片容器
function initializeOverlappingCards() {
    // 获取所有堆叠卡片容器
    const stackedContainers = document.querySelectorAll('.stacked-cards');
    
    stackedContainers.forEach(container => {
        const cards = container.querySelectorAll('.feature-card, .course-card, .game-card');
        
        // 为每个卡片设置堆叠效果
        cards.forEach((card, index) => {
            // 设置z-index，使后面的卡片在下面
            card.style.zIndex = cards.length - index;
            
            // 为非第一张卡片添加负margin
            if (index > 0) {
                card.style.marginTop = '-40px';
            }
            
            // 添加鼠标进入事件
            card.addEventListener('mouseenter', function() {
                // 提高当前卡片的z-index
                this.style.zIndex = cards.length + 1;
            });
            
            // 添加鼠标离开事件
            card.addEventListener('mouseleave', function() {
                // 恢复原来的z-index
                this.style.zIndex = cards.length - index;
            });
        });
    });
    
    // 创建专门的重叠卡片容器
    createOverlappingCardsContainers();
}

// 创建专门的重叠卡片容器
function createOverlappingCardsContainers() {
    // 查找页面中是否有指定的容器
    const overlappingContainers = document.querySelectorAll('.overlapping-cards-container');
    
    overlappingContainers.forEach(container => {
        const cards = container.querySelectorAll('.overlapping-card');
        
        cards.forEach(card => {
            // 获取卡片中的链接
            const cardButton = card.querySelector('.card-button')
        })
    })
}