<script setup>

defineProps({
  name: { type: String, required: true},
  url: { type: String, required: true},
  description: { type: String, required: true},
})


function faviconUrl(url) {
  const { hostname } = new URL(url)
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=16`
}

</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow p-4"
  >
    <h3 class="font-semibold flex items-center gap-2">
      <img :src="faviconUrl(url)" alt="" class="w-4 h-4 rounded-sm" @error="(e) => (e.target.style.display = 'none')" />
      {{ name }}
    </h3>
    <p class="text-sm text-base-content/70">{{ description }}</p>
  </a>
</template>

<style scoped>

</style>
