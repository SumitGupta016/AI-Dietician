FROM node:20.16-alpine

WORKDIR /usr/src/app

COPY . .
COPY package*.json yarn.lock ./
RUN yarn install

RUN yarn run build

EXPOSE 3000
CMD [ "yarn", "run", "start:dev" ]