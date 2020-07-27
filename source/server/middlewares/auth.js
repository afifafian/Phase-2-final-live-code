"use strict"

const jwt = require('jsonwebtoken')
const {User} = require('../models')

function authentication (req, res, next) {
    const access_token = req.headers.access_token

    if (!access_token) {
        return res.status(404).json({message: 'Token is not found!'})
    } else {
        const userData = jwt.verify(access_token, "jwtSECRET")
        req.userData = userData
        User.findOne({
            where: {
                email: userData.email
            }
        })
        .then(function(data){
            if (data) {
                next()
            } else {
                return res.status(401).json({message: 'You have to login'})
            }
        })
        .catch(function(err){
            console.log(err)
            return res.status(500).json({message: 'Internal Server Error'})
        })
    }
}

module.exports = {authentication}