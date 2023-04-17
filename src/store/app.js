// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      jwt: ""
    }
  },
  actions: {
    set(jwtString){
      this.jwt = jwtString
      console.log(this.jwt)
    },
  },
})
