<template>
<div class="container">
  <Navbar></Navbar>
  <div class="mt-5">
      <div v-for="(favorites, idx) in $store.state.favorites" :key="idx" class="card" style="width: 18rem;">
          <div class="card-body">
            <img :src="favorites.Animal.imageUrl" class="w3-round" style="width:250px;height:250px;">
              <h5 class="card-title mt-3">{{favorites.Animal.name}}</h5>
              <br>
              <p class="card-text">{{favorites.Animal.description}}</p>
              <button @click="deleteFavorites(favorites.id)" class="btn btn-danger">remove</button>
            </div>
        </div>
  </div>
</div>

</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      favorites: null,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    deleteFavorites(id) {
      this.$store.dispatch('deleteFavorites', id)
    }
  },
  created() {
    this.$store.dispatch('getFavorites')
  }
}
</script>

<style>

</style>