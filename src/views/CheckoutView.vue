<template>
    <div class="min-h-screen bg-gray-50 py-8 lg:py-12">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                <!-- Left Column: Checkout Form -->
                <div class="space-y-8">
                    <!-- Contact Information -->
                    <div class="bg-white p-6 rounded-2xl shadow-sm">
                        <div class="flex justify-between items-center mb-6">
                            <h2 class="text-xl font-bold text-gray-900">Your details</h2>
                            <router-link to="/login" class="text-sm text-blue-600 hover:underline">Already have an
                                account? Log in</router-link>
                        </div>

                        <div class="space-y-4">
                            <div>
                                <input type="text" placeholder="Full Name *" v-model="formData.fullName"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="email" placeholder="Email *" v-model="formData.email"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                                <input type="tel" placeholder="Phone *" v-model="formData.phone"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                            </div>
                            <p class="text-xs text-gray-500">We will only use this if we need to contact you about your
                                order</p>
                        </div>
                    </div>

                    <!-- Shipping Address -->
                    <div class="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 class="text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>

                        <div class="space-y-4">
                            <div>
                                <select v-model="formData.country"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none text-gray-700">
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>Canada</option>
                                    <option>Australia</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder="Street address, house/building number *"
                                    v-model="formData.street"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                            </div>
                            <div>
                                <input type="text" placeholder="Apartment, suite, floor, unit, etc."
                                    v-model="formData.apartment"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input type="text" placeholder="City *" v-model="formData.city"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                                <div class="relative">
                                    <select v-model="formData.state"
                                        class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none text-gray-700">
                                        <option value="" disabled selected>State/Province/Region *</option>
                                        <option>California</option>
                                        <option>New York</option>
                                        <option>Texas</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </div>
                                </div>
                                <input type="text" placeholder="Postcode *" v-model="formData.postcode"
                                    class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                            </div>

                            <div class="flex items-start gap-3 mt-4">
                                <div class="flex items-center h-5">
                                    <input id="consent" type="checkbox"
                                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer" />
                                </div>
                                <label for="consent" class="text-xs text-gray-500 leading-relaxed cursor-pointer">
                                    I consent that SUPER MART may send me information and commercial communications,
                                    including by electronic means and prior profiling, on products, services and
                                    activities of Super Mart, including the Online Store, and its sponsors and
                                    collaborators. You can exercise your data protection rights at privacy@supermart.com
                                </label>
                            </div>
                        </div>

                        <div class="mt-8 flex justify-end">
                            <button @click="handleCheckout"
                                class="bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center gap-2 cursor-pointer">
                                Continue to shipping
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Order Summary -->
                <div class="space-y-6">
                    <div
                        class="flex items-center justify-between text-gray-900 border-b border-gray-200 pb-4 lg:hidden">
                        <h2 class="text-xl font-bold">Order Summary</h2>
                        <span class="text-blue-600 font-medium">{{ cartStore.cartItemCount }} Items</span>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow-sm sticky top-6">
                        <h2 class="text-xl font-bold text-gray-900 mb-6 hidden lg:block">Your cart <span
                                class="text-sm font-normal text-gray-500 float-right mt-1">{{ cartStore.cartItemCount }}
                                Item(s)</span></h2>

                        <div
                            class="bg-yellow-50 text-gray-600 text-xs p-4 rounded-lg mb-6 border border-yellow-100 flex gap-3">
                            <svg class="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Personalized items will require an additional 3-4 business days beyond the processing and
                                shipping option.</p>
                        </div>

                        <!-- Cart Items -->
                        <div class="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            <div v-for="item in cartStore.items" :key="item.id" class="flex gap-4">
                                <div class="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img :src="getImageUrl(item.imageIndex)" :alt="item.title"
                                        class="w-full h-full object-cover" />
                                    <span
                                        class="absolute top-0 right-0 bg-gray-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-bl-lg font-bold">{{
                                            item.quantity }}</span>
                                </div>
                                <div class="flex-grow">
                                    <h3 class="text-sm font-bold text-gray-900 mb-1 leading-snug">{{ item.title }}</h3>
                                    <div class="text-xs text-gray-500 mb-2 space-y-0.5">
                                        <p v-if="item.selectedSize">Size: {{ item.selectedSize }}</p>
                                        <p v-if="item.selectedColor">Color: {{ item.selectedColor }}</p>
                                    </div>
                                    <div class="font-bold text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Discount Code -->
                        <div class="border-t border-gray-100 py-6">
                            <!-- Discount Code -->
                            <div class="flex gap-2">
                                <input type="text" placeholder="Discount code" v-model="discountCodeInput"
                                    class="flex-grow bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                                <button @click="handleApplyDiscount"
                                    class="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                                    Apply
                                </button>
                            </div>
                            <p v-if="cartStore.discountCode" class="text-green-600 text-sm mt-2">
                                Code <strong>{{ cartStore.discountCode }}</strong> applied!
                            </p>

                            <!-- Totals -->
                            <div class="border-t border-gray-100 pt-6 space-y-3">
                                <div class="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span class="font-bold text-gray-900">${{ cartStore.cartTotal.toFixed(2) }}</span>
                                </div>
                                <div class="flex justify-between text-sm text-gray-600">
                                    <span>Taxes</span>
                                    <span class="text-xs text-gray-400">Calculated at next step</span>
                                </div>
                                <div class="flex justify-between text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <span class="text-xs text-gray-400">Calculated at next step</span>
                                </div>

                                <div class="flex justify-between text-sm text-gray-600"
                                    v-if="cartStore.discountAmount > 0">
                                    <span class="text-green-600">Discount</span>
                                    <span class="font-bold text-green-600">-${{ cartStore.discountAmount.toFixed(2)
                                    }}</span>
                                </div>

                                <div class="flex justify-between items-center pt-4 border-t border-gray-100 mt-4">
                                    <span class="text-xl font-bold text-gray-900">Total</span>
                                    <div class="text-right">
                                        <p class="text-xs text-gray-400 font-normal mb-1">USD</p>
                                        <p class="text-2xl font-bold text-gray-900">${{ cartStore.finalTotal.toFixed(2)
                                        }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <OrderSuccessModal :isOpen="showSuccessModal" @close="showSuccessModal = false" @action="goToOrders" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import { useOrderStore } from '../store/order'
import OrderSuccessModal from '../components/e-c1/OrderSuccessModal.vue'

const router = useRouter()
const cartStore = useCartStore()
const orderStore = useOrderStore()

const showSuccessModal = ref(false)
const discountCodeInput = ref('')

const handleApplyDiscount = () => {
    if (discountCodeInput.value.trim()) {
        cartStore.applyDiscount(discountCodeInput.value)
    }
}

const formData = ref({
    fullName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    street: '',
    apartment: '',
    city: '',
    state: '',
    postcode: ''
})

const handleCheckout = () => {
    // Basic validation
    if (!formData.value.fullName || !formData.value.email || !formData.value.phone) {
        alert('Please fill in all required fields')
        return
    }

    const orderData = {
        fullName: formData.value.fullName,
        email: formData.value.email,
        phone: formData.value.phone,
        country: formData.value.country,
        city: formData.value.city,
        total: cartStore.finalTotal.toFixed(2),
        items: [...cartStore.items]
    }

    orderStore.createOrder(orderData)
    // cartStore.clearCart() // Optional: Clear cart after order
    showSuccessModal.value = true
}

const goToOrders = () => {
    showSuccessModal.value = false
    router.push('/orders')
}

const getImageUrl = (i) => {
    return new URL(`../assets/imgs/may_like/${i}.png`, import.meta.url).href
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
}
</style>
