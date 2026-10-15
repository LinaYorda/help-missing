import { countries } from './countries.js'

const unitedStates = countries.find((c) => c.slug === 'united-states')
const canada = countries.find((c) => c.slug === 'canada')
const brazil = countries.find((c) => c.slug === 'brazil')
const germany = countries.find((c) => c.slug === 'germany')
const switzerland = countries.find((c) => c.slug === 'switzerland')

export const homeSections = [
  { title: unitedStates.name, slug: unitedStates.slug, code: unitedStates.code, resources: unitedStates.resources },
  { title: canada.name, slug: canada.slug, code: canada.code, resources: canada.resources },
  { title: brazil.name, slug: brazil.slug, code: brazil.code, resources: brazil.resources },
  { title: germany.name, slug: germany.slug, code: germany.code, resources: germany.resources },
  { title: switzerland.name, slug: switzerland.slug, code: switzerland.code, resources: switzerland.resources},
  { title: 'International',
  resources: [
    { name: 'Interpol Identify Me', url: 'https://www.interpol.int/What-you-can-do/Identify-Me', description: "Interpol's database to help identify unknown persons and reunite families" },
    { name: 'ICMEC', url: 'https://www.icmec.org', description: 'International Centre for Missing & Exploited Children' },
    { name: 'ICMP Missing Persons Database', url: 'https://oic.icmp.int/index.php?w=reg_lista_pub_ter_in&x=search&l=en', description: 'International Commission on Missing Persons database for conflict, disaster, and human rights cases' },
  ],}
]
