// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const id = 100
const getUrl = `http://localhost:3000/teacher/get/${id}`

export const useTeacherStore = defineStore('teacher', {
  state: () => ({ teacher: {} }),
  getters: {
    teacherName(state) {
      return state.teacher
    }
  },
  actions: {
    async getData() {
      let res = await fetch(getUrl)
      res = await res.json()
      res.students
      this.teacher = res
    }
  }
})
