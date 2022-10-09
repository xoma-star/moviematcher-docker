FROM node:18-alpine

WORKDIR MovieMatcher

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]