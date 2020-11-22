<template>
  <div id="postsFeed">
    <HeaderBar/>
    <section class="main-container">
      <div v-for="(post, index) in posts" :key="index">
        <Post v-bind:author="post.author" v-bind:createTime="post.createTime" v-bind:text="post.text" v-bind:media="post.media" v-bind:likes="post.likes"/>
      </div>

    </section>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import Post from "@/components/Post";
export default {
  name: "PostsFeed",
  components: {
    Post,
    HeaderBar
  },
  computed: {
    posts : function(){
      return this.$store.getters.getPosts;
    }
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  }
}
</script>

<style scoped>


  #postsFeed{
    height: 100%;
  }

</style>