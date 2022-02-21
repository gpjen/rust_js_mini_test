const express = require('express')
const morgan = require("morgan")

const app = express()
const port = 3005

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("its oke broo")
})

app.listen(port, () => {
    console.log("server runing on port :", port);
})