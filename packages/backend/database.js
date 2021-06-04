const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:root@mysql:3306/todo_list', {
  logging: false,
});

module.exports = sequelize;
