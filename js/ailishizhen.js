// ailishizhen.js 完整代码
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatContainer = document.querySelector('.chat-container');
    const clearButton = document.getElementById('clear-chat');
    const themeToggle = document.getElementById('theme-toggle');

    // 消息历史记录
    let messageHistory = [
        {
            role: "system",
            content: "请你扮演中国明代医药学家李时珍，作为用户的中医老师，可以为用户提供以下功能与服务：分享你所了解的中医知识与自己的生平经历；回答用户的问题，并且进一步阐释；语言亲切而严厉，可以增加李时珍本人的生活经历于回答之中；在一系列长对话结束时，以提问该对话内容的方式，考核用户对中医知识的把握程度，并且提供建议。"
        },
        {
            role: "assistant",
            content: "吾乃李时珍，字东璧，号濒湖。欢迎你前来求学问道！作为你的中医老师，我愿与你分享医道精华，解答疑惑。你有何问题，尽管道来。"
        }
    ];

    // 词云实例
    // 获取词云按钮
    // const wordcloudButton = document.getElementById('wordcloud-button');

    // 初始化
    const initialMessage = document.querySelector('.ai-message');
    initialMessage && setTimeout(() => initialMessage.classList.add('visible'), 300);
    loadMessageHistory();

    async function sendMessageToAI(userMessage) {
        try {
            const loadingMessage = createLoadingMessage();
            chatMessages.appendChild(loadingMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            messageHistory.push({ role: "user", content: userMessage });

            // 直接调用DeepSeek流式API
            const response = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer sk-auaopkdytwqxmfmaevxuikiwfefsjfsxwivkysvxjkqybevq' // 替换为真实API密钥
                },
                body: JSON.stringify({
                    model: "Pro/deepseek-ai/DeepSeek-V3",
                    messages: messageHistory,
                    stream: true
                })
            });

            if (!response.ok) throw new Error('API请求失败');

            chatMessages.removeChild(loadingMessage);
            const aiMessageDiv = createEmptyAIMessage();
            chatMessages.appendChild(aiMessageDiv);
            const aiMessageContent = aiMessageDiv.querySelector('.message-text');
            aiMessageDiv.classList.add('visible');

            let fullAIResponse = '';
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value);
                while (buffer.indexOf('\n') >= 0) {
                    const lineEnd = buffer.indexOf('\n');
                    const line = buffer.slice(0, lineEnd);
                    buffer = buffer.slice(lineEnd + 1);

                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') break;

                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.choices[0].delta?.content) {
                                fullAIResponse += parsed.choices[0].delta.content;
                                updateAIMessageContent(aiMessageContent, fullAIResponse);
                                chatMessages.scrollTop = chatMessages.scrollHeight;
                            }
                        } catch (e) {
                            console.error('解析错误:', e);
                        }
                    }
                }
            }

            messageHistory.push({ role: "assistant", content: fullAIResponse });
            saveMessageHistory();
            addHerbAnimation();

        } catch (error) {
            console.error('发送消息失败:', error);
            document.querySelector('.loading-message')?.remove();
            displayErrorMessage('通信失败，请稍后再试。');
        }
    }

    // // 词云生成函数优化
    // async function generateWordCloud() {
    //     try {
    //         // 显示加载状态
    //         wordcloudButton.classList.add('wordcloud-loading');
            
    //         // 延迟确保动画显示
    //         await new Promise(resolve => setTimeout(resolve, 50));

    //         // 分析对话内容
    //         const allText = messageHistory
    //             .filter(msg => !['system'].includes(msg.role))
    //             .map(msg => msg.content)
    //             .join(' ');
    //         console.log(allText)
    //         // 使用更准确的中文分词
    //         const words = allText.match(/[\u4e00-\u9fa5]{2,}/g) || [];
            
    //         if (words.length < 10) {
    //             displayErrorMessage('至少需要10个中文字符才能生成词云');
    //             return;
    //         }

    //         // 统计词频（过滤常见虚词）
    //         const stopWords = ['然后', '所以', '但是', '这个', '那个'];
    //         const wordCount = words.reduce((acc, word) => {
    //             if (!stopWords.includes(word)) {
    //                 acc[word] = (acc[word] || 0) + 1;
    //             }
    //             return acc;
    //         }, {});

    //         // 生成词云数据
    //         const wordList = Object.entries(wordCount)
    //             .sort((a, b) => b[1] - a[1])
    //             .slice(0, 50);

    //         // 渲染词云
    //         const container = document.getElementById('wordcloud-container');
    //         container.innerHTML = '';
            
    //         WordCloud(container, {
    //             list: wordList,
    //             gridSize: Math.round(16 * (container.offsetWidth / 500)),
    //             weightFactor: size => Math.pow(size, 1.5) * 30,
    //             fontFamily: 'Microsoft YaHei, SimSun, serif',
    //             color: (word, weight) => {
    //                 const hue = Math.floor(Math.random() * 360);
    //                 return `hsl(${hue}, 70%, 50%)`;
    //             },
    //             rotateRatio: 0.5,
    //             backgroundColor: getComputedStyle(document.body).backgroundColor,
    //             hover: window.innerWidth > 768 ? showWordTooltip : null,
    //             click: word => {
    //                 const modal = document.createElement('div');
    //                 modal.style = `
    //                     position: fixed;
    //                     top: 50%;
    //                     left: 50%;
    //                     transform: translate(-50%, -50%);
    //                     background: white;
    //                     padding: 20px;
    //                     border-radius: 8px;
    //                     box-shadow: 0 0 20px rgba(0,0,0,0.2);
    //                     z-index: 1000;
    //                 `;
    //                 modal.innerHTML = `
    //                     <h3>关键词分析：${word[0]}</h3>
    //                     <p>出现次数：${word[1]}</p>
    //                     <button onclick="this.parentElement.remove()">关闭</button>
    //                 `;
    //                 document.body.appendChild(modal);
    //             }
    //         });

    //     } catch (error) {
    //         console.error('生成词云失败:', error);
    //         displayErrorMessage('词云生成失败，请重试');
    //     } finally {
    //         wordcloudButton.classList.remove('wordcloud-loading');
    //     }
    // }

    // // 词云提示工具
    // function showWordTooltip(item, dimension) {
    //     if (!dimension) return;
        
    //     const tooltip = document.createElement('div');
    //     tooltip.className = 'wordcloud-tooltip';
    //     tooltip.style.cssText = `
    //         left: ${dimension.x}px;
    //         top: ${dimension.y}px;
    //     `;
    //     tooltip.innerHTML = `
    //         <strong>${item[0]}</strong><br>
    //         出现次数：${item[1]}
    //     `;
        
    //     document.body.appendChild(tooltip);
    //     setTimeout(() => tooltip.remove(), 2000);
    // }

    // 绑定词云按钮事件
    // wordcloudButton.addEventListener('click', () => {
    //     if (messageHistory.length <= 2) {
    //         displayErrorMessage('请先进行对话再生成词云');
    //         return;
    //     }
    //     generateWordCloud();
    // });

    function saveMessageHistory() {
        localStorage.setItem('ailishizhen_history', JSON.stringify(messageHistory));
        // setTimeout(generateWordCloud, 300);
    }

    function loadMessageHistory() {
        const saved = localStorage.getItem('ailishizhen_history');
        if (saved) {
            try {
                const history = JSON.parse(saved);
                messageHistory = [
                    history[0], 
                    ...history.slice(Math.max(1, history.length - 20))
                ];
                
                chatMessages.innerHTML = '';
                messageHistory.slice(1).forEach(msg => {
                    displayMessage(msg.content, msg.role === 'assistant' ? 'ai' : 'user');
                });
                // setTimeout(generateWordCloud, 500);
            } catch (e) {
                console.error('加载历史失败:', e);
                localStorage.removeItem('ailishizhen_history');
            }
        }
    }

    // 保持原有辅助函数不变（displayMessage、highlightTCMTerms等）
    // ...
    // 创建并显示消息
    function displayMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';

        const avatarImg = document.createElement('img');
        if (sender === 'ai') {
            avatarImg.src = 'pics/300px/李时珍.png';
            avatarImg.alt = '李时珍';
        } else {
            avatarImg.src = 'pics/avators/avator0.jpg';
            avatarImg.alt = '用户';
        }

        avatarDiv.appendChild(avatarImg);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        // 添加时间戳
        const timestamp = document.createElement('div');
        timestamp.className = 'message-timestamp';
        const now = new Date();
        timestamp.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        contentDiv.appendChild(timestamp);

        const textDiv = document.createElement('div');
        textDiv.className = 'message-text';

        // 处理消息文本，支持段落和中医术语高亮
        const paragraphs = message.split('\n').filter(p => p.trim() !== '');
        paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            // 高亮中医术语
            const highlightedText = highlightTCMTerms(paragraph);
            p.innerHTML = highlightedText;
            textDiv.appendChild(p);
        });

        contentDiv.appendChild(textDiv);
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);

        // 添加消息到聊天区域
        chatMessages.appendChild(messageDiv);
        
        // 滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 添加淡入动画
        setTimeout(() => {
            messageDiv.classList.add('visible');
        }, 10);

        // 添加打字机效果（仅对AI消息）
        if (sender === 'ai') {
            addTypingEffect(textDiv);
        }
    }

    // 高亮中医术语
    function highlightTCMTerms(text) {
        // 中医术语列表
        const tcmTerms = [
            '阴阳', '五行', '气血', '经络', '脏腑', '本草纲目', 
            '寒热', '虚实', '表里', '阴虚', '阳虚', '气虚', '血虚', 
            '肝', '心', '脾', '肺', '肾', '胆', '胃', '小肠', '大肠', 
            '膀胱', '三焦', '心包', '风', '寒', '暑', '湿', '燥', '火',
            '药性', '药理', '方剂', '汤剂', '丸剂', '散剂', '膏剂',
            '君臣佐使', '升降浮沉', '引经报使', '相须', '相使', '相畏', '相杀', '相恶', '相反'
        ];

        let highlightedText = text;
        tcmTerms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'g');
            highlightedText = highlightedText.replace(regex, '<span class="tcm-term">$1</span>');
        });

        return highlightedText;
    }

    // 添加打字机效果
    function addTypingEffect(element) {
        const allText = element.innerHTML;
        element.innerHTML = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < allText.length) {
                element.innerHTML = allText.substring(0, i + 1);
                i++;
                setTimeout(typeWriter, 5); // 调整速度
            }
        };
        
        typeWriter();
    }

    // 添加药材背景动画
    function addHerbAnimation() {
        const herbs = ['人参', '大黄', '当归', '枸杞', '柴胡', '甘草', '生姜', '白术', '肉桂', '芍药', '茯苓', '菊花'];
        const herb = herbs[Math.floor(Math.random() * herbs.length)];
        
        const herbElement = document.createElement('div');
        herbElement.className = 'floating-herb';
        herbElement.style.backgroundImage = `url('pics/herbs/${herb}.jpg')`;
        herbElement.style.left = `${Math.random() * 80 + 10}%`;
        
        chatContainer.appendChild(herbElement);
        
        setTimeout(() => {
            herbElement.remove();
        }, 10000);
    }

    // 创建加载消息
    function createLoadingMessage() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message ai-message loading-message';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';

        const avatarImg = document.createElement('img');
        avatarImg.src = 'pics/300px/李时珍.png';
        avatarImg.alt = '李时珍';
        avatarDiv.appendChild(avatarImg);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const textDiv = document.createElement('div');
        textDiv.className = 'message-text';

        const loadingText = document.createElement('p');
        loadingText.innerHTML = '<span class="loading-dots"><span>.</span><span>.</span><span>.</span></span>';
        textDiv.appendChild(loadingText);

        contentDiv.appendChild(textDiv);
        loadingDiv.appendChild(avatarDiv);
        loadingDiv.appendChild(contentDiv);

        // 添加淡入动画
        setTimeout(() => {
            loadingDiv.classList.add('visible');
        }, 10);

        return loadingDiv;
    }
    
    // 创建空的AI消息容器（用于流式响应）
    function createEmptyAIMessage() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ai-message';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';

        const avatarImg = document.createElement('img');
        avatarImg.src = 'pics/300px/李时珍.png';
        avatarImg.alt = '李时珍';
        avatarDiv.appendChild(avatarImg);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        // 添加时间戳
        const timestamp = document.createElement('div');
        timestamp.className = 'message-timestamp';
        const now = new Date();
        timestamp.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        contentDiv.appendChild(timestamp);

        const textDiv = document.createElement('div');
        textDiv.className = 'message-text';
        contentDiv.appendChild(textDiv);

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);

        return messageDiv;
    }
    
    // 更新AI消息内容（用于流式响应）
    function updateAIMessageContent(textDiv, content) {
        // 清空现有内容
        textDiv.innerHTML = '';
        
        // 处理消息文本，支持段落和中医术语高亮
        const paragraphs = content.split('\n').filter(p => p.trim() !== '');
        paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            // 高亮中医术语
            const highlightedText = highlightTCMTerms(paragraph);
            p.innerHTML = highlightedText;
            textDiv.appendChild(p);
        });
        
        // 如果没有段落，至少显示一个空段落
        if (paragraphs.length === 0) {
            const p = document.createElement('p');
            textDiv.appendChild(p);
        }
    }

    // 显示错误消息
    function displayErrorMessage(errorText) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'message system-message error-message';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const textDiv = document.createElement('div');
        textDiv.className = 'message-text';

        const errorMessage = document.createElement('p');
        errorMessage.textContent = errorText;
        textDiv.appendChild(errorMessage);

        contentDiv.appendChild(textDiv);
        errorDiv.appendChild(contentDiv);

        chatMessages.appendChild(errorDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 添加淡入动画
        setTimeout(() => {
            errorDiv.classList.add('visible');
        }, 10);
    }

    // 初始化主题
    function loadThemePreference() {
        const isDark = localStorage.getItem('ailishizhen_dark_theme') === 'true';
        document.body.classList.toggle('dark-theme', isDark);
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    // 事件监听
    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            displayMessage(message, 'user');
            userInput.value = '';
            sendMessageToAI(message);
        }
    });

    userInput.addEventListener('keypress', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendButton.click();
        }
    });

    clearButton?.addEventListener('click', clearChat);
    themeToggle?.addEventListener('click', toggleTheme);

    // 初始化
    loadThemePreference();
    userInput.focus();
});

// 清除聊天功能
function clearChat() {
    localStorage.removeItem('ailishizhen_history');
    location.reload();
}

// 主题切换
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('ailishizhen_dark_theme', document.body.classList.contains('dark-theme'));
    setTimeout(() => document.getElementById('wordcloud-container').innerHTML = '', 300);
    // setTimeout(generateWordCloud, 500);
}
