"use client";

import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

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

const filterItem = [
  { title: "Asia", value: "asia", path: "/region/asia" },
  { title: "Africa", value: "africa", path: "/region/africa" },
  { title: "America", value: "america", path: "/region/america" },
  { title: "Europe", value: "europe", path: "/region/europe" },
  { title: "Oceania", value: "oceania", path: "/region/oceania" },
];

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();

  const activeItem = filterItem.find((item) => item.path === pathname);

  const handleChange = (v: React.SetStateAction<string>) => {
    router.push(`/region/${v.toString().toLowerCase()}`);
  };

  return (
    <Listbox value={activeItem?.value ?? ""} onChange={handleChange}>
      <Listbox.Button className="p-5 mt-10 md:mt-0 mx-auto md:mx-0 rounded-lg w-52 bg-card flex items-center shadow-lg">
        <span className="flex-1">
          {activeItem?.title ?? "Filter by region"}
        </span>
        <FilterIcon className="h-auto stroke-foreground" />
      </Listbox.Button>
      <Listbox.Options className="mt-3 absolute top-full w-1/2 md:w-52 right-1/4 md:right-0 bg-card rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden">
        {filterItem.map((item) => (
          <Listbox.Option key={item.value} value={item.value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  "rounded-lg py-2 px-2 flex items-center cursor-pointer gap-1",
                  selected && "text-sky-500",
                  active && "bg-slate-50 dark:bg-slate-600/30"
                )}
              >
                <span className="flex-1 text-center ">{item.title}</span>
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
