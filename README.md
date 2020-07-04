# Testing-NestJs-With-Side-Effects

# Scaffloded With Nest-CLI

created this project with using the [nest cli](https://docs.nestjs.com/cli/overview):
```
nest new testing-nest-with-side-effects
```

## Usage
Look at the README in the `testing-nest-with-side-effects` folder for how to run the dev server, units tests, and a fresh build.

## Testing Side Effects
We'll look at three different side effects and a way for unit testing each of them:

- sleep / timeout

- calling to an endpoint

- interacting with a database

Let's take a closer look at each one...

### Sleep Endpoint

You can hit the sleep endpoint here:

GET - `localhost:3000/sleep`

This endpoint sleeps for three seconds, then returns the string "Awake!".

