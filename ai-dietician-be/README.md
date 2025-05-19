# AI Dietician

This is the backend for AI Dietician

## Getting Started

```bash
$ git clone git@github.com:SumitGupta016/AI-Dietician.git
```

## Installation

```bash
$ Install yarn: npm i -g yarn
$ run yarn or yarn add
```

## Environment

```
1. Rename .env.local to .env
2. Populate the respective env variables
3. Use port as 3000 for running the app.
```

## Running App locally Using Docker

```
1. Clone FE and BE Repository
2. cd ai-dietician-be
3. Run : docker compose up --build command to build the application
```


## Running App locally without docker

```
1. Establish postgres database connection locally
2. Run Migration: yarn run db:migrate
3. Run Seeders: yarn run db:seed:all
4. Run BE APP: yarn run start:dev
```

## Test

```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test:cov
```

## Build App

```bash
$ yarn run build