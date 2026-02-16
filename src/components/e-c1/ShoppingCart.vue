<template>
    <div class="pb-12">
        <div class="container mx-auto px-4 py-8">
            <!-- Header -->
            <div class="flex items-center justify-between mb-8">
                <h1 class="text-2xl font-bold text-gray-900">Your Shopping Cart</h1>
                <router-link to="/" class="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                    &larr; Continue Shopping
                </router-link>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Cart Items List (Left Column) -->
                <div class="flex-grow space-y-4">
                    <div v-if="cartStore.items.length === 0" class="text-center py-12 bg-white rounded-xl shadow-sm">
                        <p class="text-gray-500 mb-4">Your cart is empty</p>
                        <router-link to="/"
                            class="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition">Start
                            Shopping</router-link>
                    </div>
                    <div v-else v-for="item in cartStore.items" :key="item.id + item.selectedSize + item.selectedColor"
                        class="bg-white rounded-xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition hover:shadow-md">
                        <!-- Product Image -->
                        <div class="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                            <img :src="getImageUrl(item.imageIndex)" :alt="item.title"
                                class="w-full h-full object-cover" />
                        </div>

                        <!-- Product Details -->
                        <div class="flex-grow">
                            <h3 class="text-lg font-bold text-gray-900 mb-1">{{ item.title }}</h3>
                            <p class="text-gray-500 text-sm mb-1" v-if="item.selectedSize || item.selectedColor">
                                <span v-if="item.selectedSize">Size: {{ item.selectedSize }}</span>
                                <span v-if="item.selectedSize && item.selectedColor" class="mx-2">|</span>
                                <span v-if="item.selectedColor">Color: {{ item.selectedColor }}</span>
                            </p>
                            <p class="text-gray-500 font-medium">${{ item.price.toFixed(2) }}</p>

                            <!-- Quantity Controls (Mobile) -->
                            <div class="mt-4 flex items-center gap-4 sm:hidden">
                                <div class="flex items-center border border-gray-200 rounded-lg">
                                    <button @click="cartStore.updateQuantity(item, item.quantity - 1)"
                                        class="px-3 py-1 hover:bg-gray-50 text-gray-600 transition disabled:opacity-50 cursor-pointer"
                                        :disabled="item.quantity <= 1">-</button>
                                    <span
                                        class="px-3 py-1 font-medium text-gray-900 border-x border-gray-200 min-w-[3rem] text-center">{{
                                            item.quantity }}</span>
                                    <button @click="cartStore.updateQuantity(item, item.quantity + 1)"
                                        class="px-3 py-1 hover:bg-gray-50 text-gray-600 transition cursor-pointer">+</button>
                                </div>
                                <button
                                    @click="cartStore.removeFromCart(item.id, item.selectedSize, item.selectedColor)"
                                    class="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Quantity Controls (Desktop) -->
                        <div class="hidden sm:flex items-center gap-6">
                            <div class="flex items-center border border-gray-200 rounded-lg">
                                <button @click="cartStore.updateQuantity(item, item.quantity - 1)"
                                    class="px-3 py-1 hover:bg-gray-50 text-gray-600 transition disabled:opacity-50 cursor-pointer"
                                    :disabled="item.quantity <= 1">-</button>
                                <span
                                    class="px-3 py-1 font-medium text-gray-900 border-x border-gray-200 min-w-[3rem] text-center">{{
                                        item.quantity }}</span>
                                <button @click="cartStore.updateQuantity(item, item.quantity + 1)"
                                    class="px-3 py-1 hover:bg-gray-50 text-gray-600 transition cursor-pointer">+</button>
                            </div>
                            <button @click="cartStore.removeFromCart(item.id, item.selectedSize, item.selectedColor)"
                                class="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition cursor-pointer"
                                title="Remove Item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Order Summary (Right Column) -->
                <div class="lg:w-[380px] flex-shrink-0 space-y-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h2 class="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                        <div class="space-y-4 mb-6">
                            <div class="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span class="font-bold text-gray-900">${{ cartStore.cartTotal.toFixed(2) }}</span>
                            </div>
                            <div class="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span class="font-bold text-green-500">Free</span>
                            </div>
                        </div>

                        <!-- Discount Code -->
                        <div class="mb-6 border-b border-gray-100 pb-6">
                            <div class="flex gap-2">
                                <input type="text" placeholder="Discount code" v-model="discountCodeInput"
                                    class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                                <button @click="handleApplyDiscount"
                                    class="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition text-sm cursor-pointer">Apply</button>
                            </div>
                            <p v-if="cartStore.discountCode" class="text-green-600 text-sm mt-2">
                                Code <strong>{{ cartStore.discountCode }}</strong> applied!
                            </p>
                        </div>

                        <div class="border-t border-gray-100 pt-4 mb-6">
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-gray-900">Total</span>
                                <span class="text-xl font-bold text-gray-900">${{ cartStore.finalTotal.toFixed(2)
                                    }}</span>
                            </div>
                        </div>

                        <div class="flex justify-between text-sm text-gray-600 mb-4"
                            v-if="cartStore.discountAmount > 0">
                            <span class="text-green-600">Discount</span>
                            <span class="font-bold text-green-600">-${{ cartStore.discountAmount.toFixed(2) }}</span>
                        </div>

                        <router-link to="/checkout"
                            class="block hovery w-full font-bold py-3 px-4 rounded-lg  transition text-white  cursor-pointer text-center"
                            style="background-color: blue;">
                            Proceed to Checkout
                        </router-link>
                    </div>

                    <!-- Trust Badges -->
                    <div class="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center text-center">
                        <div class="flex flex-col items-center gap-2">
                            <div class="text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-[10px] font-bold text-gray-900">Free Shipping</div>
                                <div class="text-[8px] text-gray-500">On orders over $100</div>
                            </div>
                        </div>
                        <div class="w-px h-8 bg-gray-100"></div>
                        <div class="flex flex-col items-center gap-2">
                            <div class="text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-[10px] font-bold text-gray-900">Easy Returns</div>
                                <div class="text-[8px] text-gray-500">30-day return policy</div>
                            </div>
                        </div>
                        <div class="w-px h-8 bg-gray-100"></div>
                        <div class="flex flex-col items-center gap-2">
                            <div class="text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-[10px] font-bold text-gray-900">Secure Payment</div>
                                <div class="text-[8px] text-gray-500">100% secure checkout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../../store/cart'

const cartStore = useCartStore()

const discountCodeInput = ref('')

const handleApplyDiscount = () => {
    if (discountCodeInput.value.trim()) {
        cartStore.applyDiscount(discountCodeInput.value)
    }
}

const getImageUrl = (i) => {
    return new URL(`../../assets/imgs/may_like/${i}.png`, import.meta.url).href
}
</script>
<style scoped>
.hovery {
    transition: 0.5s;
}

.hovery:hover {
    color: blue;
    background-color: white !important;
}
</style>
