<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Select Categories</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">Show All</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       <div class="bg-teal-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition cursor-pointer h-32">
          <span class="font-medium text-gray-800">Self-care</span>
          <img src="https://placehold.co/100x100/transparent/png?text=Oil" class="w-20 h-20 object-contain" />
       </div>
       <div class="bg-pink-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition cursor-pointer h-32">
          <span class="font-medium text-gray-800">Gift Ideas</span>
          <img src="https://placehold.co/100x100/transparent/png?text=Gift" class="w-20 h-20 object-contain" />
       </div>
       <div class="bg-emerald-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition cursor-pointer h-32">
          <span class="font-medium text-gray-800">Shoe</span>
          <img src="https://placehold.co/100x100/transparent/png?text=Shoe" class="w-20 h-20 object-contain" />
       </div>
       <div class="bg-orange-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition cursor-pointer h-32">
          <span class="font-medium text-gray-800">Outdoor & garden</span>
          <img src="https://placehold.co/100x100/transparent/png?text=Cactus" class="w-20 h-20 object-contain" />
       </div>
    </div>
  </section>
</template>

<script setup>
</script>
