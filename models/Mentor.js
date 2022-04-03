const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = Schema({
    mentorId: Number,
    email: String,
    password: String,
    rememberLogin: Boolean,
    firstName: String,
    lastName: String,
    age: Number,
    company: String,
    avatar: { // profile picture
        data: Buffer,
        contentType: String
    },

    label: String,
    mentorId: Number,
    posts: [{
        title: String,
        date: String,
        img: { data: Buffer, contentType: String },
        text: String,
        comments: [{ userId: Number, text: String }]
    }]
});

module.exports = Mentor = mongoose.model('Mentor', MentorSchema);