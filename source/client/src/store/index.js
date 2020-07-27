import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animals: []
  },
  mutations: {
    SET_ANIMALS(state, data) {
      state.animals = data
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
        localStorage.setItem('token', results.data.access_token)
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
        console.log(results)
        context.commit('SET_ANIMALS', results.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  },
});
