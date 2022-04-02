const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const { spawn } = require('child_process');

// user routes
const mentees = require('./routes/api/mentees');
const mentors = require('./routes/api/mentors');

// server
const app = express();

// connect to database
const url = process.env.URL;
mongoose.connect(url)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Bodyparse middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// run python script
const obj = { name: 'Alfred', age: 18, programming: 10, finance: 12, math: 7 };
const child = spawn('python', ['./python/process.py', JSON.stringify(obj)]);

child.stdout.on('data', (data) => {
  const str = data.toString().replace(/'/g, `"`);
  const obj = JSON.parse(str);

  console.log(obj);

  app.get('/', (req, res) => {
    res.json(obj)
  });
});

child.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
})

child.on('close', (code) => {
  if (code !== 0) console.log('An error has occurred.');
  console.log(`child process exited with code ${code}`);
});

// Launch server
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`));