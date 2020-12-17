const router = require('express').Router()
const mainController = require("../controllers/mainController") 


router.get('/', mainController.login) 
router.post('/', mainController.postLogin) 


module.exports = router;