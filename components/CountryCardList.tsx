"use client";

import { Country } from "@/lib/getCountries";
import CountryCard from "./CountryCard";
import { forwardRef } from "react";

type Props = {
  countries: Country[];
};

const forwardedCountryCardList = forwardRef<HTMLLIElement, Props>(
  function CountryCardList({ countries }, ref) {
    return (
      <ol className="grid grid-cols-[repeat(auto-fill,_265px)] justify-between gap-3">
        {countries.map((country, idx) => (
          <li
            ref={idx + 1 === countries.length ? ref : null}
            key={country.name}
            className="mt-20 rounded-lg bg-card shadow-lg  h-80 overflow-hidden"
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ol>
    );
  }
);

export default forwardedCountryCardList;
