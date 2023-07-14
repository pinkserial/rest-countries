import CountryList from "@/components/CountryCardList";
import SkeletonList from "@/components/Skeleton";
import createUrl from "@/lib/createUrl";

async function getAllCountries(): Promise<CountrySummary[]> {
  const searchParams = new URLSearchParams({
    fields: "name,population,region,capital,flags,cca3",
  });

  const response = await fetch(
    createUrl(`${process.env.API_BASE_URL}/all`, searchParams)
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <>
      <CountryList countries={countries} />
    </>
  );
}
