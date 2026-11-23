import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow accent">404 / PAGE NOT FOUND</p>
      <h1>A little off the path.</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="button button-primary">
        <ArrowLeft size={16} />
        Back to the portfolio
      </Link>
    </main>
  );
}
