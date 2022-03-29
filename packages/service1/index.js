const express = require("express");
const os = require('os');
const fetch = require("node-fetch");

const app = express();

app.get("/", async (req, res) => {
    const fromS2 = await fetch("http://service2").then(r => r.json());
    
    const result = { name: "service1", hostname: os.hostname(), fromS2 };

    res.send(`<pre>${JSON.stringify(result, null, 2)}</pre>`);
})

app.listen(process.env.PORT);