"use strict"

const routes = require('express').Router()
const FavoritesController = require('../controllers/FavoritesController')
const {authentication} = require('../middlewares/auth')

routes.get('/', authentication, FavoritesController.showFavorites)
routes.post('/:animalId',authentication ,FavoritesController.addFavorites)
routes.delete('/:id', authentication, FavoritesController.deleteFavorites)

module.exports = routes