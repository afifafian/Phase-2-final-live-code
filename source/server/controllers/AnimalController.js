"use strict"

const {Animal} = require('../models')

class AnimalController {
    static showAnimals (req, res) {
        Animal.findAll()
        .then(function(data){
            let result;
            data.forEach(element => {
                result = {
                    id: element.id,
                    name: element.name,
                    imageUrl: element.imageUrl,
                    description: element.description
                }
            });
            return res.status(200).json(data)
        })
        .catch(function(err){
            return res.status(500).json({message: 'Internal Server Error'})
        })
    }
}

module.exports = AnimalController