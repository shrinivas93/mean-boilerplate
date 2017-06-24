var express = require("express");

var app = module.exports = express.Router();

app.get("/test", function(req, res) {
    res.send("Hello Test!");
});