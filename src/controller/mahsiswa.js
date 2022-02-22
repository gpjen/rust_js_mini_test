const {mahasiswa} = require('../../models')

exports.getAllMhs = async (req, res) => {
    try {
        const getData = await mahasiswa.findAll()

        res.status(200).json({
            status: true,
            data: getData
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}

exports.getOneMhs = async (req, res) => {
    try {
        const {id} = req.params
        const getData = await mahasiswa.findOne({
            where: {id}
        })
        res.status(200).json({
            status: true,
            data: getData
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}

exports.addMhs = async (req, res) => {
    try {
        const data = req.body
        const addData = await mahasiswa.create(data)

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


exports.editMhs = async (req, res) => {
    try {
        const {id} = req.params
        const data = req.body
        const updateData = await mahasiswa.update(data, {
            where: {id}
        })
        res.status(200).json({
            status: true,
            data: updateData
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}

exports.delMhs = async (req, res) => {
    try {
        const {id} = req.params
        const delData = await mahasiswa.destroy({
            where: {id}
        })
        res.status(200).json({
            status: true,
            data: delData
        })
    } catch (error) {
        res.send(400).json({
            status: false,
            error
        })
    }
}