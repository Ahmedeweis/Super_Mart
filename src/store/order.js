import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
    const orders = ref([])

    function createOrder(orderData) {
        const newOrder = {
            id: '#' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
            date: new Date().toLocaleDateString(),
            status: 'Check', // Initial status based on image
            ...orderData
        }
        orders.value.unshift(newOrder) // Add to top
        return newOrder
    }

    function deleteOrder(id) {
        orders.value = orders.value.filter(o => o.id !== id)
    }

    function updateOrder(id, updatedData) {
        const index = orders.value.findIndex(o => o.id === id)
        if (index !== -1) {
            orders.value[index] = { ...orders.value[index], ...updatedData }
        }
    }

    return { orders, createOrder, deleteOrder, updateOrder }
}, {
    persist: true
})
