# graphql-end-point-testing

# About Repository:
This is a basic node-js graphql server that I created to show the basics of implementing both unit and integration tests.

# Software(s) required:
* Latest stable version of Node Package Manager

# Project Setup:

* Step 1:

Create `jwt tokens` with the following payloads:

#NB

Generated token should be put in the .env file as a value of the `EXISTING_USER_TOKEN` variable.
```
  {
    "firstName": "Refilwe",
    "lastName": "Phago",
    "email": "refilwe@mock.com"
  }
```

Generated token should be put in the .env file as a value of the `NON_EXISTANT_USER_TOKEN` variable.
```
  {
    firstName: "Simmi",
    lastName: "Mda",
    email: "simmi@mock.com"
  }
```
* Step 2:

In the projects root directory create a `.env` file and add the following variables:

`PORT`

`EXISTING_USER_TOKEN`

`NON_EXISTANT_USER_TOKEN`

* Step 3:

Switch to the projects root directory and run `npm install` to install the required packages.

* Step 4:

Run `npm  run dev` to start-up the server and access the end-points on `http://localhost:PORT`.

* Step 5:

How to run tests:

`Unit Tests` 

```
npm run test:unit
```

`Integration Tests` 

```
npm run test:integration
```


# Dependencies:
* EXPRESS
* EXPRESS-GRAPHQL
* MORGAN
* CORS
* HELMET
* GRAPHQL
* JSONWEBTOKEN

# Dev-dependencies:
* DOTENV
* NODEMON
* SUPERTEST
* JEST

