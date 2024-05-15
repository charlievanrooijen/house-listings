<template>
  <div class="container">
    <h1>Houses List</h1>
    <div v-if="houses.length">
      <div v-for="(house, index) in houses" :key="index" class="house">
        <img :src="house.image" :alt="house.name" class="house-image" />
        <h2>{{ house.name }}</h2>
        <p>{{ house.address }}</p>
        <p>{{ house.price }}</p>
      </div>
    </div>
    <div v-else>
      <p>No houses available.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HousesList',
  data() {
    return {
      houses: []
    };
  },
  methods: {
    async fetchHouses() {
      try {
        const response = await axios.get('https://api.intern.d-tt.nl/api/houses', {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        this.houses = response.data;
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching houses:', error.response ? error.response.data : error.message);
      }
    }
  },
  created() {
    this.fetchHouses();
  }
};
</script>

<style scoped>
.house {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
}
.house-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
}
</style>