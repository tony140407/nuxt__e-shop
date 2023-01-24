import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({ auth: null, token: null }),
  actions: {
    setAuth(_user) {
      this.auth = _user;
    },
    async adminLogin(postData) {
      await useFetch('/api/admin/adminLogin', {
        method: 'post',
        body: postData,
      }).then(
        (res) => {
          const data = res.data.value;
          const error = res.error.value;
          if (data.success) {
            document.cookie = `hexToken=${data.token}; expires=${new Date(
              data.expired
            )}; path=/`;
            this.token = data.token;
            navigateTo('/');
            this.setAuth({
              username: postData.username,
              email: postData.username,
            });
          } else {
            alert(data.message);
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
    },
    async adminLogout() {
      await useFetch('/api/admin/adminLogout', {
        method: 'post',
      }).then(
        (res) => {
          const data = res.data.value;
          const error = res.error.value;
          if (data.success) {
            this.token = null;
            navigateTo('/');
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
    },
  },
  persist: true,
});
