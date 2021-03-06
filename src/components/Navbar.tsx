import { Avatar } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  const isSignedIn = false;

  return (
    <nav role="nav" className="top-0 flex w-full bg-white  shadow ">
      <ul
        id="nav"
        className="top-0 m-2 flex w-full items-center justify-between bg-white p-4 text-xl text-white "
      >
        <li className="space-x-4">
          <Link rel="home" href={`/`} key="home">
            <a className="rounded bg-black  p-3 px-4 font-medium uppercase ">
              Home
            </a>
          </Link>
        </li>

        <li>
          {!isSignedIn ? (
            <Link rel="sign-in" href={`/sign-in`} key="signIn">
              <a className="rounded bg-green-500 p-3 px-4 font-medium uppercase text-white">
                Sign in
              </a>
            </Link>
          ) : (
            <Avatar />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
