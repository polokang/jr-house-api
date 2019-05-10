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
2. Get all house info: [get] /houses/ http://localhost:3002/jr/houses
3. Get a house info: [get] /houses/:code

###Owner

- add owner: [post] /owner http://127.0.0.1:3002/jr/owner

```
{
	"firstName":"zhou",
	"lastName":"kang",
	"fullName":"zhouhengk",
	"email":"cadb@gmail.com",
	"phone":"0426628645"
}
```

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
11. `express-async-errors` _This library is about what happens when you hit an error._
12. `swagger-ui-express` _the Swagger UI bound to your Swagger document. This acts as living documentation for your API hosted from within your app._
13. `yamljs` _Standalone JavaScript YAML 1.2 Parser & Encoder._
14. `bcrypt` _This library help you hash passwords._
15. `jsonwebtoken` _This was developed against draft-ietf-oauth-json-web-token-08._

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
- `npm i express-async-errors`
- `npm i swagger-ui-express`
- `npm i yamljs`
- `npm i bcrypt`
- `npm i jsonwebtoken`

## Run

> `mongod` for run local mongoDB
> `npm run dev` for run local server

# issue

1. `process.env.PWD` can not get value in vscode debug mode. so need to change the logDirectory path in src/utils/logger.js.

2. How to add owner feather?

- add models/owner.js
- add services/owner.js
- add controllers/owner.js
- add routes/owner.js
- add `ownerRoute` in ./routes.js

3. fix upload file size limit.

- `"request entity too large" PayloadTooLargeError: request entity too large`
- `app.use(express.json({ limit: "50mb" }))` in server.js
