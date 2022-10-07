const Project = require('../../models/Project');
const Task = require('../../models/Task');

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

const getTasksByProject = async (req, res) => {
    const id = req.params.id;
    try {
        const getTasks = await Task.findAll({ where: { projectId: id } });
        if(getTasks.length === 0) res.json({message: "You don't have any tasks to do for this project"})
        res.status(200).send(getTasks);        
    } catch (error) {
        
    }
}

const updateProject = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const project = await Project.findByPk(id);

        if(project === null) throw new Error(`Project can't be updated`)
        project.set({...body})
        await project.save();

        res.status(200).send("The project has been updated");
    } catch (error) {
        return res.status(404).json({ error: error.message});
    }
}

const deleteProject = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Project.destroy({ where: { id } })
        if(deleted === 0) throw new Error('El proyecto no se encontró para ser eliminado')
        res.sendStatus(204);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getProjects,
    createProject,
    getProject,
    getTasksByProject,
    updateProject,
    deleteProject
}