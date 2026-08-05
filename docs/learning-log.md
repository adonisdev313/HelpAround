# Learning Log

# Day 1

Created:

- Angular Frontend
- NestJS Backend
- Created a new supabase project for DB

Next: Authentication System

# Day 2

Created:

- Header, Footer, Homepage
- Register and Login page and enhanced them
- Learn about Reactive and Angular Template driven forms

Template Drive Form: <input [(ngModel)]="name">
Reactive From(usually use):  is connected to TypeScript

Component
    |
    |
FormGroup
    |
    |
FormControl
    |
    |
HTML inputs

For implemention, I imported FormControl, FormGroup, Validators, ReactiveFormsModule

# Things I have learnt today

Validators are functions used to process and verify user input within form controls. A valiator checks an input against specific rules(like checking for an email format or minimum length) and determines if the form field is valid or invalid
There are 2 types of validators: synchronous and asynchronous validators

The ReactiveFormsModule is a built in angular module that enables the model-driven approach to building and managing forms. Unlike template-driven forms, it shifts the responsibility of creating, trackinng, and validating forms from the HTML template directly into your TypeScript component class.

# Key Features

-Immutable State: Every change to the form state returns a new state rather than mutating the existing model, which avoids data corruption.RxJS Integration: Form properties provide asynchronous --RxJS observable streams. This makes it incredibly easy to listen to real-time input changes or value alterations.
-Scalable Testing: -Because the form logic lives purely in TypeScript, you can write unit tests for your validation rules and dynamic behaviors without needing to render a UI element.

-Learn about route setting in angular(app.routes.ts)

# Day 3

Learned:

- NestJS modules
- Controller(like MVP, Model, View, Controller. But Model is service, and Controller is same)
- Services
- Prisma setup(supabase connection, why connection string that is using IPv6 is not working)
- Database modeling

Created:

- Auth module
- Users module
- User database model

Interview Knowledge Today:

**Q**: Explain NestJS architecture
**A**: NestJS follows a modular architecture. Controllers handle incoming HTTP requests, services contain business logic, and modules organize related fucntionality. Dependency injection connects these pieces together

**Q**: How does Angular communicate with backend?
**A**: 

Angular Component

↓

Angular Service (HttpClient)

↓

REST API

↓

NestJS Controller

↓

Service

↓

Database

# Day 4
Today we will create this:
User fills Register form
        |
        ↓
Angular Register Component
        |
        ↓
AuthService (HttpClient)
        |
        ↓
POST /auth/register
        |
        ↓
NestJS AuthController
        |
        ↓
AuthService
        |
        ↓
Database

 -- Remember --

 How to create service and component in Angular

 service: ng g s [directory you want to create] --skip-test (if you don't want unit test)
 component: ng g c [directory you want to create] --skip-test (if you don't want unit test also)

 How to create nest module, service, controller

 nest g controller [directory]
 nest g module [directory]
 nest g service [directory]

# Today's Goal

✅ Angular HttpClient configured
✅ Create Angular API service
✅ Create NestJS Register API endpoint
✅ Send data from Angular form → NestJS → response
✅ Understand DTO pattern
✅ Understand frontend/backend communication flow

I couldn't implement the passwordConfirm Validation feature in register page. 

# Day 5

Target: User registration + login with Supabase PostgreSQL + password hashing + JWT authentication

The things I have learnt today

- how to create JWT token and use in NestJS
- what is inject and import and why I have to use that in NestJS backend structure
- how to use prisma(but I am not sure I mastered that)
- Password Hashing by using bcrypt node module

Completed:

- User registeration
- User authentication

**Q**: How do you implement authentication in Angular + backend?
**A**: Angular login form -> HttpClient -> NestJS AuthController -> AuthService -> Database Verification -> JWT generation -> Token stored client-side -> Intercepter attaches token

# Day 6
Today I have to learn:
- How to get JWT token from backend and save in localStorage in angular frontend
- What is compute function and how to use that function
- What is signal wrapper and how to use that
- Understood the structure of the Angular frontend. 
- Why pages are crahsed sometimes when I am using localStorage in SSR mode (Learn about Injectable class, why @Component decorator is wrong in SSR)
