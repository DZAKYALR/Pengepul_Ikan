const router = require('express').Router()
const ControllerUser = require("../controllers/userController")
const {isAdmin} = require('../middlewares/auth')

router.get("/", isAdmin, ControllerUser.index) 
router.get("/add", isAdmin, ControllerUser.add) 
router.post("/add", isAdmin, ControllerUser.insert) 
router.get("/edit/:id", isAdmin, ControllerUser.edit) 
router.post("/edit/:id", isAdmin, ControllerUser.update) 
router.get("/delete/:id", isAdmin, ControllerUser.delete) 


module.exports = router;