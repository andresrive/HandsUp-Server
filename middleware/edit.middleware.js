const canEdit = (req, res, next) => {

    const  plans  = req.params.plansId

    if (req.payload._id === plans.author._id || req.payload.isAdmin) {
        
        next()
    }
    
    else {
        res.redirect("/")
    }
}

module.exports = canEdit

//PARA PONER EN LOS EDIT Y DELETE DE PLAN Y PACK