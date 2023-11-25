const express = require('express');
const path = require('path');
const app = express();
const port = 5008;

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "views/home.html")
    res.sendFile(htmlPath)
})

app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "views/register.html")
    res.sendFile(htmlPath)
})

app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "views/login.html");
    res.sendFile(htmlPath);
});

app.get("/ingresa", (req, res) => {
    let htmlPath = path.resolve(__dirname, "views/login.html")
    res.sendFile(htmlPath)
})