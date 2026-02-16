<template>
    <div class="min-h-screen bg-gray-50 py-8 lg:py-12">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <div>
                    <h1 class="text-2xl font-bold text-gray-900">Recent Orders</h1>
                    <p class="text-gray-500 text-sm mt-1">Manage and track your recent purchases.</p>
                </div>
                <router-link to="/"
                    class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    Back to Shop
                </router-link>
            </div>

            <OrderViewModal :isOpen="isViewModalOpen" :order="selectedOrder" @close="closeModals" />
            <OrderEditModal :isOpen="isEditModalOpen" :order="selectedOrder" @close="closeModals"
                @save="handleSaveOrder" />

            <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                                <th class="p-4 font-medium">Order Id</th>
                                <th class="p-4 font-medium">Country</th>
                                <th class="p-4 font-medium">Date</th>
                                <th class="p-4 font-medium">Name</th>
                                <th class="p-4 font-medium">Total</th>
                                <th class="p-4 font-medium">Status</th>
                                <th class="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-50">
                            <tr v-if="orderStore.orders.length === 0">
                                <td colspan="7" class="p-8 text-center text-gray-500">
                                    No orders found. <router-link to="/" class="text-blue-600 hover:underline">Start
                                        shopping</router-link>
                                </td>
                            </tr>
                            <tr v-for="order in orderStore.orders" :key="order.id"
                                class="hover:bg-gray-50 transition group">
                                <td class="p-4">
                                    <span class="font-bold text-gray-700">{{ order.id }}</span>
                                </td>
                                <td class="p-4">
                                    <div class="font-bold text-gray-900">{{ order.country || 'N/A' }}</div>
                                    <div class="text-xs text-gray-400">{{ order.city || 'City' }}</div>
                                </td>
                                <td class="p-4">
                                    <div class="font-medium text-gray-900">{{ order.date }}</div>
                                    <div class="text-xs text-gray-400">Paid</div>
                                </td>
                                <td class="p-4">
                                    <div class="font-bold text-gray-900">{{ order.fullName || 'Guest' }}</div>
                                    <div class="text-xs text-gray-400">{{ order.phone || 'No phone' }}</div>
                                </td>
                                <td class="p-4 font-bold text-gray-900">
                                    {{ order.total }} EG
                                </td>
                                <td class="p-4">
                                    <span :class="[
                                        'px-3 py-1 rounded-full text-xs font-medium',
                                        getStatusColor(order.status)
                                    ]">
                                        {{ order.status }}
                                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <button @click="openViewModal(order)"
                                            class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                            title="View Details">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        <button @click="openEditModal(order)"
                                            class="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition"
                                            title="Edit Order">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                        <button @click="deleteOrder(order.id)"
                                            class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                            title="Delete Order">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useOrderStore } from '../store/order'
import OrderViewModal from '../components/e-c1/OrderViewModal.vue'
import OrderEditModal from '../components/e-c1/OrderEditModal.vue'

const orderStore = useOrderStore()

const isViewModalOpen = ref(false)
const isEditModalOpen = ref(false)
const selectedOrder = ref({})

const openViewModal = (order) => {
    selectedOrder.value = order
    isViewModalOpen.value = true
}

const openEditModal = (order) => {
    selectedOrder.value = order
    isEditModalOpen.value = true
}

const closeModals = () => {
    isViewModalOpen.value = false
    isEditModalOpen.value = false
}

const handleSaveOrder = (updatedOrder) => {
    orderStore.updateOrder(updatedOrder.id, updatedOrder)
    closeModals()
}

const deleteOrder = (id) => {
    if (confirm('Are you sure you want to delete this order?')) {
        orderStore.deleteOrder(id)
    }
}

const getStatusColor = (status) => {
    switch (status) {
        case 'Check': return 'bg-yellow-100 text-yellow-700'
        case 'Confirming': return 'bg-green-100 text-green-700'
        case 'Shipping': return 'bg-purple-100 text-purple-700'
        case 'Delivered': return 'bg-blue-100 text-blue-700'
        case 'Cancelled': return 'bg-red-100 text-red-700'
        default: return 'bg-gray-100 text-gray-700'
    }
}
</script>
