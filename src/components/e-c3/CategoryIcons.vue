<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold text-gray-900">Category</h2>
      <div class="flex gap-2">
         <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
         </button>
         <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
         </button>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
       <div class="flex flex-col items-center gap-3 cursor-pointer group">
          <div class="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition duration-300">
             <div class="w-10 h-10 grid grid-cols-3 gap-1 opacity-60 group-hover:opacity-100 group-hover:text-white">
                <div class="bg-current rounded-full"></div><div class="bg-current rounded-full"></div><div class="bg-current rounded-full"></div>
                <div class="bg-current rounded-full"></div><div class="bg-current rounded-full"></div><div class="bg-current rounded-full"></div>
                <div class="bg-current rounded-full"></div><div class="bg-current rounded-full"></div><div class="bg-current rounded-full"></div>
             </div>
          </div>
          <span class="text-sm font-medium text-gray-700 group-hover:text-orange-500">All</span>
       </div>

       <div v-for="cat in categories" :key="cat.name" class="flex flex-col items-center gap-3 cursor-pointer group">
          <div class="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-500 transition duration-300">
             <img :src="cat.image" class="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition" />
          </div>
          <span class="text-sm font-medium text-gray-700 group-hover:text-orange-500">{{ cat.name }}</span>
       </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { name: 'Groceries', image: 'https://placehold.co/50x50/transparent/png?text=Veg' },
  { name: 'Computer', image: 'https://placehold.co/50x50/transparent/png?text=PC' },
  { name: 'Women', image: 'https://placehold.co/50x50/transparent/png?text=Dress' },
  { name: 'Electronics', image: 'https://placehold.co/50x50/transparent/png?text=Phone' },
  { name: 'Men', image: 'https://placehold.co/50x50/transparent/png?text=Suit' },
  { name: 'Baby', image: 'https://placehold.co/50x50/transparent/png?text=Baby' },
  { name: 'Sports', image: 'https://placehold.co/50x50/transparent/png?text=Game' },
]
</script>
