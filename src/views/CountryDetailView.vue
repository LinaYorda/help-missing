<script setup>

import { countries} from "@/data/countries.js";
import { useRoute } from 'vue-router'
import ResourceCard from "@/components/ResourceCard.vue";



const route=useRoute()
const country = countries.find((c) => c.slug === route.params.slug)
</script>

<template>
  <main>
    <h1 class="text text-3xl text-center font-bold flex items-center justify-center gap-2">
      <img v-if="country.code" :src="`https://flagcdn.com/w40/${country.code}.png`" :alt="country.name" class="w-6 rounded" />
      {{ country.name }}
    </h1>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        <ResourceCard
          v-for="resource in country.resources"
          :key="resource.url"
          :name="resource.name"
          :url="resource.url"
          :description="resource.description"
        >
        </ResourceCard>
    </div>
  </main>

</template>

<style scoped>

</style>
