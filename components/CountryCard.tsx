import Image from "next/image";
import Link from "next/link";

export default function CountryCard({
  country: {
    flags: { svg, alt },
    name: { official },
    cca3,
    ...props
  },
}: {
  country: CountrySummary;
}) {
  return (
    <Link href={`/country/${cca3}`}>
      <figure className="w-full h-full">
        <Flag src={svg} alt={alt} />
        <Summary name={official} {...props} />
      </figure>
    </Link>
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
  capital: string[];
};

function Summary({ name, population, region, capital }: SummaryProps) {
  return (
    <figcaption className="p-5">
      <h3 className="text-lg font-bold h-20">{name}</h3>
      <ol className="mt-3 text-sm">
        <li className="mt-1">
          <span className="font-bold">Population:</span>{" "}
          {population.toLocaleString()}
        </li>
        <li className="mt-1">
          <span className="font-bold">Region:</span> {region}
        </li>
        {capital.length > 0 && (
          <li className="mt-1">
            <span className="font-bold">Capital:</span> {capital.join(", ")}
          </li>
        )}
      </ol>
    </figcaption>
  );
}
