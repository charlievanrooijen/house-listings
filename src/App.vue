<template>
  <div id="app" class="navbar-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid container">
        <router-link style="width: 15%;" class="navbar-brand text-light" to="/">
          <img class="w-100" src="./assets/images/img_logo_dtt@3x.png">
        </router-link>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li class="nav-item mx-4">
              <router-link class="nav-link text-dark" to="/"><h2>Houses</h2></router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link class="nav-link text-warning" to="/about"><h2>About</h2></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>
<style src="./assets/styles/navbar/Navbar.scss" lang="scss"></style>