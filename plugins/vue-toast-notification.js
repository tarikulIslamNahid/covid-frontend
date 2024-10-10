import { defineNuxtPlugin } from 'nuxt/app';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueToast);
});
