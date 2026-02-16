<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" @click="close"></div>
        <div
            class="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]">

            <!-- Header -->
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <div>
                    <h3 class="text-lg font-bold text-gray-900">Order Details</h3>
                    <p class="text-sm text-gray-500">ID: <span class="font-mono text-gray-700">{{ order.id }}</span></p>
                </div>
                <button @click="close"
                    class="text-gray-400 hover:text-gray-600 transition bg-white p-2 rounded-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Content -->
            <div class="p-6 overflow-y-auto custom-scrollbar">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <!-- Customer Info -->
                    <div class="bg-gray-50 p-4 rounded-xl">
                        <h4 class="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Customer Info</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-500">Name:</span>
                                <span class="font-medium text-gray-900">{{ order.fullName }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-500">Email:</span>
                                <span class="font-medium text-gray-900">{{ order.email }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-500">Phone:</span>
                                <span class="font-medium text-gray-900">{{ order.phone }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Shipping Info -->
                    <div class="bg-gray-50 p-4 rounded-xl">
                        <h4 class="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Shipping Info</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-500">Country:</span>
                                <span class="font-medium text-gray-900">{{ order.country }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-500">City:</span>
                                <span class="font-medium text-gray-900">{{ order.city }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-500">Address:</span>
                                <span class="font-medium text-gray-900 text-right truncate w-40">{{ order.street
                                    }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Order Items -->
                <h4 class="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Order Items</h4>
                <div class="space-y-4 mb-6">
                    <div v-for="item in order.items" :key="item.id"
                        class="flex gap-4 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                        <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img :src="getImageUrl(item)" :alt="item.title" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-grow">
                            <h5 class="text-sm font-bold text-gray-900 line-clamp-1">{{ item.title }}</h5>
                            <p class="text-xs text-gray-500">{{ item.selectedSize }} / {{ item.selectedColor }}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-sm font-bold text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}
                            </p>
                            <p class="text-xs text-gray-500">Qty: {{ item.quantity }}</p>
                        </div>
                    </div>
                </div>

                <!-- Total -->
                <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span class="font-bold text-gray-900">Total Amount</span>
                    <span class="text-xl font-bold text-blue-600">${{ order.total }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: Boolean,
    order: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['close'])

const close = () => {
    emit('close')
}

const getImageUrl = (product) => {
    const folder = product.imageFolder || 'may_like'
    const index = product.imageIndex || product.id
    return new URL(`../../assets/imgs/${folder}/${index}.png`, import.meta.url).href
}
</script>
