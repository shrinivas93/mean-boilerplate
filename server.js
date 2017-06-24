var express = require('express');
var listEndpoints = require('express-list-endpoints');

var fs = require('fs');
var app = express();

app.use(express.static('public'));

var folders = ["api"];
var modules = [];
folders.forEach(function(folder) {
    var files = fs.readdirSync(folder);
    files.forEach(function(file) {
        var modulePath = "./" + folder + "/" + file;
        console.log(modulePath);
        modules.push(require(modulePath));
    });
});
modules.forEach(function(module) {
    app.use("/hi", module);
});

var server = app.listen(8000, function () {
    console.log("Server running!!");
    console.log(listEndpoints(app));
});