<template>
  <div>
    <h1>
      I'm a counter component
    </h1>
    <p>
      {{ counter }}
    </p>
    <button @click="increment">
      Increment
    </button>
    <button @click="decrement">
      Decrement
    </button>
    <p>
      I'm the counter from store {{ main.counter }}
    </p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
const { counter, increment, decrement } = useCounter();
const main = useCounterStore();
</script>