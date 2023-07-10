import { Country } from "@/lib/getCountries";
import Image from "next/image";

export default function CountryCard({
  country: { flag, name, ...props },
}: {
  country: Country;
}) {
  return (
    <figure className="w-full h-full">
      <Flag src={flag} alt={name} />
      <Summary name={name} {...props} />
    </figure>
  );
}

function Flag({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      className="w-full h-1/2 object-cover"
      src={src}
      alt={alt}
      width={300}
      height={300}
    />
  );
}

type SummaryProps = {
  name: string;
  population: number;
  region: string;
  capital?: string;
};

function Summary({ name, population, region, capital }: SummaryProps) {
  return (
    <figcaption className="p-5">
      <h3 className="text-lg font-bold">{name}</h3>
      <ol className="mt-3 text-sm">
        <li className="mt-1">
          <span className="font-bold">Population:</span>{" "}
          {population.toLocaleString()}
        </li>
        <li className="mt-1">
          <span className="font-bold">Region:</span> {region}
        </li>
        {capital && (
          <li className="mt-1">
            <span className="font-bold">Capital:</span> {capital}
          </li>
        )}
      </ol>
    </figcaption>
  );
}
