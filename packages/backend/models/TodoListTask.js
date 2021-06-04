const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const TodoListTask = sequelize.define('TodoListTask', {
  name: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  tableName: 'todo_list_task',
  createdAt: 'created',
  updatedAt: 'updated',
  underscored: true,
});

module.exports = TodoListTask;
