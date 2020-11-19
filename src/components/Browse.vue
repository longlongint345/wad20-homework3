<template>
  <div id="browse">
    <HeaderBar/>
    <section class="main-container">
    </section>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
export default {
  name: "Browse",
  components: {HeaderBar}
}
</script>

<style scoped>

  #browse{
    height: 100%;
  }

</style>