<template>
  <section class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       <div v-for="(product, index) in products" :key="index" class="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition group text-center">
          <div class="relative mb-4 bg-gray-50 rounded-xl h-48 flex items-center justify-center overflow-hidden">
             <img :src="product.image" class="h-32 object-contain group-hover:scale-110 transition" />
          </div>
          <h3 class="font-medium text-gray-900 mb-1">{{ product.name }}</h3>
          <div class="text-red-500 font-bold text-sm mb-3">{{ product.price }}</div>
          <button class="text-xs font-bold text-red-500 border-b border-red-500 pb-0.5 opacity-0 group-hover:opacity-100 transition">Add to Cart</button>
       </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { name: 'Olive Oil', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=Olive+Oil' },
  { name: 'Ray Ban Sunglasses', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=Sunglasses' },
  { name: 'Wireless Headphone', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=Headphone' },
  { name: 'Sweet Shirt', price: '$75.00', image: 'https://placehold.co/200x200/transparent/png?text=Shirt' },
]
</script>
