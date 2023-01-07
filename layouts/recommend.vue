<template>
    <!-- ClientOnly 避免 [Vue warn]: Hydration node mismatch -->
    <ClientOnly>
        <section class="overflow-hidden flex flex-col min-h-screen">
            <FrontendNavbar />
            <div class="grow">
                <slot></slot>
            </div>
            <FrontendRecommend />
            <FrontendFooter />
        </section>
    </ClientOnly>
</template>
