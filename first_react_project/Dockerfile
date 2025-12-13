FROM node:latest

WORKDIR /app

# Очищаем кэш npm перед установкой
RUN npm cache clean --force

COPY package*.json ./
RUN npm install

COPY . .

# Открываем порт, на котором работает приложение
EXPOSE 5173

# Команда для запуска приложения в режиме разработки
CMD ["npm", "run", "dev"]