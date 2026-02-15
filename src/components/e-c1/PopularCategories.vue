<template>
  <section class="container mx-auto px-4 py-6 md:py-8 bg-white rounded-xl mt-4 md:mt-8">
      <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Popular Categories</h2>
      <div class="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        <div v-for="cat in ['Toys and Hobby', 'Gaming', 'Computer', 'Health', 'Fashion', 'Sports']" :key="cat" class="min-w-[120px] md:min-w-[140px] h-[120px] md:h-[140px] border border-gray-100 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg transition cursor-pointer bg-white flex-shrink-0">
            <div class="w-10 md:w-12 h-10 md:h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl md:text-2xl">🎮</div>
            <span class="text-xs md:text-sm font-medium text-gray-700 text-center px-2">{{ cat }}</span>
        </div>
      </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Custom scrollbar for categories if needed */
.no-scrollbar::-webkit-scrollbar {
display: none;
}
.no-scrollbar {
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
}
</style>
