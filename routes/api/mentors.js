const express = require('express');
const router = express.Router();

const Mentor = require('../../models/Mentor');

// @route   GET api/users
// @desc    Get all users
// @accss   Public
router.get('/', (req, res) => {
    // retrieve all users
});

// @route   POST api/users
// @desc    Create a user
// @accss   Public (usually private if using authentication)
router.post('/', async (req, res) => {
    // For post dates:
    // Mentee
    // .find()
    // .forEach(function (doc) {
    // d = doc._id.getTimestamp(); 
    // print(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate() + " " + d.getHours() + ":" +
    //  d.getMinutes() + ":" + d.getSeconds())
    // })

    // const newMentor = new Mentor({});
    // try {
    //     mentor = await newMentor.save();
    //     res.json(mentor);
    // } catch (e) {
    //     return next(e);
    // }
});

// @route   DELETE api/users/id
// @desc    Delete a user
// @accss   Public (usually private if using authentication)
router.delete('/:id', (req, res) => {
    // Mentor.findById(req.params.id)
    //     .then((user) => user.remove().then(() => res.json({ success: true })))
    //     .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;