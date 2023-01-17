<template>
    <!-- ClientOnly 避免 [Vue warn]: Hydration node mismatch -->
    <ClientOnly>
        <section class="flex min-h-screen flex-col overflow-hidden">
            <FrontendNavbar />
            <div class="flex grow items-center justify-center">
                <slot></slot>
            </div>
        </section>
    </ClientOnly>
</template>
