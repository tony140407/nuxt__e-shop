<template>
    <!-- ClientOnly 避免 [Vue warn]: Hydration node mismatch -->
    <ClientOnly>
        <section class="overflow-hidden">
            <FrontendNavbar />
            <slot></slot>
            <FrontendFooter />
        </section>
    </ClientOnly>
</template>
