import Vue from "vue";
import Router from "vue-router";
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
      redirect: "home"
    },
    {
      path: "/home",
      name: "home",
      component: MiHome,
      meta: {
        index: 1
      }
    },
    {
      path: "/login",
      name: "login",
      component: MiLogin
    },
    {
      path: "/category",
      name: "category",
      component: MiCategory,
      meta: {
        index: 2
      }
    },
    {
      path: "/cart",
      name: "cart",
      component: MiCart,
      meta: {
        index: 3
      }
    },
    {
      path: "/user",
      name: "user",
      component: MiUser,
      meta: {
        index: 4
      }
    },
    {
      path: "/commodity/list/:id",
      name: "list",
      component: MiList
    },
    {
      path: "/commodity/detail/:id",
      name: "detail",
      component: MiDetail
    },
    {
      path: "/user/set",
      name: "set",
      component: MiSetting,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/address/list",
      name: "addressList",
      component: MiAddressList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/address/edit",
      name: "addressEdit",
      component: MiAddressEdit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/order/checkout",
      name: "orderCheckout",
      component: OrderCheckout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/order/list",
      name: "orderList",
      component: OrderList,
      meta: {
        // requiresAuth: true
      }
    },
    {
      path: "/order/view/:id",
      name: "orderView",
      component: OrderView
    }
  ]
});
