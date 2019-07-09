import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);
// import MiHome from './MiHome.vue'
const MiHome = () => import(/* webpackChunkName: "home" */ "./views/Home.vue");
const MiLogin = () =>
  import(/* webpackChunkName: "login" */ "./views/Login.vue");
const MiCategory = () =>
  import(/* webpackChunkName: "category" */ "./views/Category.vue");
const MiCart = () => import(/* webpackChunkName: "cart" */ "./views/Cart.vue");
const MiUser = () => import(/* webpackChunkName: "user" */ "./views/User.vue");
const MiList = () => import(/* webpackChunkName: "list" */ "./views/List.vue");
const MiDetail = () =>
  import(/* webpackChunkName: "detail" */ "./views/Detail.vue");
const MiSetting = () =>
  import(/* webpackChunkName: "setting" */ "./views/Setting.vue");
const MiAddressList = () =>
  import(/* webpackChunkName: "addressList" */ "./views/AddressList.vue");
const MiAddressEdit = () =>
  import(/* webpackChunkName: "addressEdit" */ "./views/AddressEdit.vue");
const OrderCheckout = () =>
  import(/* webpackChunkName: "orderCheckout" */ "./views/OrderCheckout.vue");
const OrderList = () =>
  import(/* webpackChunkName: "orderList" */ "./views/OrderList.vue");
const OrderView = () =>
  import(/* webpackChunkName: "orderView" */ "./views/OrderView.vue");

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
