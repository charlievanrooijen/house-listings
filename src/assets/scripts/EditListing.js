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
        // Initialize the form with the house details
        if (this.house) {
          this.form = {
            price: this.house.price,
            bedrooms: this.house.rooms.bedrooms,
            bathrooms: this.house.rooms.bathrooms,
            size: this.house.size,
            streetName: this.house.location.street,
            houseNumber: this.house.location.houseNumber,
            numberAddition: this.house.location.houseNumberAddition,
            zip: this.house.location.zip,
            city: this.house.location.city,
            constructionYear: this.house.constructionYear,
            hasGarage: this.house.hasGarage,
            description: this.house.description
          };
        }
      } catch (error) {
        console.error('Error fetching house details:', error.response ? error.response.data : error.message);
      }
    },
    async submitForm() {
      try {
        const response = await axios.post(`https://api.intern.d-tt.nl/api/houses/${this.house.id}`, {
          price: this.form.price,
          bedrooms: this.form.bedrooms,
          bathrooms: this.form.bathrooms,
          size: this.form.size,
          streetName: this.form.streetName,
          houseNumber: this.form.houseNumber,
          houseNumberAddition: this.form.numberAddition,
          zip: this.form.zip,
          city: this.form.city,
          constructionYear: this.form.constructionYear,
          hasGarage: this.form.hasGarage,
          description: this.form.description
        }, 
        {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        console.log('Listing updated successfully:', response.data);
        this.$router.push('/edit/' + this.house.id);
      } catch (error) {
        console.error('Error updating listing:', error.response ? error.response.data : error.message);
      }
    },
    async deleteListing() {
      if (window.confirm('Are you sure you want to delete this listing?')) {
        try {
          const response = await axios.delete(`https://api.intern.d-tt.nl/api/houses/${this.house.id}`, {
            headers: {
              'X-Api-Key': process.env.VUE_APP_API_KEY
            }
          });
          console.log('Listing deleted successfully:', response.data);
          this.$router.push('/');
        } catch (error) {
          console.error('Error deleting listing:', error.response ? error.response.data : error.message);
        }
      }
    }
  }
};
