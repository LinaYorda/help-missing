<script setup>
import { computed, watchEffect } from 'vue'
import { useHead } from '@unhead/vue'
import { countries} from "@/data/countries.js";
import { useRoute, useRouter } from 'vue-router'
import ResourceCard from "@/components/ResourceCard.vue";

const route = useRoute()
const router = useRouter()
const country = computed(() => countries.find((c) => c.slug === route.params.slug))

watchEffect(() => {
  if (!country.value) {
    router.replace('/404')
  }
})

useHead({
  title: () => `${country.value?.name ?? 'Country'} – Help Missing`,
  meta: [
    {
      name: 'description',
      content: () =>
        `Missing persons resources and databases for ${country.value?.name ?? 'this country'}.`,
    },
    { property: 'og:title', content: () => `${country.value?.name ?? 'Country'} – Help Missing` },
    {
      property: 'og:description',
      content: () =>
        `Missing persons resources and databases for ${country.value?.name ?? 'this country'}.`,
    },
    { property: 'og:image', content: 'https://help-missing.netlify.app/og-image.png' },
    {
      property: 'og:url',
      content: () => `https://help-missing.netlify.app/countries/${country.value?.slug ?? ''}`,
    },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <main v-if="country">
    <h1 class="text text-3xl text-center font-bold flex items-center justify-center gap-2 mb-3">
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
