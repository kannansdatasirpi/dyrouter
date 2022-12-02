//The Vue router is used to navigate between views or component templates in the DOM. 
//To use the Vue router, define routes in a routes component and indicate to Vue that the new component should be mounted on an event, such as click.


import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../components/AboutUs.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  
  {
    path: '/about',
    name: 'about',
    component: AboutUs
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // in this history syntax is get the base URL like(http://localhost:8080/), then this url bind the routes. this routes assing the url in prefix of the component
  routes
})

export default router
