const { Task } = require('../models/models')

class DeletedTasksController {

    async deletedTasks(req, res) {
        return res.json(await Task.findAll({ where: { deleted: true }, order: [['id', 'DESC']] }))
    }

    async deleteTask(req, res) {
        const { id } = req.body
        await Task.destroy({ where: { id: id } })
        return res.json(await Task.findAll({ where: { deleted: true }, order: [['id', 'DESC']] }))
    }

    async undeleteTask(req, res) {
        const { id } = req.body
        await Task.update({ deleted: false }, { where: { id: id } })
        return res.json(await Task.findAll({ where: { deleted: true }, order: [['id', 'DESC']] }))
    }
}

module.exports = new DeletedTasksController()