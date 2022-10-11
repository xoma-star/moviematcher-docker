FROM node:18

RUN mkdir -p /home/root/server

WORKDIR /home/root/server

COPY package*.json ./

USER root

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]