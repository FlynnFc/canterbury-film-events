import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import Event from './Event';

interface InfoProps {
  event?: boolean;
  wide?: boolean;
  color?: string;
  title: string;
  description?: string;
  buttonAction?: string;
}

const Info: FC<InfoProps> = ({
  event = false,
  wide = false,
  color = 'green-500',
  title = 'Featured Events',
  description = 'Lorem ipsum  dolor sit amet consectetur adipisicing elit. Explicabo recusandae odio labore iure ex repellat? Ullam, adipisci rerum. Harum obcaecati eligendi magni expedita aut soluta illum aliquid sit magnam quam?',
}) => {
  return (
    <div
      className={`${
        !wide
          ? `2xl:max-w-md hidden 2xl:flex lg:visible w-full flex-col justify-around items-start rounded border-2 border-black bg-${color} p-8 text-black shadow-lg lg:my-4 w-full h-full`
          : `2xl:max-w-7xl space-y-4 flex flex-col justify-around item-center md:items-start rounded border-2 border-black bg-${color} p-8 text-black shadow-lg lg:my-4 w-full h-full`
      } `}
    >
      <div>
        <h3 className="text-3xl">{title}</h3>
        <p></p>
      </div>
      {event ? (
        <Event
          date="10/07/2022"
          title="Top Gun Marathon"
          description="Want to experience the new Top Gun film with a fresh memory of the original? On the 10th of July We are holding a back to back Top Gun marathon screening at the Gulbenkian."
        ></Event>
      ) : (
        <p className="text-sm lg:text-lg">{description}</p>
      )}
      {!event ? (
        <Link rel="sign-in" href={`/sign-in`} key="signIn">
          <a className="rounded bg-black p-3 px-5 font-medium uppercase text-white">
            Sign in
          </a>
        </Link>
      ) : null}
    </div>
  );
};

export default Info;
