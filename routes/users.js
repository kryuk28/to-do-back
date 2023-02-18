const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = express.Router();

// POST /users/register
router.post('/register', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// POST /users/login
router.post('/login', async (req, res) => {
  const user = await User.findOne({username: req.body.username});
  if (!user) {
    return res.sendStatus(401);
  }
  console.log(user, req.body);
  // if (user.password !== req.body.password) {
  //   return res.sendStatus(401);
  // }
  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
  res.json({token});
});

module.exports = router;
