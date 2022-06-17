<template>
  <div>
    <base-counter />
  <h1>
    Plugins
  </h1>
    <input-text />
    <base-button label="Success" class="p-button-success" />
    <i class="pi pi-check"></i>
  </div>
    <h1>
      Server API
    </h1>
    {{ data }}
    <ul>
      <li v-for="product in data.products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
    <div v-for="mountain in data" :key="mountain.title">
      <h1>
        {{ mountain.title }}
      </h1>
      <p>
        {{ mountain.description }}
      </p>
      <img :src="mountain.image" :alt="mountain.title">
    <h1>
      State Management using Pinia
    </h1>
    <button @click="main.incrementCounter">
      {{ main.counter }}
    </button>
    <button @click="main.resetCounter">
      {{ main.counter }}
    </button>
    <p>
      Double counter {{ main.getDoubleCounter }}
    </p>
    <base-counter />
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
const main = useCounterStore();
const userName = useCookie('username');
userName.value = "Denis";
userName.value = null;
// const { data } = await useFetch(() => '/api/product');
// const { data } = await useFetch(() => '/api/product?productId=1');
// const { data } = await useFetch(() => '/api/product', {
//  method: 'POST',
//  body: {
//    id: 3,
//    name: 'Product3'
//  }
// })
// https://api.nuxtjs.dev/mountains
const { data } = await useAsyncData('mountains', () => $fetch('https://api.nuxtjs.dev/mountains'));
console.log(data);
</script>
