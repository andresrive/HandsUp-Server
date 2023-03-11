const isLoggedIn = (req, res, next) => {
    if (req.payload._id && !req.payload.isCompany) { //OJO CON ESTO, SI ES COMPANY NO PODRIA ENTRAR A DETAILS DE PLAN Y PACKS
        next()
    }
    else {
        res.render("You can't perform that action") //CAMBIAR ESTO
    }
}

module.exports = isLoggedIn

//PARA PONER EN CREATE DE PLAN