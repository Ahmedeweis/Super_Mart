<template>
  <section class="container mx-auto px-4 py-6 md:py-8">
    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Products you may like</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
      <div v-for="product in recommendedProducts" :key="product.id"
        class="bg-white rounded-xl overflow-hidden hover:shadow-xl transition group cursor-pointer border border-gray-100">
        <div class="relative">
          <img :src="getImageUrl(product.id)" :alt="product.title" class="w-full aspect-square object-cover" />
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
      </div>
    </div>
    <div class="flex justify-center mt-6 md:mt-8">
      <button
        class="px-6 md:px-8 py-2 md:py-3 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50 hover:text-primary hover:border-primary transition text-sm md:text-base">Load
        More</button>
    </div>
  </section>
</template>

<script setup>
const recommendedProducts = [
  { id: 1, title: 'Summer Breeze Ultra-Soft Tee', price: 25.00, originalPrice: 35.00, discount: 28, rating: 4.8, sold: '1.5k' },
  { id: 2, title: 'Sunset Glow Eau De Parfum', price: 85.00, originalPrice: 120.00, discount: 29, rating: 4.9, sold: '800+' },
  { id: 3, title: 'Creative Flow Artist Essentials', price: 45.00, originalPrice: 60.00, discount: 25, rating: 4.7, sold: '2.1k' },
  { id: 4, title: 'Pure Sound Electric Series Guitar', price: 550.00, originalPrice: 750.00, discount: 26, rating: 5.0, sold: '300+' },
  { id: 5, title: 'Beauty Essentials Makeup Collection', price: 65.00, originalPrice: 90.00, discount: 27, rating: 4.8, sold: '1.1k' },
  { id: 6, title: 'Tech Key Pro Series Mechanical Keyboard', price: 120.00, originalPrice: 160.00, discount: 25, rating: 4.9, sold: '650+' },
  { id: 7, title: 'Precision Click Gaming Mouse', price: 45.00, originalPrice: 70.00, discount: 35, rating: 4.7, sold: '950+' },
  { id: 8, title: "Eve's Eala Gala Luxury Evening Wear", price: 220.00, originalPrice: 350.00, discount: 37, rating: 4.9, sold: '150+' },
  { id: 9, title: 'Smooth Shave Luxury Shaving Cream', price: 18.00, originalPrice: 25.00, discount: 28, rating: 4.8, sold: '3k+' },
  { id: 10, title: 'Active Gear Performance Tee', price: 28.00, originalPrice: 40.00, discount: 30, rating: 4.7, sold: '1.2k' },
  { id: 11, title: 'Urban Ease Modern Sherwal', price: 55.00, originalPrice: 85.00, discount: 35, rating: 4.6, sold: '500+' },
  { id: 12, title: 'Winter Bliss Cozy Fleece Hoodie', price: 48.00, originalPrice: 75.00, discount: 36, rating: 4.9, sold: '2.5k' },
]

const getImageUrl = (i) => {
  return new URL(`../../assets/imgs/may_like/${i}.png`, import.meta.url).href
}
</script>
