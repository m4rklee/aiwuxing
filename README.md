# AI Wuxing

> A static Chinese medicine education website with AI-style interaction, micro-courses, games, community pages, and tongue-diagnosis demo.

五行语宙是一个围绕中医五行文化设计的智能教育网站。项目以静态网页形式组织，包含中医知识科普、微课学习、互动游戏、AI 对话角色、社区交流和智能舌诊演示，适合课程展示、文化传播和前端作品集展示。

## Highlights

- **TCM education portal**: 以五行理论、中医基础和传统文化学习为主线。
- **Multi-page static site**: 通过多个 HTML 页面组织课程、知识、游戏、社区和舌诊模块。
- **Interactive learning**: 提供五行分类游戏、角色问答、课程视频和音乐疗法内容。
- **Tongue diagnosis demo**: 支持舌部图片上传和前端侧分析展示流程。
- **Deployed preview**: 已部署为可直接访问的静态站点。

## Demo

在线访问：

```text
https://aiwuxing.maozi.io
```

## How It Works

```text
Static Web Pages
      |
      +--> Micro courses
      +--> TCM knowledge pages
      +--> AI Li Shizhen role page
      +--> Wuxing games
      +--> Forum simulation
      +--> Tongue diagnosis demo
```

本项目主要是前端静态展示，不依赖后端数据库。视频、图片、音乐和页面脚本均在仓库内按目录组织。

## Features

| Module | Description |
|---|---|
| **智课星链** | 中医与五行主题微课程，包括五行相生相克、音乐疗法、黄帝内经共读等。 |
| **智识中医** | 展示中医基础知识、中药材、人体五脏、诊疗方法、发展历史和五行知识。 |
| **时珍智脑** | 以李时珍为角色进行中医知识问答体验。 |
| **五行智弈** | 通过分类、答题和互动游戏巩固中医知识。 |
| **智联杏林** | 模拟中医文化交流社区，展示话题、投票和分享内容。 |
| **智能舌诊** | 展示上传舌部照片后的舌象特征、体质分析和调养建议流程。 |

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Assets**: Local videos, images, music files
- **Deployment**: Static hosting

## Quick Start

```bash
git clone https://github.com/m4rklee/aiwuxing.git
cd aiwuxing
python3 -m http.server 8080
```

打开：

```text
http://127.0.0.1:8080
```

也可以直接打开 `index.html`，但建议使用本地静态服务访问，以便视频、图片、iframe 和跨页面资源路径表现更稳定。

## Project Structure

```text
.
├── index.html                 # Homepage
├── ailishizhen.html           # AI role interaction page
├── knowledge.html             # TCM knowledge page
├── microcourses.html          # Course page
├── games.html                 # Game entry
├── forum.html                 # Community simulation
├── tongue-diagnosis.html      # Tongue diagnosis demo
├── css/                       # Page styles
├── js/                        # Page interactions
├── courses/                   # Course videos
├── music/                     # Music assets
└── pics/                      # Image assets
```

## Notes

- 本项目为教育和展示用途，不构成真实医学诊断或治疗建议。
- 舌诊模块是前端演示流程，不能替代专业医生判断。
- 仓库包含较多媒体资源，clone 时体积可能较大。

## Roadmap

- Add screenshots for each module.
- Add English landing copy for bilingual presentation.
- Split common layout into reusable components.
- Connect AI role page to a real backend service.
