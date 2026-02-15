<template>
  <div class="bg-white font-sans text-gray-700">
    <!-- Top Bar -->
    <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Logo -->
      <div class="flex items-center gap-2">
         <div class="w-8 h-8 bg-orange-100 rounded text-orange-500 flex items-center justify-center font-bold text-xl">S</div>
         <span class="text-xl font-bold text-gray-900">Super Mart</span>
      </div>

      <!-- Search & Category -->
      <div class="flex-1 w-full md:max-w-2xl mx-4 flex items-center bg-gray-100 rounded-lg p-1">
         <button class="px-4 py-2 text-sm text-gray-600 font-medium flex items-center gap-1 border-r border-gray-300">
            Category <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
         </button>
         <input type="text" placeholder="What are you looking for..." class="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none" />
         <button class="p-2 text-gray-400 hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
         </button>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-6 text-sm font-medium text-gray-600">
         <div class="hidden lg:flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Dhaka, Bangladesh
         </div>
         <div class="hidden lg:flex items-center gap-1">
            <span class="text-red-500">🇬🇧</span> English - USD
         </div>
         <div class="flex items-center gap-1 cursor-pointer hover:text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            Sign up
         </div>
         <button class="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Cart
         </button>
      </div>
    </div>

    <!-- Navigation -->
    <div class="border-b border-gray-100">
      <div class="container mx-auto px-4 flex justify-between items-center py-3">
         <nav class="flex items-center gap-8 text-sm font-medium text-gray-500 overflow-x-auto no-scrollbar">
            <a href="#" class="text-orange-500">Home</a>
            <a href="#" class="flex items-center gap-1 hover:text-orange-500">Collections <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></a>
            <a href="#" class="flex items-center gap-1 hover:text-orange-500">Pages <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></a>
            <a href="#" class="hover:text-orange-500">Hot Offers</a>
            <a href="#" class="flex items-center gap-1 hover:text-orange-500">Blog <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></a>
            <a href="#" class="hover:text-orange-500">Contact</a>
         </nav>
         <div class="hidden md:flex items-center gap-2 text-sm font-bold text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +01 2569 8969
         </div>
      </div>
    </div>
  </div>
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
