## Description

Api for getting information about countries and adding to calendar holidays. App handles getting coutries, country info, creating users, creating user calendars and adding holidays to this calendars. This API uses PostgreSQL databse and Repository pattern. For the repository patter I have user nest-sequelize-repositry package which is developed by myself. Also it is provided swagger documentation and few unit and e2e test using Jest.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

Use [swagger](http://localhost:9180/api) to test sending requests 

```bash
# development
$ pnpm start

# watch mode
$ pnpm start:dev
```

## Compile and run the project using Docker

```bash
$ docker compose up
```

## Run tests

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e
```

## Documentation

All endpoints have been documented with [Swagger](http://localhost:9180/api).
