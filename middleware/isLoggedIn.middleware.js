const isLoggedIn = (req, res, next) => {
    if (req.payload._id && !req.payload.isCompany) {
        next()
    }
    else {
        res.redirect("/")
    }
}

module.exports = isLoggedIn

//PARA PONER EN CREATE DE PLAN