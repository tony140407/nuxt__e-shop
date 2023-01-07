<template>
    <!-- ClientOnly 避免 [Vue warn]: Hydration node mismatch -->
    <ClientOnly>
        <section class="flex min-h-screen flex-col overflow-hidden">
            <FrontendNavbar />
            <div class="grow">
                <slot></slot>
            </div>
            <FrontendRecommend />
            <FrontendFooter />
        </section>
    </ClientOnly>
</template>
