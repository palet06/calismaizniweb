#!/bin/sh

echo "⏳ Build başlatılıyor..."

npm run build || echo "⚠️ Build sırasında hata oluştu ama devam ediliyor..."

echo "🚀 Export işlemi yapılıyor..."
npm run export
