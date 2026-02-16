<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
      <!-- Logo & Mobile Actions -->
      <div class="flex items-center justify-between w-full md:w-auto">
        <a href="/" class="text-2xl font-bold text-gray-900 tracking-tight"> Super Mart</a>
        <div class="flex items-center gap-4 md:hidden">
          <router-link to="/cart" class="text-gray-600 hover:text-primary relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartStore.cartItemCount > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{{
                cartStore.cartItemCount }}</span>
          </router-link>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="w-full md:flex-1 max-w-2xl flex items-center">
        <div class="relative hidden md:flex">
          <button @click="isCategoryOpen = !isCategoryOpen"
            class="bg-gray-100 px-4 py-2.5 rounded-l-lg border border-r-0 border-gray-300 text-gray-600 flex items-center gap-2 hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span class="hidden lg:inline">{{ selectedCategory }}</span>
          </button>

          <!-- Dropdown Menu -->
          <div v-if="isCategoryOpen"
            class="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
            <a v-for="category in categories" :key="category" href="#" @click.prevent="selectCategory(category)"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition">
              {{ category }}
            </a>
          </div>
        </div>
        <input type="text" placeholder="Search in  Super Mart" v-model="searchQuery" @keyup.enter="handleSearch"
          class="w-full px-4 py-2.5 border border-gray-300 rounded-lg md:rounded-none md:rounded-r-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
        <button @click="handleSearch"
          class="bg-[#5A4098] text-white px-5 py-2.5 rounded-r-lg hover:bg-purple-700 transition hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-6">
        <router-link to="/cart" class="text-gray-600 hover:text-primary relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span v-if="cartStore.cartItemCount > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{{
              cartStore.cartItemCount }}</span>
        </router-link>
        <router-link to="/login"
          class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
          Login
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../store/cart'

const cartStore = useCartStore()
const router = useRouter()

const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } })
  }
}

const isCategoryOpen = ref(false)
const selectedCategory = ref('Category')

const categories = [
  'Electronics',
  'Clothing',
  'Home',
  'Sports ',
  'Toys',
  'Health',
  'Automotive',
  'Books',
  'Gaming',

]

const selectCategory = (category) => {
  selectedCategory.value = category
  isCategoryOpen.value = false
}
</script>
