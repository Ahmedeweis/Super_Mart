<template>
  <section class="container mx-auto px-4 py-6 md:py-8">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
      <div class="flex items-center gap-4">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900">Flash Sale</h2>
        <div class="bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded flex items-center gap-2">
          Ends in <span>01 : 17 : 56</span>
        </div>
      </div>
      <a href="#" class="text-blue-600 font-medium hover:underline text-sm">See More</a>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
      <div v-for="i in 6" :key="i" class="bg-white p-3 md:p-4 rounded-xl border border-gray-100 hover:shadow-lg transition group">
        <div class="relative mb-3">
          <img :src="`https://placehold.co/200x200/f3f4f6/9ca3af?text=Product+${i}`" alt="Product" class="w-full aspect-square object-cover rounded-lg bg-gray-100" />
          <div class="absolute top-2 left-2 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded">40%</div>
        </div>
        <h3 class="text-xs md:text-sm font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-primary transition">Awesome Brand - Cool product with nice color...</h3>
        <div class="flex flex-wrap items-baseline gap-2 mb-1">
          <span class="text-sm md:text-lg font-bold text-gray-900">$85.00</span>
          <span class="text-[10px] md:text-xs text-gray-400 line-through">$145.00</span>
        </div>
        <div class="flex items-center gap-1 text-[10px] md:text-xs text-gray-500">
          <svg class="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          <span>4.8</span>
          <span>|</span>
          <span>Sold 700+</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
