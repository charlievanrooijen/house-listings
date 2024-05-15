<template>
    <div>
      <h1>{{ house.name }}</h1>
      <img :src="house.image" :alt="house.name" class="house-image" />
      <p>{{ house.address }}</p>
      <p>{{ house.price }}</p>
      <p>{{ house.description }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  require('dotenv').config();
  
    export default {

    name: 'HouseDetailView',
    data() {
      return {
        house: {}
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
          this.house = response.data;
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
  .house-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  </style>
  