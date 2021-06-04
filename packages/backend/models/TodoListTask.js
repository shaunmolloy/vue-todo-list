const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const TodoList = require('./TodoList');

const TodoListTask = sequelize.define('TodoListTask', {
  name: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  tableName: 'todo_list_task',
  createdAt: 'created',
  updatedAt: 'updated',
  underscored: true,
});

TodoListTask.belongsTo(TodoList, { foreignKey: 'list_id' });

module.exports = TodoListTask;
