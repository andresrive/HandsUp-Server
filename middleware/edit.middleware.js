const canEdit = (req, res, next) => {
    if (req.payload._id === req.body.author._id || req.payload.isAdmin) {
        next()
    }
    
    else {
        res.redirect("/")
    }
}

module.exports = canEdit

//PARA PONER EN LOS EDIT Y DELETE DE PLAN Y PACK