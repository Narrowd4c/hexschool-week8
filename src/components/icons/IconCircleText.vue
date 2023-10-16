<script setup>
import { ref } from 'vue';
const props = defineProps({
  spacing: Number,
  width: Number,
  pathId:String
})
const styleObj = ref({
  'letter-spacing': props.spacing,
  'transform':`translate(0, ${props.width/2}px)`
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width=width
    :height=width
    style="overflow: visible"
  >
    <path :id="pathId" :d="`M 0 0 A 1 1 0 0 0 ${width} 0 A 1 1 0 0 0 0 0 Z`" fill="none" />

    <text fill="white"  :style="styleObj">
      <textPath :xlink:href="`#${pathId}`">ALPHABOX+ALPHABOX+</textPath>
    </text>
  </svg>
</template>

<style>

</style>
