<template>
    <div class="container-md">
      <div class="input-group mb-3 mt-3">
        <span class="input-group-text" id="basic-addon1">Username</span>
        <input v-model="username" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Password</span>
        <input v-model="password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
      </div>
      <button class="btn btn-success" @click="login">Login</button>
    </div>
</template>

<script src="../assets/scripts/Login.js"></script>