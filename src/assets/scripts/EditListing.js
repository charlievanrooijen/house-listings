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
        hasGarage: '',
        description: ''
      },
      showModal: false,
      houseToDelete: null,
      selectedImage: null,
      file: null,
      fileName: "",
      formData: new FormData()
    };
  },
  created() {
    this.fetchHouseDetails();
  },
  computed: {
    isFormValid() {
      return (
        this.form.price &&
        this.form.bedrooms &&
        this.form.bathrooms &&
        this.form.size &&
        this.form.streetName &&
        this.form.houseNumber &&
        this.form.zip &&
        this.form.city &&
        this.form.constructionYear &&
        this.form.description &&
        this.form.hasGarage !== '' &&
        this.isImageSet()
      );
    }
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
        const response = await axios.post(`https://api.intern.d-tt.nl/api/houses/${this.house.id}`, this.form, {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });

        console.log('Listing updated successfully:', response.data);

        try {
          console.log(this.formData);
          var response2 = await axios.post(`https://api.intern.d-tt.nl/api/houses/${this.house.id}/upload`, this.formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-Api-Key': process.env.VUE_APP_API_KEY
            }
          });
          console.log(response2);
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
            hasGarage: '',
            description: ''
          };
          this.file = null;
          this.fileName = "";

        } catch (error) {
          console.error('Error uploading image:', error.response ? error.response.data : error.message);
        }
      } catch (error) {
        console.error('Error updating listing:', error.response ? error.response.data : error.message);
      } finally {
        this.$router.push('/');
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
        this.$router.push('/');
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
    triggerFileInput() {
      document.getElementById('imginput').click();
    },
    createImagePreview() {
      this.imgPreview = document.getElementById("imgPreview");
      const imgInp = document.getElementById("imginput");
      const [file] = imgInp.files;
      if (file) {
        this.imgPreview.src = URL.createObjectURL(file);
      }
      this.imageUploadContainer.style.display = "none";
      this.imagePreviewContainer.style.display = "block";
    },
    unloadImagePreview() {
      this.imageUploadContainer = document.getElementById("imageUploadContainer");
      this.imagePreviewContainer = document.getElementById("imagePreviewContainer");
      const imgInp = document.getElementById("imginput");
      imgInp.value = '';
      this.file = null;
      this.fileName = "";
      this.formData = new FormData();
      this.imageUploadContainer.style.display = "block";
      this.imagePreviewContainer.style.display = "none";
    },
    handleFileChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        this.file = files[0];
        this.fileName = this.file.name;
        this.formData = new FormData();
        this.formData.append("image", this.file);
        this.createImagePreview();
      }
    },
    isImageSet() {
      return (this.formData.get('image') !== null)
    }
  },
  mounted()
  {
    this.formData.append("image", this.file);
  }
};
