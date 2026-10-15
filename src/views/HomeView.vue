<script setup>
import { useHead } from '@unhead/vue'
import { homeSections } from '@/data/homeSections.js'
import ResourceCard from '@/components/ResourceCard.vue'

useHead({
  title: 'Help Missing – Missing Persons Resources Worldwide',
  meta: [
    {
      name: 'description',
      content:
        'A curated directory of missing persons databases, police resources, and support organizations from around the world.',
    },
  ],
})
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold text-center mb-4">Help Missing</h1>
    <p class="mb-8">
      Welcome to Help Missing, a collection of missing persons resources and organizations from
      around the world that I've gathered through research. Browse by country below to find official
      databases, police resources, and support organizations that can help locate missing
      individuals.
    </p>
    <div v-for="section in homeSections" :key="section.title" class="mb-10">
      <h2 class="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <img v-if="section.code" :src="`https://flagcdn.com/w40/${section.code}.png`" :alt="section.title" class="w-6 rounded" />
        {{ section.title }}
      </h2>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        <ResourceCard
          v-for="resource in section.resources.slice(0,5)"
          :key="resource.url"
          :name="resource.name"
          :url="resource.url"
          :description="resource.description"
          class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow p-4"
        >

        </ResourceCard>
      </div>
      <RouterLink
        v-if="section.slug && section.resources.length > 4"
        :to="`/countries/${section.slug}`"
        class="btn btn-sm btn-warning btn-outline mt-2"
      >
        View all {{ section.resources.length }} resources ->
      </RouterLink>
    </div>
  </main>
</template>
