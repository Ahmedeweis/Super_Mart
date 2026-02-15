<template>
  <div class="bg-white font-sans">
    <!-- Top Bar -->
    <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start">
        <div class="flex items-center gap-2">
           <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
             </svg>
           </div>
           <span class="text-xl font-bold text-gray-800">Happy<span class="text-red-500">Mart</span></span>
        </div>
        <div class="hidden md:block text-sm text-gray-600 font-medium">+960 1234 5654</div>
      </div>

      <div class="flex-1 w-full md:max-w-xl mx-4">
        <div class="relative">
          <input type="text" placeholder="Search..." class="w-full bg-gray-100 rounded-full py-2.5 px-6 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-red-200" />
          <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
             <span class="text-xs text-gray-500 border-r border-gray-300 pr-2 hidden sm:block">All Categories</span>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <div class="border-b border-gray-100">
      <div class="container mx-auto px-4">
        <nav class="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium text-gray-600 no-scrollbar">
          <a href="#" class="whitespace-nowrap hover:text-red-500">Deal Today</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Special Prices</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Fresh</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Frozen</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Demos</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Shop</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Blog</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Pages</a>
          <a href="#" class="whitespace-nowrap hover:text-red-500">Recently Viewed</a>
        </nav>
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
