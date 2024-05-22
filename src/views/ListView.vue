<template>
  <div class="bg-waring m-0">
    <div class="container bg-transparent pagecontainer">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h1 class="py-3 text-dark list-heading">Houses</h1>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-row-reverse">
          <a id="create-listing-link-desktop" class="btn btn-primary h-50" href="/create">
            <i class="text-light fa-solid fa-plus"></i> CREATE NEW
          </a>

          <a id="create-listing-link-mobile" style="display: flex; text-decoration: none; flex-direction: row-reverse;" class="absolute-top-right p-3" href="/create">
            <i class="text-dark display-4 fa-solid fa-plus"></i>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="input-group flex-nowrap mb-3 text-secondary position-relative">
            <input v-model="searchQuery" type="text" class="form-control ps-5 bg-info" placeholder="Search for a house"
              aria-label="Search" aria-describedby="addon-wrapping">
            <span style="z-index: 1000;" class="position-absolute top-50 start-0 translate-middle-y ms-3">
              <i class="fas fa-search"></i>
            </span>
            <span class="position-absolute top-50 end-0 translate-middle-y me-3" @click="clearSearch"
              style="cursor: pointer; z-index: 1000;">
              <img v-if="searchQuery" src="../assets/images/ic_clear@3x.png" alt="Clear Search"
                style="width: 20px; height: 20px;">
            </span>
          </div>
        </div>
        <div v-if="filteredHouses.length" class="col-lg-6 col-sm-12 filter-button-container">
          <button class="btn btn-left btn-primary text-light filter-button"
            @click="toggleSort('street')">Street</button>
          <button class="btn btn-center btn-warning text-light filter-button"
            @click="toggleSort('price')">Price</button>
          <button class="btn btn-right btn-primary text-light filter-button"
            @click="toggleSort('size')">Size</button>
        </div>
      </div>
      <div v-if="searchQuery && filteredHouses.length">
        <h2 class="text-dark py-3">{{ filteredHouses.length }} results found</h2>
      </div>
      <div v-if="filteredHouses.length">
        <div v-for="(house, index) in filteredHouses" :key="index" class="house rounded bg-light mb-3">
          <div class="row">
            <div class="col-4 image-wrapper">
              <router-link style="text-decoration: none;" :to="{ name: 'detail', params: { id: house.id } }">
                <img :src="house.image" :alt="house.name" class="house-image" />
              </router-link>
            </div>
            <div class="col-8 position-relative">
              <div class="edit-delete-container p-1" v-if="house.madeByMe">
                <router-link :to="{ name: 'edit', params: { id: house.id } }">
                  <img class="w-100" src="../assets/images/ic_edit@3x.png">
                </router-link>
                <a @click.stop="showDeleteModal(house.id)">
                  <img class="w-100"  src="../assets/images/ic_delete@3x.png">
                </a>
              </div>
              <router-link style="text-decoration: none;" :to="{ name: 'detail', params: { id: house.id } }">
                <p class="m-0 p-0 house-details text-dark address bold">{{ house.location.street }} {{
                  house.location.houseNumber }}</p>
                <p class="m-0 py-lg-2 house-details text-dark">€ {{ house.price }}</p>
                <p class="m-0 p-0 house-details text-warning">
                  {{ house.location.zip }} {{ house.location.houseNumberAddition ?
                    house.location.houseNumberAddition + " " : '' }}{{ house.location.city }} </p>
                <div class="icon-wrapper d-flex w-100">
                  <span class="py-3 text-dark text-left"><img class="image-icon" src="../assets/images/ic_bed@3x.png">
                    {{ house.rooms.bedrooms }}</span>
                  <span class="p-3 text-dark text-left"><img class="image-icon" src="../assets/images/ic_bath@3x.png">
                    {{ house.rooms.bathrooms }} </span>
                  <span class="pr-3 pt-3 pb-3 text-dark text-left"><img class="image-icon"
                      src="../assets/images/ic_size@3x.png"> {{ house.size }} m²</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="noresult-img">
        <img class="w-100" src="../assets/images/img_empty_houses@3x.png">
        <h3 class="text-center mt-5">No results found.</h3>
        <h3 class="text-center">Please try another keyword.</h3>
      </div>

      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content bg-light w-lg-25 w-100">
          <h2 class="bold">Delete listing</h2>
          <h3 class="mt-4 text-center m-0">Are you sure you want to delete this listing?</h3>
          <h3 class="mb-4 text-center">This action cannot be undone</h3>
          <div class="modal-actions row">
            <div class="col-12 mb-3">
              <button @click="confirmDelete" class="bold btn btn-primary text-light w-75">YES DELETE</button>
            </div>
            <div class="col-12">
              <button @click="closeModal" class="bold btn btn-secondary text-light w-75">GO BACK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../assets/scripts/ListView.js"></script>
<style src="../assets/styles/listview/ListViewDesktop.scss" lang="scss"></style>
<style src="../assets/styles/listview/ListViewMobile.scss" lang="scss"></style>
<style src="../assets/styles/listview/ListViewStyling.scss" lang="scss"></style>
