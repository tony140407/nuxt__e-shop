import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const { $swal } = useNuxtApp();
  const cart = ref([]);
  const currentCartStep = ref(0);
  const userProfile = reactive({
    name: '',
    email: '',
    tel: '',
    address: '',
    massage: '',
  });

  async function getCart() {
    await useFetch('/api/cart').then(
      (res) => {
        const data = res.data.value;
        const error = res.error.value;
        if (error) {
          // dealing error
          console.error(error);
        } else {
          setCart(data.data.carts);
        }
      },
      (error) => {
        console.log('exception...');
        console.log(error);
      }
    );
  }
  async function addCart(data) {
    await useFetch('/api/cart', {
      method: 'post',
      body: data,
    }).then(
      (res) => {
        const data = res.data.value;
        const error = res.error.value;
        $swal.fire({
          title: error ? '失敗' : '成功',
          text: error ? '發生了點錯誤' : data.message,
          icon: error ? 'error' : 'success',
          timer: 800,
        });
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
  async function deleteCart(id) {
    await useFetch(`/api/cart/${id}`, {
      method: 'delete',
    }).then(
      (res) => {
        const data = res.data.value;
        const error = res.error.value;
        getCart();
        $swal.fire({
          title: error ? '失敗' : '成功',
          text: error ? '發生了點錯誤' : data.message,
          icon: error ? 'error' : 'success',
          timer: 800,
        });
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
  async function updateCart(id, data) {
    await useFetch(`/api/cart/${id}`, {
      method: 'PUT',
      body: data,
    }).then(
      (res) => {
        const data = res.data.value;
        const error = res.error.value;
        $swal.fire({
          title: error ? '失敗' : '成功',
          text: error ? '發生了點錯誤' : data.message,
          icon: error ? 'error' : 'success',
          timer: 800,
        });
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
  function setCart(_cart) {
    cart.value = _cart;
    if (cart.value.length > 0) {
      setCurrentCartStep(1);
    }
  }
  function setCurrentCartStep(step) {
    currentCartStep.value = step;
  }
  function setUserProfile(property, value) {
    userProfile[property] = value;
    console.log(userProfile);
  }
  async function sendOrder() {
    const { name, tel, email, address, message } = userProfile;
    const postData = {
      data: {
        user: {
          name,
          tel,
          email,
          address,
        },
        message,
      },
    };
    await useFetch('/api/order', {
      method: 'post',
      body: postData,
    }).then(
      (res) => {
        currentCartStep.value += 1;
        const data = res.data.value;
        const error = res.error.value;
        $swal.fire({
          title: !data.success ? '失敗' : '成功',
          text: !data.success ? '發生了點錯誤' : data.message,
          icon: !data.success ? 'error' : 'success',
          //   timer: 800,
        });
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

  return {
    cart,
    currentCartStep,
    userProfile,
    getCart,
    addCart,
    deleteCart,
    updateCart,
    setCurrentCartStep,
    setUserProfile,
    sendOrder,
  };
});
