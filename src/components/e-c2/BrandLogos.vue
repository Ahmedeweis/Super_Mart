<template>
  <section class="container mx-auto px-4 py-8 mb-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Brand</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Brand</a>
    </div>

    <div class="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
       <div v-for="brand in ['REVLON', 'GARNIER', 'LOREAL', 'Levis', 'D&G', 'H&M', 'sunsilk', 'UA']" :key="brand" class="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:shadow-lg hover:scale-110 transition cursor-pointer">
          <span class="text-[10px] font-bold text-gray-600">{{ brand }}</span>
       </div>
    </div>
  </section>
</template>

<script setup>
</script>
