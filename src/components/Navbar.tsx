import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex bg-white">
      <ul className=" top-0 flex w-full items-center justify-between bg-white p-4 text-xl text-black ">
        <li className="space-x-4">
          <Link rel="home" href={`/home`} key="home">
            <a className="rounded bg-green-500 p-3 px-4 font-medium uppercase">
              Home
            </a>
          </Link>
          <Link href="#">
            <a className="rounded p-3 px-4 font-medium uppercase outline outline-1 outline-green-500 hover:bg-green-500 hover:outline-none">
              Tournements
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a className="w-full rounded bg-black p-3 px-4 font-medium uppercase text-white">
              Sign in
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
