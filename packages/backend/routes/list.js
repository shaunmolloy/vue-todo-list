const express = require('express');
const { jsonSuccess, jsonError } = require('./json');

const routes = express.Router();
const repository = require('../repositories/TodoListRepository');

// get all lists
routes.get('/', (req, res) => {
  repository.findAll()
    .then((lists) => res.json({ ...jsonSuccess, data: lists }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

// add a list
routes.post('/', (req, res) => {
  const { name } = req.body;
  repository.create({ name })
    .then((list) => res.json({ ...jsonSuccess, data: list }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

// delete a list
routes.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id)
    .then(() => res.json({ ...jsonSuccess }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

// update a list
routes.put('/:id', (req, res) => {
  const { id } = req.params;
  const list = { name: req.body.name, done: req.body.done };
  repository.updateById(id, list)
    .then(() => res.json({ ...jsonSuccess }))
    .catch((err) => res.status(400).json({ ...jsonError, message: err.message }));
});

module.exports = routes;
