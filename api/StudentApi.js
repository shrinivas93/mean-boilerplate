var express = require("express");
var app = module.exports = express();

var studentService = new(require("../service/StudentService.js").StudentService)();

app.get("/students", function (req, res) {
    studentService.getStudents(function (err, students) {
        console.log("students", students);
        res.send(students);
    });
});
