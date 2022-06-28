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
  buttonAction = 'Read More',
}) => {
  return (
    <div
      className={`${
        !wide
          ? `2xl:max-w-md hidden 2xl:flex lg:visible w-full flex-col justify-around items-start rounded border-2 border-black bg-${color} p-8 text-black shadow-lg lg:m-4 w-full h-full`
          : `space-y-4 flex flex-col justify-around item-center md:items-start rounded border-2 border-black bg-${color} p-8 text-black shadow-lg lg:m-4 w-full h-full`
      } `}
    >
      <div>
        <h3 className="text-3xl">{title}</h3>
      </div>
      {event ? (
        <Event
          title="Test Event"
          description="you should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need this"
        ></Event>
      ) : (
        <p className="text-sm lg:text-lg">{description}</p>
      )}
      <button className="rounded bg-black p-3 px-5 font-medium uppercase text-white">
        {buttonAction}
      </button>
    </div>
  );
};

export default Info;
