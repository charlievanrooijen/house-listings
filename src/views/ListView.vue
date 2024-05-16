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
    <div v-if="houses.length">
      <div v-for="(house, index) in sortedHouses" :key="index" class="house-details house">
        <img :src="house.image" :alt="house.name" class="house-details house-image" />
        <h2>{{ house.name }}</h2>
        <p class="house-details address">Location: <br>{{ house.location.street }} {{ house.location.houseNumber }}{{ house.location.houseNumberAddition ? house.location.houseNumberAddition : '' }}, {{ house.location.city }}, {{ house.location.zip }}</p>
        <p class="house-details price">${{ house.price }}</p>
        <p class="house-details size">Size: <br>{{ house.size }} sq ft</p>
        <router-link :to="{ name: 'HouseDetail', params: { id: house.id } }" class="view-details btn btn-success text-light">View Details</router-link>
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
      houses: [],
      sortOrder: 'street-asc' // default sort order
    };
  },
  computed: {
    sortedHouses() {
      return this.sortHouses(this.houses);
    }
  },
  methods: {
    async fetchHouses() {
      try {
        const response = await axios.get('https://api.intern.d-tt.nl/api/houses', {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        this.houses = Array.isArray(response.data) ? response.data : [];
        console.log(this.houses);
      } catch (error) {
        console.error('Error fetching houses:', error.response ? error.response.data : error.message);
      }
    },
    sortHouses(houses) {
      if (!Array.isArray(houses)) {
        return [];
      }
      if (this.sortOrder.startsWith('street')) {
        return this.sortByStreet(houses);
      } else if (this.sortOrder.startsWith('price')) {
        return this.sortByPrice(houses);
      } else if (this.sortOrder.startsWith('size')) {
        return this.sortBySize(houses);
      }
      return houses;
    },
    sortByStreet(houses) {
      return houses.slice().sort((a, b) => {
        const streetA = a.location?.street || '';
        const streetB = b.location?.street || '';
        const comparison = streetA.localeCompare(streetB);
        return this.sortOrder.endsWith('asc') ? comparison : -comparison;
      });
    },
    sortByPrice(houses) {
      return houses.slice().sort((a, b) => {
        const comparison = a.price - b.price;
        return this.sortOrder.endsWith('asc') ? comparison : -comparison;
      });
    },
    sortBySize(houses) {
      return houses.slice().sort((a, b) => {
        const comparison = a.size - b.size;
        return this.sortOrder.endsWith('asc') ? comparison : -comparison;
      });
    }
  },
  created() {
    this.fetchHouses();
  }
};


</script>

<style scoped lang="scss">
/* Color Palette */
$primary-color: #EB5440;
$primary-black: #000000;
$secondary-color: #4A4B4C;
$hyperlink-color: #067BC2;
$tertiary-light: #E8E8E8;
$tertiary-dark: #C3C3C3;
$background-light: #F6F6F6;
$background-white: #FFFFFF;

/* Typography */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
  background-color: $background-light;
  margin: 0;
  padding: 0;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  color: $primary-black;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.2;
  color: $primary-black;
}

.address, .location {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: $secondary-color;
}

.price {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: $primary-color;
}

.view-details {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: $hyperlink-color;
  text-decoration: none;
}

.view-details:hover {
  text-decoration: underline;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  background-color: $background-white;
}

.filter {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: $primary-black;
}

.filter select {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding: 4px 8px;
  border: 1px solid $secondary-color;
  border-radius: 4px;
  background-color: $background-white;
  color: $primary-black;
}

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

.description{
  text-align: left
}

a {
  color: $hyperlink-color;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.house-details
{
  text-align: left;
  font-size: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 1px ridge black;
}
</style>
