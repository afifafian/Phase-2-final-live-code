<template>
<div class="container">
  <div>
    <Navbar></Navbar>
      <div class="card" style="width: 18rem;">
          <div v-for="(favorites, idx) in $store.state.favorites" :key="idx" class="card-body">
            <img :src="favorites.Animal.imageUrl" class="w3-round" style="width:200px;height:200px;">
              <h5 class="card-title">{{favorites.Animal.name}}</h5>
              <br>
              <p class="card-text">{{favorites.Animal.description}}</p>
              <button @click="deleteFavorites(favorites.id)" class="card-link">remove</button>
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