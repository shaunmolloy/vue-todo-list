const BaseRepository = require('./BaseRepository');
const TodoList = require('../models/TodoList');

class TodoListRepository extends BaseRepository {}

module.exports = new TodoListRepository(TodoList);
