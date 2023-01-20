<script setup>
import { useProductsStore } from '~/store/products';
const { fetchProducts } = useProductsStore();
await fetchProducts();

const { persistUser } = useFirebaseAuth();
persistUser();
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
