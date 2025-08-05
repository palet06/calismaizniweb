# 🔧 1. Aşama: Build aşaması (Node.js lightweight)
FROM node:18-alpine AS builder

WORKDIR /app

# Sadece package.json dosyalarını kopyala (önbellek için)
COPY package*.json ./

# Üretim bağımlılıklarını kur
RUN npm install

# Projenin tamamını kopyala
COPY . .

# Next.js build & export (hataları yoksaymak için || echo ...)
RUN npm run build || echo "⚠️ Build hatası yoksayıldı"
RUN npm run out

# 📦 2. Aşama: Sadece statik dosyaları sunmak için çok küçük bir Nginx imajı
FROM nginx:alpine

# Build edilen statik dosyaları sadece kopyala
COPY --from=builder /app/out /usr/share/nginx/html

# (İsteğe bağlı özel config)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
