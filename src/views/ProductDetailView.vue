<template>
    <div class="pb-12">
        <div class="container mx-auto px-4 py-8">
            <!-- Breadcrumbs -->
            <div class="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
                <router-link to="/" class="hover:text-blue-600">Home</router-link>
                <span class="mx-2">&gt;</span>
                <span class="text-gray-900 truncate">{{ product?.title || 'Product Not Found' }}</span>
            </div>

            <div v-if="product" class="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <!-- Product Image (Left) -->
                    <div class="flex flex-col gap-4">
                        <div class="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                            <img :src="getImageUrl(product.imageIndex)" :alt="product.title"
                                class="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                            <div v-if="product.discount"
                                class="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                {{ product.discount }}% OFF
                            </div>
                        </div>
                    </div>

                    <!-- Product Details (Right) -->
                    <div class="flex flex-col">
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{{ product.title }}</h1>

                        <div class="flex items-center gap-4 mb-6">
                            <div class="text-2xl font-bold text-blue-600">${{ product.price.toFixed(2) }}</div>
                            <div v-if="product.originalPrice" class="text-lg text-gray-400 line-through">${{
                                product.originalPrice.toFixed(2) }}</div>
                            <div class="flex items-center gap-1 text-sm text-gray-500 ml-auto">
                                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                                <span class="font-medium text-gray-900">{{ product.rating }}</span>
                                <span class="mx-1">|</span>
                                <span>{{ product.sold }} Sold</span>
                            </div>
                        </div>

                        <p class="text-gray-600 leading-relaxed mb-8">{{ product.description }}</p>

                        <div class="border-t border-gray-100 my-6"></div>

                        <!-- Options -->
                        <div class="space-y-6">
                            <!-- Sizes -->
                            <div v-if="product.sizes">
                                <h3 class="text-sm font-bold text-gray-900 mb-3">Size: <span
                                        class="font-normal text-gray-500">{{ selectedSize }}</span></h3>
                                <div class="flex flex-wrap gap-3">
                                    <button v-for="size in product.sizes" :key="size" @click="selectedSize = size"
                                        :class="[
                                            'px-4 py-2 rounded-lg border text-sm font-medium transition cursor-pointer',
                                            selectedSize === size
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                        ]">
                                        {{ size }}
                                    </button>
                                </div>
                            </div>

                            <!-- Colors -->
                            <div v-if="product.colors">
                                <h3 class="text-sm font-bold text-gray-900 mb-3">Color: <span
                                        class="font-normal text-gray-500">{{ selectedColor }}</span></h3>
                                <div class="flex flex-wrap gap-3">
                                    <button v-for="color in product.colors" :key="color" @click="selectedColor = color"
                                        :class="[
                                            'px-4 py-2 rounded-lg border text-sm font-medium transition cursor-pointer',
                                            selectedColor === color
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                        ]">
                                        {{ color }}
                                    </button>
                                </div>
                            </div>

                            <!-- Quantity -->
                            <div>
                                <h3 class="text-sm font-bold text-gray-900 mb-3">Quantity</h3>
                                <div class="flex items-center w-max border border-gray-200 rounded-lg">
                                    <button @click="quantity > 1 ? quantity-- : null"
                                        class="px-4 py-2 hover:bg-gray-50 text-gray-600 transition disabled:opacity-50 cursor-pointer"
                                        :disabled="quantity <= 1">-</button>
                                    <span
                                        class="px-4 py-2 font-medium text-gray-900 border-x border-gray-200 min-w-[3rem] text-center">{{
                                            quantity }}</span>
                                    <button @click="quantity++"
                                        class="px-4 py-2 hover:bg-gray-50 text-gray-600 transition cursor-pointer">+</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex gap-4">
                            <button @click="cartStore.addToCart(product, quantity, selectedSize, selectedColor)"
                                class="flex-1 bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                Add to Cart
                            </button>
                            <button
                                class="bg-gray-100 text-gray-700 font-bold py-3.5 px-6 rounded-xl hover:bg-gray-200 transition cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div class="mt-6 flex flex-col gap-2 text-sm text-gray-500">
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Free shipping on orders over $100</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>30-day easy return policy</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div v-else class="text-center py-20">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
                <p class="text-gray-500 mb-6">The product you are looking for might have been removed or is unavailable.
                </p>
                <router-link to="/"
                    class="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition">Back
                    to Home</router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()

const route = useRoute()
const product = ref(null)
const selectedSize = ref('')
const selectedColor = ref('')
const quantity = ref(1)

const loadProduct = () => {
    const id = parseInt(route.params.id)
    product.value = products.find(p => p.id === id)

    if (product.value) {
        if (product.value.sizes && product.value.sizes.length > 0) {
            selectedSize.value = product.value.sizes[0]
        }
        if (product.value.colors && product.value.colors.length > 0) {
            selectedColor.value = product.value.colors[0]
        }
        quantity.value = 1
    }
}

onMounted(() => {
    loadProduct()
})

watch(() => route.params.id, () => {
    loadProduct()
})

const getImageUrl = (i) => {
    const folder = product.value?.imageFolder || 'may_like'
    return new URL(`../assets/imgs/${folder}/${i}.png`, import.meta.url).href
}
</script>
