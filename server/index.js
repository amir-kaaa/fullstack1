require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/index')
const bodyParser = require('body-parser')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const PORT = process.env.PORT || 5000

// app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
app.use('/', routes)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()