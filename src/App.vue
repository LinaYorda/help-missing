<script setup>
import AppFooter from '@/components/layout/AppFooter.vue';
import AppHeader  from "@/components/layout/AppHeader.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 container mx-auto px-4 py-8">
      <RouterView />
    </main>
    <AppFooter />
  </div>


</template>
<style scoped>
</style>
