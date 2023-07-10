import { Country, getCountriesByPageNum } from "@/lib/getCountries";
import { useEffect, useState } from "react";

export default function useCountries(pageNum = 1) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    const { countries, hasNext } = getCountriesByPageNum(pageNum);
    setCountries((prev) => [...prev, ...countries]);
    setHasNext(hasNext);
  }, [pageNum]);

  return { countries, hasNext };
}
