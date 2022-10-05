const Project = require('../../models/Project');

const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message })        
    }
}

const createProject = async (req, res) => {
    const body = req.body;
    try {
        const newProject = await Project.create(body);
        res.json(newProject)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = {
    getProjects,
    createProject
}