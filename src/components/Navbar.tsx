import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed text-3xl text-red-400 z-50 ml-2 mt-10">
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/development">Development</Link>
        </li>
        <li>
          <Link href="/research">Research</Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
        <li>
          <Link href="/achievement">Achievement</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/article">Article</Link>
        </li>
      </ul>
    </div>
  );
}
