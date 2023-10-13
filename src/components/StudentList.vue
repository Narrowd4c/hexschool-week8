<script setup>
import { useTeacherStore } from '@/stores/teacher'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue';
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useTeacherStore()
const { teacher } = storeToRefs(store)
const { getData } = store
onBeforeMount(() => getData())

function st(str) { 
  if (str.length > 30) { 
    return `${str.slice(0, 30)} ....`
  }
  return str
}
</script>
<template>
  <div class="container my-10">
    <div class="container">
    <h3 class="my-10 text-2xl">
      老師: <span class="ms-4">{{ teacher.name }}</span>
    </h3>
  </div>
    <section class="mx-auto max-h-[70dvh]  ">
      <ul class="flex -mx-2 flex-wrap gap-y-4">
        <li class="w-1/3 px-2 flex flex-grow " v-for="student in teacher.students" :key="student">
          <div class="w-full p-4 border border-black">
          <p>學生: {{ student.studentName }}</p>
          <p>日期: {{ student.date.slice(0, 10) }}</p>
          <div>
            <h3>留言:</h3>
            <p class="break-all">{{ st(student.comment) }}</p>
          </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
