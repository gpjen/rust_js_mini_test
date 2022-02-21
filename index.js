//import
const express = require('express')
const morgan = require("morgan")
const routers = require('./src/routes/user')

const app = express()
const port = 3005

//midleware
app.use(express.json())
app.use(morgan('dev'))

//router-group
app.use('/api/v1', routers)

//routes root
app.get('/', (req, res) => {
    res.send("its oke broo")
})

//router handling
app.use((req, res) => {
    res.status(400).json({
        status: false,
        message: `no routes ${req.path}`
    })
})

//start server
app.listen(port, () => {
    console.log("server runing on port :", port);
})