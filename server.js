
require('dotenv').config()
const connectDb = require('./config/db')
const express = require('express')
const errorHandler = require('./middleware/error')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))
app.use(errorHandler)

connectDb()

const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`))

process.on('unhandledRejection', (err, pro) => {
    console.log(`logged Error: ${err}`)
    server.close(() => process.exit(1))
})