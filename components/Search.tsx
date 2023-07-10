"use client";

import createUrl from "@/lib/createUrl";
import { useRouter, useSearchParams } from "next/navigation";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21l-4.3-4.3"></path>
      </g>
    </svg>
  );
}

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = e.target as HTMLFormElement;
    const search = value.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
      router.push(createUrl("/search", newParams));
    } else {
      router.push("/");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="px-3 rounded-lg flex w-[480px] h-full gap-2 bg-card shadow-lg"
    >
      <SearchIcon className="w-5 h-auto stroke-foreground" />
      {/* <p className="border border-sky-600">ABC</p> */}
      <input
        className="flex-1 bg-card outline-none"
        type="text"
        name="search"
        autoComplete="off"
        defaultValue={searchParams.get("q") || ""}
        placeholder="Search for a country..."
      />
    </form>
  );
}
