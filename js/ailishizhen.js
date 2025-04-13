// AI李时珍智能体交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // DOM元素
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatContainer = document.querySelector('.chat-container');
    const clearButton = document.getElementById('clear-chat');
    const themeToggle = document.getElementById('theme-toggle');

    // 消息历史记录 - 用于保持对话上下文
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

    // 初始化 - 显示欢迎消息并添加动画效果
    const initialMessage = document.querySelector('.ai-message');
    if (initialMessage) {
        setTimeout(() => {
            initialMessage.classList.add('visible');
        }, 300);
    }

    // 加载历史记录
    loadMessageHistory();

    // 发送消息到AI（支持流式响应）
    async function sendMessageToAI(userMessage) {
        try {
            // 显示加载状态
            const loadingMessage = createLoadingMessage();
            chatMessages.appendChild(loadingMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // 准备发送到API的消息
            messageHistory.push({
                role: "user",
                content: userMessage
            });

            // 使用流式API
            const response = await fetch('/api/ailishizhen/stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ messages: messageHistory })
            });
            

            if (!response.ok) {
                throw new Error('API请求失败');
            }

            // 移除加载消息
            chatMessages.removeChild(loadingMessage);
            
            // 创建AI消息容器（用于流式显示）
            const aiMessageDiv = createEmptyAIMessage();
            chatMessages.appendChild(aiMessageDiv);
            const aiMessageContent = aiMessageDiv.querySelector('.message-text');
            
            // 添加淡入动画
            setTimeout(() => {
                aiMessageDiv.classList.add('visible');
            }, 10);
            
            // 完整的AI响应内容
            let fullAIResponse = '';
            
            // 处理流式响应
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            
            // 使用ReadableStream API处理流数据
            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n').filter(line => line.trim() !== '');
                    
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const data = line.slice(6);
                            if (data === '[DONE]') {
                                // 流结束
                                break;
                            } else {
                                try {
                                    const parsed = JSON.parse(data);
                                    if (parsed.content) {
                                        // 累加内容
                                        fullAIResponse += parsed.content;
                                        
                                        // 更新显示
                                        updateAIMessageContent(aiMessageContent, fullAIResponse);
                                        
                                        // 滚动到底部
                                        chatMessages.scrollTop = chatMessages.scrollHeight;
                                    }
                                } catch (e) {
                                    console.error('解析流数据错误:', e);
                                }
                            }
                        }
                    }
                }
                
                // 流处理完成，添加到历史记录
                messageHistory.push({
                    role: "assistant",
                    content: fullAIResponse
                });
                
                // 保存对话历史到本地存储
                saveMessageHistory();
                
                // 添加药材背景动画效果
                addHerbAnimation();
                
            } catch (error) {
                console.error('处理流数据错误:', error);
                displayErrorMessage('处理AI响应时出错，请稍后再试。');
            }

        } catch (error) {
            console.error('发送消息失败:', error);
            // 移除加载消息并显示错误
            const loadingElement = document.querySelector('.loading-message');
            if (loadingElement) {
                chatMessages.removeChild(loadingElement);
            }
            displayErrorMessage('与AI李时珍通信失败，请稍后再试。');
        }
    }

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

    // 保存消息历史到本地存储
    function saveMessageHistory() {
        localStorage.setItem('ailishizhen_history', JSON.stringify(messageHistory));
    }

    // 加载消息历史
    function loadMessageHistory() {
        const savedHistory = localStorage.getItem('ailishizhen_history');
        if (savedHistory) {
            try {
                const parsedHistory = JSON.parse(savedHistory);
                // 只保留系统消息和最近的20条对话
                if (parsedHistory.length > 2) {
                    messageHistory = [
                        parsedHistory[0], // 系统消息
                        ...parsedHistory.slice(Math.max(1, parsedHistory.length - 20)) // 最近的对话
                    ];
                    
                    // 显示历史消息
                    chatMessages.innerHTML = ''; // 清空现有消息
                    messageHistory.forEach((msg, index) => {
                        if (index > 0) { // 跳过系统消息
                            if (msg.role === 'assistant') {
                                displayMessage(msg.content, 'ai');
                            } else if (msg.role === 'user') {
                                displayMessage(msg.content, 'user');
                            }
                        }
                    });
                }
            } catch (e) {
                console.error('加载历史记录失败:', e);
                localStorage.removeItem('ailishizhen_history');
            }
        }
    }

    // 清空聊天历史
    function clearChat() {
        // 保留系统消息和初始欢迎消息
        messageHistory = messageHistory.slice(0, 2);
        
        // 清空聊天界面
        chatMessages.innerHTML = '';
        
        // 显示初始欢迎消息
        displayMessage(messageHistory[1].content, 'ai');
        
        // 更新本地存储
        saveMessageHistory();
        
        // 显示清空成功提示
        const successDiv = document.createElement('div');
        successDiv.className = 'message system-message success-message';
        successDiv.innerHTML = '<div class="message-content"><div class="message-text"><p>对话已清空</p></div></div>';
        chatMessages.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.classList.add('visible');
        }, 10);
        
        setTimeout(() => {
            chatMessages.removeChild(successDiv);
        }, 3000);
    }

    // 切换主题
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        localStorage.setItem('ailishizhen_dark_theme', isDarkTheme);
        
        // 更新图标
        if (themeToggle) {
            themeToggle.innerHTML = isDarkTheme ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
        }
    }

    // 加载主题设置
    function loadThemePreference() {
        const isDarkTheme = localStorage.getItem('ailishizhen_dark_theme') === 'true';
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            if (themeToggle) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    }

    // 初始化主题
    loadThemePreference();

    // 处理发送按钮点击
    sendButton.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message) {
            // 显示用户消息
            displayMessage(message, 'user');
            
            // 清空输入框
            userInput.value = '';
            
            // 发送到AI
            sendMessageToAI(message);
        }
    });

    // 处理按Enter键发送
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendButton.click();
        }
    });

    // 处理清空聊天按钮
    if (clearButton) {
        clearButton.addEventListener('click', clearChat);
    }

    // 处理主题切换按钮
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // 自动聚焦到输入框
    userInput.focus();

    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .loading-dots span {
            animation: loadingDots 1.4s infinite;
            display: inline-block;
            opacity: 0;
        }
        
        .loading-dots span:nth-child(1) {
            animation-delay: 0s;
        }
        
        .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes loadingDots {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        .message {
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translateY(20px);
        }
        
        .message.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .system-message .message-content {
            background: rgba(255, 0, 0, 0.1);
            border-left: 3px solid #ff5252;
        }
        
        .success-message .message-content {
            background: rgba(76, 175, 80, 0.1);
            border-left: 3px solid #4CAF50;
        }
        
        .tcm-term {
            color: var(--color-primary);
            font-weight: 500;
            text-decoration: underline;
            text-decoration-style: dotted;
            text-decoration-thickness: 1px;
            text-underline-offset: 3px;
            cursor: help;
        }
        
        .message-timestamp {
            font-size: 0.7rem;
            color: var(--color-text-light);
            opacity: 0.7;
            text-align: right;
            margin-bottom: 5px;
        }
        
        .floating-herb {
            position: absolute;
            width: 40px;
            height: 40px;
            background-size: cover;
            border-radius: 50%;
            opacity: 0.2;
            pointer-events: none;
            z-index: 0;
            animation: floatHerb 10s ease-in-out forwards;
        }
        
        @keyframes floatHerb {
            0% {
                bottom: 0;
                transform: scale(0.5) rotate(0deg);
                opacity: 0;
            }
            20% {
                opacity: 0.2;
            }
            80% {
                opacity: 0.2;
            }
            100% {
                bottom: 80%;
                transform: scale(1.5) rotate(360deg);
                opacity: 0;
            }
        }
        
        /* 暗色主题 */
        body.dark-theme {
            background-color: #1a1a1a;
            color: #e0e0e0;
        }
        
        body.dark-theme .chat-container {
            background: rgba(40, 40, 40, 0.7);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        body.dark-theme .message-content {
            background: rgba(60, 60, 60, 0.9);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        body.dark-theme .ai-message .message-content {
            background: rgba(100, 80, 60, 0.4);
        }
        
        body.dark-theme .user-message .message-content {
            background: rgba(60, 80, 100, 0.3);
        }
        
        body.dark-theme .chat-input textarea {
            background: rgba(60, 60, 60, 0.8);
            color: #e0e0e0;
        }
        
        body.dark-theme .message-text p {
            color: #e0e0e0;
        }
        
        body.dark-theme .tcm-term {
            color: var(--color-highlight);
        }
    `;
    document.head.appendChild(style);
});

// 后端API处理函数 - 在服务器端实现
async function handleAILishizhenAPI(req, res) {
    try {
        const { messages } = req.body;
        
        // 调用DeepSeek API
        const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer sk-824ce9b7eb7b49c4889ba57a0284a038"
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: messages
            })
        });
        
        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        const aiMessage = data.choices[0].message.content;
        
        res.json({ message: aiMessage });
    } catch (error) {
        console.error('AI处理错误:', error);
        res.status(500).json({ error: '处理请求时出错' });
    }
}

// 导出API处理函数，供服务器使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { handleAILishizhenAPI };
}