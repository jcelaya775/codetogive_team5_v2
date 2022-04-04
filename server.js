const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()
const { spawn } = require('child_process')

// user routes
const mentees = require('./routes/api/mentees')
const mentors = require('./routes/api/mentors')

// server
const app = express()

// connect to database
const url = process.env.URL
mongoose
  .connect(url)
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err))

// Bodyparse middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.use('/api/mentees', mentees);
app.use('api/mentors', mentors);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// middleware function to run python script
const runModel = (req, res, next) => {
  const child = spawn('python', ['./python/process.py', JSON.stringify(obj)])

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

app.use(runModel);


// Launch server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on ${port}`))
