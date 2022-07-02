import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

interface EventProps {
  title: string;
  description?: string;
  date?: string;
}

const Event: FC<EventProps> = ({ title, description, date }) => {
  const titleHander = (input: string) => {
    return input.split(' ').join('-');
  };

  return (
    <div className="flex w-full flex-col items-center space-y-4 rounded border-2 border-black bg-green-500 p-6 sm:space-y-0 md:items-stretch">
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <h3 className="text-center text-3xl font-medium sm:text-left">
          {title}
        </h3>
        <Link href={`events/${titleHander(title)}`}>
          <button className="rounded border-2 border-black p-3  px-4 font-medium text-black hover:bg-black hover:text-white">
            See more
          </button>
        </Link>
      </div>
      <div className="flex h-auto w-auto flex-col">
        <span>{date}</span>
        <p className="hidden text-black sm:inline">{description}</p>
      </div>
    </div>
  );
};
export default Event;
