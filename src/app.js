const express = require("express");
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("/*", (req, res) => {
    res.render("errorPage");
});

app.listen(8080, () => {
    console.log("listening to port..");
});