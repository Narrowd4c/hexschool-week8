<script setup>
import { register } from 'swiper/element/bundle'
import { ref, watch } from 'vue'

register()

const swiperEl = ref(null)

const go = () => {
  swiperEl.value.swiper.slideNext()
}

const goback = () => {
  swiperEl.value.swiper.slidePrev()
  console.log(swiperEl.value)
}
</script>

<template>
  <div
    class="from-primary-500 via-primary-900 to-primary-900 -mt-[104px] h-screen bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] via-40%"
  >
    <div class="relative h-full bg-[url('/images/carousel.png')] bg-[length:50%_100%] bg-no-repeat">
      <div class="h-full [backdrop-filter:blur(4px)]">
        <div class="absolute left-0 right-0 top-[136px]">
          <div class="container border-b border-white pb-4">
            <div class="from-primary-500 h-4 bg-gradient-to-r to-black"></div>
            <h2 class="text-5xl leading-normal tracking-[1em] text-white">什麼是<br />ALPHABOX+</h2>
          </div>
          <swiper-container
            ref="swiperEl"
            slides-per-view="1"
            speed="500"
            loop="true"
            css-mode="true"
            class="container pt-8 text-white"
          >
            <div
              slot="container-start"
              class="absolute left-0 right-0 top-1/2 z-50 -translate-y-1/2"
            >
              <button id="goPrev" @click="go" class="hover:text-primary-500">
                <img class="rotate-180" src="/images/line_end_arrow_notch.svg" alt="" />
              </button>
              <button id="goNext" @click="goback" class="hover:text-primary-500 absolute right-0">
                <img class="" src="/images/line_end_arrow_notch.svg" alt="" />
              </button>
            </div>

            <swiper-slide
              ><img class="mx-auto w-2/3" src="/images/carousel.png" alt="carousel"
            /></swiper-slide>
            <swiper-slide
              ><img class="mx-auto w-2/3" src="/images/carousel.png" alt="carousel"
            /></swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </div>
</template>
