const express = require("express");
const os = require('os');

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "service2", hostname: os.hostname() });
});

app.listen(process.env.PORT);
