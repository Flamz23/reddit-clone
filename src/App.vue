<template>
  <div class="main-container">
    <!-- appbar-search -->
    <!-- app-sideber -->
    <mainContentView></mainContentView>
    <navBar></navBar>
    <!-- handles routing  between pages -->
    <!-- settings -->
    <!-- buy-coins -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import mainContentView from "./components/mainContentView.vue";
import navBar from "./components/navBar.vue";

export default {
  name: "App",
  components: {
    mainContentView,
    navBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5;
  margin-top: 60px;
}
</style>
