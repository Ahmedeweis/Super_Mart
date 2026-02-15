<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-8">
         <h2 class="text-2xl font-bold text-gray-900">On Sales</h2>
         <div class="flex gap-4">
            <div class="flex flex-col items-center bg-gray-100 rounded px-2 py-1 min-w-[40px]">
               <span class="text-sm font-bold text-gray-900">26</span>
               <span class="text-[10px] text-gray-500">Days</span>
            </div>
            <div class="flex flex-col items-center bg-gray-100 rounded px-2 py-1 min-w-[40px]">
               <span class="text-sm font-bold text-gray-900">08</span>
               <span class="text-[10px] text-gray-500">Hours</span>
            </div>
            <div class="flex flex-col items-center bg-gray-100 rounded px-2 py-1 min-w-[40px]">
               <span class="text-sm font-bold text-gray-900">45</span>
               <span class="text-[10px] text-gray-500">Mins</span>
            </div>
            <div class="flex flex-col items-center bg-gray-100 rounded px-2 py-1 min-w-[40px]">
               <span class="text-sm font-bold text-gray-900">19</span>
               <span class="text-[10px] text-gray-500">Sec</span>
            </div>
         </div>
      </div>
      <a href="#" class="text-xs text-gray-400 hover:text-orange-500 flex items-center gap-1">ALL <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></a>
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
  </section>
</template>

<script setup>
const products = [
  { name: 'Summer Special Best Natural fruits', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Plum' },
  { name: 'Summer Special Best Natural fruits', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Avocado' },
  { name: 'Summer Special Best Natural fruits', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Strawberry' },
  { name: 'Summer Special Best Natural fruits', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Lychee' },
  { name: 'Summer Special Best Natural fruits', price: '$22.00', oldPrice: '$25.00', image: 'https://placehold.co/150x150/transparent/png?text=Apple' },
]
</script>
