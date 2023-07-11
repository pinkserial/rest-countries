import Detail from "@/components/Detail";
import { getCountry } from "@/lib/getCountries";
import Image from "next/image";

export default function CountryPage({
  params: { code },
}: {
  params: { code: string };
}) {
  const country = getCountry(code);

  if (!country) {
    // go to 404 page later
    return;
  }

  return (
    <section className="md:flex md:justify-evenly">
      <Image
        className="w-full lg:w-[580px] aspect-video"
        src={country.flag}
        alt={country.name}
        width={900}
        height={780}
      />
      <Detail country={country} />
    </section>
  );
}
