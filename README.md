## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Links 
https://docs.nestjs.com/
https://docs.nestjs.com/recipes/cqrs
https://docs.nestjs.com/microservices/rabbitmq
https://docs.nestjs.com/recipes/sql-typeorm
https://docs.nestjs.com/techniques/configuration

### Architecture inspiration
https://github.com/nestjs/cqrs/tree/master/src
https://github.com/kyhsa93/nestjs-rest-cqrs-example/tree/main/src/account

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).

## RabbitMQ Updates
### Get all movies 
Trigger: get_all_movies</br> 
Que: movies_list

### Get all screenings 
Trigger: get_all_screenings</br> 
Que: screenings_list
