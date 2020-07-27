import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animals: [],
    favorites: [],
  },
  mutations: {
    SET_ANIMALS(state, data) {
      state.animals = data
    },
    SET_FAVORITES(state, data) {
      state.favorites = data
    },
    DELETE_FAVORITES(state, id) {
      state.favorites = state.favorites.filter(favorite => favorite.id !== id)
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password,
        }
      })
      .then((results) => {
        console.log(results)
        localStorage.setItem('token', results.data.token)
        router.push({name: 'MainPage'})
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getAnimals(context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/animals',
        headers: {
          access_token: localStorage.token,
        },
      })
      .then((results) => {
        console.log(results.data)
        context.commit('SET_ANIMALS', results.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    addFavorites(context, payload) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/favourites/${payload}`,
        headers: {
          access_token: localStorage.token,
        },
        data: {
          AnimalId: payload
        }
      })
      .then((results) => {
        console.log(results);
        router.push({name: 'Favorites'});
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getFavorites(context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/favourites',
        headers: {
          access_token: localStorage.token,
        },
      })
      .then((results) => {
        console.log(results)
        context.commit('SET_FAVORITES', results.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    deleteFavorites(context, payload) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/favourites/${payload}`,
        headers: {
          access_token: localStorage.token,
        },
      })
      .then((results) => {
        console.log(results)
        context.commit('DELETE_FAVORITES', payload)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  },
});
