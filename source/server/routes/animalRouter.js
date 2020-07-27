"use strict"

const routes = require('express').Router()
const AnimalController = require('../controllers/AnimalController')
const {authentication} = require('../middlewares/auth')

routes.get('/', authentication, AnimalController.showAnimals)

module.exports = routes