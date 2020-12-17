const router = require('express').Router()
const ControllerNelayan = require("../controllers/nelayanController")
const {isAdmin} = require('../middlewares/auth')


router.get("/", ControllerNelayan.index) 
router.get("/add", isAdmin, ControllerNelayan.add) 
router.post("/add", isAdmin, ControllerNelayan.insert) 
router.get("/edit/:id", isAdmin, ControllerNelayan.edit) 
router.post("/edit/:id", isAdmin, ControllerNelayan.update) 
router.get("/delete/:id", isAdmin, ControllerNelayan.delete) 


module.exports = router;