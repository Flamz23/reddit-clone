<template>
  <div class="z-40 w-full fixed left-0 bottom-0">
    <div
      class="
        flex
        h-14
        m-2
        rounded-md
        items-center
        place-content-evenly
        bg-gray-800
        text-white
      "
    >
      <router-link to="/">
        <svg viewBox="0 0 24 24" width="32px" class="fill-current text-white">
          <path
            d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 
            3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
          />
        </svg>
      </router-link>
      <router-link to="/subscriptions">
        <svg viewBox="0 0 24 24" width="32px" class="fill-current text-white">
          <path
            d="M10,18h10c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H10c-0.55,0-1,0.45-1,1v0C9,17.55,9.45,18,10,18z M3,7L3,7 c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,
            1-1v0c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M10,13h10c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H10c-0.55,0-1,0.45-1,1v0C9,12.55,9.45,13,10,13z"
          />
        </svg>
      </router-link>
      <router-link to="/newPost">
        <svg viewBox="0 0 24 24" width="32px" class="fill-current text-white">
          <path
            d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
          />
        </svg>
      </router-link>
      <router-link to="/conversations">
        <svg viewBox="0 0 24 24" width="32px" class="fill-current text-white">
          <path
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"
          />
        </svg>
      </router-link>
      <router-link to="/notifications">
        <svg viewBox="0 0 24 24" width="32px" class="fill-current text-white">
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>