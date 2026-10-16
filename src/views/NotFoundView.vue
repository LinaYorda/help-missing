<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Page Not Found – Help Missing',
  meta: [
    {
      name: 'description',
      content: 'The page you are looking for could not be found.',
    },
    { property: 'og:title', content: 'Page Not Found – Help Missing' },
    { property: 'og:description', content: 'The page you are looking for could not be found.' },
    { property: 'og:image', content: 'https://help-missing.netlify.app/og-image.png' },
    { property: 'og:url', content: 'https://help-missing.netlify.app/404' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Page Not Found</h1>
    <p class="mb-8">
      The page you're looking for doesn't exist. While you're here, this space is used to help
      raise awareness for a missing child via
      <a href="https://notfound.org" target="_blank" rel="noopener noreferrer" class="link">NotFound.org</a>.
    </p>
     <iframe
      src="https://notfound-static.fwebservices.be/en/404?key=6ad0ad69aee8b"
      width="100%"
      height="650"
      frameborder="0"
    ></iframe>
  </main>

</template>

<style scoped>

</style>
