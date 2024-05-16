<template>
  <div class="container">
    <h1 class="text-secondary">Houses List</h1>
    <div class="filter">
      <label for="sortOrder">Sort by:</label>
      <select id="sortOrder" v-model="sortOrder" @change="sortHouses">
        <option value="street-asc">Street (A-Z)</option>
        <option value="street-desc">Street (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="size-asc">Size (Small to Big)</option>
        <option value="size-desc">Size (Big to Small)</option>
      </select>
    </div>
    <div class="input-group flex-nowrap mb-3">
      <span class="input-group-text" id="addon-wrapping">Search by address</span>
      <input 
        v-model="searchQuery" 
        type="text" 
        class="form-control" 
        placeholder="Search" 
        aria-label="Search" 
        aria-describedby="addon-wrapping"
      >
    <button class="btn btn-outline-secondary" type="button" @click="clearSearch">Clear</button>
    </div>
    <div v-if="filteredHouses.length">
      <div>
        {{ filteredHouses.length }} Results found
      </div>
      <div v-for="(house, index) in filteredHouses" :key="index" class="house-details house">
        <img :src="house.image" :alt="house.name" class="house-details house-image" />
        <h2>{{ house.name }}</h2>
        <p class="house-details address">Location: <br>{{ house.location.street }} {{ house.location.houseNumber }}{{ house.location.houseNumberAddition ? house.location.houseNumberAddition : '' }}, {{ house.location.city }}, {{ house.location.zip }}</p>
        <p class="house-details price">${{ house.price }}</p>
        <p class="house-details size">Size: <br>{{ house.size }} sq ft</p>
        <p class="house-details size">Bedrooms: <br>{{ house.rooms.bedrooms }} </p>
        <p class="house-details size">Bathrooms: <br>{{ house.rooms.bathrooms }} </p>
        <router-link :to="{ name: 'HouseDetail', params: { id: house.id } }" class="view-details btn btn-success text-light">View Details</router-link>
      </div>
    </div>
    <div v-else>
      <p>No houses available.</p>
    </div>
  </div>
</template>

<script src="../assets/scripts/ListView.js"></script>
<style src="../assets/styles/ListView.scss" lang="scss"></style>
