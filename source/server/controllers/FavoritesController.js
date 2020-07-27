"use strict"

const {Favorite, Animal, User} = require('../models')

class FavoritesController {
    static addFavorites (req, res) {
        const userId = req.userData.id
        const newFavorite = {
            AnimalId: req.params.animalId,
            UserId: userId
        }
        if(!newFavorite.AnimalId) {
            return res.status(400).json({message: 'All field is required!'})
        } else {
            Favorite.create(newFavorite)
            .then(function(data){
                return res.status(201).json(data)
            })
            .catch(function(err){
                console.log(err)
                return res.status(500).json({message: 'Internal Server Error'})
            })
        }
    }
    static showFavorites (req, res) {
        Favorite.findAll({
            include: [Animal]
        })
        .then(function(data){
            console.log(data)
            let result;
            data.forEach(element => {
                result = {
                    id: element.id,
                    userId: element.UserId,
                    animalId: element.AnimalId,
                    animal: {
                        id: element.Animal.id,
                        name: element.Animal.name,
                        imageUrl: element.Animal.imageUrl,
                        description: element.Animal.description
                    }
                }
            });
            return res.status(200).json(data)
        })
        .catch(function(err){
            console.log(err)
            return res.status(500).json({message: 'Internal Server Error'})
        })
    }
    static deleteFavorites (req, res) {
        Favorite.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(data){
            if(data) {
                return res.status(200).json({message: "Successfully delete favorite animal"})
            } else {
                return res.status(404).json({message: 'Favorite Animal is not found!'})
            }
        })
        .catch(function(err){
            return res.status(500).json({message: 'Internal Server Error'})
        })
    }
}

module.exports = FavoritesController