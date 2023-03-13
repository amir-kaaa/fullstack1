const { DeletedTask, Task } = require('../models/models')

class DeletedTasksController {

    async deletedTasks(req, res) {
        return res.json(await DeletedTask.findAll())
    }

    async deleteTask(req, res) {
        const { id } = req.body
        await Task.destroy({ where: { id: id } })
        return res.json(await Task.findAll())
    }
}

module.exports = new DeletedTasksController()