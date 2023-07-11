import countries from "@/data.json";

export type Country = (typeof countries)[number];

export const Regions = [
  "asia",
  "africa",
  "america",
  "europe",
  "oceania",
] as const;

export type Region = (typeof Regions)[number];

export function getCountry(name: string) {
  return countries.find((country) => country.name.includes(name));
}

export function searchCountriesByName(name: string) {
  return countries.filter((country) =>
    country.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function getCountriesByRegion(region: Region) {
  return countries.filter((country) =>
    country.region.toLowerCase().includes(region)
  );
}

const MAX_PAGE_NUM = Math.ceil(countries.length / 10);

export function getCountriesByPageNum(pageNum: number) {
  if (pageNum === 0 || pageNum > MAX_PAGE_NUM) {
    return {
      countries: [],
      hasNext: false,
    };
  }

  const startIdx = pageNum * 10 - 10;
  const endIdx = pageNum * 10;

  return {
    countries: countries.slice(startIdx, endIdx),
    hasNext: pageNum < MAX_PAGE_NUM,
  };
}

export function getBoundaryCountries(borders: string[]) {
  return borders.map((border) =>
    countries.find((country) => country.alpha3Code === border)
  );
}
