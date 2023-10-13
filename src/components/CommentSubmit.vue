<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const id = 100
const postUrl = `http://localhost:3000/teacher/post/${id}`

async function postData(url = '', data = {}) {
  // Default options are marked with *
  let response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  response = await response.json()
  console.log(response)
  return response // parses JSON response into native JavaScript objects
}

const { values, errors, defineInputBinds } = useForm({
  validationSchema: yup.object({
    date: yup
      .date()
      .default(() => new Date())
      .required(),
    studentName: yup.string().required(),
    comment: yup.string().required()
  })
})
const studentName = defineInputBinds('studentName')
const date = defineInputBinds('date')
const comment = defineInputBinds('comment')

function submit() {
  if (Object.keys(errors.value).length == 0 && Object.keys(values).length != 0) {
    console.log('表單送出成功', values)
    postData(postUrl, values)
  } else {
    console.log('驗證錯誤', values, errors.value)
  }
}
</script>

<template>
  <div class="container border-2 py-10">
    <main class="flex gap-20">
      <form action="" class="w-1/2 [&>*]:mb-4 [&_label]:mb-2 [&_label]:block">
        <label for="studentName">學生</label>
        <p v-show="false">必填</p>
        <input
          class="w-full ring-2"
          v-bind="studentName"
          type="text"
          name="studentName"
          id="studentName"
        />

        <label for="date">上課日期</label>
        <input class="w-full ring-2" v-bind="date" type="date" name="date" id="date" required />

        <label for="comment">留言</label>
        <textarea
          class="w-full ring-2"
          v-bind="comment"
          type="text"
          name="comment"
          id="comment"
          required
        ></textarea>

        <button class="ms-auto block rounded-lg border-2 px-4 py-2" type="button" @click="submit">
          送出
        </button>
      </form>
    </main>
  </div>
</template>
