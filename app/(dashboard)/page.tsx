import CountryList from "@/components/CountryCardList";
import createUrl from "@/lib/createUrl";

async function getAllCountries(): Promise<CountrySummary[]> {
  const searchParams = new URLSearchParams({
    fields: "name,population,region,capital,flags,cca3",
  });

  const response = await fetch(
    createUrl(`${process.env.API_BASE_URL}/all`, searchParams)
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <>
      <CountryList countries={countries} />
    </>
  );
}

// export default function Home() {
//   const [pageNum, setPageNum] = useState(1);
//   const { countries, hasNext } = useCountries(pageNum);

//   const observer = useRef<IntersectionObserver | null>(null);
//   const lastItemRef = (node: HTMLLIElement) => {
//     observer.current?.disconnect();

//     observer.current = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && hasNext) {
//         setPageNum((prev) => prev + 1);
//       }
//     });

//     if (node) {
//       observer.current.observe(node);
//     }
//   };

//   return (
//     <>
//       <div className="my-10 md:h-14 md:flex md:justify-between relative">
//         <Search />
//         <Filter />
//       </div>
//       <CountryList ref={lastItemRef} countries={countries} />
//     </>
//   );
// }
