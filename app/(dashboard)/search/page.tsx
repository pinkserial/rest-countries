"use client";

import CountryCardList from "@/components/CountryCardList";
import { searchCountriesByName } from "@/lib/getCountries";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const params = useSearchParams();
  const countries = searchCountriesByName(params.get("q") || "");

  return countries.length > 0 ? (
    <CountryCardList countries={countries} />
  ) : (
    <h1>No search results</h1>
  );
}
