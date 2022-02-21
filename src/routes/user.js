const express = require('express')
const router = express.Router()

const {
    getUsers,
    getUserOne,
    addUser,
    updateUser,
    deleteUser


} = require('../controller/user')

router.get('/user', getUsers)
router.get('/user/:id', getUserOne)
router.post('/user', addUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router