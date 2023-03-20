const Todo = require("../models/todo");
const todoCntr = {
  getAll: async function (req, res) {
    const todos = await Todo.find();
    res.json(todos);
  },
  getOne: async function (req, res) {
    let id = req.params.id;
    const singleTodo = await Todo.findById(id);
    res.json({ todo: singleTodo });
  },
  add: async function (req, res) {
    let todo = new Todo(req.body);
    const resData = await todo.save();
    res.json(resData);
  },
  update: async function (req, res) {
    let id = req.params.id;

    const todoToUpdate = await Todo.findById(id);
    todoToUpdate.completed = true;

    const updatedTodo = await Todo.findByIdAndUpdate(id, todoToUpdate, {
      new: true,
    });
    res.json(updatedTodo);
  },
  delete: async function (req, res) {
    let id = req.params.id;

    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.json(deletedTodo);
  },
};
module.exports = todoCntr;
