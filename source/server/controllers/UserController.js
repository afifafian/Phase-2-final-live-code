"use strict"

const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
    static register(req, res) {
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(newUser)
        .then(function(data){
            return res.status(201).json(data)
        })
        .catch(function(err){
            console.log(err)
            return res.status(500).json({message: 'Internal Server Error'})
        })
    }
    static login (req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(data){
            if (!data) {
                return res.status(404).json({message: 'Email not Found!'})
            }
            else if (data && !bcrypt.compareSync(req.body.password, data.password)) {
                return res.status(400).json({message: 'Incorrect Password'})
            }
            else if (data && bcrypt.compareSync(req.body.password, data.password)) {
                const token = jwt.sign({
                    id: data.id,
                    email: data.email
                }, "jwtSECRET")
                return res.status(200).json({access_token: token})
            }
        })
        .catch(function(err){
            console.log(err)
            return res.status(500).json({message: 'Internal Server Error'})
        })
    }
}

module.exports = UserController