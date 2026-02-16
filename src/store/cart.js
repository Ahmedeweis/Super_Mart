import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useToast } from "vue-toastification";

export const useCartStore = defineStore('cart', () => {
    const items = ref([])
    const toast = useToast();

    const cartTotal = computed(() => {
        return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
    })

    const cartItemCount = computed(() => {
        return items.value.reduce((total, item) => total + item.quantity, 0)
    })

    function addToCart(product, quantity = 1, size = null, color = null) {
        const existingItem = items.value.find(item =>
            item.id === product.id &&
            item.selectedSize === size &&
            item.selectedColor === color
        )

        if (existingItem) {
            existingItem.quantity += quantity
        } else {
            items.value.push({
                ...product,
                quantity,
                selectedSize: size,
                selectedColor: color
            })
        }

        toast.success("Item added to cart!", {
            timeout: 2000
        });
    }

    function removeFromCart(itemId, size, color) {
        const index = items.value.findIndex(item =>
            item.id === itemId &&
            item.selectedSize === size &&
            item.selectedColor === color
        )
        if (index > -1) {
            items.value.splice(index, 1)
            toast.info("Item removed from cart");
        }
    }

    function updateQuantity(item, newQuantity) {
        if (newQuantity > 0) {
            item.quantity = newQuantity
        }
    }

    function clearCart() {
        items.value = []
        discountCode.value = null
        discountAmount.value = 0
    }

    const discountCode = ref(null)
    const discountAmount = ref(0)

    function applyDiscount(code) {
        if (code.toUpperCase() === 'SAVE10') {
            discountCode.value = 'SAVE10'
            discountAmount.value = cartTotal.value * 0.10
            toast.success("Discount applied: 10% Off");
            return true
        } else if (code.toUpperCase() === 'SUPERMART') {
            discountCode.value = 'SUPERMART'
            discountAmount.value = 20
            toast.success("Discount applied: $20 Off");
            return true
        } else {
            toast.error("Invalid discount code");
            return false
        }
    }

    const finalTotal = computed(() => {
        return Math.max(0, cartTotal.value - discountAmount.value)
    })

    return {
        items,
        cartTotal,
        cartItemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        discountCode,
        discountAmount,
        applyDiscount,
        finalTotal
    }
})
