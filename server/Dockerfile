FROM node:18

RUN mkdir -p /home/root/server/node_modules && chown -R node:node /home/root/server

WORKDIR /home/root/server

COPY package*.json ./

USER root

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]