"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-center text-lg">Something went wrong!</h1>
      <button
        className="p-2 bg-card rounded-lg shadow-lg font-bold hover:outline"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
