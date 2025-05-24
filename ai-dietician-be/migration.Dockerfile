FROM node:20.16-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "run", "db:migrate"]