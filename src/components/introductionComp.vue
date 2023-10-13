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
    class="-mt-[104px] h-screen bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-500 via-primary-900 via-40% to-primary-900"
  >
    <div class="relative h-full bg-[url('/images/carousel.png')] bg-[length:50%_100%] bg-no-repeat">
      <div class="h-full [backdrop-filter:blur(4px)]">
        <div class="absolute left-0 right-0 top-[136px]">
          <div class="container border-b border-white pb-4">
            <div class="h-4 bg-gradient-to-r from-primary-500 to-black"></div>
            <h2 class="text-5xl leading-normal tracking-[1em] text-white">什麼是<br />ALPHABOX+</h2>
          </div>
          <swiper-container
            ref="swiperEl"
            speed="500"
            loop="true"
            css-mode="true"
            allowTouchMove="true"
            class="container pt-8 text-white"
          >
            <div
              slot="container-start"
              class="absolute left-0 top-1/2 z-50 w-1/12 max-w-[180px] -translate-y-1/2"
            >
              <button @click="goPrev" class="w-full">
                <img
                  class="w-full rotate-180"
                  src="/images/line_end_arrow_notch.svg"
                  alt="slideBackIcon"
                />
              </button>
            </div>
            <div
              slot="container-end"
              class="absolute right-0 top-1/2 z-50 w-1/12 max-w-[180px] -translate-y-1/2"
            >
              <button @click="goNext" class="w-full">
                <img class="w-full" src="/images/line_end_arrow_notch.svg" alt="slideNextIcon" />
              </button>
            </div>
            <swiper-slide
              ><img class="mx-auto w-9/12" src="/images/carousel.png" alt="carousel"
            /></swiper-slide>
            <swiper-slide
              ><img class="mx-auto w-9/12" src="/images/carousel.png" alt="carousel"
            /></swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </div>
</template>
