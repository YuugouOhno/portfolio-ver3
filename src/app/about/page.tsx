import Image from "next/image";
import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-6xl">
      About
      </p>
      <div className="">
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>

      <Link href="/achievement">Achievement</Link>

    </main>
  );
}
