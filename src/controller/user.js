const {user} = require('../../models')

exports.getUser = async (req, res) => {
    try {
        const getData = await user.findAll()
        res.status(200).json({
            status: true,
            data: getData
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}