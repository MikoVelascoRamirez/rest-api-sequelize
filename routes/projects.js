const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject, getTasksByProject, getProject} = require('../controllers/projects/projects');

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/:id', getProject);
router.get('/:id/tasks', getTasksByProject);

module.exports = router;