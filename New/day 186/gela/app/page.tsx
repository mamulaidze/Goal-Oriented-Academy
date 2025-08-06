import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
       <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
    </div>
  );
}
