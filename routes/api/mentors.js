const express = require('express');
const router = express.Router();

const Mentor = require('../../models/Mentor');

// Mentee
// .find()
// .forEach(function (doc) {
// d = doc._id.getTimestamp(); 
// print(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate() + " " + d.getHours() + ":" +
//  d.getMinutes() + ":" + d.getSeconds())
// })

// @route   GET api/mentors
// @desc    Get all mentors
// @accss   Public
router.get('/', (req, res) => {
    // retrieve all mentors
});

// @route   POST api/mentors
// @desc    Create a new mentor
// @accss   Public (usually private if using authentication)
router.post('/:id', async (req, res, nex) => {
    const newMentor = new Mentor({
        mentorId: req.body.mentorId,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        company: req.body.compnany,
    });

    try {
        const mentor = await newMentor.save();
        res.json(mentor);
    } catch (e) {
        return next(e);
    }
});

// @route   DELETE api/mentors/id
// @desc    Delete a user
// @accss   Public (usually private if using authentication)
router.delete('/:id', (req, res) => {
    // Mentor.findById(req.params.id)
    //     .then((user) => user.remove().then(() => res.json({ success: true })))
    //     .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;