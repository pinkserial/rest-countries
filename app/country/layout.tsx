import BackBtn from "@/components/BackBtn";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="my-10">
        <BackBtn />
      </div>
      {children}
    </>
  );
}
