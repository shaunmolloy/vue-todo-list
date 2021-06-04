const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const TodoList = sequelize.define('TodoList', {
  name: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  tableName: 'todo_list',
  createdAt: 'created',
  updatedAt: 'updated',
  underscored: true,
});

module.exports = TodoList;
