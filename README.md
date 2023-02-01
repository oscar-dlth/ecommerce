# Clean Arquitecture Node.js

## Backend using clean arquitecture

This project is a back end portfolio using Clean Arquitecture and repository pattern, this will allow us to work with diferent databases such as non sql and sql.

## Branch distribution

The repository has a branch for each database implementation ie. [my-sql-implementation](https://github.com/oscar-dlth/movies-api/tree/my-sql-implementation).

## Software layer overview

This picture show the layer distribution of a clean arquitecture.

![clean-arquitecure-diagram]

[clean-arquitecure-diagram]: https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg
Image by [Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

</br>

In this project the layer names will be changed as [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/) indicates.

![clean-arquitecture-jason]

[clean-arquitecture-jason]: https://miro.medium.com/max/640/0*GaN7k4lcnYOOJUUs

Image By [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/)

<br>


## Structure Folder

Based on [The Clean Architecture — Beginner’s Guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165) and [Clean Architecture with .NET Core: Getting Started](https://jasontaylor.dev/clean-architecture-getting-started/) i decided to use this distribution.

<br>

### 1. Domain (Entities)

Enterprise Business Rules, this layer holds the <u>entities</u> and <u>enumerables</u> definition.

<br>


### 2. Application (Use Cases)

Application Business Rules, this layer has Commands and Queries like  [CQRS pattern](https://martinfowler.com/bliki/CQRS.html) indicates.

<br>


### 3. Gateways.
Interface of all CRUD aperations in the application layer, implemented by DB. To do this operations the [Repository pattern](https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30) are used.

<br>


### 4. Infrastructure (DB)
Database Implementations and identity, here are the Repository Database Implementations.

<br>


### 5. Presentation
Web Api User Interface, calls the Application layer operations.

<br>



## The Dependency Rule 
All outer layers know about inner layers but not viceversa.

To achive this rule is implemented [Dependency Inversion Principle](https://es.wikipedia.org/wiki/Principio_de_inversi%C3%B3n_de_la_dependencia) with [Brand DI Container](https://brandi.js.org/).


## Folder structure.

```        
└── stories-api/
    ├── brandDI
    ├── src/
    │   ├── 1-domain/
    │   │   ├── entities.ts
    │   │   └── statusCodes.ts
    │   ├── 2-application/
    │   │   ├── common/
    │   │   │   ├── errorResponseViewModel.ts
    │   │   │   └── responseViewModel.ts
    │   │   └── users/
    │   │       ├── dtos/
    │   │       │   ├── createUserDto.ts
    │   │       │   └── updateUserDto.ts
    │   │       ├── viewModels/
    │   │       │   ├── userCreatedViewModel.ts
    │   │       │   └── userViewModel.ts  
    │   │       ├── userCommands.ts
    │   │       └── userQueries.ts
    │   ├── 3-gateways/
    │   │   └── repositories/
    │   │       └── database/
    │   │           ├── base/
    │   │           │   └── baseRepository.ts
    │   │           └── userRepository.ts
    │   ├── 4-infrastructure/
    │   │   ├── db/
    │   │   │   ├── mongoDB/
    │   │   │   │   ├── implementations/
    │   │   │   │   │   └── resposotories/
    │   │   │   │   │       ├── base/
    │   │   │   │   │       │   └── baseRepository.ts
    │   │   │   │   │       └── userRepository
    │   │   │   │   ├── models/
    │   │   │   │   │   └── user.ts
    │   │   │   │   └── connection.ts
    │   │   │   ├── ...
    │   │   │   ├── another database implementations
    │   │   │   └── ...
    │   │   └── identity/
    │   │       ├── middleware/
    │   │       │   └── check-auth.ts
    │   │       └── JWTManager.ts
    │   └── 5.presentation/
    │       ├── routes/
    │       │   ├── index.ts (all routes)
    │       │   └── user.ts ( user routes implementations)
    │       └── index.tx ( express app)
    └── tests/
        └── user.spec.ts
```



