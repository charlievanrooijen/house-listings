
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
    createImagePreview() {
      var imgInp = document.getElementById("imginput");
      var imgPreview = document.getElementById("imgPreview");
      this.imageUploadContainer = document.getElementById("imageUploadContainer");
      this.imagePreviewContainer = document.getElementById("imagePreviewContainer");

      console.log(this.imageUploadContainer);
      console.log(this.imagePreviewContainer);

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
      if(this.imageUploadContainer && this.imagePreviewContainer){
        console.log("yep");
        this.imageSelected = false;
        this.imageUploadContainer.style.display = "none";
        this.imagePreviewContainer.style.display = "block";
      }else{
        console.log("nope");
      }
    }
  }
};