const { Task } = require('../models/models')

class TasksController {

    async addTask(req, res) {
        const { title, count } = req.body
        const task = await Task.create({ title, count })
        return res.json(task)
    }

    async updateTask(req, res) {
        const { title, count, id } = req.body
        const task = await Task.update({ title: title, count: count }, { where: { id: id } })
        return res.json(task)
    }

    async getAllTasks(req, res) {
        return res.json(await Task.findAll())
    }

}

module.exports = new TasksController()