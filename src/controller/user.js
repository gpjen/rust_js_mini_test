const {user} = require('../../models')

exports.getUsers = async (req, res) => {
    try {
        const getUsers = await user.findAll({
            // attributes: ['name', 'email', 'umur', 'status']
            // attributes: {
            //     exclude: ['createdAt', 'updatedAt', 'password']
            // }
        })
        res.status(200).json({
            status: true,
            data: getUsers
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.getUserOne = async (req, res) => {
    try {
        const {id} = req.params
        const getUser = await user.findOne({
            where: {
                id
            },
            // attributes: ['name', 'email', 'status']
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password']
            }
        })

        res.status(200).json({
            status: true,
            data: getUser
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}

exports.addUser = async (req, res) => {
    try {
        const data = req.body
        const addData = await user.create(data)
        res.status(200).json({
            status: true,
            data: addData
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const {id} =req.params
        const data = req.body
        const dataUpdate = await user.update(data, {
            where: {
                id
            }
        })

        res.status(200).json({
            status:true,
            data: dataUpdate
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const {id} =req.params
        const delData = await user.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            status: true,
            data: delData
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}