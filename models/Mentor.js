const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    rememberLogin: Boolean,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: String,
    avatar: { // profile picture
        data: Buffer,
        contentType: String
    },
    label: String,
    menteeId: { type: [Number] },
    posts: {
        type: [{
            title: String,
            date: String,
            img: { data: Buffer, contentType: String },
            text: String,
            comments: [{ userId: Number, text: String }]
        }],
        default: undefined
    }
});

module.exports = Mentor = mongoose.model('Mentor', MentorSchema);