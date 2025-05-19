FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

CMD ["sh", "-c", "if [ ! -f /data/db_seeded ]; then npm run db:seed:all && touch /data/db_seeded; else echo 'Database already seeded'; fi"]
