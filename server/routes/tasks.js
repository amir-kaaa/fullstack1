const Router = require('express')
const router = new Router()
const controller = require('../controllers/TasksController')


router.post('/', controller.addTask)
router.get('/', controller.getAllTasks)
router.put('/', controller.updateTask)

module.exports = router