import { defineStore } from 'pinia';
export const useOrdersStore = defineStore('orders', () => {
  const orders = ref([]);
  async function fetchOrders() {
    await useFetch('/api/order').then(
      (res) => {
        const data = res.data.value;
        const error = res.error.value;
        if (error) {
          // dealing error
          console.error(error);
        } else {
          setOrders(data.orders);
        }
      },
      (error) => {
        console.log('exception...');
        console.log(error);
      }
    );
  }
  function setOrders(data) {
    orders.value = data;
  }

  return { orders, fetchOrders };
});
