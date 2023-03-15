const { isAuthenticated } = require("./jwt.middleware")


const isCompany = (req, res, next) => {
    console.log("Proteger", req.payload)
    if (req.payload._id && isCompany) {
        next()
    }
    else {
        res.render("You can't perform that action") //CAMBIAR ESTO
    }
}

module.exports = isCompany

//PARA PONER EN CREATE DE PLAN