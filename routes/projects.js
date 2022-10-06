const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject, getProject} = require('../controllers/projects/projects');

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/:id', getProject);

module.exports = router;