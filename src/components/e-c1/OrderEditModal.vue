<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" @click="close"></div>
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10 overflow-hidden">

            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 class="text-lg font-bold text-gray-900">Edit Order</h3>
                <button @click="close" class="text-gray-400 hover:text-gray-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="p-6">
                <form @submit.prevent="save" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select v-model="formData.status"
                            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 bg-no-repeat focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="Check">Check</option>
                            <option value="Confirming">Confirming</option>
                            <option value="Shipping">Shipping</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" v-model="formData.fullName"
                            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input type="text" v-model="formData.phone"
                            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input type="text" v-model="formData.city"
                            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>

                    <div class="flex justify-end gap-3 mt-6">
                        <button type="button" @click="close"
                            class="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg transition font-medium">Cancel</button>
                        <button type="submit"
                            class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-200">Save
                            Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    isOpen: Boolean,
    order: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['close', 'save'])

const formData = ref({})

// Watch functionality to copy prop to local state when modal opens
watch(() => props.order, (newOrder) => {
    formData.value = { ...newOrder }
}, { immediate: true })

const close = () => {
    emit('close')
}

const save = () => {
    emit('save', formData.value)
}
</script>
