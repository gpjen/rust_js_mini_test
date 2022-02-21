const express = require('express')
const morgan = require("morgan")
const routers = require('./src/routes/user')

const app = express()
const port = 3005

app.use(morgan('dev'))
app.use('/api/v1', routers)

app.get('/', (req, res) => {
    res.send("its oke broo")
})

app.use((req, res) => {
    res.status(400).json({
        status: false,
        message: `no routes ${req.path}`
    })
})

app.listen(port, () => {
    console.log("server runing on port :", port);
})