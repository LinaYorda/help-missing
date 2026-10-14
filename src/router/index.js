import HomeView from "@/views/HomeView.vue";

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/countries', name: 'countries', component: () => import('../views/CountriesView.vue')},
  { path: '/countries/:slug', name: 'country-detail', component: () => import('../views/CountryDetailView.vue')},
  { path: '/social-feed', name: 'social-feed', component: () => import('../views/SocialFeedView.vue')}


]
