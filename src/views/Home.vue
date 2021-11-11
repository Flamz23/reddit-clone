<template>
  <div>
    <div class="scrolling-component" ref="scrollComponent">
      <postCard v-for="post in posts" :post="post" :key="post" />
    </div>
  </div>
</template>

<script>
import postCard from "../components/postCard.vue";
import getPosts from "../scripts/postLoader.js";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    postCard,
  },
  setup() {
    const posts = ref(getPosts(10));
    const scrollComponent = ref(null);

    const loadMorePosts = () => {
      let newPosts = getPosts(10);
      console.log(newPosts);
      posts.value.push(...newPosts);
    };

    const handleScroll = () => {
      let element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        loadMorePosts();
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      posts,
      scrollComponent,
    };
  },
};
</script>

<style>
/* .scrolling-component {
  overflow-y: scroll;
} */
</style>