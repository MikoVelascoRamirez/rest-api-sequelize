const express = require('express');
const app = express();
const projectsRouter = require('./routes/projects')
const tasksRouter = require('./routes/tasks')

app.use(express.json({ extended: true }));
app.use('/projects', projectsRouter);
app.use('/tasks', tasksRouter);

module.exports = app;