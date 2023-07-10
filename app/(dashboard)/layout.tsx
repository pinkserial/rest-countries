import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { ReactNode } from "react";

export default function DashBoardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="mt-10 h-14 flex justify-between relative">
        <Search />
        <Filter />
      </div>
      {children}
    </>
  );
}
