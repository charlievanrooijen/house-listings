<template>
  <div class="edit-background-image pagecontainer">
    <div class="form-wrapper bg-transparent row">
      <div>
        <router-link class="return-link-desktop" to="/">
          <h3 class="text-dark"><i class="fa-solid fa-arrow-left"> </i> Back to overview </h3>
        </router-link>
      </div>
      <div class="col-12 my-3">
        <router-link class="return-link-mobile text-dark" to="/"><i style="font-size: 2rem; font-weight: 600"
            class="fa-solid fa-arrow-left pl-3"></i></router-link>
        <h2 class="text-dark create-new-title bold m-0">Edit Listing</h2>
      </div>
      <form v-if="house" class="col-12" @submit.prevent="submitForm">
        <div class="inputContainer mb-3">
          <label for="streetName" class="form-label">Street Name*</label>
          <input placeholder="Enter the street name" type="text" class="form-control" id="streetName"
            v-model="form.streetName" required>
        </div>
        <div class="row">
          <div class="col-6 inputContainer mb-3">
            <label for="houseNumber" class="form-label">House Number*</label>
            <input placeholder="Enter the house number" type="number" class="form-control" id="houseNumber"
              v-model="form.houseNumber" required>
          </div>
          <div class="col-6 inputContainer mb-3">
            <label for="numberAddition" class="form-label">Number Addition (optional)</label>
            <input placeholder="e.g A" type="text" class="form-control" id="numberAddition"
              v-model="form.numberAddition">
          </div>
        </div>
        <div class="inputContainer mb-3">
          <label for="zip" class="form-label">Postal Code*</label>
          <input placeholder="e.g. 1000 AA" type="text" class="form-control" id="zip" v-model="form.zip" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="city" class="form-label">City*</label>
          <input placeholder="e.g. Utrecht" type="text" class="form-control" id="city" v-model="form.city" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="city" class="form-label">Upload picture (PNG or JPG)*</label>
          <input style="display: none;" @change="createImagePreview()" accept="image/*" type='file' id="imginput" />
          <div v-if="house.image">
          <div id="imageUploadContainer" class="image-upload-container w-50">
            <img class="w-100" :src="house.image"  id="imgPreview" alt="your image" />
            <img style="position: absolute; top: 0; right: 0%; width: 40px;" id="clearImage"
              src="../assets/images/ic_clear_white@3x.png" @click="unloadImagePreview()" />
          </div>
        </div>
        <div v-else>
          <div onclick="document.getElementById('imginput').click()">
            <div id="imagePreviewContainer">
              <div id="imageUpload" class="image-upload-container w-50 p-5">
                <img class="w-100" id="imgPreview" src="../assets/images/ic_plus_grey@3x.png" alt="your image" />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="inputContainer mb-3">
          <label for="price" class="form-label">Price*</label>
          <input placeholder="e.g. 150.000" type="number" class="form-control" id="price" v-model="form.price" required>
        </div>
        <div class="row">
          <div class="inputContainer mb-3 col-6">
            <label for="size" class="form-label">Size (sq ft)*</label>
            <input placeholder="e.g. 60M2" type="number" class="form-control" id="size" v-model="form.size" required>
          </div>
          <div class="inputContainer col-6">
            <label for="hasGarage" class="form-label">Has Garage*</label>
            <select class="form-select" id="hasGarage" v-model="form.hasGarage">
              <option :value="false" disabled selected>Select</option>
              <option :value="true">Yes</option>
              <option :value="false">No</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-6 inputContainer mb-3">
            <label for="bedrooms" class="form-label">Bedrooms*</label>
            <input placeholder="Enter amount" type="number" class="form-control" id="bedrooms" v-model="form.bedrooms"
              required>
          </div>
          <div class="col-6 inputContainer mb-3">
            <label for="bathrooms" class="form-label">Bathrooms*</label>
            <input placeholder="Enter amount" type="number" class="form-control" id="bathrooms" v-model="form.bathrooms"
              required>
          </div>
        </div>
        <div class="inputContainer mb-3">
          <label for="constructionYear" class="form-label">Construction date*</label>
          <input placeholder="e.g. 1990" type="number" class="form-control" id="constructionYear"
            v-model="form.constructionYear" required>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description*</label>
          <textarea placeholder="Enter description" class="form-control" id="description" v-model="form.description"
            rows="3" required></textarea>
        </div>
        <div class="p-5">
          <button type="submit" class="btn btn-primary">Update Listing</button>
          <button type="button" class="btn btn-danger" @click="showDeleteModal(this.house.id)">Delete Listing</button>
        </div>
      </form>
      <div v-else>
        <p>Loading house details...</p>
      </div>
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content bg-light w-lg-25 w-100">
          <h2 class="bold">Delete listing</h2>
          <h3 class="mt-4 text-center m-0">Are you sure you want to delete this listing?</h3>
          <h3 class="mb-4 text-center">This action cannot be undone</h3>
          <div class="modal-actions row">
            <div class="col-12 mb-3">
              <button @click="confirmDelete" class="bold btn btn-primary text-light w-75">YES DELETE</button>
            </div>
            <div class="col-12">
              <button @click="closeModal" class="bold btn btn-secondary text-light w-75">GO BACK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../assets/scripts/EditListing.js"></script>
<style src="../assets/styles/editview/EditListingStyle.scss" lang="scss"></style>
<style src="../assets/styles/editview/EditListingDesktop.scss" lang="scss"></style>
<style src="../assets/styles/editview/EditListingMobile.scss" lang="scss"></style>