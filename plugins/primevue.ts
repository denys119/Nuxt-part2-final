import { defineNuxtPlugin } from "#app";
import Primevue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Primevue, { ripples: true });
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("BaseButton", Button);
})