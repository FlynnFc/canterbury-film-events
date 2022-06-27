import type { FC } from 'react';
import React from 'react';

interface infoProps {
  color?: string;
  title: string;
  description: string;
  buttonAction?: string;
}

const Info: FC<infoProps> = ({
  color = 'green-500',
  title = 'Featured Events',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae odio labore iure ex repellat? Ullam, adipisci rerum. Harum obcaecati eligendi magni expedita aut soluta illum aliquid sit magnam quam?',
  buttonAction = 'Read More',
}) => {
  return (
    <div
      className={`flex max-w-lg flex-col items-start space-y-4 rounded border-2 border-black bg-${color} p-8 text-black shadow-lg lg:m-4`}
    >
      <div>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <span className="text-xs text-black">30/06/2022</span>
      <p className="text-black">{description}</p>
      <button className="rounded bg-black p-3 px-5 font-medium uppercase text-white">
        {buttonAction}
      </button>
    </div>
  );
};

export default Info;
