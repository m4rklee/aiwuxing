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
            imagePreview.innerHTML = `<img src="${uploadedImage}" alt="预览图">`;
        };
        
        reader.readAsDataURL(file);
    }
    
    // 分析按钮点击事件
    analyzeBtn.addEventListener('click', function() {
        if (!uploadedImage) {
            alert('请先上传舌部照片！');
            return;
        }
        
        const gender = document.querySelector('input[name="gender"]:checked').value;
        
        // 显示加载指示器
        loadingIndicator.style.display = 'flex';
        resultsSection.style.display = 'none';
        
        // 模拟API调用延迟
        setTimeout(() => {
            // 这里实际应调用API
            // 为演示目的，直接使用模拟数据
            displayResults(sampleResponse);
            
            // 隐藏加载指示器，显示结果
            loadingIndicator.style.display = 'none';
            resultsSection.style.display = 'block';
            
            // 滚动到结果区域
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });
    
    // 显示结果
    function displayResults(response) {
        const data = response.data;
        
        // 显示总体评分
        document.querySelector('.score-value').textContent = data.score;
        document.querySelector('.score-text').textContent = data.physique_name;
        document.querySelectorAll('.score-text')[1].textContent = data.syndrome_name;
        
        // 显示舌部特征
        featuresList.innerHTML = '';
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
        
        // 显示体质分析
        physiqueAnalysis.textContent = data.physique_analysis;
        
        // 显示风险提示
        riskWarning.textContent = data.risk_warning;
        
        // 显示建议
        advicesContainer.innerHTML = '';
        
        const adviceTypes = [
            { key: 'food', title: '饮食建议', icon: 'fa-utensils' },
            { key: 'music', title: '音乐建议', icon: 'fa-music' },
            { key: 'sleep', title: '生活习惯建议', icon: 'fa-bed' },
            { key: 'sport', title: '运动建议', icon: 'fa-running' },
            { key: 'treatment', title: '治疗方法', icon: 'fa-hand-holding-medical' }
        ];
        
        adviceTypes.forEach(type => {
            if (data.advices[type.key]) {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'advice-category';
                
                let contentHTML = '';
                data.advices[type.key].forEach(advice => {
                    contentHTML += `
                        <div class="advice-item">
                            <strong>${advice.title}:</strong>
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
    }
    
    // 示例API响应数据
    const sampleResponse = {
        "code": 20000,
        "success": true,
        "msg": "成功",
        "data": {
            "score": 88.0,
            "features": [
                {
                    "feature_category": "舌部",
                    "feature_group": "舌色",
                    "feature_name": "舌色淡白",
                    "feature_situation": "异常",
                    "feature_interpret": "舌色较正常舌色浅淡，甚至全无血色，是由于阳气不足， 生化阴血不足，运行血液无力，不能上充于舌质所致。多见于虚证，气血两虚、或阳虚。"
                },
                {
                    "feature_category": "舌部",
                    "feature_group": "舌尖色",
                    "feature_name": "正常",
                    "feature_situation": "正常",
                    "feature_interpret": "舌尖颜色正常。"
                },
                {
                    "feature_category": "舌部",
                    "feature_group": "舌质",
                    "feature_name": "舌质嫩",
                    "feature_situation": "异常",
                    "feature_interpret": "舌质纹理细腻，浮胖娇嫩，舌色浅淡。多由于气血不足，舌体脉络不充，或阳气亏虚，寒湿内生所致。"
                },
                {
                    "feature_category": "舌部",
                    "feature_group": "舌齿痕",
                    "feature_name": "舌部齿痕",
                    "feature_situation": "异常",
                    "feature_interpret": "舌边被牙齿压迫的痕迹，多见于脾虚、气虚，或体内湿邪较重者。"
                },
                {
                    "feature_category": "舌部",
                    "feature_group": "舌裂纹",
                    "feature_name": "正常",
                    "feature_situation": "正常",
                    "feature_interpret": "无明显裂纹。"
                },
                {
                    "feature_category": "舌部",
                    "feature_group": "舌形胖瘦",
                    "feature_name": "舌部肥胖",
                    "feature_situation": "异常",
                    "feature_interpret": "舌体比正常舌大而厚，伸舌满口，多因脾肾阳虚，津液输布障碍，湿邪停留于体内所致。多见于水湿内停、痰湿上泛。"
                }
            ],
            "physique_name": "血瘀体质、血虚体质",
            "physique_analysis": "您的体质主要是血瘀体质兼血虚体质，体质的形成可能受到多种因素的影响：\n血瘀体质多因外伤、手术等引起血液流出血管，淤积体内；或者因为感受寒邪、热邪、湿邪等引起身体血液循环障碍；或者因为精神压力大，情绪压抑导致血液循环障碍。\n血虚体质多因先天不足，或慢性消耗（过度劳累、过度出汗、失血、久病等）、或营养摄入不足（节食、厌食、偏食等）等导致身体能量不足，脏腑功能下降。",
            "typical_symptom": "皮肤偏暗；色素沉着；口唇紫；眼眶暗黑；鼻部暗滞；易脱发；肌肤干燥；皮肤粗糙；面色白或黄；眼睑浮肿；肢体有麻木感",
            "risk_warning": "血瘀体质兼夹血虚体质的人可能会遇到一系列健康挑战。以下是这类体质人群容易出现的一些问题：\n心血管疾病：血瘀体质可能导致血液循环不畅，增加心脑血管疾病的风险，如心绞痛、心肌梗死、脑梗死等。\n疼痛症状：由于血液运行不畅，血瘀体质者常常会有固定部位的疼痛，如胸痛、头痛、关节痛等，疼痛性质可能为刺痛或夜间加重。\n皮肤问题：皮肤可能呈现晦暗无光，容易形成色斑、瘀斑，且这些斑点不易消退。\n消化系统问题：血瘀体质可能影响脾胃的运化，导致胃痛、胃胀、消化不良等症状。",
            "syndrome_uuid": "456724bb-775f-11eb-94a2-98039b0809cc",
            "syndrome_name": "脾阳不足证",
            "syndrome_introduction": "因久病或老年体虚，或误治伤及脾阳，失于温运所致。临床以食少、腹胀，脐腹隐痛，喜温、喜按，大便溏薄，畏冷，舌质淡胖，脉虚缓等脾阳虚证轻者为特征的证候。",
            "advices": {
                "food": [
                    {
                        "advice": "忌用寒凉之品，如苦瓜、西瓜等。",
                        "title": "禁忌饮食"
                    },
                    {
                        "advice": "宜多食甘、温之物，如羊肉、糯米、核桃、龙眼、生姜、肉桂、辣椒、韭菜等。",
                        "title": "建议饮食"
                    },
                    {
                        "advice": "党参淮山猪肉汤：取党参15克，淮山15克，猪肉200克。将党参、淮山洗净，猪肉切块；将所有材料放入锅中，加水适量，大火煮沸后转小火炖煮1-2小时，加盐调味即可。",
                        "title": "食疗建议"
                    }
                ],
                "music": [
                    {
                        "advice": "五音疗法：听角音、徵音，振奋阳气，增加人体活力。古琴曲《流水》《酒狂》《欸乃》等。",
                        "title": "音乐建议"
                    }
                ],
                "sleep": [
                    {
                        "advice": "纳凉睡觉时，特别要注意盖好腹部。",
                        "title": "生活建议"
                    },
                    {
                        "advice": "保持情绪舒畅、平稳，避免大喜大怒。",
                        "title": "情志建议"
                    }
                ],
                "sport": [
                    {
                        "advice": "加强锻炼，增强体质。平素可多做操，游泳，登山，可习练导引保健功、放松功、太极气功等功法。",
                        "title": "运动建议"
                    }
                ],
                "treatment": [
                    {
                        "advice": "穴位调护：宜采用指揉法，按揉百会、肾俞、气海、关元、足三里、涌泉等，每个穴位按揉2-3分钟，每天1-2次。儿童、幼儿视具体情况调整时长。",
                        "title": "按摩疗法"
                    },
                    {
                        "advice": "艾灸法：取穴宜采用指揉法，按揉百会、肾俞、气海、关元、足三里、涌泉等。亦可使用温和灸，一周1-2次，每次10-15分钟，以皮肤微微潮红为度。",
                        "title": "艾灸法"
                    }
                ]
            }
        }
    };
});
