"use strict"

const routes = require('express').Router()
const animalRouter = require('../routes/animalRouter')
const favoriteRouter = require('../routes/favoritesRouter')
const UserController = require('../controllers/UserController')

routes.post('/register', UserController.register)
routes.post('/login', UserController.login)
routes.use('/animals', animalRouter)
routes.use('/favourites', favoriteRouter)

module.exports = routes