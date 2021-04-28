const todos = require('./todos');
const todoItems = require('./todoitems');
const user = require('./user');
module.exports = {
  todosController: todos,
  todoItemsController: todoItems,
  userController: user
};
