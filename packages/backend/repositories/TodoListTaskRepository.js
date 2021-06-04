const BaseRepository = require('./BaseRepository');
const TodoListTask = require('../models/TodoListTask');

class TodoListTaskRepository extends BaseRepository {}

module.exports = new TodoListTaskRepository(TodoListTask);
