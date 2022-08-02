import { defineStore } from 'pinia'

export const useNote = defineStore('studentinfo',{
    state: () => ({
      studentinfo: [],
      id:0,
    }),
    actions: {
      add(item) {
        this.studentinfo.push({ item, id: this.id++, completed: false });
      },
    },
  })
  