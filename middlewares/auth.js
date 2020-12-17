const isAdmin = (req, res, next) => {
    console.log(req.session.userRole);
    if (req.session.userRole === 'admin') {
        next()
    } else {
        res.redirect('/user?msg=Anda tidak punya akses ke halaman tersebut')
    }
}

const isLogin = (req, res, next) => {
    console.log(req.session.userId);
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/login?msg=Harap login terlebih dahulu')
    }
}

module.exports = {isAdmin,isLogin}