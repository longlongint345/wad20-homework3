<template>
  <div id="browse">
    <HeaderBar/>
    <section class="main-container">
      <div v-for="(profile, index) in profiles" :key="index" class="test">
        <Profile v-bind:firstname="profile.firstname" v-bind:lastname="profile.lastname" v-bind:avatar="profile.avatar"/>
        
      </div>
      
    </section>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import Profile from "@/components/Profile";
export default {
  name: "Browse",
  components: {
    HeaderBar,
    Profile
  },
  computed: {
    profiles : function(){
      return this.$store.getters.getProfiles;
    }
  },
  mounted() {
    this.$store.dispatch("fetchProfiles");
  }
}
</script>

<style scoped>

  #browse{
    height: 100%;
  }
</style>