document.addEventListener('DOMContentLoaded', function() {
    // 标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 移除所有标签的激活状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // 激活当前标签
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 五行人格测试
    const generateReportBtn = document.getElementById('generate-report');
    const personalityResult = document.getElementById('personality-result');
    
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', function() {
            const birthDate = document.getElementById('birth-date').value;
            
            if (!birthDate) {
                alert('请输入您的出生日期');
                return;
            }
            
            // 根据出生日期计算五行属性
            const element = calculateFiveElement(birthDate);
            
            // 显示结果
            showPersonalityResult(element);
        });
    }
    
    // 点赞功能
    const likeButtons = document.querySelectorAll('.action-btn.like');
    
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const likeCount = this.querySelector('span');
            let count = parseInt(likeCount.textContent);
            
            // 切换点赞状态
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                this.querySelector('i').className = 'far fa-heart';
                count--;
            } else {
                this.classList.add('liked');
                this.querySelector('i').className = 'fas fa-heart';
                count++;
            }
            
            likeCount.textContent = count;
        });
    });
    
    // 投票功能
    const pollOptions = document.querySelectorAll('.poll-option');
    
    pollOptions.forEach(option => {
        option.addEventListener('click', function() {
            const isSupport = this.classList.contains('support');
            const pollBar = this.closest('.topic-poll').querySelector('.poll-bar');
            const supportProgress = pollBar.querySelector('.poll-progress.support');
            const opposeProgress = pollBar.querySelector('.poll-progress.oppose');
            
            // 模拟投票结果更新
            if (isSupport) {
                supportProgress.style.width = '70%';
                supportProgress.textContent = '70%';
                opposeProgress.style.width = '30%';
                opposeProgress.textContent = '30%';
            } else {
                supportProgress.style.width = '60%';
                supportProgress.textContent = '60%';
                opposeProgress.style.width = '40%';
                opposeProgress.textContent = '40%';
            }
            
            // 禁用投票按钮
            pollOptions.forEach(opt => {
                opt.disabled = true;
                opt.style.opacity = '0.7';
                opt.style.cursor = 'default';
            });
            
            // 显示投票成功消息
            alert('投票成功！感谢您的参与。');
        });
    });
    
    // 分享功能
    const shareTwitter = document.getElementById('share-twitter');
    const shareWeibo = document.getElementById('share-weibo');
    
    if (shareTwitter) {
        shareTwitter.addEventListener('click', function(e) {
            e.preventDefault();
            const text = `我的五行属性是：${document.getElementById('result-title').textContent.replace('您的五行属性：', '')}！来自全球五行研究所 #我的五行人格`;
            const url = window.location.href;
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        });
    }
    
    if (shareWeibo) {
        shareWeibo.addEventListener('click', function(e) {
            e.preventDefault();
            const text = `我的五行属性是：${document.getElementById('result-title').textContent.replace('您的五行属性：', '')}！来自全球五行研究所 #我的五行人格`;
            const url = window.location.href;
            window.open(`http://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
        });
    }
});

/**
 * 根据出生日期计算五行属性
 * 这里使用一个简单的算法，根据日期计算五行属性
 */
function calculateFiveElement(birthDate) {
    const date = new Date(birthDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // 简化的计算方法，实际应用中可使用更准确的五行计算方法
    const sum = year + month + day;
    const remainder = sum % 5;
    
    // 0-木, 1-火, 2-土, 3-金, 4-水
    const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
    const elementNames = ['木', '火', '土', '金', '水'];
    const traits = [
        '灵活创新、仁慈善良，但易冲动',
        '热情活力、充满创造力，但易急躁',
        '稳重踏实、思维缜密，但易固执',
        '果断决策、严谨自律，但易刚愎',
        '聪明智慧、适应力强，但易消极'
    ];
    const advice = [
        '多听角调式音乐，佩戴红色玛瑙平衡能量',
        '多听商调式音乐，佩戴白玉平衡能量',
        '多听宫调式音乐，佩戴黑曜石平衡能量',
        '多听徵调式音乐，佩戴绿玉平衡能量',
        '多听羽调式音乐，佩戴黄水晶平衡能量'
    ];
    
    return {
        element: elements[remainder],
        name: elementNames[remainder],
        traits: traits[remainder],
        advice: advice[remainder]
    };
}

/**
 * 显示五行人格测试结果
 */
function showPersonalityResult(element) {
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultTraits = document.getElementById('result-traits');
    const resultAdvice = document.getElementById('result-advice');
    const personalityResult = document.getElementById('personality-result');
    
    // 设置图标和类名
    resultIcon.className = `element-icon ${element.element}`;
    
    // 设置图标
    let iconClass = '';
    switch (element.element) {
        case 'wood':
            iconClass = 'fas fa-tree';
            break;
        case 'fire':
            iconClass = 'fas fa-fire';
            break;
        case 'earth':
            iconClass = 'fas fa-mountain';
            break;
        case 'metal':
            iconClass = 'fas fa-coins';
            break;
        case 'water':
            iconClass = 'fas fa-water';
            break;
    }
    
    resultIcon.innerHTML = `<i class="${iconClass}"></i>`;
    
    // 设置文本内容
    resultTitle.textContent = `您的五行属性：${element.name}`;
    resultTraits.textContent = element.traits;
    resultAdvice.textContent = element.advice;
    
    // 显示结果
    personalityResult.style.display = 'block';
    
    // 平滑滚动到结果区域
    personalityResult.scrollIntoView({ behavior: 'smooth' });
}
