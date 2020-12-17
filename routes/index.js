const express = require('express')
const router = express.Router()
const homepage = require('./homepage')
const freezer = require('./freezer')
const nelayan = require('./nelayan')
const user = require('./user')
const login = require('./login')
const {isLogin} = require('../middlewares/auth')

router.get('/', isLogin,homepage)
router.use('/homepage', isLogin,homepage)
router.use('/freezer', isLogin,freezer)
router.use('/nelayan', isLogin,nelayan)
router.use('/user', isLogin, user)
router.use('/login', login)

module.exports = router;