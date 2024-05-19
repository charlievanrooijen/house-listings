<template>
  <div class="bg-waring m-0">
    <div class="container bg-transparent">
    <div class="row">
      <div class="col-6">
        <h1 class="py-3 text-dark">Houses</h1>
      </div>
      <div class="col-6 d-flex flex-row-reverse">
        <div>  
          <a class="btn btn-primary text-light" href="/create"><i class="fa-solid fa-plus"></i> CREATE NEW</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="input-group flex-nowrap mb-3 text-secondary position-relative">
          <input 
            v-model="searchQuery" 
            type="text" 
            class="form-control ps-5 bg-info" 
            placeholder="Search for a house" 
            aria-label="Search" 
            aria-describedby="addon-wrapping"
          >
          <span
            style="z-index: 1000;" class="position-absolute top-50 start-0 translate-middle-y ms-3">
            <i class="fas fa-search"></i>
          </span>
          <span 
            class="position-absolute top-50 end-0 translate-middle-y me-3"
            @click="clearSearch"
            style="cursor: pointer; z-index: 1000;"
          >
            <img v-if="searchQuery" src="../assets/images/ic_clear@3x.png" alt="Clear Search" style="width: 20px; height: 20px;">
          </span>
        </div>
      </div>
      <div class="col-6 d-flex flex-row-reverse">
        <div>
          <button class="btn btn-left btn-primary text-light px-5 font-weight-bold" @click="toggleSort('street')">Street</button>
          <button class="btn btn-center btn-warning text-light px-5 font-weight-bold" @click="toggleSort('price')">Price</button>
          <button class="btn btn-right btn-primary text-light px-5 font-weight-bold" @click="toggleSort('size')">Size</button>
        </div>
      </div>
    </div>

    <div v-if="filteredHouses.length">
      <!-- <div>
        {{ filteredHouses.length }} Results found
      </div> -->
      <div v-for="(house, index) in filteredHouses" :key="index" class="house rounded bg-light">
        <router-link style="text-decoration: none; " router-link :to="{ name: 'detail', params: { id: house.id } }" >
          <div class="row w-100">
            <div class="col-4">
              <img :src="house.image" :alt="house.name" class="house-image" />
            </div>
            <div class="col-6">
            <p class="m-0 p-0 house-details text-dark address bold">{{ house.location.street }} {{ house.location.houseNumber }}</p>
            <p class="m-0 py-2 house-details text-dark">€ {{ house.price }}</p>
            <p class="m-0 p-0 house-details text-secondary">{{ house.location.houseNumberAddition + " " ? house.location.houseNumberAddition : '' }} {{ house.location.city }} {{ house.location.zip }}</p>
              <div class="icon-wrapper d-flex">
                <span class="py-3 text-dark text-left"><img class="image-icon" src="../assets/images/ic_bed@3x.png"> {{ house.rooms.bedrooms }}</span>
                <span class="p-3 text-dark text-left"><img class="image-icon" src="../assets/images/ic_bath@3x.png"> {{ house.rooms.bathrooms }} </span>
                <span class="pr-3 pt-3 pb-3 text-dark text-left"><img class="image-icon" src="../assets/images/ic_size@3x.png"> {{ house.size }} m²</span>
              </div>  
            </div>
            <div class="col-2">
              <div class="d-flex flex-row-reverse " v-if="house.madeByMe">
                <a style="width: 25px;" @click="deleteListingById(house.id)">
                  <img class="icon w-100" src="../assets/images/ic_delete@3x.png">
                </a>
                <router-link class="mx-3" style="width: 25px;" :to="{ name: 'edit', params: { id: house.id }}">
                  <img class="icon w-100" src="../assets/images/ic_edit@3x.png">
                </router-link>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else style="margin: 17rem;">
      <img class="w-100" src="../assets/images/img_empty_houses@3x.png">
      <h2 class="text-center mt-5">No results found.</h2>
      <h2 class="text-center">Please try another keyword.</h2>
    </div>
  </div>
</div>
</template>

<script src="../assets/scripts/ListView.js"></script>
<style src="../assets/styles/ListView.scss" lang="scss"></style>

