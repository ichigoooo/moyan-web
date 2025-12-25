# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

墨言（moyan-web）是一个基于 React + TypeScript + Vite 构建的静态官网落地页，用于展示"墨言APP"——一款 AI 驱动的古籍阅读与对话应用。项目部署到 GitHub Pages。

## 开发命令

```bash
# 开发服务器
npm run dev

# 生产构建（部署到 GitHub Pages 时使用 /moyan-web/ 基础路径）
npm run build

# 类型检查
npm run typecheck

# 代码检查
npm run lint

# 预览构建产物
npm run preview
```

## 项目架构

### 技术栈
- **构建工具**: Vite 5.x
- **前端框架**: React 18.x + TypeScript
- **样式方案**: Tailwind CSS 3.x
- **动画库**: Framer Motion 12.x
- **图标库**: lucide-react
- **部署**: GitHub Pages（通过 GitHub Actions）

### 目录结构
```
src/
├── components/          # 页面组件（纯展示型，无状态管理）
│   ├── ErrorBoundary.tsx    # 类组件错误边界
│   ├── Hero.tsx             # 首屏 Hero 区域（含滚动视差动画）
│   ├── Features.tsx         # 功能特性展示
│   ├── UserScenarios.tsx    # 用户场景说明
│   ├── Pricing.tsx          # 价格方案
│   └── Footer.tsx           # 页脚
├── lib/
│   └── utils.ts             # cn() 工具函数（clsx + tailwind-merge）
├── App.tsx              # 根组件，组合所有页面区块
├── main.tsx             # 应用入口，包裹 ErrorBoundary
└── index.css            # 全局样式与 Tailwind 指令
```

### 架构特点

**单一页面布局**: `App.tsx` 采用垂直堆叠的单一页面结构，各组件按顺序渲染：Hero → Features → UserScenarios → Pricing → Footer

**组件设计模式**:
- 所有组件为函数式组件（除 `ErrorBoundary` 为类组件）
- 使用 Framer Motion 的 `motion.*` 组件实现动画
- 组件内数据硬编码（features 数组、场景文案等），无外部数据依赖
- 使用 `useRef` + `useInView` 实现滚动触发动画

**样式系统**:
- Tailwind CSS 用于所有样式
- 自定义配色方案：`#f5f1e8`（米白背景）、`#2c2416`（深墨色文字）、`#c8553d`（朱红强调色）
- 大量使用纹理叠加（通过 `bg-[url(...)]` 和 `mix-blend-multiply`）

**无状态管理/路由**: 项目为纯静态落地页，无需客户端路由、状态管理库或 API 层

## 部署配置

### GitHub Actions 自动部署
- **触发条件**: 推送到 `main` 分支
- **构建流程**: Node.js 20 → `npm ci` → `npm run build` → 部署到 GitHub Pages
- **基础路径**: 生产环境使用 `/moyan-web/`（在 `vite.config.ts` 和 `package.json` 的 build 脚本中配置）
- **配置文件**: `.github/workflows/deploy.yml`

### Vite 配置要点
- `base: process.env.NODE_ENV === 'production' ? '/moyan-web/' : '/'` - 确保 GitHub Pages 静态资源路径正确
- `optimizeDeps.exclude: ['lucide-react']` - 排除 lucide-react 预构建

## TypeScript 配置

- 使用项目引用（project references）：`tsconfig.json` 引用 `tsconfig.app.json` 和 `tsconfig.node.json`
- 严格模式启用：`strict: true`
- 未使用变量/参数检查：`noUnusedLocals`、`noUnusedParameters`

## ESLint 配置

- 使用 `typescript-eslint` 平替方案
- React Hooks 规则强制执行
- React Refresh 仅用于导出组件

## 注意事项

1. **资源路径**: 开发环境使用根路径 `/`，生产环境使用 `/moyan-web/`
2. **动画性能**: Framer Motion 动画大量使用 `useScroll`、`useTransform`，注意避免在单页面创建过多滚动监听
3. **图片资源**: 目前使用外部纹理图片（transparenttextures.com），如需添加本地图片放入 `public/` 目录
4. **代码风格**: 现有代码使用中文注释和文案，新增代码保持一致
