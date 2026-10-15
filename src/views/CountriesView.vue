<script setup>
import { useHead } from '@unhead/vue'
import {  countries } from "@/data/countries.js";

useHead({
  title: 'Countries – Help Missing',
  meta: [
    {
      name: 'description',
      content: 'Browse missing persons resources and databases by country.',
    },
  ],
})
</script>

<template>
  <main>
    <h1 class="text text-2xl text-center font font-bold mb-5">List of the Countries</h1>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
      <RouterLink
        v-for="country in countries"
        :key="country.name"
        :to="`/countries/${country.slug}`"
        class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center"
      >
        <img :src="`https://flagcdn.com/w40/${country.code}.png`" :alt="country.name" class="mx-auto mb-2 rounded" />
        <h3 class="font-semibold">{{ country.name }}</h3>
        <p class="text-sm text-base-content/70">{{ country.resources.length }} resources</p>
      </RouterLink>
    </div>

  </main>

</template>



<style scoped>

</style>
