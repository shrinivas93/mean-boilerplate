var express = require('express');

var fs = require('fs');
var app = express();

app.use(express.static('public'));

var folders = ["api"];
var modules = [];
folders.forEach(function (folder) {
    var files = fs.readdirSync(folder);
    files.forEach(function (file) {
        var modulePath = "./" + folder + "/" + file;
        console.log("Loading module at path : " + modulePath);
        modules.push(require(modulePath));
    });
});

app.use(function (req, res, next) {
    next();
});

modules.forEach(function (module) {
    app.use("/api", module);
});

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/college', {
        useMongoClient: true
    },
    function (err) {
        if (err) {
            console.log("Error connecting to DB : ", err);
        } else {
            console.log("DB connected successfully");
            app.listen(8000, function () {
                console.log("Server running!!");
            });
        }
    });
