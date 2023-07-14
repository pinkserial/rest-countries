import CountryCardList from "@/components/CountryCardList";

async function getCountries(query: string) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  const countries = await getCountries(searchParams.q);

  return countries.length > 0 ? (
    <CountryCardList countries={countries} />
  ) : (
    <h1>No search results</h1>
  );
}
