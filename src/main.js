import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import PostsFeed from "@/components/PostsFeed";
import Browse from "@/components/Browse";
import Login from "@/components/Login";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: "/posts", component: PostsFeed},
  {path: "/browse", component: Browse},
  {path: "/", component: Login}
];

const store = new Vuex.Store({
  state: {
    posts: [],
    profile: {},
    profiles: []
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts;
    },
    setProfile(state, profile){
      state.profile = profile;
    },
    setProfiles(state, profiles){
      state.profiles = profiles;
    }
  },
  getters: {
    getPosts(state){
      return state.posts;
    },
    getProfile(state){
      return state.profile;
    },
    getProfiles(state){
      return state.profiles;
    }
  },
  actions: {
    fetchPosts({commit}){
      axios.get("https://private-anon-e3f0ec5c7e-wad20postit.apiary-mock.com/posts").then(response => {
        commit("setPosts", response.data);
      }).catch(error => {
        alert("Error! Cannot fetch posts data. " + error);
      });
    },
    fetchProfile({commit}){
      axios.get("https://private-anon-2fdffe98c5-wad20postit.apiary-mock.com/users/1").then(response => {
        commit("setProfile", response.data);
      }).catch(error => {
        alert("Error! Cannot fetch profile data. " + error);
      });
    },
    fetchProfiles({commit}){
      axios.get("https://private-anon-2fdffe98c5-wad20postit.apiary-mock.com/profiles").then(response => {
        commit("setProfiles", response.data);
      }).catch(error => {
        alert("Error! Cannot fetch profiles data. " + error);
      });
    }
  }
});

const router = new VueRouter({
  routes : routes
});

new Vue({
  router : router,
  store : store,
  render: h => h(App),
}).$mount('#app');
