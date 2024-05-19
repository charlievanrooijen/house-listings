<template>
  <div class="container bg-transparent">
    <div class="my-3">
      <router-link style="text-decoration: none" to="/">
        <h3 class="text-dark"><i class="fa-solid fa-arrow-left"> </i> Back to overview </h3>
      </router-link>
    </div>
    <div class="row">
      <div class="col-8">
        <div class v-if="house">
          <div v-if="house.image">
            <img :src="house.image" :alt="house.name" class="house-image rounded m-0" />
          </div>
          <div class="house-detail-container bg-light">
            <div class="row">
              <div class="col-6">
                <h1>
                  {{ house.location.street }} {{ house.location.houseNumber }} {{ house.location.houseNumberAddition }}
                </h1>
              </div>
              <div class="col-6">
                <div class="d-flex flex-row-reverse " v-if="house.madeByMe">
                  <a style="width: 25px;" @click="deleteListingById(house.id)">
                    <img class="icon w-100" src="../assets/images/ic_delete@3x.png">
                  </a>
                  <router-link class="mx-3" style="width: 25px;" :to="{ name: 'edit', params: { id: house.id } }">
                    <img class="icon w-100" src="../assets/images/ic_edit@3x.png">
                  </router-link>
                </div>
              </div>
            </div>
            <div class="location house-detail icon-wrapper d-flex">
              <h3 class="text-dark text-left">
                <img class="image-icon" src="../assets/images/ic_location@3x.png"> 
                {{ house.location.zip }}, {{ house.location.city }}
              </h3>
            </div>
            <div class="house-detail icon-wrapper icon-container">
              <span class="pr-3 pt-3 pb-3 text-dark text-left"><img class="image-icon"
                  src="../assets/images/ic_price@3x.png"> {{ house.price }}</span>
              <span class="pr-3 pt-3 pb-3 text-dark text-left"><img class="image-icon"
                  src="../assets/images/ic_size@3x.png"> {{ house.size }}</span>
              <span class="pr-3 pt-3 pb-3 text-dark text-left"><img class="image-icon"
                  src="../assets/images/ic_construction_date@3x.png"> {{ house.size }}</span>
            </div>
            <div class="house-detail listing-information icon-wrapper icon-container">
              <span class="text-dark text-left"><img class="image-icon" src="../assets/images/ic_bed@3x.png"> {{
                house.rooms.bedrooms }}</span>
              <span class="text-dark text-left"><img class="image-icon" src="../assets/images/ic_bath@3x.png"> {{
                house.rooms.bathrooms }} </span>
              <span class="text-dark text-left"><img class="image-icon" src="../assets/images/ic_garage@3x.png"> {{
                house.hasGarage ? "yes" : "no" }}</span>
            </div>
            <div>
              <p class=" py-3">{{ house.description }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Loading house details...</p>
        </div>
      </div>
      <div class="col-4 px-5">
        <h2>Recommended for you</h2>
        <div class="row bg-light my-1">
          <div class="col-6">
            <img :src="house.image" :alt="house.name" class="house-image rounded m-0" />
          </div>
          <div class="col-6">
            <h3 class="pt-2">asdasd</h3>
            <h3 class="p-0 listing-information">asdasd</h3>
            <h3 class="p-0 listing-information">asdasd</h3>
            <div class="house-detail icon-wrapper icon-container">
              <span class="text-dark text-left"><img class="image-icon" src="../assets/images/ic_bed@3x.png"> {{
                house.rooms.bedrooms }}</span>
              <span class="text-dark text-left"><img class="image-icon" src="../assets/images/ic_bath@3x.png"> {{
                house.rooms.bathrooms }} </span>
              <span class="text-dark text-left"><img class="image-icon" src="../assets/images/ic_garage@3x.png"> {{
                house.hasGarage ? "yes" : "no" }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../assets/scripts/DetailView.js"></script>
<style src="../assets/styles/DetailView.scss" lang="scss"></style>