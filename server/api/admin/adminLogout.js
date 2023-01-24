import { useAuthStore } from '~/store/auth';
export default defineEventHandler(async (event) => {
  const authStore = useAuthStore();
  const data = await readBody(event);
  const response = await $fetch(`${process.env.VUE_APP_baseUrl}/logout`, {
    method: 'POST',
    headers: {
      Authorization: authStore.token,
    },
  });
  return response;
});
