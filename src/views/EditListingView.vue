<template>
  <div class="edit-background-image ">
  <div class="container mt-4 bg-transparent">
    <h2>Edit Listing</h2>
    <form v-if="house" @submit.prevent="submitForm">
      <div class="inputContainer mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" v-model="form.price" :placeholder="house.price" required>
      </div>
      <div class="inputContainer mb-3">
        <label for="bedrooms" class="form-label">Bedrooms</label>
        <input type="number" class="form-control" id="bedrooms" v-model="form.bedrooms"
          :placeholder="house.rooms.bedrooms" required>
      </div>
      <div class="inputContainer mb-3">
        <label for="bathrooms" class="form-label">Bathrooms</label>
        <input type="number" class="form-control" id="bathrooms" v-model="form.bathrooms"
          :placeholder="house.rooms.bathrooms" required>
      </div>
      <div class="inputContainer mb-3">
        <label for="streetName" class="form-label">Street Name</label>
        <input type="text" class="form-control" id="streetName" v-model="form.streetName"
          :placeholder="house.location.street" required>
      </div>
      <div class="inputContainer mb-3">
        <label for="houseNumber" class="form-label">House Number</label>
        <input type="number" class="form-control" id="houseNumber" v-model="form.houseNumber"
          :placeholder="house.location.houseNumber" required>
      </div>
      <div class="inputContainer mb-3">
        <label for="numberAddition" class="form-label">Number Addition</label>
        <input type="text" class="form-control" id="numberAddition" v-model="form.numberAddition"
          :placeholder="house.location.houseNumberAddition">
      </div>
      <div class="inputContainer mb-3">
        <label for="zip" class="form-label">ZIP Code</label>
        <input type="text" class="form-control" id="zip" v-model="form.zip" :placeholder="house.location.zip" required>
      </div>
      <div class="inputContainer mb-3">
        <label for="city" class="form-label">City</label>
        <input type="text" class="form-control" id="city" v-model="form.city" :placeholder="house.location.city"
          required>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="inputContainer mb-3">
            <label for="size" class="form-label">Size (sq ft)</label>
            <input type="number" class="form-control" id="size" v-model="form.size" :placeholder="house.size" required>
          </div>
        </div>
        <div class="col-6">
          <label for="hasGarage">Has Garage</label>
          <div class="form-check">
            <input type="checkbox" class="form-check-input mt-2" id="hasGarage" v-model="form.hasGarage">
          </div>
        </div>
      </div>
      <div class="inputContainer mb-3">
        <label for="constructionYear" class="form-label">Construction Year</label>
        <input type="number" class="form-control" id="constructionYear" v-model="form.constructionYear"
          :placeholder="house.constructionYear" required>
      </div>
      <div class="inputContainer mb-3">
        <label for="description" class="form-label pt-2">Description</label>
        <textarea class="form-control" id="description" v-model="form.description" :placeholder="house.description"
          rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Update Listing</button>
      <button type="button" class="btn btn-danger" @click="deleteListing">Delete Listing</button>
    </form>
    <div v-else>
      <p>Loading house details...</p>
    </div>
  </div>
</div>
</template>


<script src="../assets/scripts/EditListing.js"></script>
<style src="../assets/styles/EditListing.scss" lang="scss"></style>
