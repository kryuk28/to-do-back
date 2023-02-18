const express = require('express');
const jwt = require('jsonwebtoken');

const Task = require('../models/Task');
const User = require('../models/User');

const router = express.Router();

// Middleware to authenticate requests
const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];
  try {
    const {userId} = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(userId);
    if (!user) {
      return res.sendStatus(401);
    }
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(401);
  }
};

// GET /tasks
router.get('/', authenticate, async (req, res) => {
  console.log(req.user);
  const tasks = await Task.find({user: req.user._id});
  res.json(tasks);
});

// POST /tasks
router.post('/', authenticate, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    user: req.user._id,
  });
  const savedTask = await task.save();
  res.json(savedTask);
});

// PUT /tasks/:id
router.put('/:id', authenticate, async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task.user.toString() !== req.user._id.toString()) {
    return res.sendStatus(401);
  }
  task.title = req.body.title;
  const savedTask = await task.save();
  res.json(savedTask);
});

// DELETE /tasks/:id
router.delete('/:id', authenticate, async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task.user.toString() !== req.user._id.toString()) {
    return res.sendStatus(401);
  }
  await task.delete();
  res.sendStatus(204);
});

module.exports = router;
