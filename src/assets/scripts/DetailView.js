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