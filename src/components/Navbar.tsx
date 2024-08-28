import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="text-xl text-red-400 z-50">
      <ul className="flex space-x-4">
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
          <Link href="/project">Project</Link>
        </li>
        <li>
          <Link href="/article">Article</Link>
        </li>
      </ul>
    </div>
  );
}
