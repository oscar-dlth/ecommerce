# Clean Arquitecture Node.js + CQRS + Repository Pattern + Sequelizer

## Backend using clean arquitecture

This project is a back end portfolio using Clean Arquitecture.

## Arquitecture layer overview.

In this project the layer names will be changed as [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/) indicates.

![clean-arquitecture-jason]

[clean-arquitecture-jason]: https://miro.medium.com/max/640/0*GaN7k4lcnYOOJUUs

Image By [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/)
## Layers Overview

Based on [The Clean Architecture — Beginner’s Guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165) and [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/), i decided to use the following distribution.


### Domain (Entities)

Enterprise Business Rules, this layer holds the <u>entities</u> and <u>enumerables</u> definition.



### Application (Use Cases)

Application Business Rules, this layer holds all the use cases of the application, so all the functionallities of the application are implemented here, this layer has Commands and Queries like  [CQRS pattern](https://martinfowler.com/bliki/CQRS.html) indicates. To achive this pattern i used the node package [mediatr-ts](https://www.npmjs.com/package/mediatr-ts).


### Gateways.
Interface of all CRUD aperations performed by DB. To do this operations the [Repository pattern](https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30) was implemented.


### Infrastructure (DB)
Database Implementations and identity, here are the Repository Database Implementations and Data services implementations. For database management the ORM [Sequelize](https://sequelize.org/) is used


### UI
Web Api User Interface, contains all the application routes. [Express](https://expressjs.com/) is used to perform api server calls.



## The Dependency Rule 
All outer layers know about inner layers but not viceversa.

To achive this rule is implemented [Dependency Inversion Principle](https://es.wikipedia.org/wiki/Principio_de_inversi%C3%B3n_de_la_dependencia) with [Brand DI Container](https://brandi.js.org/).


## Folder structure.

```        
src/
├── app/
│   ├── domain/
│   │   ├── core/
│   │   │   ├── common/
│   │   │   │   └── statusCodes.ts
│   │   │   └── interfaces/
│   │   ├── entities/
│   │   ├── services/
│   │   │   ├── base/
│   │   │   │   ├── CreateOperation.ts
│   │   │   │   ├── DeleteOperation.ts
│   │   │   │   ├── ReadOperation.ts
│   │   │   │   └── UpdateOperation.ts
│   │   │   ├── IAuthService.ts
│   │   │   ├── ICategoryService.ts
│   │   │   └── IProductService.ts
│   │   └── statusCodes.ts
│   ├── application/
│   │   ├── common/
│   │   │   ├── errorResponseViewModel.ts
│   │   │   └── responseViewModel.ts
│   │   └── users/
│   │       ├── commands/
│   │       │   ├── createUser/
│   │       │   │   ├── CreateUserCommand.ts
│   │       │   │   └── CreateUserCommandHandler.ts
│   │       │   └── updateUser/
│   │       │       └── ...
│   │       ├── queries/
│   │       │   ├── getUserById/
│   │       │   │   ├── GetUserByIdQuery.ts
│   │       │   │   └── GetUserByIdQueryHandler.ts
│   │       │   └── getUsers/
│   │       │       └── ...
│   │       └── viewModels/
│   │           ├── userCreatedViewModel.ts
│   │           ├── userViewModel.ts
│   │           └── ...
│   ├── gateways/
│   │   └── repositories/
│   │       └── database/
│   │           ├── base/
│   │           │   └── baseRepository.ts
│   │           └── userRepository.ts
│   ├── infrastructure/
│   │   ├── db/
│   │   │   ├── mySql/
│   │   │   │   ├── resposotories/
│   │   │   │   │   ├── base/
│   │   │   │   │   │   └── baseRepository.ts
│   │   │   │   │   └── userRepository
│   │   │   │   ├── sequelize/
│   │   │   │   │   ├── config/
│   │   │   │   │   ├── migrations/
│   │   │   │   │   ├── models/
│   │   │   │   │   └── seeders/
│   │   │   │   └── ...
│   │   │   ├── another database implementations
│   │   │   └── ...
│   │   ├── identity/
│   │   │   └── middleware/
│   │   │       └── check-auth.ts
│   │   └── services/
│   │       ├── base/
│   │       │   ├── CreateOperation.ts
│   │       │   ├── DeleteOperation.ts
│   │       │   ├── ReadOperation.ts
│   │       │   └── UpdateOperation.ts
│   │       ├── authServiceImp.ts
│   │       └── UserService.ts
│   └── UI/
│       ├── routes/
│       │   ├── index.ts (all routes)
│       │   ├── user.ts ( user routes implementations)
│       │   └── ...
│       └── index.tx ( express app)
├── dependency-inyection/
│   ├── container.ts
│   ├── initBrandiContainer.ts
│   ├── registerRequestHandlers.ts
│   ├── registerServices.ts
│   └── tokens.ts
└── tests/
    ├── user.spec.ts
    └── ...
```



