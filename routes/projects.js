const express = require('express');
const router = express.Router();
const { getProjects, createProject} = require('../controllers/projects/projects');

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id');
router.delete('/:id');
router.get('/:id');

module.exports = router;