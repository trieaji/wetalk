//import model here
const {user} = require('../../models')

//add user
exports.addUser = async (req, res) => {
    try {

       const data = await user.create(req.body)

        res.send({
            status: 'success',
            message: 'Add user finished luur',
            data
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

//get users
exports.getUsers = async (req,res) => {
    try {

        const data = await user.findAll();

        res.send({
            status: 'success',
            message: 'get user finished luur',
            data,
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
}

//get user by id
exports.getUser = async (req,res) => {
    try {

        const id = req.params.id

        const data = await user.findOne({
            where: {
                id : id
            }
        })

        res.send({
            status: 'success',
            message: 'get user by id finished luur',
            data,
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
}

//update user
exports.updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const data = req.body;

        const tangkapData = await user.update(data, {
            where: {
                id: id
            }
        })

        res.send({
            status: 'success',
            message: 'Update user finished luur',
            tangkapData
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
}

//delete user
exports.deleteUser = async (req,res) => {
    try {
        const {id} = req.params

        await user.destroy({
            where: {
                id: id
            }
        }) 

        res.send({
            status: 'success',
            message: `Delete user with id: ${id} finished luur`
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
}



















// const db = require('../database/connection')
// const {QueryTypes} = require("sequelize")

//add users
/* exports.addUser = async (req,res) => {
    try {

        const {nama,kelas,jurusan} = req.body

        const query = `INSERT INTO users (nama,kelas,jurusan) VALUES ('${nama}','${kelas}','${jurusan}')`

        await db.sequelize.query(query)

        res.send({
            status: 'success',
            message: 'Add user finished luur'
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
} */

//get user
/* exports.getUsers = async (req,res) => {
    try {


        const query = `SELECT * FROM users`

        const data = await db.sequelize.query(query, {type: QueryTypes.SELECT})

        res.send({
            status: 'success',
            message: 'get user finished luur',
            data,
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
} */

//get user by id
/* exports.getUser = async (req,res) => {
    try {
        const id = req.params.id
        const query = `SELECT * FROM users WHERE id = ${id}`

        const data = await db.sequelize.query(query, {type: QueryTypes.SELECT})

        res.send({
            status: 'success',
            message: 'get user by id finished luur',
            data,
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
} */

//update user
/* exports.updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const {nama,kelas,jurusan} = req.body;

        const data = await db.sequelize.query(`UPDATE users
            SET nama='${nama}', kelas='${kelas}', jurusan='${jurusan}' WHERE id = ${id}`)

        res.send({
            status: 'success',
            message: 'Update user finished luur',
            data,
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
} */

//delete user
/* exports.deleteUser = async (req,res) => {
    try {
        const {id} = req.params

        const data = await db.sequelize.query(`DELETE FROM users WHERE id = ${id}`)

        res.send({
            status: 'success',
            message: 'Delete user finished luur',
            data,
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error Bos'
        })
    }
} */