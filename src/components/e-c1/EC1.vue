<template>
  <div>
    <div class="bg-[#efefef]">
      <HeroSection />
    </div>

    <div class="bg-[#efefef]">
      <FlashSaleSection />
    </div>

    <OfficialStoreSection />
    <PromotionsSection />
    <PopularCategories />
    <ProductsSection />
  </div>
</template>

<script setup>
import HeroSection from './HeroSection.vue'
import FlashSaleSection from './FlashSaleSection.vue'
import OfficialStoreSection from './OfficialStoreSection.vue'
import PromotionsSection from './PromotionsSection.vue'
import PopularCategories from './PopularCategories.vue'
import ProductsSection from './ProductsSection.vue'
</script>
