import { defineStore } from 'pinia'

export const useNote = defineStore('studentinfo',{
    state: () => ({
      studentinfo: [],
      id:0,
    }),
    actions: {
      add(name, signature, note) {
        this.studentinfo.push({ name, signature, note, id: this.id++ });
      },
    },
  })
  