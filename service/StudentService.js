var studentProvider = new(require("../provider/StudentProvider.js").StudentProvider)();

StudentService = function () {
    this.getStudents = function (callback) {
        studentProvider.getStudents(function (err, students) {
            callback(err, students);
        });
    }
}

exports.StudentService = StudentService;
