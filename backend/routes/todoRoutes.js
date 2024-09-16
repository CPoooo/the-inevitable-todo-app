const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');
const authMiddleware = require('../middleware/authMiddleware'); // Import the middleware

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }); // Use req.user.id from the middleware
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  const { title, completed } = req.body;
  try {
    const newTodo = new Todo({
      title,
      completed,
      user: req.user.id,
    });

    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
