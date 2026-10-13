import { describe, it, expect } from "vitest";
import { countries } from './countries.js';


describe('countries data', () => {
  it('has at least one country', () => {
    expect(countries.length).toBeGreaterThan(0)
  })
  it('every country has slug, name, and at least one resource', () => {
    countries.forEach((country) => {
      expect(country.slug).toBeTruthy()
      expect(country.name).toBeTruthy()
      expect(country.resources.length).toBeGreaterThan(0)
    })
  })
  it('every resource has name, url, and description', () => {
    countries.forEach((country) => {
      country.resources.forEach((resource) => {
        expect(resource.name).toBeTruthy()
        expect(resource.url).toBeTruthy()
        expect(resource.description).toBeTruthy()
      })
    })
  })
})
