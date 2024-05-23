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
      },
      file: null,
      fileName: "",
      formData: new FormData(),
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
        houseId = response.data.id;
        console.log('Listing created successfully:', response.data);
      } catch (error) {
        console.error('Error creating listing:', error.response ? error.response.data : error.message);
      }
      if (houseId) {
        try {
          console.log(this.formData);

          var response2 = await axios.post(`https://api.intern.d-tt.nl/api/houses/${houseId}/upload`, this.formData, {
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
            hasGarage: false,
            description: ''
          };
          this.file = null;
          this.fileName = "";
        } catch (error) {
          console.error('Error uploading image:', error.response ? error.response.data : error.message);
        } finally {
          this.$router.push('/');
        }
      }
    },
    createImagePreview() {
      var imgInp = document.getElementById("imginput");
      var imgPreview = document.getElementById("imgPreview");
      this.imageUploadContainer = document.getElementById("imageUploadContainer");
      this.imagePreviewContainer = document.getElementById("imagePreviewContainer");

      const [file] = imgInp.files;
      if (file) {
        imgPreview.src = URL.createObjectURL(file);
      }
      this.imageUploadContainer.style.display = "block";
      this.imagePreviewContainer.style.display = "none";
    },
    unloadImagePreview() {
      this.imageUploadContainer.style.display = "none";
      this.imagePreviewContainer.style.display = "block";
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
    }
  }
};
