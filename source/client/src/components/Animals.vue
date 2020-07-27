<template>
  <div class="mt-5">
      <div v-for="(animals, idx) in $store.state.animals" :key="idx" class="card" style="width: 18rem;">
          <div  class="card-body">
            <img :src="animals.imageUrl" class="w3-round" style="width:250px;height:250px;">
              <h5 class="card-title mt-3">{{animals.name}}</h5>
              <br>
              <p class="card-text">{{animals.description}}</p>
              <button class="btn btn-primary" @click="favorites(animals.id)">Add to Favorites</button>
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

<style>
.card-title{
  font-weight: bolder;
}
</style>
