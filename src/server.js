const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welecom to jr-house-api!");
});

app.listen(3000, () => console.log("listen 3000 port"));
