<script setup>
import CircleText from './icons/IconCircleText.vue'
</script>
<template>
    <div
    class="border-t border-white bg-[url('/images/home_background.png')] bg-cover bg-center bg-no-repeat"
  >
    <main class="container">
      <div class="flex gap-x-8 py-14 text-white">
        <p class="w-1/4 self-end border-b border-white pb-2 text-white">
          最新消息！新版本 v15.4 釋出，搶先體驗！
        </p>
        <div
          class="relative w-1/2 after:absolute after:left-1/2 after:top-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white after:content-['']"
        >
          <CircleText
            pathId="banner"
            :width="190"
            :spacing="24"
            class="mx-auto animate-[spin_20s_linear_infinite]"
          ></CircleText>
        </div>
        <div class="flex w-1/4 flex-col">
          <p class="border-t border-white pt-1">ALPHABOX+ STUDIO</p>
          <p class="mt-auto opacity-50">Copyright © 2023 Hexschool.</p>
        </div>
      </div>
      <ul
        class="relative z-10 flex gap-x-8 [&_img:hover]:shadow-[0_0px_16px_8px_rgba(--tw-shadow-color)] [&_img:hover]:shadow-primary-500"
      >
        <li class="w-1/4">
          <RouterLink to="/"><img class="h-full" src="/images/diane.png" alt="" /></RouterLink>
        </li>
        <li class="w-1/2 text-white">
          <h2 class="text-justify text-3xl font-medium -tracking-widest [text-align-last:justify]">
            A L P H A B O X +
          </h2>
          <p class="text-center tracking-[0.5em]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
          <div class="flex gap-x-8 pt-6">
            <RouterLink to="/"><img src="/images/felix.png" alt="" /></RouterLink
            ><RouterLink to="/"><img src="/images/karina.png" alt="" /></RouterLink>
          </div>
        </li>
        <li class="w-1/4">
          <RouterLink to="/"><img class="h-full" src="/images/vito.png" alt="" /></RouterLink>
        </li>
      </ul>
    </main>
  </div>

</template>