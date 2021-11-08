<template>
  <div>
    <!-- accepts post data as props -->
    <!-- post title -->
    <!-- post description -->
    <!-- post media content -->
    <!-- post context options -->
    <!-- post options -->
    <div class="post">
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