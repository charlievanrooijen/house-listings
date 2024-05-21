
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
        this.$router.push('/list');
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
    },
    createImagePreview()
    {
      var imgInp = document.getElementById("imginput");
      var imgPreview = document.getElementById("imgPreview");
      var imageUploadContainer = document.getElementById("imageUploadContainer");
      var imagePreviewContainer = document.getElementById("imagePreviewContainer");

      console.log(imageUploadContainer);
      console.log(imagePreviewContainer);
      
      const [file] = imgInp.files
      if (file) {
        imgPreview.src = URL.createObjectURL(file);
      }
      this.imageSelected = true;

      if (imageUploadContainer && imagePreviewContainer) {
        this.imageSelected = false;
        imageUploadContainer.style.display = "block";
        imagePreviewContainer.style.display = "none";
      } else {
        console.error('Elements not found in the DOM');
      }
    },
    unloadImagePreview()
    {
      var imageUploadContainer = document.getElementById("imageUploadContainer");
      var imagePreviewContainer = document.getElementById("imagePreviewContainer");
      
      console.log(imageUploadContainer);
      console.log(imagePreviewContainer);

      if (imageUploadContainer && imagePreviewContainer) {
        this.imageSelected = false;
        imageUploadContainer.style.display = "none";
        imagePreviewContainer.style.display = "block";
      } else {
        console.error('Elements not found in the DOM');
      }
    }
  }
};