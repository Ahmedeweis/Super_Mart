<template>
  <section class="container mx-auto px-4 py-6 md:py-8">
    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Products you may like</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
      <router-link :to="`/product/${product.id}`" v-for="product in displayedProducts" :key="product.id"
        class="bg-white rounded-xl overflow-hidden hover:shadow-xl transition group cursor-pointer border border-gray-100 block">
        <div class="relative">
          <img :src="getImageUrl(product.imageIndex)" :alt="product.title" class="w-full aspect-square object-cover" />
          <div
            class="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition">
            <svg class="w-4 h-4 text-gray-400 hover:text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div v-if="product.discount"
            class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            {{ product.discount }}%</div>
        </div>
        <div class="p-3 md:p-4">
          <h3
            class="text-xs md:text-sm font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-primary transition">
            {{ product.title }}</h3>
          <div class="flex flex-wrap items-baseline gap-2 mb-2">
            <span class="text-sm md:text-lg font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
            <span v-if="product.originalPrice" class="text-[10px] md:text-xs text-gray-400 line-through">${{
              product.originalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex items-center gap-1 text-[10px] md:text-xs text-gray-500">
            <svg class="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span>{{ product.rating }}</span>
            <span>|</span>
            <span>Sold {{ product.sold }}</span>
          </div>
          <div class="flex items-center gap-1 mt-2 text-[10px] text-gray-400">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
              </path>
            </svg>
            Jakarta
          </div>
        </div>
      </router-link>
    </div>
    <div v-if="visibleCount < recommendedProducts.length" class="flex justify-center mt-6 md:mt-8">
      <button @click="loadMore"
        class="px-6 cursor-pointer md:px-8 py-2 md:py-3 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50 hover:text-primary hover:border-primary transition text-sm md:text-base">Load
        More</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { products as recommendedProducts } from '../../data/products'



const visibleCount = ref(10)

const displayedProducts = computed(() => {
  return recommendedProducts.slice(0, visibleCount.value)
})

const loadMore = () => {
  visibleCount.value = recommendedProducts.length
}

const getImageUrl = (i) => {
  return new URL(`../../assets/imgs/may_like/${i}.png`, import.meta.url).href
}
</script>
