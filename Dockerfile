FROM node:16.13.0-alpine

WORKDIR /app

COPY package*.json .npmrc ./

RUN npm install

COPY index.js ./
COPY ./lib ./lib
COPY ./test/integration/server ./test/integration/server

CMD ["node", "./test/integration/server/index.js"]
