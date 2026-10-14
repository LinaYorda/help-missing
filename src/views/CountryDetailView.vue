<script setup>

import { countries} from "@/data/countries.js";
import { useRoute } from 'vue-router'
import ResourceCard from "@/components/ResourceCard.vue";



const route=useRoute()
const country = countries.find((c) => c.slug === route.params.slug)
</script>

<template>
  <main>
    <h1 class="text text-3xl text-center font-bold">{{ country.name}}</h1>
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
