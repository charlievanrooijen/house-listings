<template>
  <div class="container-lg  bg-transparent pagecontainer">
    <div class="my-3 top-nav-linkwrapper w-100">
      <router-link style="text-decoration: none" to="/">
        <h3 class="text-dark topnavlink-mobile"><i class="mobile-arrow fa-solid fa-arrow-left"> </i> <span
            class="desktop-return"> Back to overview </span> </h3>
      </router-link>
      <div class="absolute-top-right mobile-delete" v-if="house && house.madeByMe">
        <div class="row p-3">
          <div class="col-6 p-0 m-0 d-flex justify-content-center">
            <router-link :to="{ name: 'edit', params: { id: house.id } }">
              <img class="w-50" src="../assets/images/ic_edit_white@3x.png">
            </router-link>
          </div>
          <div class="col-6 p-0 m-0 d-flex justify-content-center">
            <a @click.stop="showDeleteModal(house.id)">
              <img class="w-50" src="../assets/images/ic_delete_white@3x.png">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="house">
      <div class="row">
        <div class="col-12 p-0 col-lg-7">
          <div class="image-wrapper" v-if="house.image">
            <img :src="house.image" :alt="house.name" class="house-image m-0 w-100" />
          </div>
          <div class="house-detail-container bg-light w-100">
            <div class="row">
              <div class="col-12 p-0">
                <h1>
                  {{ house.location.street }} {{ house.location.houseNumber }} {{ house.location.houseNumberAddition }}
                </h1>
              </div>
              <div class="col-6">
              </div>
            </div>
            <div class="location house-detail icon-wrapper d-flex">
              <h3 class="text-dark bolder text-left">
                <img class="image-icon" src="../assets/images/ic_location@3x.png">
                {{ house.location.zip }}, {{ house.location.city }}
              </h3>
              <div class="absolute-top-right desktop-delete p-4" v-if="house.madeByMe">
                <router-link :to="{ name: 'edit', params: { id: house.id } }">
                  <img class="w-25" style="margin-right: 2rem;" src="../assets/images/ic_edit@3x.png">
                </router-link>
                <a @click.stop="showDeleteModal(house.id)">
                  <img class="w-25" src="../assets/images/ic_delete@3x.png">
                </a>
              </div>
            </div>
            <div class="house-detail icon-wrapper icon-container">
              <span class="pr-3 pt-3 pb-3 text-dark text-left  bolder"><img class="image-icon"
                  src="../assets/images/ic_price@3x.png"> {{ house.price }}</span>
              <span class="pr-3 pt-3 pb-3 text-dark text-left  bolder"><img class="image-icon"
                  src="../assets/images/ic_size@3x.png"> {{ house.size }} m²</span>
              <span class="pr-3 pt-3 pb-3 text-dark text-left  bolder"><img class="image-icon"
                  src="../assets/images/ic_construction_date@3x.png"> Built in {{ house.size }}</span>
            </div>
            <div class="house-detail listing-information icon-wrapper icon-container">
              <span class="text-dark text-left  bolder"><img class="image-icon" src="../assets/images/ic_bed@3x.png"> {{
                house.rooms.bedrooms }}</span>
              <span class="text-dark text-left  bolder"><img class="image-icon" src="../assets/images/ic_bath@3x.png">
                {{
                  house.rooms.bathrooms }} </span>
              <span class="text-dark text-left  bolder"><img class="image-icon" src="../assets/images/ic_garage@3x.png">
                {{
                  house.hasGarage ? "yes" : "no" }}</span>
            </div>
            <div>
              <p class=" py-3">{{ house.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5 px-lg-5 px-4">
          <h2 class="m-3">Recommended for you</h2>
          <div class="row bg-light my-1 p-2 rounded mx-1">
            <div class="col-5 d-flex align-items-center">
              <img :src="house.image" :alt="house.name" class="house-image rounded m-0" />
            </div>
            <div class="col-7 p-1">
              <h1 style="font-size: 1em;" class="p-0 m-0">Stokvisstraat 321</h1>
              <h2 style="font-size: 0.7em;" class="pt-2 m-0">500.000</h2>
              <h3 style="font-size: 0.7em;" class="pt-2 m-0">1011 AA Amsterdam</h3>
              <div class="house-detail icon-wrapper icon-container pt-3">
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
    <div v-else>
      <p>Loading house details...</p>
    </div>
  </div>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content bg-light rounded" style="width: 100vw">
      <h2 class="bold">Delete listing</h2>
      <h3 class="mt-4 text-center m-0">Are you sure you want to delete this listing?</h3>
      <h3 class="mb-4 text-center">This action cannot be undone</h3>
      <div class="modal-actions row">
        <div class="col-12 mb-3">
          <button @click="confirmDelete" class="bold btn btn-primary text-light w-75">YES DELETE</button>
        </div>
        <div class="col-12 py-3">
          <button @click="closeModal" class="bold btn btn-secondary text-light w-75">GO BACK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../assets/scripts/DetailView.js"></script>
<style src="../assets/styles/detailview/DetailViewStyle.scss" lang="scss"></style>
<style src="../assets/styles/detailview/DetailViewMobile.scss" lang="scss"></style>
<style src="../assets/styles/detailview/DetailViewDesktop.scss" lang="scss"></style>