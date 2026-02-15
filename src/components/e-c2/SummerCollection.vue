<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Summer Collections</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       <div v-for="(product, index) in products" :key="index" class="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition group text-center">
          <div class="relative mb-4 bg-gray-50 rounded-xl h-48 flex items-center justify-center overflow-hidden">
             <img :src="product.image" class="h-32 object-contain group-hover:scale-110 transition" />
          </div>
          <div class="flex justify-center mb-1">
             <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
          </div>
          <h3 class="font-medium text-gray-900 mb-1">{{ product.name }}</h3>
          <div class="text-red-500 font-bold text-sm mb-3">{{ product.price }}</div>
          <button class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">Add to Cart</button>
       </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { name: 'Diamond Necklace', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=Shorts' },
  { name: 'Diamond Necklace', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=Dress' },
  { name: 'Diamond Necklace', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=TShirt' },
  { name: 'Diamond Necklace', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=BlackT' },
]
</script>
