"use client";

import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { useState, Fragment } from "react";

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
      ></path>
    </svg>
  );
}

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Filter({}) {
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <Listbox value={selectedRegion} onChange={setSelectedRegion}>
      <Listbox.Button className="rounded-lg w-52 bg-card flex items-center px-5 shadow-lg">
        <span className="flex-1">{selectedRegion || "Filter by Region"}</span>
        <FilterIcon className="h-auto stroke-foreground" />
      </Listbox.Button>
      <Listbox.Options className="mt-3 absolute w-52 top-full right-0 bg-card rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden">
        {regions.map((region) => (
          <Listbox.Option key={region} value={region} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  "rounded-lg py-2 px-2 flex items-center cursor-pointer gap-1",
                  selected && "text-sky-500",
                  active && "bg-slate-50 dark:bg-slate-600/30"
                )}
              >
                <span className="flex-1 text-center ">{region}</span>
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
