# Testing-NestJs-With-Side-Effects

## Usage
Look at the README in the `testing-nest-with-side-effects` folder for how to run the dev server, units tests, and a fresh build.

## "Don't Mock What You Don't Own"

Although I have been writing automated tests and practicing TDD for a long time, recently a fellow colleague gave me an interesting piece of adivice.

He said, _"Don't test what you don't own".

What he meant was that a developer should not create mocks for third-party code, only for the functions and classes written by members if his or her own team. 

#### _Why?_

The main reason here is that library change and evolve over time, but your mocks will not change with it. The true interface of the thing will become different over time and so your code which interacts with it will need to change. However, your unit tests, still calling the mock for the only interface, will still pass... they will pass while a bug now exists- a false positive!

So, the idea is that mocking things you don't own will cause lots of headaches around updating and reworking tests, and therefore _not_ mocking things you don't own should lead to a nicer, easier-to-maintain codebase and test suite.

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

#### How We Can Test Without Mocking It

The goal here is to have our tests run quickly and not wait the full 5 seconds but fake that it happened still assert that the timeout has been set.

Instead of spying on the "setTimeout" method directly, we can use Jest's "useFakeTimers" to replace the timeouts with mock functions.

With this approach, even if the nodejs syntax for whatever reason changed to "setTimeOut", our code would still work fine (assuming Jest's useFakeTimers was kept up-to-date with the new timer syntax)

<br/>

### 2. HTTP Request

Calls a third-party endpoint, either returns that endpoint's response or an error.

GET - `localhost:3000/joke` - gets a random joke from (jokes endpoint)

<br/>

### 3. MongoDb Interactions

These endpoints create, read, update, and delete user documents from a mongo collection.

You can hit the sleep endpoint here:

GET - `localhost:3000/users` - gets all users

GET - `localhost:3000/users/:id` - gets a user by id

POST - `localhost:3000/users` - inserts a new user

PUT - `localhost:3000/users/:id` - updates a user 

DELETE - `localhost:3000/users/:id` - deletes a user 

<br/>

# Scaffloded With Nest-CLI

This project was created using the [nest cli](https://docs.nestjs.com/cli/overview):
```
nest new testing-nest-with-side-effects
```

