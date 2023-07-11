function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12 19l-7-7l7-7m7 7H5"
      ></path>
    </svg>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="my-20">
        <button
          className="px-7 py-2 text-sm rounded-lg shadow-lg bg-card flex items-center gap-1"
          type="button"
        >
          <ArrowLeft />
          Back
        </button>
      </div>
      {children}
    </>
  );
}