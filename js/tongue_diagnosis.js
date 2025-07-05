// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultsSection = document.getElementById('resultsSection');
    const featuresList = document.getElementById('featuresList');
    const physiqueAnalysis = document.getElementById('physiqueAnalysis');
    const riskWarning = document.getElementById('riskWarning');
    const advicesContainer = document.getElementById('advicesContainer');
    
    let uploadedImage = null;
    let base64ImageData = null;
    
    // API配置
    const apiConfig = {
        host: 'https://ali-market-tongue-detect-v2.macrocura.com',
        path: '/diagnose/face-tongue/result/',
        appcode: '7e162942141849fa834826d8353a556e'
    };
    
    // 拖拽上传功能
    dropZone.addEventListener('click', () => {
        imageUpload.click();
    });
    
    imageUpload.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            handleImageUpload(this.files[0]);
        }
    });
    
    // 拖拽事件
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleImageUpload(e.dataTransfer.files[0]);
        }
    });
    
    function handleImageUpload(file) {
        // 验证文件类型
        if (!file.type.match('image.*')) {
            alert('请上传图片文件！');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            uploadedImage = e.target.result;
            console.log(uploadedImage)
            imagePreview.innerHTML = `<img src="${uploadedImage}" alt="预览图">`;
            
            // 提取Base64数据（去掉data URL前缀）
            base64ImageData = uploadedImage.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
            console.log(base64ImageData)
        };
        
        reader.readAsDataURL(file);
    }
    
    // 分析按钮点击事件
    analyzeBtn.addEventListener('click', function() {
        if (!base64ImageData) {
            alert('请先上传舌部照片！');
            return;
        }
        
        const gender = document.querySelector('input[name="gender"]:checked').value;
        // console.log(gender)
        
        // 显示加载指示器
        loadingIndicator.style.display = 'flex';
        resultsSection.style.display = 'none';
        
        // 构建API请求
        const requestBody = JSON.stringify({
            scene: 2,
            tf_image: base64ImageData,
            gender: gender
        });

        console.log(requestBody)
        
        const apiUrl = apiConfig.host + apiConfig.path;
        
        // 发送API请求
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'APPCODE ' + apiConfig.appcode
            },
            body: requestBody
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.code !== 20000 || !data.success) {
                throw new Error(`API返回错误: ${data.msg}`);
            }
            displayResults(data);
        })
        .catch(error => {
            console.error('API调用错误:', error);
            alert(`分析失败: ${error.message || '未知错误'}`);
        })
        .finally(() => {
            loadingIndicator.style.display = 'none';
            resultsSection.style.display = 'block';
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 显示结果
    function displayResults(response) {
        const data = response.data;
        console.log(data)
        // 显示总体评分
        document.querySelector('.score-value').textContent = data.score || '--';
        document.querySelector('.score-text').textContent = data.physique_name || '未知';
        document.querySelectorAll('.score-text')[1].textContent = data.syndrome_name || '未知';
        
        // 显示舌部特征
        featuresList.innerHTML = '';
        if (data.features && data.features.length > 0) {
            data.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="feature-name">${feature.feature_name}</span>
                    <span class="feature-situation ${feature.feature_situation === '正常' ? 'normal' : 'abnormal'}">
                        ${feature.feature_situation}
                    </span>
                    <div class="feature-interpret">${feature.feature_interpret}</div>
                `;
                featuresList.appendChild(li);
            });
        } else {
            featuresList.innerHTML = '<li>未获取到舌部特征数据</li>';
        }
        
        // 显示体质分析
        physiqueAnalysis.textContent = data.physique_analysis || '未获取到体质分析数据';
        
        // 显示风险提示
        if (data.risk_warning) {
            riskWarning.textContent = data.risk_warning;
        } else {
            riskWarning.textContent = '未获取到风险提示数据';
        }
        
        // 显示建议
        advicesContainer.innerHTML = '';
        
        const adviceTypes = [
            { key: 'food', title: '饮食建议', icon: 'fa-utensils' },
            { key: 'music', title: '音乐建议', icon: 'fa-music' },
            { key: 'sleep', title: '生活习惯建议', icon: 'fa-bed' },
            { key: 'sport', title: '运动建议', icon: 'fa-running' },
            { key: 'treatment', title: '治疗方法', icon: 'fa-hand-holding-medical' }
        ];
        
        if (data.advices) {
            adviceTypes.forEach(type => {
                if (data.advices[type.key] && data.advices[type.key].length > 0) {
                    const categoryDiv = document.createElement('div');
                    categoryDiv.className = 'advice-category';
                    
                    let contentHTML = '';
                    data.advices[type.key].forEach(advice => {
                        contentHTML += `
                            <div class="advice-item">
                                <strong>${advice.title || '建议'}:</strong>
                                <div>${advice.advice}</div>
                            </div>
                        `;
                    });
                    
                    categoryDiv.innerHTML = `
                        <h4><i class="fas ${type.icon}"></i> ${type.title}</h4>
                        <div class="advice-content">${contentHTML}</div>
                    `;
                    
                    advicesContainer.appendChild(categoryDiv);
                }
            });
        } else {
            advicesContainer.innerHTML = '<p>未获取到健康建议数据</p>';
        }
        
        // 显示返回的图片（如果有）
        // if (data.tf_url) {
        //     const imageResult = document.createElement('div');
        //     imageResult.className = 'result-image';
        //     imageResult.innerHTML = `
        //         <h3><i class="fas fa-image"></i> 舌部分析图</h3>
        //         <img src="${data.tf_url}" alt="舌部分析图" class="analysis-image">
        //     `;
        //     resultsSection.querySelector('.results-container').appendChild(imageResult);
        // }
    }
});
