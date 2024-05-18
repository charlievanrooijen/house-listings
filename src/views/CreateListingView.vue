<template>
    <div class="container row p-3 mt-4 d-flex align-start">
      <div class="col-12 p-0 m-0">
        <h2 class="p-2">Create New Listing</h2>
      </div>
      <form class="col-12" @submit.prevent="submitForm">
        <div class="inputContainer mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" id="price" v-model="form.price" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="bedrooms" class="form-label">Bedrooms</label>
          <input type="number" class="form-control" id="bedrooms" v-model="form.bedrooms" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="bathrooms" class="form-label">Bathrooms</label>
          <input type="number" class="form-control" id="bathrooms" v-model="form.bathrooms" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="size" class="form-label">Size (sq ft)</label>
          <input type="number" class="form-control" id="size" v-model="form.size" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="streetName" class="form-label">Street Name</label>
          <input type="text" class="form-control" id="streetName" v-model="form.streetName" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="houseNumber" class="form-label">House Number</label>
          <input type="number" class="form-control" id="houseNumber" v-model="form.houseNumber" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="numberAddition" class="form-label">Number Addition</label>
          <input type="text" class="form-control" id="numberAddition" v-model="form.numberAddition">
        </div>
        <div class="inputContainer mb-3">
          <label for="zip" class="form-label">ZIP Code</label>
          <input type="text" class="form-control" id="zip" v-model="form.zip" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" id="city" v-model="form.city" required>
        </div>
        <div class="inputContainer mb-3">
          <label for="constructionYear" class="form-label">Construction Year</label>
          <input type="number" class="form-control" id="constructionYear" v-model="form.constructionYear" required>
        </div>
        <div class="inputContainer">
            <label for="hasGarage">Has Garage</label>
            <div class="form-check">
                <input type="checkbox" class="form-check-input mt-2" id="hasGarage" v-model="form.hasGarage">
            </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description" v-model="form.description" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Create Listing</button>
      </form>
    </div>
  </template>
  

<script src="../assets/scripts/CreateListing.js"></script>
<style src="../assets/styles/CreateListing.scss" lang="scss"></style>