import Link from 'next/link';
import ButtonTheme from './ButtonTheme';

function Navbar() {
  return (
    <header className="bg-[#F3F4F6] pt-4 px-24 dark:bg-slate-600 ">
      <nav className="flex flex-col md:flex-row justify-around items-center w-full gap-4  p-2 rounded">
        <Link
          className="hover:underline hover:text-blue-600 text-yellow-600 dark:text-yellow-300 dark:hover:text-blue-400 dark:bg-slate-600"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:text-blue-600 text-yellow-600 dark:text-yellow-300 dark:hover:text-blue-400 dark:bg-slate-600"
          href="/courses"
        >
          Courses
        </Link>
        <Link
          className="hover:underline hover:text-blue-600 text-yellow-600 dark:text-yellow-300 dark:hover:text-blue-400 dark:bg-slate-600"
          href="/libraries"
        >
          Libraries
        </Link>
        <Link
          className="hover:underline hover:text-blue-600 text-yellow-600 dark:text-yellow-300 dark:hover:text-blue-400 dark:bg-slate-600"
          href="/credits"
        >
          Credits
        </Link>
        <ButtonTheme />
      </nav>
    </header>
  );
}

export default Navbar;
