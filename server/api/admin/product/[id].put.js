import { useAuthStore } from '~/store/auth';
export default defineEventHandler(async (event) => {
  const authStore = useAuthStore();
  console.log(authStore.token);
  const { id } = event.context.params;
  const data = await readBody(event);
  const response = await $fetch(
    `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/admin/product/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: authStore.token,
      },
    }
  );
  return response;
});
