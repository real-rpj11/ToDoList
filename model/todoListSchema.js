const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todoListSchema = new Schema({
    date: { type: String, require: true },
    day: { type: String, require: true },
    title: { type: String, require: true }
}, { collection: "todo" })

const todoList = mongoose.model('Todo', todoListSchema)
module.exports = todoList