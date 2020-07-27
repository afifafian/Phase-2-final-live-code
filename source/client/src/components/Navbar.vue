<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-white">Animal Lover</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'Favorites'}" >
            <a class="navbar-brand text-white" >My Favorites</a>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link :to="{name: 'Login'}" >
            <button @click="logout">Logout</button>
          </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.clear();
        },
    },
};
</script>

<style>

</style>