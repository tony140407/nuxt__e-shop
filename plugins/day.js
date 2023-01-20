import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(relativeTime);
  nuxtApp.provide('dayjs', dayjs);
});
