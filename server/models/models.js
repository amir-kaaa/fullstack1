const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('tasks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    count: { type: DataTypes.INTEGER },
    deleted: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false }
})


module.exports = {
    Task
}