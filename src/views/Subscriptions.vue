<template>
  <div>
    <ul class="w-full h-screen pt-14 pb-16 overflow-y-scroll">
      <li v-for="(sub, index) in subscriptions" :key="index">
        <div class="flex">
          <img
            class="w-7 h-7 rounded-full"
            :src="sub.icon_img == '' ? getDefaultIcon : sub.icon_img"
            alt=""
          />
          <p>{{ sub.display_name_prefixed }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import loader from "../scripts/postLoader";

export default {
  data() {
    return {
      subscriptions: [],
    };
  },
  mounted() {
    this.loadSubscriptions();
  },
  methods: {
    async loadSubscriptions() {
      let ret = await loader.getSubscriptions();
      this.subscriptions = ret;
    },
  },
  computed: {
    getDefaultIcon() {
      let defaultIco = require("../assets/default_subreddit_icon.png");
      return defaultIco;
    },
  },
};
</script>