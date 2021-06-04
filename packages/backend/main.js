const express = require('express');
const cors = require('cors')
const { jsonError } = require('./routes/json');
const listRoutes = require('./routes/list');
const taskRoutes = require('./routes/task');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/lists', listRoutes);
app.use('/tasks', taskRoutes);

// catch 404
app.use((req, res, next) => {
  res.status(404).json({ ...jsonError });
  next();
});

app.listen(8000);

module.exports = app;
