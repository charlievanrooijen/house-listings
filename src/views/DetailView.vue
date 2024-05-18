<template>
  <div class="container">
    <div v-if="house">
      <img :src="house.image" :alt="house.name" class="house-image rounded" />
      <p class="address house-detail">Address: <br>{{ house.location.street }} {{ house.location.houseNumber }}{{ house.location.houseNumberAddition ? house.location.houseNumberAddition : '' }}, {{ house.location.city }}, {{ house.location.zip }}</p>
      <p class="price house-detail"><br>Price: <br>${{ house.price }}</p>
      <p class="description house-detail">Description :<br>{{ house.description }}</p>
      <p class="rooms house-detail">Bedrooms: <br>{{ house.rooms.bedrooms }}</p>
      <p class="rooms house-detail">Bathrooms: <br>{{ house.rooms.bathrooms }}</p>
      <p class="size house-detail">Size: <br>{{ house.size }} sq ft</p>
      <p class="location house-detail">
        Location: <br>{{ house.location.street }} {{ house.location.houseNumber }}{{ house.location.houseNumberAddition ? house.location.houseNumberAddition : '' }}, {{ house.location.city }}, {{ house.location.zip }}
      </p>
      <p class="construction-year house-detail">Construction Year: <br>{{ house.constructionYear }}</p>
      <p class="garage house-detail">Has Garage: <br>{{ house.hasGarage ? 'Yes' : 'No' }}</p>
      <p class="created-at house-detail">Created At: <br>{{ new Date(house.createdAt).toLocaleDateString() }}</p>
    </div>
    <div v-else>
      <p>Loading house details...</p>
    </div>
  </div>
</template>

<script src="../assets/scripts/DetailView.js"></script>
<style src="../assets/styles/DetailView.scss" lang="scss"></style>
