const { Task } = require('../models/models')

class TasksController {

    async addTask(req, res) {
        const { title, count } = req.body
        const task = await Task.create({ title, count })
        return res.json(task)
    }

    async updateTask(req, res) {
        const { title, count, id, deleted } = req.body
        await Task.update({ title: title, count: count, deleted: deleted }, { where: { id: id } })
        return res.json(await Task.findAll({
            where: { deleted: false }, order: [['id', 'DESC']]
        }))
    }

    async getAllTasks(req, res) {
        let { limit, page } = req.query
        limit = limit || 5
        page = page || 1
        let offset = page * limit - limit
        return res.json(await Task.findAndCountAll({
            where: { deleted: false }, order: [['id', 'DESC']], limit, offset
        }))
    }

}

module.exports = new TasksController()