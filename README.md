# Help Missing

A curated directory of missing persons databases, police resources, and support organizations from around the world.

## About This Project

This website serves as a portal for missing persons resources and information. I've gathered these resources through research to help families, investigators, and concerned individuals find the right contacts and databases when someone goes missing.

### What You'll Find Here

- **Official Police Databases** - State and national missing persons databases from law enforcement agencies.
- **Government Resources** - Official government portals and coordination centers.
- **Support Organizations** - Non-profit groups and associations helping with missing persons cases.
- **International Resources** - Global organizations like Interpol and ICMEC.
- **Regional Coverage** - Countries across Europe, North America, South America, Oceania, Asia, and Africa.

See the [About page](/about) for live, always-up-to-date country/resource counts.

## How to Use This Site

1. **Browse by Country** - Use the navigation menu or countries page to find resources in specific locations
2. **Country Pages** - Each country page contains categorized links to relevant resources
3. **Social Feed** - Follow official missing persons organizations' Facebook pages
4. **External Links** - All links open in new tabs for easy reference

## International Resources

Global organizations providing missing persons assistance worldwide:

- **[Interpol Identify Me](https://www.interpol.int/What-you-can-do/Identify-Me)** - Interpol's database to help identify unknown persons and reunite families
- **[ICMEC](https://www.icmec.org)** - International Centre for Missing & Exploited Children
- **[ICMP Missing Persons Database](https://oic.icmp.int/index.php?w=reg_lista_pub_ter_in&x=search&l=en)** - International Commission on Missing Persons database for conflict, disaster, and human rights cases

## Important Safety Notice

If you believe you are a victim of foul play or want to report a missing person, contact your local authorities immediately. Do not delay in seeking help from law enforcement or emergency services.

## Contributing

This project relies on community input to stay current and comprehensive. Ways to contribute:

### Adding New Resources
- Found a missing persons database or resource not listed here?
- Submit it via the contact information below

### Updating Broken Links
- If you find a link that no longer works, please let me know
- Include the country, resource name, and broken URL

### Expanding Coverage
- Know of resources for countries not yet covered?
- Have suggestions for additional types of resources?

### Contact
For contributions, corrections, or suggestions: Please reach out with details about the resource or issue.

## Technical Details

This site is built with:
- **Vue 3** - Composition API, `<script setup>` single-file components
- **Vite** + **vite-ssg** - builds and prerenders every route to real static HTML at build time, for SEO/crawlability without needing a server
- **Vue Router** - client-side routing
- **Tailwind CSS v4** + **DaisyUI** - styling
- **Pinia** - installed for future search/filter functionality
- **Vitest** - unit tests (currently guards the integrity of the country/resource data)
- **Playwright** - end-to-end tests (planned)

Country/resource data lives in `src/data/countries.js` as a hand-maintained plain JS array, with a Vitest guard (`src/data/countries.spec.js`) checking every country has a valid `slug`/`name` and every resource has `name`/`url`/`description`.

### Local Development

Requires Node.js (see `engines` in `package.json` for supported versions).

```bash
# Clone the repo
git clone <repo-url>

# Install dependencies
npm install

# Start the dev server
npm run dev

# Run unit tests
npm run test:unit

# Lint and format
npm run lint
npm run format

# Production build (prerenders every route to dist/)
npm run build

# Preview the production build locally
npm run preview
```

## Data Sources & Verification

All resources listed are:
- **Publicly available** government or organizational websites
- **Regularly verified** for accessibility and accuracy
- **Categorized appropriately** (official databases vs. support organizations)

## Disclaimer

This directory is for informational purposes only. I do not host any content, databases, or resources on this website. All links direct to external third-party websites and organizations.

- I am not affiliated with any government agencies or organizations listed here
- I am not responsible for the content, accuracy, availability, or any issues that may arise from visiting these external sites
- Always verify information directly with official sources
- Some resources may be in local languages

## License

This project is maintained for humanitarian purposes. The content and structure are available for reference and inspiration for similar initiatives.

## Acknowledgments

This resource directory exists to help bridge the gap between those searching for missing persons and the organizations that can assist them. Special thanks to all the law enforcement agencies, support organizations, and families who work tirelessly on missing persons cases worldwide.
