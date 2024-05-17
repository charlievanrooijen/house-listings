import axios from 'axios';

export default {
  name: 'EditListing',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
        house: null,
        form: {
            price: '',
            bedrooms: '',
            bathrooms: '',
            size: '',
            streetName: '',
            houseNumber: '',
            numberAddition: '',
            zip: '',
            city: '',
            constructionYear: '',
            hasGarage: false,
            description: ''
        }
    };
  },
  created() {
    this.fetchHouseDetails();
    if (this.house) {
      this.form = { ...this.house };
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.put(`https://api.intern.d-tt.nl/api/houses/${this.form.id}`, this.form, {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        console.log('Listing updated successfully:', response.data);
        this.$router.push('/');
      } catch (error) {
        console.error('Error updating listing:', error.response ? error.response.data : error.message);
      }
    },
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
  }
};
