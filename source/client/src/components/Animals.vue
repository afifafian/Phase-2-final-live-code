<template>
  <div>
      <div class="card" style="width: 18rem;">
          <div v-for="(animals, idx) in $store.state.animals" :key="idx" class="card-body">
            <img :src="animals.imageUrl" class="w3-round" alt="Norway">
              <h5 class="card-title">{{animals.name}}</h5>
              <br>
              <p class="card-text">{{animals.description}}</p>
              <a href="#" class="card-link">Another link</a>
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
  created() {
    this.$store.dispatch('getAnimals')
  }
}
</script>

<style>

</style>