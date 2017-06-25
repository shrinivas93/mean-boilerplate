var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    address: {
        addressLine1: {
            type: String
        },
        addressLine2: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: String
        }
    }
}, {
    timestamps: true
});
var Student = mongoose.model('student', studentSchema);
