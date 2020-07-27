<template>
  <div class="container">
      <Navbar></Navbar>
      <Animals></Animals>
    <router-view/>
  </div>
</template>

<script>
import Animals from '../components/Animals.vue';
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Animals,
        Navbar,
    },
};
</script>

<style>

</style>