const express = require("express");

const router = express.Router();

// Controller
const { addUser, getUsers, getUser, updateUser,deleteUser } = require('../controllers/user');

//middleware
//const {uploadFile} = require('../middleware/uploadFile')

// Create Route for add user here ...
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', addUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

//route for middleware
//router.post('/user', uploadFile('image'), addUser)

module.exports = router;