import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => {
    return {
      counter: 2
    }
  },
  actions: {
    resetCounter() {
      this.counter = 0;
    },
    incrementCounter() {
      this.counter++;
    }
  },
  getters: {
    getDoubleCounter: state => state.counter * 2
  }
})