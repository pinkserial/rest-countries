import Image from "next/image";
import Link from "next/link";

export default function CountryPage({
  param: name,
}: {
  param: { name: string };
}) {
  return (
    <section className="flex border border-red-500 gap-10">
      <Image
        className="h-[780px] shrink-0"
        src="https://flagcdn.com/be.svg"
        alt="belgium flag"
        width={900}
        height={780}
      />
      <div className="flex-1 border border-blue-500 flex flex-col justify-center gap-5">
        <h1 className="text-xl font-bold">Belgium</h1>
        <ul className="border border-green-600 flex flex-col flex-wrap h-1/2 gap-2">
          <li>
            <span className="font-bold">Native Name:</span>Belgie
          </li>
          <li>
            <span>Native Name:</span>Belgie
          </li>
          <li>
            <span>Native Name:</span>Belgie
          </li>
          <li>
            <span>Native Name:</span>Belgie
          </li>
          <li>
            <span>Native Name:</span>Belgie
          </li>
          <li>
            <span>Native Name:</span>Belgie
          </li>
          <li>
            <span>Native Name:</span>Belgie
          </li>
          <li>
            <span>Native Name:</span>Belgie
          </li>
        </ul>
        <div>
          <span>Border Countries:</span>
          <ul>
            <Link href="/">France</Link>
            <Link href="/">France</Link>
            <Link href="/">France</Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
