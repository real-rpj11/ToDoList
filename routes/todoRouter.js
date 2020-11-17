const express = require('express')
const router = express.Router();

const todoListController = require('../controllers/todoListController');

router.get('/', todoListController.getAll); //get all tasks
router.post('/create', todoListController.createTodo) //create new task
router.post('/:id', todoListController.deleteTodo) //delete one task by id
router.get('/:id', todoListController.getUpdatedTodo) //get one task to be updated by id
router.post('/updated/:id', todoListController.updateTodo) //update one the task

module.exports = router;