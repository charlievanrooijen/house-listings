
import axios from 'axios';

export default {
  name: 'CreateListing',
  data() {
    return {
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
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('https://api.intern.d-tt.nl/api/houses', this.form, {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        console.log('Listing created successfully:', response.data);
        // Reset form after submission
        this.form = {
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
        };
      } catch (error) {
        console.error('Error creating listing:', error.response ? error.response.data : error.message);
      }
    }
  }
};