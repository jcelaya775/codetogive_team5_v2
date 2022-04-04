const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenteeSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    rememberLogin: Boolean,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: Number,
    school: String,
    avatar: { // profile picture
        data: Buffer,
        contentType: String
    },
    responses: {
        // insert question responses here
        label: [{ area: { type: String }, accuracy: { type: Number } }],
        mentorId: Number,
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
    }
});

module.exports = Mentee = mongoose.model('Mentee', MenteeSchema);