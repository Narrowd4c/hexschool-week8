<script setup>
import BannerComp from '../components/bannerComp.vue'
import IntroductionComp from '../components/introductionComp.vue'
import NewsComp from '../components/newsComp.vue'
import CommentComp from '../components/commentComp.vue'
import IconSubscribe from '../components/icons/IconSubscribe.vue'
import { ref } from 'vue'
const email = ref('')
const comments = ref('')
</script>

<template>
  <BannerComp></BannerComp>
  <IntroductionComp></IntroductionComp>
  <NewsComp></NewsComp>
  <CommentComp></CommentComp>
  <div class="bg-primary-800">
    <div class="container flex py-36 text-white">
      <section class="w-1/2">
        <h2 class="text-5xl font-bold leading-none">聯絡我們</h2>
        <div class="mt-8 flex" aria-hidden="true">
          <div class="h-3 w-3 rounded-full bg-white"></div>
          <div class="ms-4 h-3 w-32 rounded-2xl bg-white"></div>
        </div>
        <p class="mt-14">讓科技成為您的最佳夥伴<br />立即體驗神奇功能並享限時優惠！</p>
      </section>
      <section class="w-1/2">
        <img class="mb-6" src="/images/emergency.svg" alt="icon" role="none" />
        <div class="relative mb-4">
          <input
            id="email"
            type="email"
            v-model="email"
            class=" peer block w-full bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-black focus:outline-none"
            placeholder=""
          />
          <label
            for="email"
            class="absolute left-2.5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary-600"
            >EMAIL</label
          >
        </div>
        <div class="relative mb-6">
          <textarea v-model="comments" id="comments" class="peer block w-full bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-black focus:outline-none" placeholder=""></textarea>
          <label for="comments" class="absolute left-2.5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary-600">COMMENTS</label>
        </div>
        <button class="flex gap-1 ms-auto w-2/3 py-2 justify-center items-center bg-primary-500"><IconSubscribe class="fill-white"></IconSubscribe><span>送出</span></button>
      </section>
    </div>
  </div>
</template>
<style></style>
