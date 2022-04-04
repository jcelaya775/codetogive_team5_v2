const express = require('express');
const router = express.Router();

const Mentee = require('../../models/Mentee');

// @route   GET api/mentees
// @desc    Get all mentees
// @accss   Public
router.get('/:email', (req, res) => {
  Mentee.findOne({ email: req.params.email })
    .then(mentee => {
      if (mentee.password === req.body.password) {
        res.json({ ...mentee, result: 'success' });
      } else {
        res.json({ result: 'fail' });
      }
    })
    .catch(err => {
      res.json({ result: 'fail' })
      console.log(err)
    });
});

// @route   POST api/mentees
// @desc    Create a new mentee
// @accss   Public (usually private if using authentication)
router.post('/', async (req, res, next) => {
  const newMentee = new Mentee({
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    school: req.body.age,
    label: req.body.label,
    mentorId: req.body.mentorId
  });

  try {
    const mentee = await newMentee.save()
    res.json(mentee);

    console.log('Mentee Created:')
    console.log(mentee)
  } catch (e) {
    return next(e);
  }
});

// @route   DELETE api/mentees/id
// @desc    Delete a user
// @accss   Public (usually private if using authentication)
router.delete('/:id', (req, res) => {
  Mentee.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// middleware function to run python script
const runModel = (req, res, next) => {
  // note: responses should be in the form of an array
  const child = spawn('python', ['../../python/interest-classifier.py', JSON.stringify(req.body.responses)])

  child.stdout.on('data', (data) => {
    const str = data.toString().replace(/'/g, `"`)
    const obj = JSON.parse(str)

    // update label(s) for user
  })

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  child.on('close', (code) => {
    if (code !== 0) console.log('An error has occurred.')
    console.log(`child process exited with code ${code}`)
  })

  next()
}

router.use(runModel);

router.get('/model', (req, res) => {
  data = req.body.data;
})

module.exports = router;