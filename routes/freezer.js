const router = require('express').Router()
const ControllerFreezer = require("../controllers/freezerController")
const {isAdmin} = require('../middlewares/auth')


router.get("/", ControllerFreezer.index) 
router.get("/add", isAdmin, ControllerFreezer.add) 
router.post("/add", isAdmin, ControllerFreezer.insert) 
router.get("/edit/:id", isAdmin, ControllerFreezer.edit) 
router.post("/edit/:id", isAdmin, ControllerFreezer.update) 
router.get("/delete/:id", isAdmin, ControllerFreezer.delete) 
router.get('/nelayan/:id', isAdmin, ControllerFreezer.index_nelayan_freezer)
router.get('/nelayan/add/:id', isAdmin, ControllerFreezer.add_nelayan)
router.post('/nelayan/add/:id', isAdmin, ControllerFreezer.insert_nelayan)

module.exports = router;