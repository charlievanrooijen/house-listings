<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand text-light" to="/">House Listings</router-link>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/list">List</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 30px;
}

.navbar .nav-link {
  font-weight: bold;
  color: #2c3e50;
}

.navbar .nav-link.router-link-exact-active {
  color: #42b983;
}

</style>
