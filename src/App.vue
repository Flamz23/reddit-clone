<template>
  <div class="main-container">
    <app-bar></app-bar>
    <!-- app-sideber -->
    <main-content-view></main-content-view>
    <nav-bar></nav-bar>
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
import appBar from "./components/appBar.vue";

export default {
  name: "App",
  components: {
    mainContentView,
    navBar,
    appBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5;
  margin-top: 60px; */

  font-family: "Roboto", sans-serif;

  margin: 0;
  padding: 0;
  top: 0;
  left: 0;

  color: white;
}
</style>
