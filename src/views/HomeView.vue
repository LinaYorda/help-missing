<script setup>
import { homeSections } from '@/data/homeSections.js'

function faviconUrl(url) {
  const { hostname } = new URL(url)
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=16`
}
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Help Missing</h1>
    <p class="mb-8">
      Welcome to Help Missing, a collection of missing persons resources and organizations from
      around the world that I've gathered through research. Browse by country below to find official
      databases, police resources, and support organizations that can help locate missing
      individuals.
    </p>
    <div v-for="section in homeSections" :key="section.title" class="mb-10">
      <h2 class="text-xl font-bold mb-4">{{ section.title }}</h2>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        <a
          v-for="resource in section.resources"
          :key="resource.url"
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow p-4"
        >
          <h3 class="font-semibold flex items-center gap-2">
            <img :src="faviconUrl(resource.url)" alt="" class="w-4 h-4 rounded-sm" @error="(e) => (e.target.style.display = 'none')" />
            {{ resource.name }}</h3>
          <p class="text-sm text-base-content/70">{{ resource.description }}</p>
        </a>
      </div>
    </div>
  </main>
</template>
