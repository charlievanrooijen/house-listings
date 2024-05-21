
import axios from 'axios';

export default {
  name: 'CreateListing',
  imageUploadContainer: null,
  imagePreviewContainer: null,
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
      var houseId = 0;
      try {
        const response = await axios.post('https://api.intern.d-tt.nl/api/houses', this.form, {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        houseId = response.data.id
        console.log('Listing created successfully:', response.data);
      } catch (error) {
        console.error('Error creating listing:', error.response ? error.response.data : error.message);
      }
      if (houseId) {
        try {
          // Upload the image
          var imageinput = document.getElementById("imginput").value;
          console.log(imageinput);
          if (imageinput) {
            const formData = new FormData();
            formData.append('image', imageinput);

            var response2 = await axios.post(`https://api.intern.d-tt.nl/api/houses/${houseId}/upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'X-Api-Key': process.env.VUE_APP_API_KEY
              }
            });
            console.log('Image uploaded successfully');
            console.log('Listing created successfully:', response2.data);
          }
        } catch (error) {
          console.error('Error creating listing:', error.response2 ? error.response2.data : error.message);
        }
      }

      this.$router.push('/');
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
      this.selectedImage = null;
    },
    createImagePreview() {
      var imgInp = document.getElementById("imginput");
      var imgPreview = document.getElementById("imgPreview");
      this.imageUploadContainer = document.getElementById("imageUploadContainer");
      this.imagePreviewContainer = document.getElementById("imagePreviewContainer");

      const [file] = imgInp.files
      if (file) {
        imgPreview.src = URL.createObjectURL(file);
      }
      this.imageSelected = true;

      this.imageSelected = false;
      this.imageUploadContainer.style.display = "block";
      this.imagePreviewContainer.style.display = "none";
    },
    unloadImagePreview() {
      this.imageSelected = false;
      this.imageUploadContainer.style.display = "none";
      this.imagePreviewContainer.style.display = "block";
    }
  }
};