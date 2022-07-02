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
        <p></p>
        <div className="space-y-8">
          <Event
            date="10/07/2022"
            title="Top Gun Marathon"
            description="Want to experience the new Top Gun film with a fresh memory of the original? On the 10th of July We are holding a back to back Top Gun marathon screening at the Gulbenkian."
          ></Event>
          <Event
            date="23/07/2022"
            title="Buzz Lightyear outdoor screening"
            description="This is a Relaxed Screening with socially distanced seating. All are welcome to this outdoor screening an experience you cannot miss."
          ></Event>
          <Event
            date="20/08/2022"
            title="90's Film Dress-up Party"
            description="The rules are simple. Choose any character from a film released in the 90s and dress in their most iconic outfit."
          ></Event>
          <Event
            date="21/08/2022"
            title="Film Society Pub Quiz"
            description="For Studnets that have stayed near/in Canterbury over the summer, there is a small Pub Quiz night on Sunday the 21st of August. The questions will range from films in the silet era all the way to modern day."
          ></Event>
        </div>
      </div>
    </section>
  );
};
export default Events;
