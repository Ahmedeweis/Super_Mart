<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
      <h2 class="text-2xl font-bold text-gray-900">New Arrivals</h2>
      <div class="flex gap-6 text-sm font-medium text-gray-500">
         <button class="text-orange-500 border-b-2 border-orange-500 pb-1">ALL</button>
         <button class="hover:text-orange-500 transition">Groceries</button>
         <button class="hover:text-orange-500 transition">Women</button>
         <button class="hover:text-orange-500 transition">Electronics</button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
       <div v-for="(product, index) in products" :key="index" class="bg-white p-4 rounded-xl hover:shadow-lg transition group border border-transparent hover:border-gray-100">
          <div class="relative mb-4 h-40 flex items-center justify-center">
             <div class="absolute top-0 left-0 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">10%</div>
             <img :src="product.image" class="h-32 object-contain group-hover:scale-110 transition" />
          </div>
          <div class="flex mb-2">
             <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
             <span class="text-xs text-gray-300 ml-1">(12)</span>
          </div>
          <h3 class="text-sm font-medium text-gray-700 mb-1 line-clamp-2 h-10">{{ product.name }}</h3>
          <div class="flex items-center justify-between mt-2">
             <div class="flex items-center gap-2">
                <span class="font-bold text-gray-900">{{ product.price }}</span>
                <span class="text-xs text-gray-400 line-through">{{ product.oldPrice }}</span>
             </div>
             <button class="text-xs font-bold text-gray-500 border border-gray-200 px-3 py-1.5 rounded hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">Add to cart</button>
          </div>
       </div>
    </div>

    <div class="flex justify-center mt-8 gap-2">
       <button class="w-8 h-1 bg-gray-200 rounded-full"></button>
       <button class="w-8 h-1 bg-orange-500 rounded-full"></button>
       <button class="w-8 h-1 bg-gray-200 rounded-full"></button>
    </div>
  </section>
</template>

<script setup>
const products = [
  { name: 'Tootsie Frooties - Taffy Candy - Bulk Fruit Chews', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Chips' },
  { name: 'Tootsie Frooties - Taffy Candy - Bulk Fruit Chews', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Candy' },
  { name: 'Tootsie Frooties - Taffy Candy - Bulk Fruit Chews', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Nuts' },
  { name: 'Tootsie Frooties - Taffy Candy - Bulk Fruit Chews', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Tomato' },
  { name: 'Tootsie Frooties - Taffy Candy - Bulk Fruit Chews', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Meat' },
]
</script>
