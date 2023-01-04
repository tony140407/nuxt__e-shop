<script setup>
// import { useCounterStore } from '~/store'
// const counter = useCounterStore()
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
</script>

<template>
    <NuxtPage />
</template>
