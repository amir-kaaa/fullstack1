const Router = require('express')
const router = new Router()
const deletedTasks = require('./deletedTasks')
const tasks = require('./tasks')

router.use('/', tasks)
router.use('/deleted', deletedTasks)

module.exports = router