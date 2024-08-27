import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-10 bg-white z-40 flex items-center">
          <Link className="text-black text-3xl ml-2" href="/">YuugouOhno</Link>
        </header>
    );
  }