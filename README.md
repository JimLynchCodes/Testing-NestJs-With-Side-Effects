# Testing-NestJs-With-Side-Effects

## Usage
Look at the README in the `testing-nest-with-side-effects` folder for how to run the dev server, units tests, and a fresh build.

## "Don't Mock What You Don't Own"

Although I have been writing automated tests and practicing TDD for a long time, recently a fellow colleague gave me an interesting piece of adivice.

He said, _"Don't test what you don't own".

What he meant was that a developer should not create mocks for third-party code, only for the functions and classes written by members if his or her own team. 

Why?

The main reason here is that library change and evolve over time, but your mocks will not change with it. The true interface of the thing will become different over time and so your code which interacts with it will need to change. However, your unit tests, still calling the mock for the only interface, will still pass... they will pass while a bug now exists- a false positive!

This repo keeps this philosophy in mind and tests the side-effect code without mocking or directly spying on the specific api. 

## Side Effect Examples
This project is a demo of unit testing different type of "side effect" code in TypeScript within the NestJs framework and using Jest as the test runner.

We'll look at three different side effects and a way for unit testing each of them:

- sleep / timeout

- calling to an endpoint

- interacting with a database


Let's look closer at each one...


### 1. Sleep / Timeout

This endpoint sleeps and then returns the string "Awake!".

GET - `localhost:3000/sleep` - sleeps for five seconds and returns "Awake!".


### 2. HTTP Request

Calls a third-party endpoint, either returns that endpoint's response or an error.

GET - `localhost:3000/joke` - gets a random joke from (jokes endpoint)


### 3. MongoDb Interactions

These endpoints create, read, update, and delete user documents from a mongo collection.

You can hit the sleep endpoint here:

GET - `localhost:3000/users` - gets all users

GET - `localhost:3000/users/:id` - gets a user by id

POST - `localhost:3000/users` - inserts a new user

PUT - `localhost:3000/users/:id` - updates a user 

DELETE - `localhost:3000/users/:id` - deletes a user 



# Scaffloded With Nest-CLI

This project was created using the [nest cli](https://docs.nestjs.com/cli/overview):
```
nest new testing-nest-with-side-effects
```

