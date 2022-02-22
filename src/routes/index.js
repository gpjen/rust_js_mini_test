const express = require('express')
const router = express.Router()


//user===================================
const { getUsers, getUserOne, addUser, updateUser, deleteUser } = require('../controller/user')

router.get('/user', getUsers)
router.get('/user/:id', getUserOne)
router.post('/user', addUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

//mahasiswa=============================

const {getAllMhs, getOneMhs, addMhs, editMhs, delMhs} = require('../controller/mahsiswa')

router.get('/mahasiswa', getAllMhs)
router.get('/mahasiswa/:id', getOneMhs)
router.post('/mahasiswa', addMhs)
router.patch('/mahasiswa/:id', editMhs)
router.delete('/mahasiswa/:id', delMhs)




//export router========================
module.exports = router