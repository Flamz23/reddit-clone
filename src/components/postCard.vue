<template>
  <div>
    <!-- accepts post data as props -->
    <!-- post description -->
    <!-- post media content -->
    <!-- post context options -->

    <!-- header -->
    <div class="mx-1.5 my-2 px-3 py-2 rounded-md bg-gray-700">
      <div class="flex my-1.5">
        <!-- subreddit icon -->
        <div>
          <img
            class="w-10 h-10 mr-2 rounded-full"
            :src="subredditicon_img"
            alt=""
          />
        </div>
        <span>
          <!-- post subreddit -->
          <p class="text-sm font-semibold">
            {{ post.subreddit_name_prefixed }}
          </p>
          <!-- post author -->
          <span class="flex text-sm font-light">
            <p>Posted by u/</p>
            <p>{{ post.author.name }}</p>
          </span>
        </span>
        <!-- post saved -->
        <div v-if="post.saved">
          <svg viewBox="0 0 24 24" width="24px" class="fill-current">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10v12.97z"
            />
            <path d="M5 19.97l5-2.15 5 2.15V7H5z" opacity=".3" />
          </svg>
        </div>
      </div>

      <!-- post title -->
      <h2 class="text-lg font-semibold">{{ post.title }}</h2>
      <p>{{ post.content }}</p>

      <!-- footer -->
      <div class="flex mt-1 items-center place-content-between">
        <div class="flex items-center">
          <!-- upvote -->
          <svg
            viewBox="0 0 24 24"
            width="24px"
            class="fill-current text-red-500 transform -rotate-90"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 8V6.41c0-.89 1.08-1.34 1.71-.71l5.59 5.59c.39.39.39 1.02 0 1.41l-5.59 5.59c-.63.63-1.71.19-1.71-.7V16H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h7z"
            />
          </svg>
          <p class="px-1">{{ concatScore }}</p>
          <!-- downvote -->
          <svg
            viewBox="0 0 24 24"
            width="24px"
            class="fill-current text-blue-500 transform rotate-90"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 8V6.41c0-.89 1.08-1.34 1.71-.71l5.59 5.59c.39.39.39 1.02 0 1.41l-5.59 5.59c-.63.63-1.71.19-1.71-.7V16H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h7z"
            />
          </svg>
        </div>

        <!-- comments -->
        <div class="flex items-center">
          <svg viewBox="0 0 24 24" width="24px" class="fill-current">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15 11V4H4v8.17L5.17 11H6z" opacity=".3" />
            <path
              d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17zM22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z"
            />
          </svg>
          <p class="px-1">{{ concatCommentNumber }}</p>
        </div>

        <!-- share -->
        <div class="flex items-center">
          <svg viewBox="0 0 24 24" width="24px" class="fill-current">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
            />
          </svg>
          <p class="px-1">Share</p>
        </div>

        <!-- award post -->
        <div class="flex items-center">
          <svg viewBox="0 0 24 24" width="24px" class="fill-current">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M4 17h16v2H4zm13-6.17L15.38 12 13 8.76 12 7.4l-1 1.36L8.62 12 7 10.83 9.08 8H4v6h16V8h-5.08z"
              opacity=".3"
            />
            <path
              d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"
            />
          </svg>
          <p class="px-1">Award</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      subredditicon_img: "",
    };
  },
  props: {
    post: Object,
  },
  mounted() {
    this.getSubredditIcon();
  },
  methods: {
    async getSubredditIcon() {
      let ret = axios
        .get(
          `https://www.reddit.com/${this.post.subreddit_name_prefixed}/about.json`
        )
        .then((res) => {
          return res.data.data.icon_img;
        });
      this.subredditicon_img = await ret;
    },
  },
  computed: {
    concatScore() {
      let originalNumber = this.post.score;
      if (originalNumber >= 1000) {
        return `${(originalNumber / 1000).toFixed(1)}k`;
      } else return originalNumber;
    },
    concatCommentNumber() {
      let originalNumber = this.post.num_comments;
      if (originalNumber >= 1000) {
        return `${(originalNumber / 1000).toFixed(1)}k`;
      } else return originalNumber;
    },
  },
};
</script>