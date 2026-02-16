<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800">
        <TopBar />
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
import TopBar from './components/e-c1/TopBar.vue'
import Header from './components/e-c1/Header.vue'
import Footer from './components/e-c1/Footer.vue'
</script>

<style>
@import url(assets/css/normalize.css);
</style>
