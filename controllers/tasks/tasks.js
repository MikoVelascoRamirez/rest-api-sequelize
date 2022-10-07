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

module.exports = {
    createTask
}