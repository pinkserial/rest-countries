import CountryCardList from "@/components/CountryCardList";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { Region, Regions, getCountriesByRegion } from "@/lib/getCountries";
import { Suspense } from "react";

export async function generateStaticParams() {
  const regions = Regions;
  return regions.map((region) => ({
    name: region,
  }));
}

function SearchBarFallback() {
  return <>Search Bar</>;
}

export default function RegionPage({
  params: { name },
}: {
  params: { name: Region };
}) {
  const countries = getCountriesByRegion(name);
  return (
    <>
      <div className="mt-10 h-14 flex justify-between relative">
        <Suspense fallback={<SearchBarFallback />}>
          <Search />
        </Suspense>
        <Filter region={name} />
      </div>
      <CountryCardList countries={countries} />
    </>
  );
}
