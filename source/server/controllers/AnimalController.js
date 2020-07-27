"use strict"

const {Animal} = require('../models')

class AnimalController {
    static showAnimals (req, res) {
        Animal.findAll()
        .then(function(data){
            return res.status(201).json(data)
        })
        .catch(function(err){
            return res.status(500).json({message: 'Internal Server Error'})
        })
    }
}

module.exports = AnimalController