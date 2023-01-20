<script setup>
import { useOrdersStore } from '~/store/orders';
const ordersStore = useOrdersStore();
// orders only use in this page, so we can fetch orders here
ordersStore.fetchOrders();
</script>
<template>
  <!-- ClientOnly 避免 [Vue warn]: Hydration node mismatch -->
  <ClientOnly>
    <div class="flex items-stretch">
      <AdminSidebar />
      <section class="flex min-h-screen grow flex-col overflow-hidden">
        <!-- <FrontendNavbar /> -->
        <div class="grow bg-gray-50">
          <slot></slot>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>
