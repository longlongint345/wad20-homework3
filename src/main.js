import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PostsFeed from "@/components/PostsFeed";
import Browse from "@/components/Browse";
import Login from "@/components/Login";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: "/posts", component: PostsFeed},
  {path: "/browse", component: Browse},
  {path: "/login", component: Login},
  {path: "/", component: Login}
];

const router = new VueRouter({
  routes : routes
});

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app');
