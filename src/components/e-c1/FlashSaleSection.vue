<template>
  <section class="container mx-auto px-4 py-6 md:py-8">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
      <div class="flex items-center gap-4">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900">Flash Sale</h2>
        <div
          class="bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded flex items-center gap-2">
          Ends in <span>{{ formattedTime }}</span>
        </div>
      </div>
      <a href="#" class="text-blue-600 font-medium hover:underline text-sm">See More</a>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
      <router-link :to="'/product/' + product.id" v-for="product in flashSaleProducts" :key="product.id"
        class="bg-white p-3 md:p-4 rounded-xl border border-gray-100 hover:shadow-lg transition group block">
        <div class="relative mb-3">
          <img :src="getImageUrl(product.imageIndex)" :alt="product.title"
            class="w-full aspect-square object-cover rounded-lg bg-gray-100" />
          <div class="absolute top-2 left-2 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded">-{{
            product.discount }}%</div>
        </div>
        <h3 class="text-xs md:text-sm font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-primary transition">
          {{ product.title }}</h3>
        <p class="text-[10px] text-gray-500 mb-2 line-clamp-1">{{ product.description }}</p>
        <div class="flex flex-wrap items-baseline gap-2 mb-1">
          <span class="text-sm md:text-lg font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
          <span class="text-[10px] md:text-xs text-gray-400 line-through">${{ product.originalPrice.toFixed(2) }}</span>
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
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { products } from '../../data/products'

const flashSaleProducts = computed(() => products.filter(p => p.isFlashSale))

const timeInSeconds = ref(5 * 3600 + 17 * 60 + 47)
let timer = null

const formattedTime = computed(() => {
  const h = Math.floor(timeInSeconds.value / 3600).toString().padStart(2, '0')
  const m = Math.floor((timeInSeconds.value % 3600) / 60).toString().padStart(2, '0')
  const s = (timeInSeconds.value % 60).toString().padStart(2, '0')
  return `${h} : ${m} : ${s}`
})

onMounted(() => {
  timer = setInterval(() => {
    if (timeInSeconds.value > 0) {
      timeInSeconds.value--
    } else {
      clearInterval(timer)
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})



const getImageUrl = (i) => {
  return new URL(`../../assets/imgs/Flash_sale/${i}.png`, import.meta.url).href
}
</script>
