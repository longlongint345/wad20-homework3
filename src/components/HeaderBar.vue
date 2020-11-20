<template>

  <div id="headerBar">
    <div class="logo-container">
      <img src="../assets/Images/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search"><button type="button">Search</button>
    </div>
    <div class="avatar-container">
      <img class="avatar" :src="profile.avatar" @click="toggleDropdown">
      <div v-if="isDropdownVisible" class="dropdown-content">
        <p id="namefield">{{profile.firstname}} {{profile.lastname}}</p>
        <p id="emailField">{{profile.email}}</p>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/">Log out</router-link>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "HeaderBar",
  data : function (){
    return {
      isDropdownVisible: false
    }
  },
  computed : {
    profile : function (){
      return this.$store.getters.getProfile;
    }
  },
  methods: {
    toggleDropdown(){

      this.isDropdownVisible = !this.isDropdownVisible;
    }
  },
  mounted() {
    this.$store.dispatch("fetchProfile");
  }
}
</script>

<style scoped>

  #headerBar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;

    display: flex;
    background-color: #ffffff;
    align-items: center;
  }
  #headerBar div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
  }

  #headerBar div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
  }

  #headerBar div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
  }

  #headerBar div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  #headerBar div.avatar-container {
    margin-right: 15px;
    text-align: right;
  }

  #headerBar .dropdown-content {
    height: auto;
    position: absolute;
    background-color: white;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    right: 0;
    z-index: 1;
    text-align: left;
    padding: 0;
  }

  .dropdown-content a{
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    display: block;
    border-top: 1px solid #f1f1f1;
  }
  .dropdown-content p{
    padding-left: 10px;
    padding-right: 10px;
  }
  #namefield{
    margin-bottom: 2px;
  }
  #emailField{
    margin-top: 0px;
  }

</style>