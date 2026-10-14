<script setup>
import { RouterLink} from "vue-router";

const navItems = [
  { name: 'Home', url: '/'},
  { name: 'Countries', url: '/countries'},
  { name: 'About', url: '/about'},
  { name: 'Coverage Map', url: '/coverage'},
  { name: 'Social Feed', url: '/social-feed'},
]
</script>

<template>
  <header class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-cirle">
          <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        </div>
        <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li v-for="navItem in navItems" :key="navItem.url">
            <RouterLink :to="navItem.url">{{ navItem.name}}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-center">
      <RouterLink to="/" class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <circle cx="10" cy="10" r="7"/>
          <line x1="15" y1="15" x2="21" y2="21"/>
          <circle cx="10" cy="8" r="1.8" fill="currentColor" stroke="none"/>
          <path d="M6.7 13.3c0-1.82 1.48-3.3 3.3-3.3s3.3 1.48 3.3 3.3"/>
        </svg>
        <span class="text-xl font-bold">Help Missing</span>
      </RouterLink>
    </div>

    <div class="navbar-end"></div>
  </header>
</template>
