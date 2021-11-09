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
@font-face {
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans"), local("OpenSans"),
    url("https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2")
      format("woff2");
}

html,
body {
  font-family: Product Sans;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5;
  margin-top: 60px; */

  font-family: Product Sans;

  margin: 0;
  padding: 0;
  top: 0;
  left: 0;

  color: white;
}
</style>
