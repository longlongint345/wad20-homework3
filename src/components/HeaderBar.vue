<template>

  <div id="headerBar">
    <div class="logo-container">
      <img src="../assets/Images/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search"><button type="button">Search</button>
    </div>
    <div class="avatar-container">
    </div>
  </div>

</template>

<script>
export default {
name: "HeaderBar"
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

</style>