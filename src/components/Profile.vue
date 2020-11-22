<template>
  <div class="profile">
    <img :src="avatar" alt="Profile author">
    <h2> {{firstname | capitalize}} {{lastname | capitalize}} </h2>
    <button type="button" name="follow" class="follow-button" @click="toggleFollowButton" v-bind:class="{followed : isFollowed}">
      {{ followButtonText }}</button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    firstname : String,
    lastname : String,
    avatar : String
  },
  data : function (){
    return {
      isFollowed: false
    }
  },
  computed : {
    followButtonText(){
      if (this.isFollowed) return "Followed";
      else return "Follow";
    }
  },

  methods : {
    toggleFollowButton(){
        this.isFollowed = !this.isFollowed;
    }
  }

}
</script>

<style scoped>
  .profile img{
      width: 75px;
      height: 75px;
      border-radius: 100%;
      object-fit: cover;
      object-position: top;
      margin: 5px;
  }

  .profile h2{
      font-size: 16px;
  }

  .follow-button{
      background-color: #82008f;
  }

  .follow-button.followed{
      background-color: #ffffff;
      border: 1px solid #82008f;
      color: #82008f;
  }
</style>