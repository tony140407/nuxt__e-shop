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
