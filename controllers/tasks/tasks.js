const Task = require('../../models/Task');

const createTask = async (req, res) => {
    const body = req.body;
    try {        
        const newTask = Task.create(body)
        res.status(201).send(newTask)
    } catch (error) {
        res.status(500).json({ error:error.message})
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.send(tasks)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Task.destroy({ where: { id } })
        if(deleted === 0) throw new Error('La tarea no se encontró para ser eliminado')
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = {
    createTask,
    getTasks,
    deleteTask
}