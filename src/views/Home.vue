<template>
  <div>
    <div class="w-full h-screen overflow-y-scroll">
      <post-card
        v-for="(post, index) in posts"
        :post="post"
        :key="index"
      ></post-card>
    </div>
  </div>
</template>

<script>
import postCard from "../components/postCard.vue";
import loader from "../scripts/postLoader.js";

export default {
  components: {
    postCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    // request new posts and populate on mounted
    const response = await loader.initialialize(10);
    this.posts = response;
    console.log(response);
  },
};
</script>

