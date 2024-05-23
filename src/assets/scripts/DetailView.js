import axios from 'axios';

export default {
  name: 'DetailView',
  data() {
    return {
      house: null,
      showModal: false,
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
    },
    async deleteListingById(id) {
      try {
        const response = await axios.delete(`https://api.intern.d-tt.nl/api/houses/${id}`, {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        console.log('Listing deleted successfully:', response.data);
        this.$router.push('/'); // Navigate to list view after deletion
      } catch (error) {
        console.error('Error deleting listing:', error.response ? error.response.data : error.message);
      }
    },
    showDeleteModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    confirmDelete() {
      if (this.house) {
        this.deleteListingById(this.house.id);
      }
    }
  },
  created() {
    this.fetchHouseDetails();
  }
};
