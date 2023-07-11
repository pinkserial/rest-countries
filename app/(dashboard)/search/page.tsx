"use client";

import CountryCardList from "@/components/CountryCardList";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { searchCountriesByName } from "@/lib/getCountries";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const params = useSearchParams();
  const countries = searchCountriesByName(params.get("q") || "");

  return (
    <>
      <div className="my-10 md:h-14 md:flex md:justify-between relative">
        <Search />
        <Filter />
      </div>
      {countries.length > 0 ? (
        <CountryCardList countries={countries} />
      ) : (
        <h1>No search results</h1>
      )}
    </>
  );
}
