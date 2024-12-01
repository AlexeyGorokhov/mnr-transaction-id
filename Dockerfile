FROM node:20.18-alpine

WORKDIR /app

COPY package*.json .npmrc ./

RUN npm install

COPY ./src ./src
COPY ./test ./test

CMD ["npx", "tsx", "./test/integration/server/index.ts"]
