const todoList = require("../models/todoListSchema");


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


module.exports = {
    getAll,
    createTodo,
    deleteTodo,
    updateTodo,
    getUpdatedTodo
}