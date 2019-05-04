const express = require("express")
require("envdotjson").load()
require("express-async-errors")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const YAML = require("yamljs")

const swaggerSpec = YAML.load("./swagger/swagger.yaml")
const routes = require("./routes")
const { connectToDB } = require("./utils/db")
const errorHandler = require("./middleware/errorHandler")
const logger = require("./utils/logger")

const app = express()
const PORT = process.env.PORT || 3002
const morganLvl = process.env.NODE_ENV === "production" ? "short" : "dev"
const morganLog = morgan(morganLvl, { stream: logger.stream })

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(helmet())
app.use(cors())
app.use(morganLog)
app.use(express.json({ limit: "50mb" })) // It parses incoming requests with JSON payloads and is based on body-parser.
app.use("/jr", routes)
app.use(errorHandler)

connectToDB()
  .then(() => {
    logger.info("DB connected")
    if (process.env.NODE_ENV !== "test") {
      app.listen(PORT, () => {
        logger.info(`Server is listening on PORT: ${PORT}`)
      })
    }
  })
  .catch(e => {
    logger.error("DB connection failed")
    throw new Error(e)
  })

module.exports = app

app.get("/", (req, res) => {
  res.send("welecom to jr！")
})

// app.listen(3000, () => console.log("listen 3000 port"));
