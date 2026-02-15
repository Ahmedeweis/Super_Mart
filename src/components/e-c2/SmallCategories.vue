<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Select Categories</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
       <div class="bg-amber-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
          <img src="https://placehold.co/80x80/transparent/png?text=Decor" class="w-16 h-16 object-cover rounded-lg" />
          <span class="font-medium text-gray-800 text-sm">Wall decor</span>
       </div>
       <div class="bg-blue-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
          <img src="https://placehold.co/80x80/transparent/png?text=Fish" class="w-16 h-16 object-cover rounded-lg" />
          <span class="font-medium text-gray-800 text-sm">Ocean Fish</span>
       </div>
       <div class="bg-green-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
          <img src="https://placehold.co/80x80/transparent/png?text=Veg" class="w-16 h-16 object-cover rounded-lg" />
          <span class="font-medium text-gray-800 text-sm">Vegetable</span>
       </div>
       <div class="bg-red-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
          <img src="https://placehold.co/80x80/transparent/png?text=Food" class="w-16 h-16 object-cover rounded-lg" />
          <span class="font-medium text-gray-800 text-sm">Frozen Food</span>
       </div>
    </div>
  </section>
</template>

<script setup>
</script>
