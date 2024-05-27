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
        hasGarage: '',
        description: ''
      },
      file: null,
      fileName: "",
      formData: new FormData(),
    };
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
    async submitForm() {
      var houseId = 0;
      try {
        const response = await axios.post('https://api.intern.d-tt.nl/api/houses', this.form, {
          headers: {
            'X-Api-Key': process.env.VUE_APP_API_KEY
          }
        });
        houseId = response.data.id;
      } catch (error) {
        console.error('Error creating listing:', error.response ? error.response.data : error.message);
      }
      if (houseId) {
        try {
          await axios.post(`https://api.intern.d-tt.nl/api/houses/${houseId}/upload`, this.formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-Api-Key': process.env.VUE_APP_API_KEY
            }
          });

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
        } finally {
          this.$router.push('/');
        }
      }
    },
    triggerFileInput() {
      document.getElementById('imginput').click();
    },
    createImagePreview() {
      const imgInp = document.getElementById("imginput");
      const [file] = imgInp.files;
      if (file) {
        this.imgPreview.src = URL.createObjectURL(file);
      }
      this.imageUploadContainer.style.display = "none";
      this.imagePreviewContainer.style.display = "block";
    },
    unloadImagePreview() {
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
    init()
    {
      this.imgPreview = document.getElementById("imgPreview");
      this.imageUploadContainer = document.getElementById("imageUploadContainer");
      this.imagePreviewContainer = document.getElementById("imagePreviewContainer");
      console.log("imageUploadContainer :" + this.imageUploadContainer)
      console.log("imagePreviewContainer :" + this.imagePreviewContainer)
    },
    isImageSet()
    {
      return (this.formData.get('image') !== null)
    }
  },
  mounted() {
     this.init()
  }
};
