const express = require('express');
const router = express.Router();

const Mentee = require('../../models/Mentee');

// @route   GET api/users
// @desc    Get all users
// @accss   Public
router.get('/', (req, res) => {
  Mentee.find()
    .then(mentees => {
      res.json(mentees);
    });
});

// @route   POST api/users
// @desc    Create a user
// @accss   Public (usually private if using authentication)
router.post('/', async (req, res) => {
  const newMentee = new Mentee({
    menteeId: 123,
    password: 123,
    email: 'example@gmail.com',
    firstName: 'example',
    lastName: 'lastname',
    age: 17,
    school: 'school',
    label: 'engineering',
    mentorId: 124
  });

  try {
    mentee = await newMentee.save
    res.json(mentor);
  } catch (e) {
    return next(e);
  }
});

// @route   DELETE api/users/id
// @desc    Delete a user
// @accss   Public (usually private if using authentication)
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;