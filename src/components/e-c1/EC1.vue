<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-800">
    <TopBar />
    <Header />
    <HeroSection />
    <FlashSaleSection />
    <OfficialStoreSection />
    <PromotionsSection />
    <PopularCategories />
    <ProductsSection />
    <Footer />
  </div>
</template>

<script setup>
import TopBar from './TopBar.vue'
import Header from './Header.vue'
import HeroSection from './HeroSection.vue'
import FlashSaleSection from './FlashSaleSection.vue'
import OfficialStoreSection from './OfficialStoreSection.vue'
import PromotionsSection from './PromotionsSection.vue'
import PopularCategories from './PopularCategories.vue'
import ProductsSection from './ProductsSection.vue'
import Footer from './Footer.vue'
</script>
