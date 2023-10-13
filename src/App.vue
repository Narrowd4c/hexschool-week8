<script setup>
import { RouterLink, RouterView } from 'vue-router'
import iconSubScribe from './components/icons/IconSubscribe.vue'
</script>

<template>
  <div class="bg-primary-500">
    <header class="container flex max-w-7xl items-center justify-between py-4 text-white">
      <RouterLink to="/"><h1 class="font-shrikhand text-3xl">ALPHABOX+</h1></RouterLink>
      <ul class="flex items-center font-medium lg:gap-10">
        <RouterLink to="/">產品</RouterLink>
        <RouterLink to="/">關於我們</RouterLink>
        <RouterLink to="/">最新消息</RouterLink>
        <RouterLink to="/">FAQ</RouterLink>
        <RouterLink to="/">聯絡我們</RouterLink>
      </ul>
      <ul class="flex items-center font-medium">
        <li class="me-6"><a href="#"> 註冊</a></li>
        <li class="me-8"><a href="#"> 登入</a></li>
        <li>
          <a
            href="#"
            class="flex items-center gap-1 rounded bg-white px-4 py-2 font-medium text-black"
            ><iconSubScribe />訂閱</a
          >
        </li>
      </ul>
    </header>
  </div>
  <RouterView />
</template>

<style></style>
