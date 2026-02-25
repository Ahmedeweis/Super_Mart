<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
        <TopBar />
        <Header />
        <main class="flex-grow min-h-[70vh]">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>

            </router-view>

        </main>

    </div>
</template>

<script setup>
import TopBar from './components/e-c1/TopBar.vue'
import Header from './components/e-c1/Header.vue'

</script>

<style>
@import url(assets/css/normalize.css);

/* Smooth transition for router-view */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
