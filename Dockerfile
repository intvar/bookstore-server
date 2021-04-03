FROM node:12.18.3-alpine3.10

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY ./package.json ./yarn.lock ./
COPY prisma ./prisma
RUN yarn install
RUN npx prisma generate
COPY . .

RUN yarn run build

CMD ["node", "dist/index.js"]