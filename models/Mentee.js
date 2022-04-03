const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenteeSchema = new Schema(
    {
        menteeId: Number,
        email: String,
        password: String,
        rememberLogin: Boolean,
        firstName: String,
        lastName: String,
        age: Number,
        school: String,
        avatar: { // profile picture
            data: Buffer,
            contentType: String
        },
        responses: {
            // insert question responses here
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
    }
);

module.exports = Mentee = mongoose.model('Mentee', MenteeSchema);