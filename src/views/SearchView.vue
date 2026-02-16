<template>
    <div class="container mx-auto px-4 py-8">
        <div class="mb-8">
            <h1 class="text-2xl font-bold text-gray-900 mb-2">Search Results</h1>
            <p class="text-gray-500">Found {{ filteredProducts.length }} results for "<span
                    class="font-medium text-gray-900">{{ searchQuery }}</span>"</p>
        </div>

        <div v-if="filteredProducts.length > 0"
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            <router-link :to="'/product/' + product.id" v-for="product in filteredProducts" :key="product.id"
                class="bg-white rounded-xl overflow-hidden hover:shadow-xl transition group cursor-pointer border border-gray-100 block">
                <div class="relative">
                    <img :src="getImageUrl(product)" :alt="product.title"
                        class="w-full aspect-square object-cover bg-gray-50" />
                    <div v-if="product.discount"
                        class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {{ product.discount }}%</div>
                </div>
                <div class="p-4">
                    <h3 class="text-sm font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-primary transition">
                        {{ product.title }}</h3>
                    <div class="flex flex-wrap items-baseline gap-2 mb-2">
                        <span class="text-lg font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
                        <span v-if="product.originalPrice" class="text-xs text-gray-400 line-through">${{
                            product.originalPrice.toFixed(2) }}</span>
                    </div>
                    <div class="flex items-center gap-1 text-xs text-gray-500">
                        <svg class="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path
                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span>{{ product.rating }}</span>
                        <span class="mx-1">|</span>
                        <span>Sold {{ product.sold }}</span>
                    </div>
                </div>
            </router-link>
        </div>

        <div v-else class="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 class="text-lg font-bold text-gray-900 mb-2">No results found</h3>
            <p class="text-gray-500 mb-6">Try checking your spelling or use different keywords.</p>
            <router-link to="/"
                class="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                Browse All Products
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()
const searchQuery = computed(() => route.query.q || '')

const filteredProducts = computed(() => {
    if (!searchQuery.value) return products
    const query = searchQuery.value.toLowerCase()
    return products.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    )
})

const getImageUrl = (product) => {
    // Handle both old 'may_like' and new 'Flash_sale' folders
    const folder = product.imageFolder || 'may_like'
    // Use visible index or id if index missing
    const index = product.imageIndex || product.id
    return new URL(`../assets/imgs/${folder}/${index}.png`, import.meta.url).href
}
</script>
