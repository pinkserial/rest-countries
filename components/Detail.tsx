import createUrl from "@/lib/createUrl";
import Link from "next/link";

async function getCountryNames(
  codes: string[]
): Promise<{ name: { common: string }; cca3: string }[]> {
  const searchParams = new URLSearchParams({
    codes: codes.join(","),
    fields: "name,cca3",
  });

  const response = await fetch(
    createUrl(`${process.env.API_BASE_URL}/alpha`, searchParams)
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

async function BorderCountries({ borders }: { borders: string[] }) {
  const borderCountries = await getCountryNames(borders);

  return (
    <div className="my-5 md:flex md:gap-5 md:items-center">
      <span className="font-bold">Border Countries:</span>
      <ul className="my-2 flex gap-5 flex-wrap">
        {borderCountries.map((border) => (
          <Link
            key={border.name.common}
            className="px-2 py-1 min-w-[100px] text-center shadow-md rounded-md bg-card"
            href={`/country/${border.cca3}`}
          >
            {border.name.common}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default async function Detail({ country }: { country: CountryDetail }) {
  const native = country.name.nativeName;

  return (
    <article className="lg:flex lg:flex-col lg:justify-center lg:gap-5 ">
      <h1 className="my-10 text-2xl font-bold">{country.name.official}</h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-1">
          <p>
            <span>Native Name: </span>
            {Object.values(native)[0].official}
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
            {country.tld.join(", ")}
          </p>
          {country.currencies.length > 0 ? (
            <p>
              <span>Currencies: </span>
              {Object.values(country.currencies)
                .map((cur) => cur.name)
                .join(", ")}
            </p>
          ) : null}
          <p>
            <span>Languages: </span>
            {Object.values(country.languages).join(", ")}
          </p>
        </div>
      </div>
      {country.borders.length > 0 && (
        <BorderCountries borders={country.borders} />
      )}
    </article>
  );
}
