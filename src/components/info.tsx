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
          title="Top Gun Marathon"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni autem fugit eveniet hic id placeat cupiditate doloribus reprehenderit accusamus in? Eius molestiae placeat non aspernatur sed adipisci eveniet quis omnis."
        ></Event>
      ) : (
        <p className="text-sm lg:text-lg">{description}</p>
      )}
      {!event ? (
        <button className="rounded bg-black p-3 px-5 font-medium uppercase text-white">
          {buttonAction}
        </button>
      ) : null}
    </div>
  );
};

export default Info;
