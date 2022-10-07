const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask, getTask} = require('../controllers/tasks/tasks');

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/:id', getTask);

module.exports = router;