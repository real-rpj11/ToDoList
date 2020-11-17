const express = require('express')
const router = express.Router();

const todoListController = require('../controllers/todoListController');

router.get('/', todoListController.getAll);
router.post('/create', todoListController.createTodo)
router.post('/:id', todoListController.deleteTodo)
router.get('/:id', todoListController.getUpdatedTodo)
router.post('/updated/:id', todoListController.updateTodo)


module.exports = router;