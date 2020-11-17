const todoList = require("../models/todoListSchema");

//getting all task
const getAll = async(req, res) => {
    try {
        const todos = await todoList.find();
        if (!todos) {
            return res.status(400).json({
                error: "Error in getting the Tasks!",
            });
        }

        res.render('index', { todos: todos })
    } catch (e) {
        return res.status(400).json({
            error: e,
        });
    }
}

//create new task
const createTodo = async(req, res) => {
    try {
        const todos = {
            date: req.body.date,
            day: req.body.day,
            title: req.body.title,
        };

        const newtodo = new todoList(todos);
        const result = await newtodo.save();

        if (!result) {
            return res.status(400).json({
                error: "Error in adding new task!",
            });
        }
        res.redirect('/')
    } catch (e) {
        console.log(e);
    }

}

//deleting one task by id
const deleteTodo = async(req, res) => {
    try {
        const result = await todoList.deleteOne({ _id: req.params.id })
        if (!result) {
            return res.status(400).json({
                error: "error",
            });
        }
        res.redirect('/')

    } catch (e) {
        console.log(e)
    }
}

//getting one task to be updated by id
const getUpdatedTodo = async(req, res) => {
    try {
        const todos = await todoList.findOne({ _id: req.params.id });
        if (!todos) {
            return res.status(400).json({
                error: "Error in updating task!",
            });
        }
        res.render('update', { todos: todos })
    } catch (e) {
        return res.status(400).json({
            error: e,
        });
    }
}

//updating one task by id
const updateTodo = async(req, res) => {
    try {
        const data = {
            date: req.body.date,
            day: req.body.day,
            title: req.body.task
        }
        const result = await todoList.updateOne({ _id: req.params.id }, { $set: data })

        if (!result) {
            console.log("error")
            return res.status(400).json({
                error: "error",
            });
        }
        res.redirect('/')
    } catch (e) {
        console.log(e)
    }
}



module.exports = {
    getAll,
    createTodo,
    deleteTodo,
    updateTodo,
    getUpdatedTodo
}