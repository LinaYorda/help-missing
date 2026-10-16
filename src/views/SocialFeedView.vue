<script setup>
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { socialFeedPages} from "@/data/socialFeedPages.js";

useHead({
  title: 'Social Feed – Help Missing',
  meta: [
    {
      name: 'description',
      content: 'Follow official missing persons organizations on Facebook.',
    },
    { property: 'og:title', content: 'Social Feed – Help Missing' },
    { property: 'og:description', content: 'Follow official missing persons organizations on Facebook.' },
    { property: 'og:image', content: 'https://help-missing.netlify.app/og-image.png' },
    { property: 'og:url', content: 'https://help-missing.netlify.app/social-feed' },
    { property: 'og:type', content: 'website' },
  ],
})

onMounted(() => {
  const script = document.createElement('script')
  script.src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0'
  script.async=true
  script.defer=true
  script.crossOrigin='anonymous'
  document.body.appendChild(script)
})


</script>




<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Social Feed</h1>
    <p class="mb-2">Stay updated with the latest developments in missing persons cases and related news.</p>
    <p class="mb-8 text-sm text-base-content/70">
      Note: This page embeds content from official Facebook pages of missing persons organizations.
      I do not host ot store any of this content; it is loaded directly from Facebook.
    </p>
    <div id="fb-root"></div>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
      <div
        v-for="page in socialFeedPages"
        :key="page"
        class="fb-page"
        :data-href="page"
        data-tabs="timeline"
        data-width="340"
        data-height="400"
        data-small-header="false"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>



  </main>

</template>

<style scoped>

</style>
