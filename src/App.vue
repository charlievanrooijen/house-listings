<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand text-light" to="/">House Listings</router-link>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/list">List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/about">About</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <a class="nav-link text-light" href="/create">
                Create Listing
              </a>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link text-light" to="/login">
                <font-awesome-icon :icon="['fas', 'user']" />
              </router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <a class="nav-link text-light" href="#" @click="logout">
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view @login="login" />
  </div>
</template>
<style src="./assets/styles/Navbar.scss" lang="scss"></style>
<script src="./assets/scripts/Logout.js"></script>