import axios from 'axios';

export default {
  name: 'ListView',
  data() {
    return {
      houses: [],
      sortOrder: 'street-asc',
      searchQuery: '',
      showModal: false,
      houseToDelete: null
    };
  },
  computed: {
    sortedHouses() {
      return this.sortHouses(this.houses);
    },
    filteredHouses() {
      return this.sortedHouses.filter(house => {
        const address = `${house.location.street} ${house.location.houseNumber}${house.location.houseNumberAddition ? house.location.houseNumberAddition : ''}, ${house.location.city}, ${house.location.zip}`;
        return address.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
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
    async deleteListingById(id) {
      try {
        const response = await axios.delete(`https://api.intern.d-tt.nl/api/houses/${id}`, {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        console.log('Listing deleted successfully:', response.data);
        this.fetchHouses(); // Refresh the list
        this.closeModal(); // Close the modal
      } catch (error) {
        console.error('Error deleting listing:', error.response ? error.response.data : error.message);
      }
    },
    showDeleteModal(id) {
      this.houseToDelete = id;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.houseToDelete = null;
    },
    confirmDelete() {
      if (this.houseToDelete) {
        this.deleteListingById(this.houseToDelete);
      }
    },
    preventNavigation(event) {
      event.stopPropagation();
    },
    toggleSort(sortKey) {
      if (this.sortOrder.startsWith(sortKey)) {
        this.sortOrder = this.sortOrder.endsWith('asc') ? `${sortKey}-desc` : `${sortKey}-asc`;
      } else {
        this.sortOrder = `${sortKey}-asc`;
      }
      this.sortHouses();
    },
    sortHouses() {
      if (!Array.isArray(this.houses)) {
        return [];
      }
      let sortedHouses = this.houses.slice();
      if (this.sortOrder.startsWith('street')) {
        sortedHouses.sort((a, b) => {
          const streetA = a.location?.street || '';
          const streetB = b.location?.street || '';
          const comparison = streetA.localeCompare(streetB);
          return this.sortOrder.endsWith('asc') ? comparison : -comparison;
        });
      } else if (this.sortOrder.startsWith('price')) {
        sortedHouses.sort((a, b) => {
          const comparison = a.price - b.price;
          return this.sortOrder.endsWith('asc') ? comparison : -comparison;
        });
      } else if (this.sortOrder.startsWith('size')) {
        sortedHouses.sort((a, b) => {
          const comparison = a.size - b.size;
          return this.sortOrder.endsWith('asc') ? comparison : -comparison;
        });
      }
      return sortedHouses;
    },
    clearSearch() {
      this.searchQuery = '';
    }
  },
  created() {
    this.fetchHouses();
  }
};
