<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <span><img src="https://iqbalmaulanaardi.github.io/week1/images/hacktiv-logo.png" style="width:100px;height:60px;" alt=""></span>
  <a class="navbar-brand text-white">Animal Lover</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item" style="margin-left:310px;">
          <router-link :to="{name: 'Favorites'}" >
            <a class="navbar-brand text-white" >My Favorites</a>
          </router-link>
      </li>
      <li class="nav-item" style="margin-left:280px;">
          <router-link :to="{name: 'Login'}" >
            <button @click="logout" class="btn btn-warning">Logout</button>
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