<template>
  <div id="app" class="navbar-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container container-dekstop">
        <router-link style="width: 10%;" class="navbar-brand text-light" to="/">
          <img class="w-100" src="./assets/images/img_logo_dtt@3x.png">
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item mx-4">
              <router-link class="nav-link text-info bold" to="/" exact-active-class="active"><h1>Houses</h1></router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link class="nav-link text-info bold" to="/about" exact-active-class="active"><h1>About</h1></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    <footer style="z-index: 1;" class="footer bg-light">
      <div class="row m-0 bg-light">
        <div class="col-6 d-flex justify-content-center p-3">
          <router-link to="/">
            <img class="w-50 p-2 p-md-3" src="./assets/images/ic_mobile_navigarion_home_active@3x.png">
          </router-link>
        </div>
        <div class="col-6 d-flex justify-content-center p-3">
          <router-link to="/about">
            <img class="w-50 p-2 p-md-3" src="./assets/images/ic_mobile_navigarion_info@3x.png">
          </router-link>
        </div>
      </div>
    </footer>
  <router-view />
</template>
<style src="./assets/styles/navbar/Navbar.scss" lang="scss"></style>