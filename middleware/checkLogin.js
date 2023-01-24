import { useAuthStore } from '~/store/auth';
export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  if (process.client) {
    const { user } = useFirebaseAuth();
    if (!user.value) {
      return navigateTo('/login');
    }

    if (user.value.email === config.public.ADMIN_MAIL) {
      await useFetch(`/api/admin/checkLogin`, {
        method: 'POST',
      }).then(
        (res) => {
          const data = res.data.value;
          const error = res.error.value;
          if (!data?.success) {
            return navigateTo('/login');
          }
          if (error) {
            // dealing error
            console.error(error);
          }
        },
        (error) => {
          console.log('exception...');
          console.log(error);
        }
      );
    }
  }
});
