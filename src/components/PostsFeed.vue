<template>
  <div id="postsFeed">
    <HeaderBar/>
    <section class="main-container">
    </section>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
export default {
  name: "PostsFeed",
  components: {
    HeaderBar
  }
}
</script>

<style scoped>


  #postsFeed{
    height: 100%;
  }

</style>