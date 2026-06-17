# 五行语宙

> 一个多模态中医文化学习平台

五行语宙是一个围绕中医五行文化设计的智能教育平台，包含中医知识科普、微课学习、互动游戏、AI 对话角色、社区交流和智能舌诊等功能。

## 功能介绍

- **智课星链**: 包含人工录制和AI生成的中医文化科普视频。
- **智识中医**: 中医文化科普模块，包括中药材库、五行知识、历史知识等。
- **时珍智脑**: 通过提示词和大模型调用，实现和李时珍的对话。
- **五行智弈**: 中医文化学习相关的自制小游戏。
- **智联杏林**: 中医文化学习社群。
- **智能舌诊**: 调用API实现的智能舌诊。

## 项目演示

在线访问：

```text
https://aiwuxing.maozi.io
```

## 快速开始

```bash
git clone https://github.com/m4rklee/aiwuxing.git
cd aiwuxing
python3 -m http.server 8080
```

打开：

```text
http://127.0.0.1:8080
```

## 项目结构

```text
.
├── index.html                 # 网站首页
├── ailishizhen.html           # 时珍智脑页面
├── knowledge.html             # 智识中医页面
├── microcourses.html          # 智课星链页面
├── games.html                 # 五行智弈页面
├── forum.html                 # 智联杏林页面
├── tongue-diagnosis.html      # 智能舌诊页面
├── css/                       # css相关代码
├── js/                        # js相关代码
├── courses/                   # 课程视频
├── music/                     # 网站音乐
└── pics/                      # 网站图片
```
