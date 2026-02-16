<template>
  <section class="container mx-auto px-4 py-6 md:py-8 bg-white rounded-xl mt-4 md:mt-8">
    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Popular Categories</h2>
    <div class="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
      <div v-for="category in categories" :key="category.name"
        class="min-w-[120px] md:min-w-[140px] h-[120px] md:h-[140px] border border-gray-100 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg transition cursor-pointer bg-white flex-shrink-0 group">
        <div class="w-16 h-16 flex items-center justify-center overflow-hidden">
          <img :src="category.image" :alt="category.name"
            class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
        </div>
        <span class="text-xs md:text-sm font-medium text-gray-700 text-center px-2">{{ category.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import img1 from '../../assets/imgs/category/1.png'
import img2 from '../../assets/imgs/category/2.png'
import img3 from '../../assets/imgs/category/3.png'
import img4 from '../../assets/imgs/category/4.png'
import img5 from '../../assets/imgs/category/5.png'
import img6 from '../../assets/imgs/category/6.png'

const categories = [
  { name: 'Toys and Hobby', image: img1 },
  { name: 'Gaming', image: img2 },
  { name: 'Computer', image: img3 },
  { name: 'Health', image: img4 },
  { name: 'Fashion', image: img5 },
  { name: 'Sports', image: img6 },
]
</script>

<style scoped>
/* Custom scrollbar for categories if needed */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
