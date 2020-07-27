import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import MainPage from '../views/MainPage.vue';
import Favorites from '../views/Favorites.vue';
import Animals from '../components/Animals.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/animals',
    name: 'Animals',
    component: Animals,
  },
  {
    path: '/favourites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.name !== 'Login' && !localStorage.token) next({name: 'Login'})
  else next()
})

router.beforeEach((to, from, next) => {
  if(to.name == 'Login' && localStorage.token) next({name: 'MainPage'})
  else next()
})

export default router;
