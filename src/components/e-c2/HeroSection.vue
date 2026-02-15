<template>
  <section class="container mx-auto px-4 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Main Slider -->
      <div class="lg:col-span-8 relative bg-gray-50 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col justify-center">
         <div class="relative z-10 max-w-md">
           <h3 class="font-handwriting text-3xl md:text-4xl text-gray-700 mb-2">New Arrival</h3>
           <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Today's best Offer</h2>

           <div class="mb-8">
             <div class="text-sm text-gray-500 mb-1">SAVE UP TO</div>
             <div class="text-5xl font-black text-gray-200 leading-none relative inline-block">
               49<span class="text-2xl align-top">%</span>
               <div class="absolute inset-0 text-gray-900 opacity-10" style="transform: translate(2px, 2px);">49%</div>
             </div>
             <div class="text-xs text-gray-400 mt-1">+ Free Delivery</div>
           </div>

           <button class="bg-red-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-red-600 transition shadow-lg shadow-red-200">Shop Now</button>
         </div>

         <!-- Shoes Image Composition -->
         <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden md:flex items-center justify-center">
            <img src="https://placehold.co/500x400/transparent/png?text=Running+Shoes" alt="Shoes" class="object-contain drop-shadow-2xl transform scale-110" />
            <div class="absolute bottom-10 right-10 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
              <div class="text-red-500 font-bold text-xl">USD 70.00</div>
            </div>
         </div>

         <!-- Decorative Elements -->
         <div class="absolute top-4 left-4 text-green-400 text-2xl">~</div>
         <div class="absolute bottom-4 right-1/3 text-pink-400 text-xl">✦</div>
      </div>

      <!-- Right Side Cards -->
      <div class="lg:col-span-4 flex flex-col gap-6">
        <!-- Exclusive Collection -->
        <div class="bg-gray-100 rounded-3xl p-6 relative overflow-hidden h-full min-h-[200px]">
           <div class="relative z-10">
             <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">EXCLUSIVE</div>
             <div class="text-lg font-bold text-gray-800 mb-4">Collection</div>
             <div class="text-xs text-gray-500 mb-1">OSMO ACTION</div>
             <div class="flex items-center gap-2 mb-4">
               <span class="text-red-500 font-bold">$150</span>
               <span class="text-gray-400 text-xs line-through">$190</span>
             </div>
             <button class="bg-red-500 text-white text-xs px-4 py-1.5 rounded-full hover:bg-red-600 transition">Shop Now</button>
           </div>
           <img src="https://placehold.co/200x150/transparent/png?text=Camera" class="absolute bottom-0 right-0 w-32 md:w-40 object-contain" />
        </div>

        <!-- Summer Collections -->
        <div class="bg-amber-400 rounded-3xl p-6 relative overflow-hidden h-full min-h-[200px] text-gray-900">
           <div class="relative z-10">
             <div class="text-lg font-bold mb-1">Summer <br/> Collections</div>
             <div class="text-sm font-bold mb-4">25% OFF</div>
             <button class="bg-white text-gray-900 text-xs px-4 py-1.5 rounded-full hover:bg-gray-50 transition font-medium">Shop Now</button>
           </div>
           <img src="https://placehold.co/150x200/transparent/png?text=Woman" class="absolute bottom-0 right-4 w-24 md:w-32 object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.font-handwriting {
  font-family: 'Brush Script MT', cursive;
}
</style>
