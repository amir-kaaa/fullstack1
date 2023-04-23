const Router = require('express')
const router = new Router()
const controller = require('../controllers/DeletedTasksController')

router.get('/', controller.deletedTasks)
router.delete('/', controller.deleteTask)
router.put('/', controller.undeleteTask)

module.exports = router