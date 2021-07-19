const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

// Db config
const db = keys.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDb connected'))
  .catch((err) => console.log(err));

// First route
app.get('/', (req, res) => res.send('Hello World!'));

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
