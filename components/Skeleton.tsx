export default function SkeletonList() {
  return (
    <ol className="px-10 md:px-0 my-20 md:my-10 md:grid md:grid-cols-[repeat(auto-fill,_265px)] md:justify-between md:gap-10 lg:gap-5">
      {Array.from({ length: 10 }).map((_, idx) => (
        <li
          key={idx}
          className="my-16 md:my-0 h-96 rounded-lg bg-card shadow-lg overflow-hidden"
        >
          <SkeletonCard />
        </li>
      ))}
    </ol>
  );
}

function SkeletonCard() {
  return (
    <figure className="h-full animate-pulse shadow-lg flex flex-col">
      <div className="bg-slate-300 h-1/2"></div>
      <figcaption className="px-3 flex flex-col justify-center flex-1">
        <h3 className="rounded-lg h-8 bg-slate-300"></h3>
        <ol className="mt-3">
          <li className="mt-1 h-5 rounded-lg bg-slate-300"></li>
          <li className="mt-1 h-5 rounded-lg bg-slate-300"></li>
          <li className="mt-1 h-5 rounded-lg bg-slate-300"></li>
        </ol>
      </figcaption>
    </figure>
  );
}
