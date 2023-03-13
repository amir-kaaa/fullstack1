const Router = require('express')
const router = new Router()
const controller = require('../controllers/DeletedTasksController')

router.get('/', controller.deletedTasks)
router.delete('/', controller.deleteTask)

module.exports = router