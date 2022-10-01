FROM node:16.13.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --registry=https://registry.npmmirror.com

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]