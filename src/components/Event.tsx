import type { FC } from 'react';
import React from 'react';

interface EventProps {
  title: string;
  description?: string;
}

const Event: FC<EventProps> = ({ title, description }) => {
  return (
    <div className="flex w-full flex-col items-center rounded border-2 border-black bg-green-500 p-6 md:items-start">
      <div>
        <h3 className="text-3xl">{title}</h3>
      </div>
      <span>30/11/2022</span>
      <p className="hidden text-black sm:inline">{description}</p>
    </div>
  );
};
export default Event;
