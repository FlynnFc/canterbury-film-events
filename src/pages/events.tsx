import Link from 'next/link';
import React from 'react';

const Events = () => {
  return (
    <div className="mt-24 flex justify-center">
      {' '}
      <Link rel="events" href={`events/create`} key="create">
        <a className="rounded bg-black p-3  px-4 font-medium uppercase text-white">
          Create new event
        </a>
      </Link>
    </div>
  );
};
export default Events;
