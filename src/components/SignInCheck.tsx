import Link from 'next/link';
import React from 'react';

export const SignInCheck = () => {
  return (
    <div className="mx-4 mt-4 flex max-w-2xl flex-col items-start space-y-4 rounded-2xl bg-white p-10 md:mx-auto">
      <p className="text-2xl font-medium">
        You need to be signed in to see this page.
      </p>
      <Link rel="sign-in" href={`/sign-in`} key="signIn">
        <a className="rounded bg-green-500 p-3 px-6 text-xl font-medium uppercase text-white">
          Sign in
        </a>
      </Link>
    </div>
  );
};
