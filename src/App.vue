<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex bg-white text-white p-4 w-full justify-between gap-5">
    <!-- <div class="z-10 "> -->
    <div class="flex w-12 h-12 items-center justify-center">
      <img src="../src/assets/vuejs.png" alt="logo-vue" />
    </div>
    <nav>
      <ul class="flex gap-7">
        <li
          class="hover:scale-95 text-[#3FB984] hover:text-[#3FB984] hover:rounded-[5px_5px_5px_5px] hover:py-2 hover:px-3 py-2 px-3"
        >
          <RouterLink
            to="/"
            active-class="bg-[#3FB984] rounded-[5px_5px_5px_5px] py-2 px-3 text-white"
            >Home</RouterLink
          >
        </li>
        <li
          class="hover:scale-95 text-[#3FB984] hover:text-[#3FB984] hover:rounded-[5px_5px_5px_5px] hover:py-2 hover:px-3 py-2 px-3"
        >
          <RouterLink
            to="/register"
            active-class="bg-[#3FB984] rounded-[5px_5px_5px_5px] py-2 px-3 text-white"
            >Register</RouterLink
          >
        </li>
        <li
          class="hover:scale-95 text-[#3FB984] hover:text-[#3FB984] hover:rounded-[5px_5px_5px_5px] hover:py-2 hover:px-3 py-2 px-3"
        >
          <RouterLink
            to="/login"
            active-class="bg-[#3FB984] rounded-[5px_5px_5px_5px] py-2 px-3 text-white"
            >Login</RouterLink
          >
        </li>
      </ul>
    </nav>
    <!-- </div> -->
  </header>
  <hr class="text-[#3FB984] border" />

  <RouterView />
</template>
