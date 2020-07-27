<template>
  <div>
      <div v-for="(animals, idx) in $store.state.animals" :key="idx" class="card" style="width: 18rem;">
          <div  class="card-body">
            <img :src="animals.imageUrl" class="w3-round" style="width:200px;height:200px;">
              <h5 class="card-title">{{animals.name}}</h5>
              <br>
              <p class="card-text">{{animals.description}}</p>
              <button @click="favorites(animals.id)" class="card-link">Add to Favorites</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animals: null,
    };
  },
  methods: {
    favorites(id) {
      this.$store.dispatch('addFavorites', id)
    }
  },
  created() {
    this.$store.dispatch('getAnimals')
  }
}
</script>

<style></style>
