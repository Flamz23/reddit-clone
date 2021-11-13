<template>
  <div>
    <div class="w-full h-screen pt-14 pb-16 overflow-y-scroll">
      <post-card
        v-for="(post, index) in posts"
        :post="post"
        :key="index"
      ></post-card>
      <observer @intersect="intersected" />
    </div>
  </div>
</template>

<script>
import postCard from "../components/postCard.vue";
import observer from "../components/ObserverComponent.vue";
import loader from "../scripts/postLoader.js";

export default {
  components: {
    postCard,
    observer,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async intersected() {
      //obsevrvable component emits intersect and calls intersection on visible
      // append more posts on intersect event (https://vueschool.io/articles/vuejs-tutorials/build-an-infinite-scroll-component-using-intersection-observer-api/)
      const newPosts = await loader.initialialize(10);
      this.posts = [...this.posts, ...newPosts];
    },
  },
};
</script>

