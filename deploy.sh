set -e

echo "🚀 Starting deployment..."

# Step 1: Pull latest changes
echo "📥 Pulling latest code from Git..."
git pull origin main

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Build the project
echo "🏗 Building the project..."
npm run build

echo "🔄 Restarting PM2 process..."
pm2 restart cricbex

echo "✅ Deployment completed successfully!"