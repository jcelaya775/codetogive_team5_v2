const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenteeSchema = new Schema(
    {
        menteeId: Number,
        password: String,
        email: String,
        firstName: String,
        lastName: String,
        age: Number,
        school: String,
        label: String,
        mentorId: Number
    }
);

module.exports = Mentee = mongoose.model('Mentee', MenteeSchema);