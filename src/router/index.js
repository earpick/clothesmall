import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home.vue");
const Profile = () => import("views/profile/Profile.vue");
const ShopCart = () => import("views/shopcart/ShoppingCart.vue");
const Sort = () => import("views/sort/Sort.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/shopcart",
    component: ShopCart
  },
  {
    path: "/sort",
    component: Sort
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
