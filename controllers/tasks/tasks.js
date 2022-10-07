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

const getTask = async (req, res) => {
    const id = req.params.id;
    try {
        const singleTask = await Task.findByPk(id);
        if(singleTask === null) throw new Error('Task not found')
        return res.status(200).send(singleTask);
    } catch (error) {
        return res.status(404).json({ error: error.message})
    }
}

const updateTask = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const task = await Task.findByPk(id);

        if(task === null) throw new Error(`Task can't be updated`)
        task.set({...body})
        await task.save();

        res.status(200).send("The task has been updated");
    } catch (error) {
        return res.status(404).json({ error: error.message});
    }
}

const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTask = await Task.destroy({ where: { id } })
        if(deletedTask === 0) throw new Error('La tarea no se encontró para ser eliminado')
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}