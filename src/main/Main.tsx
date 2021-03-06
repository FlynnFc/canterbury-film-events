import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main: FC<IMainProps> = ({ meta }) => (
  <div
    id="main"
    className="flex w-full flex-col items-start justify-center space-y-6 bg-black px-1 antialiased lg:justify-center"
  >
    {meta}
    <h1
      role="heading"
      className="mt-2 text-2xl font-medium text-green-500 lg:text-6xl"
    >
      {AppConfig.title}
    </h1>
    <p className="text-sm text-white md:text-sm lg:text-lg">
      {AppConfig.description}
    </p>
    <Link href="./events">
      <button
        role="link"
        className="rounded bg-green-500 p-3 px-4 text-lg font-medium uppercase text-white"
      >
        Events
      </button>
    </Link>
  </div>
);

export { Main };
