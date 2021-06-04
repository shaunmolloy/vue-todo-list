const express = require('express');
const { jsonSuccess, jsonError } = require('./json');

const routes = express.Router();
const repository = require('../repositories/TodoListTaskRepository');

// get all tasks
routes.get('/', (req, res) => {
  repository.findAll()
    .then((tasks) => res.json({ ...jsonSuccess, data: tasks }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

// add a task
routes.post('/', (req, res) => {
  console.log(req.body);
  const { name, list_id } = req.body;
  repository.create({ name, list_id })
    .then((task) => res.json({ ...jsonSuccess, data: task }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

// delete a task
routes.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id)
    .then(() => res.json({ ...jsonSuccess }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

// update a task
routes.put('/:id', (req, res) => {
  const { id } = req.params;
  const task = { name: req.body.name, done: req.body.done };
  repository.updateById(id, task)
    .then(() => res.json({ ...jsonSuccess }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

module.exports = routes;
