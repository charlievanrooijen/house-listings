<template>
    <div class="container">
      <div v-if="house">
        <img :src="house.image" :alt="house.name" class="house-image" />
        <h1>{{ house.name }}</h1>
        <p class="address">{{ house.address }}</p>
        <p class="price">${{ house.price }}</p>
        <p class="description">{{ house.description }}</p>
        <p class="rooms">Bedrooms: {{ house.rooms.bedrooms }}</p>
        <p class="rooms">Bathrooms: {{ house.rooms.bathrooms }}</p>
        <p class="size">Size: {{ house.size }} sq ft</p>
        <p class="location">
          Location: {{ house.location.street }} {{ house.location.houseNumber }}{{ house.location.houseNumberAddition ? house.location.houseNumberAddition : '' }}, {{ house.location.city }}, {{ house.location.zip }}
        </p>
        <p class="construction-year">Construction Year: {{ house.constructionYear }}</p>
        <p class="garage">Has Garage: {{ house.hasGarage ? 'Yes' : 'No' }}</p>
        <p class="created-at">Created At: {{ new Date(house.createdAt).toLocaleDateString() }}</p>
      </div>
      <div v-else>
        <p>Loading house details...</p>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HouseDetailView',
    data() {
      return {
        house: null
      };
    },
    methods: {
      async fetchHouseDetails() {
        const houseId = this.$route.params.id;
        try {
          const response = await axios.get(`https://api.intern.d-tt.nl/api/houses/${houseId}`, {
            headers: {
              'X-Api-Key': process.env.VUE_APP_API_KEY
            }
          });
          this.house = response.data[0];
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching house details:', error.response ? error.response.data : error.message);
        }
      }
    },
    created() {
      this.fetchHouseDetails();
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
  }
  .house-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  </style>
  