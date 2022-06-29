import Link from 'next/link';
import React from 'react';

import Event from '@/components/Event';

const Events = () => {
  return (
    <section className="items-center justify-center">
      <div className=" mx-4 mt-4 flex max-w-6xl flex-col  justify-between rounded-2xl bg-white p-10 md:mx-auto">
        <div className="my-4 flex flex-row justify-between">
          <h1 className="text-2xl font-semibold text-black lg:text-4xl ">
            Events
          </h1>{' '}
          <Link rel="events" href={`events/create`} key="create">
            <button className="rounded bg-black p-3 px-4 font-medium uppercase text-white">
              Create new event
            </button>
          </Link>
        </div>
        <div className="space-y-8">
          <Event
            title="Top Gun"
            description="you should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need this"
          ></Event>
          <Event
            title="Test Event"
            description="you should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need this"
          ></Event>
          <Event
            title="Test Event"
            description="you should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need thisyou should not need this"
          ></Event>
        </div>
      </div>
    </section>
  );
};
export default Events;
