import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import journalView from "@/views/journalView";
import ClavierView from "@/views/ClavierView";
import ContactView from "@/views/ContactView";
import FormView from "@/views/FormView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/journal',
    name: 'journal',
    component: journalView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  }



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
