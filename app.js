require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
