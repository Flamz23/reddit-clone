<template>
  <div class="main-space-container bg-gray-900">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-space-container {
  position: fixed;
  width: 100%;
  height: 100%;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  padding: 0;
  margin: 0;
}
</style>