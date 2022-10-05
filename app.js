const express = require('express');
const app = express();
const projectsRouter = require('./routes/projects')

app.use(express.json({ extended: true }));
app.use('/projects', projectsRouter);

module.exports = app;