"use client";

import CountryCard from "./CountryCard";
import { forwardRef } from "react";

type Props = {
  countries: CountrySummary[];
};

const forwardedCountryCardList = forwardRef<HTMLLIElement, Props>(
  function CountryCardList({ countries }, ref) {
    return (
      <ol className="px-10 md:px-0 my-20 md:my-10 md:grid md:grid-cols-[repeat(auto-fill,_265px)] md:justify-between md:gap-10 lg:gap-5">
        {countries.map((country, idx) => (
          <li
            ref={idx + 1 === countries.length ? ref : null}
            key={idx}
            className="my-16 md:my-0 h-96 rounded-lg bg-card shadow-lg overflow-hidden"
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ol>
    );
  }
);

export default forwardedCountryCardList;
