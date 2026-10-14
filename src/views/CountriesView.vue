<script setup>
import {  countries } from "@/data/countries.js";


</script>

<template>
  <main>
    <h1 class="text text-2xl text-center font font-bold mb-3">List of the Countries</h1>
    <div v-for="country in countries" :key="country.name" class="mb-4">
      <RouterLink :to="`/countries/${country.slug}`">{{ country.name }}</RouterLink>
    </div>
  </main>

</template>



<style scoped>

</style>
