import CountryCardList from "@/components/CountryCardList";
import createUrl from "@/lib/createUrl";

const regions = ["asia", "africa", "america", "europe", "oceania"] as const;

type Region = (typeof regions)[number];

export async function generateStaticParams() {
  return regions.map((region) => ({
    name: region,
  }));
}

async function getCountries(region: Region) {
  const searchParams = new URLSearchParams({
    fields: "name,population,region,capital,flags,cca3",
  });

  const response = await fetch(
    createUrl(`https://restcountries.com/v3.1/region/${region}`, searchParams)
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function RegionPage({
  params: { name },
}: {
  params: { name: Region };
}) {
  const countries = await getCountries(name);

  return (
    <>
      <CountryCardList countries={countries} />
    </>
  );
}
