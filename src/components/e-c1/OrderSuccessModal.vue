<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-white/20 backdrop-blur-md transition-opacity" @click="close"></div>

        <!-- Modal -->
        <div
            class="bg-white rounded-3xl shadow-xl max-w-sm w-full relative z-10 transform transition-all scale-100 p-8 text-center">
            <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="mb-6 relative">
                <!-- Success Illustration (Simplified CSS/SVG representation of the reference) -->
                <div
                    class="w-32 h-32 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-teal-500 z-10" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Decorative blobs -->
                    <div class="absolute top-2 right-4 w-4 h-4 bg-teal-200 rounded-full opacity-50"></div>
                    <div class="absolute bottom-4 left-6 w-6 h-6 bg-teal-200 rounded-full opacity-50"></div>
                </div>

                <h2 class="text-2xl font-bold text-teal-500 mb-2">Payment Successful!</h2>
                <p class="text-gray-500 text-sm">Thank you for purchasing.<br>Your payment was successfull.</p>
            </div>

            <button @click="handleAction"
                class="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-xl transition shadow-lg shadow-teal-100 cursor-pointer">
                See Details
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close', 'action'])

const close = () => {
    emit('close')
}

const handleAction = () => {
    emit('action')
}
</script>
