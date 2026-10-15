<script setup>
import { useHead } from '@unhead/vue'
import { countries } from '@/data/countries.js'
const totalResources = countries.reduce((sum, c) => sum + c.resources.length, 0)

useHead({
  title: 'About – Help Missing',
  meta: [
    {
      name: 'description',
      content: 'About the Help Missing directory, how to use the site, and important safety information.',
    },
  ],
})
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">About</h1>
    <p class="mb-4">Hello!</p>
    <p class="mb-4">
      I'm Tsvetelina, and I've been involved in missing persons work for quite some time. I'm passionate
      about helping others and raising awareness about missing persons cases. I noticed there wasn't a
      centralized portal for finding information on agencies handling these cases, so I'm creating this
      directory to help families and investigators access the resources they need.
    </p>
    <p class="mb-8">
      This website serves as a directory of missing persons databases and organizations from around the
      world, providing easy access to tools that can help locate missing individuals and support families
      in their search.
    </p>
    <h2 class="text-xl font-bold mb-3">Database Overview</h2>
    <ul class="list-disc list-inside mb-8 space-y-1">
      <li>Total Countries with Resources: {{ countries.length }}</li>
      <li>Total Resources Listed: {{ totalResources }}</li>
    </ul>

    <h2 class="text-xl font-bold mb-3">How to Use This Site</h2>
    <ul class="list-disc list-inside mb-8 space-y-1">
      <li>Browse by country using the navigation menu</li>
      <li>Each country contains links to official missing persons databases and organizations</li>
      <li>All links open in a new tabs for your convenience</li>
      <li>Website favicons are automatically displayed next to each link for easy visual identification</li>
      <li>Language Note: Many websites are in local languages and may not have English versions available</li>
    </ul>
    <h2 class="text-xl font-bold mb-3">Contributing</h2>
    <p class="mb-8">If you know of additional resources or have corrections, please contact me.</p>
    <h2 class="text-xl font-bold mb-3">Disclaimer</h2>
    <p class="mb-4">
      <strong>
        Important Safety Notice:</strong> If you believe you are a victim of foul play or want to
      report a missing person, contact your local authorities immediately. Do not delay in seeking help
      from law enforcement or emergency services.
    </p>
    <p class="mb-4">
      This directory is for informational purposes only. I do not host any content, databases, or resources
      on this website. All links direct to external third-party websites and organizations. I am not
      affiliated with any government agencies or organizations listed here, and I am not responsible for the
      content, accuracy, availability, or any issues that may arise from visiting these external sites.
      Always verify information directly with official sources.
    </p>
    <p>
      <strong>Note about resource types:</strong> Some resources listed on this site may include news
      portals, media outlets, or journalistic sources that report on missing persons cases. These are
      included to provide additional awareness and information, but they are not official government
      databases. Official police and government resources are clearly identified where possible.
    </p>
  </main>

</template>

<style>
</style>
