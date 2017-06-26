var Student = require("../model/Student.js");

StudentProvider = function () {
    this.getStudents = function (callback) {
        Student.find(function (err, students) {
            callback(err, students);
        });
    };
}

exports.StudentProvider = StudentProvider;
