<script setup>
import CircleText from './icons/IconCircleText.vue'
</script>
<template>
    <div
    class="bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-500 via-primary-900 via-40% to-primary-900"
  >
    <div class="container pt-40 pb-10 text-white">
      <h2 class="pb-10 text-5xl font-bold ">最新消息</h2>
      <ul
        class="grid grid-cols-2 border-y border-white font-bold  [&>*]:px-4 [&>*]:py-10"
      >
        <li class="col-span-2 border-b border-white">
          <p class="flex items-center pb-2 font-bold gap-x-4"><img class="w-6" src="/images/emergency.svg" alt="emergency">2023.06.30</p>
          <h3 class="pb-4 text-xl">產品升級公告</h3>
          <div class="flex">
            <p class="w-9/12">
              榮幸地宣布，ALPHABOX+
              已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！
            </p>
            <a href="#" class="ms-auto w-1/12"
              ><img
                class="w-full max-w-[196px]"
                src="/images/line_end_arrow_notch.svg"
                alt="read more"
            /></a>
          </div>
        </li>
        <li class="border-r border-white">
          <p class="flex items-center pb-2 font-bold gap-x-4"><img class="w-6" src="/images/emergency.svg" alt="emergency">2023.06.30</p>
          <h3 class="pb-4 text-xl">限時優惠活動</h3>
          <p>
            為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+
            的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！
          </p>
          <a href="#" class="block max-w-[90px]"
            ><img class="mt-3" src="/images/line_end_arrow_notch.svg" alt="read more"
          /></a>
        </li>
        <li>
          <p class="flex items-center pb-2 font-bold gap-x-4"><img class="w-6" src="/images/emergency.svg" alt="emergency">2023.04.18</p>
          <h3 class="pb-4 text-xl">新功能上線</h3>
          <p>
            為使您的 ALPHABOX+
            更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。
          </p>
          <a href="#" class="block max-w-[90px]"
            ><img class="mt-3" src="/images/line_end_arrow_notch.svg" alt="read more"
          /></a>
        </li>
      </ul>
      <a
        href="#"
        class="group relative mx-auto mt-[76px] block w-fit after:absolute after:left-1/2 after:top-1/2 after:h-5 after:w-fit after:-translate-x-1/2 after:-translate-y-1/2 after:text-white after:content-['查看更多']"
      >
        <CircleText
          pathId="info"
          :width="132"
          :spacing="16"
          class="mx-auto animate-[spin_20s_linear_infinite] [animation-fill-mode:forwards;] [animation-play-state:paused;] group-hover:[animation-play-state:running;]"
        ></CircleText>
      </a>
      <p class="text-end pt-24">為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料</p>
    </div>
  </div>
</template>