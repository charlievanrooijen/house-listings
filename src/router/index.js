// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ListView from '../views/ListView.vue';
import AboutView from '../views/AboutView.vue';
import Login from '../views/LoginView.vue';
import CreateListing from '../views/CreateListingView.vue';
import EditListing from '../views/EditListingView.vue';
import DetailView from '../views/DetailView.vue';

const routes = [
  {
    path: '/list',
    name: 'home',
    component: ListView
  }, 
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/create',
    name: 'create',
    component: CreateListing
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditListing,
    props: true
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
