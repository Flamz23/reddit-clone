<template>
  <div>
    <!-- accepts post data as props -->
    <!-- post title -->
    <!-- post description -->
    <!-- post media content -->
    <!-- post context options -->
    <!-- post options -->
    <div class="mx-1.5 my-2 px-2 py-2 rounded-md bg-gray-500">
      <h2>{{ post.author }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>