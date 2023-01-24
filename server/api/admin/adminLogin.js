export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const response = await $fetch(`${process.env.VUE_APP_baseUrl}/admin/signin`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response;
});
