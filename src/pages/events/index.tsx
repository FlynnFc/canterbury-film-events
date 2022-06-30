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
            title="Top Gun Marathon"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni autem fugit eveniet hic id placeat cupiditate doloribus reprehenderit accusamus in? Eius molestiae placeat non aspernatur sed adipisci eveniet quis omnis."
          ></Event>
          <Event
            title="90's Film Dress-up Party"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni autem fugit eveniet hic id placeat cupiditate doloribus reprehenderit accusamus in? Eius molestiae placeat non aspernatur sed adipisci eveniet quis omnis."
          ></Event>
          <Event
            title="Film Society Pub Quiz"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni autem fugit eveniet hic id placeat cupiditate doloribus reprehenderit accusamus in? Eius molestiae placeat non aspernatur sed adipisci eveniet quis omnis."
          ></Event>
        </div>
      </div>
    </section>
  );
};
export default Events;
