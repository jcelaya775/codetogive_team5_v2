const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = Schema({
    mentorId: Number,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    age: Number,
    school: String,
    label: String,
    menteeId: [{ type: String }]
});

module.exports = Mentor = mongoose.model('Mentor', MentorSchema);