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
      <div className="my-10 md:h-14 md:flex md:justify-between relative">
        <Suspense fallback={<SearchBarFallback />}>
          <Search />
        </Suspense>
        <Filter region={name} />
      </div>
      <CountryCardList countries={countries} />
    </>
  );
}
