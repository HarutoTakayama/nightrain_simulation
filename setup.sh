#!/bin/bash

echo "🚀 エルデンリング・ナイトレイン シミュレータ セットアップ開始..."

# 1. Viteプロジェクトの初期化 (React + TypeScript)
# 既存ファイルがある場合は上書きするように設定
npm create vite@latest . -- --template react-ts

# 2. 依存ライブラリのインストール
echo "📦 ライブラリをインストール中..."
npm install zustand framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer

# 3. Tailwind CSSの初期化
echo "🎨 Tailwind CSSを構成中..."
npx tailwindcss init -p

# 4. 設定ファイルの書き換え (tailwind.config.js)
cat <<EOL > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# 5. CSSの初期化 (src/index.css)
cat <<EOL > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #1a1a1a;
  color: #f3f4f6;
  margin: 0;
}
EOL

# 6. GitHub Actions 用のディレクトリ作成
mkdir -p .github/workflows

echo "✅ セットアップ完了！"
echo "💡 次に '.github/workflows/deploy.yml' を作成して push してください。"