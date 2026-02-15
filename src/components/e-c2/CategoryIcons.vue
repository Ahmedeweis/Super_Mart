<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Select Categories</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <div class="flex gap-4 md:gap-8 overflow-x-auto pb-4 no-scrollbar justify-start md:justify-center">
      <div class="flex flex-col items-center gap-2 min-w-[80px]">
        <div class="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition cursor-pointer text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2 min-w-[140px]">
        <div class="h-12 px-6 rounded-full bg-red-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-red-200 cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           <span class="text-sm font-medium whitespace-nowrap">Fashion & Lifestyle</span>
        </div>
      </div>

      <div v-for="i in 5" :key="i" class="flex flex-col items-center gap-2 min-w-[80px]">
        <div class="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition cursor-pointer text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
