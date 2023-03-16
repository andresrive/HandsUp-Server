const { isAuthenticated } = require("./jwt.middleware")


const isCompany = (req, res, next) => {

    console.log("Proteger", req.payload);
    
    if (req.payload._id && req.payload.isCompany) {
        next()
    }
    else {
        res.redirect("/")
    }
}

module.exports = isCompany