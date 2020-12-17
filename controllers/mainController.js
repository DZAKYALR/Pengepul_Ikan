const { Freezer, PengepulOnline, NelayanFreezer, Nelayan, User } = require('../models/index')
const bcrypt = require('bcryptjs')
class mainController{
    static index(req,res){
        res.render('homepage')
    }
    
    static login(req,res){
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        res.render('login', {errors})
    }

    static postLogin(req,res){
        const {username, password} = req.body

        User.findOne({where:{username}})
            .then(user => {
                if (user) {
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    // console.log(isValidPassword);

                    if(isValidPassword){
                        // console.log(req.session.userId, 'online');
                        req.session.userRole = user.role
                        req.session.userId = user.id
                        console.log(req.session.userId, 'online');
                        res.redirect('/')
                    } else {
                        res.redirect('/login?msg=Username dan password invalid')
                    }
                }else {
                    res.redirect('/login?msg=Username tidak ada dalam database')

                }
            })
    }
}

module.exports = mainController