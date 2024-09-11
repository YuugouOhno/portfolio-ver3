import Link from 'next/link';


const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-10 bg-white z-40 flex items-center justify-between px-4">
        <Link className="text-black text-3xl" href="/">YuugouOhno</Link>
      </header>
    );
}

export default Header