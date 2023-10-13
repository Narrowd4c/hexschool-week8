<script>
export default {
  data() {
    return {
      n: this.$options.data,
      count: 0
    }
  },
  methods: {
    pt() {
      this.count++
    }
  },
}
</script>
<template>
  <div>count: {{count}}</div>
  <button @click="pt">Click</button>
</template>
