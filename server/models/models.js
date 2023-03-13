const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('tasks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    count: { type: DataTypes.INTEGER }
})


const DeletedTask = sequelize.define('deleted_task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    count: { type: DataTypes.INTEGER }
})

module.exports = {
    Task,
    DeletedTask
}