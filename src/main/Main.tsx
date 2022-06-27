import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main: FC<IMainProps> = ({ meta }) => (
  <div id="main" className="w-full space-y-6 bg-black px-1 antialiased">
    {meta}
    <h1 role="heading" className="mt-12 text-6xl font-medium text-green-500">
      {AppConfig.title}
    </h1>
    <p className="text-white">{AppConfig.description}</p>
    <Link href="./events">
      <button
        role="link"
        className="rounded bg-green-500 p-3 px-4 font-medium uppercase text-white"
      >
        Events
      </button>
    </Link>
  </div>
);

export { Main };
