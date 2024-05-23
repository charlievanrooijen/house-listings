import axios from 'axios';

export default {
  name: 'EditListing',
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
      },
      showModal: false,
      houseToDelete: null,
      selectedImage: null // To hold the selected image file
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
        const response = await axios.put(`https://api.intern.d-tt.nl/api/houses/${this.house.id}`, {
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

        // Upload the image if one is selected
        if (this.selectedImage) {
          const formData = new FormData();
          formData.append('image', this.selectedImage);

          await axios.post(`https://api.intern.d-tt.nl/api/houses/${this.house.id}/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-Api-Key': process.env.VUE_APP_API_KEY
            }
          });
          console.log('Image uploaded successfully');
        }

        this.$router.push('/');
      } catch (error) {
        console.error('Error updating listing:', error.response ? error.response.data : error.message);
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
        this.$router.push('/'); // Redirect after deletion
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
    createImagePreview() {
      const imgInp = document.getElementById("imginput");
      const imgPreview = document.getElementById("imgPreview");
      this.imageUploadContainer = document.getElementById("imageUploadContainer");
      this.imagePreviewContainer = document.getElementById("imagePreviewContainer");

      const [file] = imgInp.files;
      if (file) {
        imgPreview.src = URL.createObjectURL(file);
        this.selectedImage = file;
      }
      this.imageUploadContainer.style.display = "block";
      this.imagePreviewContainer.style.display = "none";
    },
    unloadImagePreview() {
      if (this.imageUploadContainer && this.imagePreviewContainer) {
        this.selectedImage = null;
        this.imageUploadContainer.style.display = "none";
        this.imagePreviewContainer.style.display = "block";
      }
    }
  }
};
