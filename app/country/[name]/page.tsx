import Detail from "@/components/Detail";
import { getCountry } from "@/lib/getCountries";
import Image from "next/image";
import Link from "next/link";

export default function CountryPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = getCountry(name);

  if (!country) {
    // go to 404 page later
    return;
  }

  return (
    <section className="flex justify-evenly">
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
