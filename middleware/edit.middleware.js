const canEdit = (req, res, next) => {
    if (req.payload._id === req.body.author._id || req.payload.isAdmin) {
        next()
    }
    else {
        res.render("You can't perform that action") //CAMBIAR ESTO
    }
}

module.exports = canEdit

//PARA PONER EN LOS EDIT Y DELETE DE PLAN Y PACK