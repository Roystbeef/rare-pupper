#!/bin/bash

# Terragon Labs Site Setup Script
# This script sets up the codebase for development and GitHub Pages hosting

set -e

echo "🚀 Setting up Terragon Labs site for development..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version (require 18+)
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build to verify everything works
echo "🔧 Testing build process..."
npm run build

# Run linting
echo "🧹 Running linter..."
npm run lint

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    git branch -M main
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << EOL
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
EOL
fi

echo "✅ Setup complete!"
echo ""
echo "📋 Available commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production" 
echo "  npm run preview  - Preview production build"
echo "  npm run lint     - Run ESLint"
echo "  npm run deploy   - Deploy to GitHub Pages (requires setup)"
echo ""
echo "🌐 To enable GitHub Pages deployment:"
echo "  1. Push this repository to GitHub"
echo "  2. Go to repository Settings > Pages"
echo "  3. Set Source to 'GitHub Actions'"
echo "  4. The deploy.yml workflow will automatically deploy on pushes to main"
echo ""
echo "🎉 Happy coding with Terragon Labs!"