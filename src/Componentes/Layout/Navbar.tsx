import React from 'react';
import Link from 'next/link';
import ButtonTheme from '../helpers/ButtonTheme';

function Navbar() {
  return (
    <nav className="flex dark:bg-slate-600 bg-white m-0 p-0 flex-row dark:shadow-gray-200 justify-around align-middle shadow-2xl">
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
  );
}

export default Navbar;
