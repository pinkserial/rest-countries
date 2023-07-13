import Detail from "@/components/Detail";
import createUrl from "@/lib/createUrl";
import Image from "next/image";

async function getCountry(code: string): Promise<CountryDetail> {
  const searchParams = new URLSearchParams({
    fields:
      "name,population,region,subregion,capital,flags,tld,currencies,languages,borders",
  });

  const response = await fetch(
    createUrl(`${process.env.API_BASE_URL}/alpha/${code}`, searchParams)
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function CountryPage({
  params: { code },
}: {
  params: { code: string };
}) {
  const country = await getCountry(code);
  const {
    flags: { svg, alt },
  } = country;

  return (
    <section className="my-24 lg:flex lg:justify-center lg:flex-wrap lg:gap-16">
      <Image
        className="w-full lg:w-1/2 xl:w-2/5 aspect-video"
        src={svg}
        alt={alt}
        width={900}
        height={780}
      />
      <Detail country={country} />
    </section>
  );
}
