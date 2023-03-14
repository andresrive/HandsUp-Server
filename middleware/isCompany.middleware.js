const isCompany = (req, res, next) => {
    if (req.payload._id && req.payload.isCompany) {
        next()
    }
    else {
        res.render("You can't perform that action") //CAMBIAR ESTO
    }
}

module.exports = isCompany

//PARA PONER EN CREATE DE PLAN