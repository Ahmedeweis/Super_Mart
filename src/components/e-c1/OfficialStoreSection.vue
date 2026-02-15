<template>
  <section class="container mx-auto px-4 py-6 md:py-8">
    <div class="flex items-center justify-between mb-4 md:mb-6">
      <div class="flex items-center gap-2">
        <svg class="w-5 md:w-6 h-5 md:h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2 class="text-xl md:text-2xl font-bold text-gray-900">Official Store</h2>
      </div>
      <a href="#" class="text-blue-600 font-medium hover:underline text-sm">See More</a>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
      <div v-for="brand in brands" :key="brand.name"
        class="bg-white p-4 md:p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer">
        <div :class="brand.colorClass"
          class="h-8 md:h-12 flex items-center justify-center mb-2 md:mb-3 font-bold text-lg md:text-xl">{{ brand.name
          }}</div>
        <div class="text-xs font-medium text-gray-900 text-center">{{ brand.name }}</div>
        <div class="text-[10px] text-green-700 flex items-center gap-1 mt-1">
          <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
          <span class="hidden sm:inline">Official Store</span>
          <span class="sm:hidden">Official</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  { name: 'AUKEY', colorClass: 'text-black' },
  { name: 'SAMSUNG', colorClass: 'text-blue-900' },
  { name: 'PHILIPS', colorClass: 'text-cyan-500' },
  { name: '3SECOND', colorClass: 'text-red-600' },
  { name: 'ACE', colorClass: 'text-red-600' },
  { name: 'WINGS', colorClass: 'text-red-600' },
]
</script>
