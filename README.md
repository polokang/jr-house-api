# jr-house-api

- Publish the House
- CRUD the House
- Sign up the Owner
- CRUD the Owner
- Add the Tenant
- CURD the Tenant
- Create the Relationship between House and Owner
- Create the Relationship between House and Tenant

# API

1. Add a house info: [post] /houses/
2. Get all house info: [get] /houses/
3. Get a house info: [get] /houses/:code

# Dependencies:

1. `express` _for server._
2. `nodemon` _for automatically restarting the node application when file changes._
3. `envdotjson` _is a module loads environment variable from a single json file into process.env._
4. `helmet` _helps you secure your Express apps by setting various HTTP headers._
5. `morgan` _using the given format and options._
6. `cors` _providing a Connect/Express middleware that can be used to enable CORS with various options._
7. `winston` _A logger for just about everything._
8. `winston-daily-rotate-file` _A transport for winston which logs to a rotating file. Logs can be rotated based on a date, size limit, and old logs can be removed based on count or elapsed days._
9. `mongoose` _Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment._
10. `joi` _Object schema description language and validator for JavaScript objects._

# Steps

### 1. Bacic express server

- init the project and install express

  ```
  npm init --yes
  npm i express
  git init
  git remote add origin https://github.com/polokang/jr-house-api.git
  ```

- From root, create a new file names `.gitignore`
- Create src folder and `src/server.js`

### 2. Install developer tools for fast develop

- `npm i nodemon`
- `npm i envdotjson`
- `npm i helmet`
- `npm i morgan`
- `npm i cors`
- `npm i winston`
- `npm i winston-daily-rotate-file`
- `npm i mongoose`
- `npm i joi`

## Run

> `npm run dev` for run local server

> `mongod` for run local mongoDB

# issue

1. `process.env.PWD` can not get value in vscode debug mode. so need to change the logDirectory path in src/utils/logger.js.
