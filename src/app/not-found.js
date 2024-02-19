import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1>Page Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Home</Link>
    </div>
  );
}
