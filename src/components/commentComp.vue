<script setup>
import { register } from 'swiper/element'
import { onMounted, ref } from 'vue'
register()
const swiperEl = ref(null)

const userComment = ref([
  {
    name: 'Zona',
    address: 'Taipei',
    article:
      'ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。',
    tag: 'ALPHABOX+ Dianne'
  },
  {
    name: 'Lin ',
    address: 'Chiayi',
    article:
      '非常推薦！它的畫面清晰度超高，真的讓我驚艷不已。而且它還可以和我互動，感覺就像是有個真實的朋友在身邊。',
    tag: 'ALPHABOX+ Felix'
  },
  {
    name: '云',
    address: 'Taipei',
    article:
      '我之前一直在找能陪伴我度過空虛時光的好夥伴，直到遇見 ALPHABOX+。它不僅僅是一個機器人，更像是一個真正的朋友，陪著我分享喜怒哀樂。真的很讚！',
    tag: 'ALPHABOX+ Dianne'
  },
  {
    name: 'Zichi',
    address: 'Kaohsiung',
    article:
      '讓我在忙碌的工作之餘，也能找到休閒的樂趣。它的互動功能非常有趣，讓我在短短的時間內就愛上了它。給它一百分！',
    tag: 'ALPHABOX+ Vito'
  }
])

const swiperParam = {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  slidesPerView: 2,
  breakpoints: {
    1200: {
      slidesPerView: 3
    }
  },
  spaceBetween: 24
}
onMounted(() => {
  Object.assign(swiperEl.value, swiperParam)
  swiperEl.value.initialize()
})

</script>
<template>
  <div
    class="relative overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,var(--tw-gradient-stops))] from-black  to-[#28085C] "
  >
    <div class="container pt-40 font-bold text-white">
      <div class="flex items-center">
        <h2 class="me-[214px] text-5xl">使用分享</h2>
        <p>展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
      </div>
      <p class="pb-10 pt-4">01 - 04</p>
      <img src="/images/emergency.svg" alt="emergency" />
    </div>
    <div class="overflow-x-hidden mt-6">
      <swiper-container
        ref="swiperEl"
        init="false"
        class="container [&>*:nth-of-type(even)]:bg-white [&>*:nth-of-type(even)]:[--color:black] [&>*:nth-of-type(odd)]:bg-primary-700 [&>*:nth-of-type(odd)]:[--color:white;]"
      >
        <swiper-slide v-for="({ name, address, article, tag }, i) in userComment" :key="name + i">
          <div class="flex h-[416px] flex-col p-10 text-[var(--color)]">
            <h3>{{ name }} ． {{ address }}</h3>
            <p class="mt-8">
              {{ article }}
            </p>
            <div class="mt-auto flex items-center gap-x-4">
              <div
                v-for="i in 2"
                :key="i"
                class="h-4 w-4 rounded-full bg-[var(--color)]"
                role="none"
              ></div>
              <p>{{ tag }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="container mt-12 ">
        <div class="flex items-center">
        <div class="w-2/3 pe-3">
          <div
            class="swiper-scrollbar h-1 bg-gray-500 [&_.swiper-scrollbar-drag]:h-full [&_.swiper-scrollbar-drag]:bg-white [&_.swiper-scrollbar-drag]:pe-3"
          ></div>
        </div>
        <div class="ms-6 font-bold text-white">SCROLL</div>
        </div>
        <p class="text-white mt-32 pb-10">若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。</p>
      </div>
      
    </div>
    <p class="select-none absolute -bottom-40 leading-none  text-[400px] font-shrikhand text-[rgba(255,255,255,0.04)]" aria-hidden="true">ALPHABOX+</p>
  </div>
</template>

<style scoped>
swiper-container::part(container) {
  overflow: visible;
  position: static;
}
</style>
