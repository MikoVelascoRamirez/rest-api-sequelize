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

const getProject = async (req, res) => {
    const id = req.params.id;
    try {
        const singleProject = await Project.findByPk(id);
        if(singleProject === null) throw new Error('Project not found')
        return res.status(200).send(singleProject);
    } catch (error) {
        return res.status(404).json({ error: error.message})
    }
}


module.exports = {
    getProjects,
    createProject,
    getProject
}