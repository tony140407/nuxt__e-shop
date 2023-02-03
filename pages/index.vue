<script setup>
definePageMeta({
    title: 'Wardrobe | 首頁',
    layout: 'default',
})
</script>
<template>
    <section>
        <FrontendHomePageBanner />
        <FrontendHomePageIntro />
        <LazyFrontendHomePageScrollProduct />
    </section>
</template>
