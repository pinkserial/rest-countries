"use client";

import CountryList from "@/components/CountryCardList";
import { useRef, useState } from "react";
import useCountries from "@/hooks/useCountries";

import Filter from "@/components/Filter";
import Search from "@/components/Search";

export default function Home() {
  const [pageNum, setPageNum] = useState(1);
  const { countries, hasNext } = useCountries(pageNum);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = (node: HTMLLIElement) => {
    observer.current?.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNext) {
        setPageNum((prev) => prev + 1);
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  };

  return (
    <>
      <div className="mt-10 h-14 flex justify-between relative">
        <Search />
        <Filter />
      </div>
      <CountryList ref={lastItemRef} countries={countries} />
    </>
  );
}
