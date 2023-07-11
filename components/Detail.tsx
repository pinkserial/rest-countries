import { Country, getBoundaryCountries } from "@/lib/getCountries";
import Link from "next/link";

export default function Detail({ country }: { country: Country }) {
  return (
    <article className="md:flex md:flex-col md:justify-center md:gap-5 ">
      <h1 className="my-10 text-2xl font-bold">{country.name}</h1>
      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        <div className="flex flex-col gap-1">
          <p>
            <span>Native Name: </span>
            {country.nativeName}
          </p>
          <p>
            <span>Population: </span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span>Region: </span>
            {country.region}
          </p>
          <p>
            <span>Sub Region: </span>
            {country.subregion}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p>
            <span>Top Level Domain: </span>
            {country.topLevelDomain}
          </p>
          {country.currencies ? (
            <p>
              <span>Currencies: </span>
              {country.currencies.map((cur) => cur.name).join(", ")}
            </p>
          ) : null}
          <p>
            <span>Languages: </span>
            {country.languages.map((lang) => lang.name).join(", ")}
          </p>
        </div>
      </div>
      {country.borders && (
        <div className="my-5 md:flex md:gap-5 md:items-center">
          <span className="font-bold">Border Countries:</span>
          <ul className="my-2 flex gap-5 flex-wrap">
            {getBoundaryCountries(country.borders).map(
              (border) =>
                border && (
                  <Link
                    key={border.name}
                    className="px-2 py-1 min-w-[100px] text-center shadow-md rounded-md bg-card"
                    href={`/country/${border.alpha2Code}`}
                  >
                    {border.name}
                  </Link>
                )
            )}
          </ul>
        </div>
      )}
    </article>
  );
}
