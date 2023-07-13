import Filter from "@/components/Filter";
import Search from "@/components/Search";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="my-10 md:h-14 md:flex md:justify-between relative">
        <Search />
        <Filter />
      </div>
      {children}
    </>
  );
}
