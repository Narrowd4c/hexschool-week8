<script setup>
import { register } from 'swiper/element/bundle'
import { ref, onMounted } from 'vue'

register()

const swiperEl = ref(null)

const goNext = () => {
  swiperEl.value.swiper.slideNext()
}

const goPrev = () => {
  swiperEl.value.swiper.slidePrev()
}
onMounted(() => {
  Object.assign(swiperEl.value, {
    slidesPerView: 1
  })
})
</script>

<template>
  <div
    class="-mt-[104px] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-500 via-primary-900 via-40% to-primary-900"
  >
    <div class="h-full bg-[url('/images/carousel.png')] bg-[length:50%_100%] bg-no-repeat">
      <div class="h-full [backdrop-filter:blur(4px)]">
        <div class="container pb-[52px] pt-40">
          <div class="border-b border-white pb-4">
            <div class="h-4 bg-gradient-to-r from-primary-500 to-primary-900"></div>
            <h2 class="text-5xl leading-normal tracking-[1em] text-white">什麼是<br />ALPHABOX+</h2>
          </div>
          <div class="flex items-center pt-8">
            <div class="w-1/12 max-w-[180px]">
              <button @click="goPrev" class="w-full">
                <img
                  class="w-full rotate-180"
                  src="/images/line_end_arrow_notch.svg"
                  alt="slideBackIcon"
                />
              </button>
            </div>

            <swiper-container
              ref="swiperEl"
              speed="1000"
              loop="true"
              space-between="24"
              autoplay-delay="2000"
              effect="cube"
              autoplay-disable-on-interaction="false"
              allowTouchMove="true"
              class="w-2/3 text-white"
            >
              <swiper-slide
                ><div
                  class="mx-auto bg-[url(/images/carousel.png)] bg-cover bg-center bg-no-repeat py-40"
                >
                  <div class="pe-10 text-right [text-shadow:0_2px_3px_rgba(0,0,0,1)]">
                    <p class="pb-4 font-shrikhand text-8xl">01</p>
                    <p class="-mr-8 text-3xl font-bold tracking-[32px]">立體投影技術</p>
                    <p class="font-bold">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide
                ><div
                  class="mx-auto bg-[url(/images/universe_surfing.jpeg)] bg-cover bg-center bg-no-repeat py-40"
                >
                  <div class="pe-10 text-right [text-shadow:0_2px_3px_rgba(0,0,0,1)]">
                    <p class="pb-4 font-shrikhand text-8xl">02</p>
                    <p class="-mr-8 text-3xl font-bold tracking-[32px]">立體投影技術</p>
                    <p class="font-bold">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper-container>
            <div class="w-1/12 max-w-[180px]">
              <button @click="goNext" class="w-full">
                <img class="w-full" src="/images/line_end_arrow_notch.svg" alt="slideNextIcon" />
              </button>
            </div>
          </div>
          <div class="mt-8 h-4 bg-gradient-to-r from-primary-900 to-primary-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
