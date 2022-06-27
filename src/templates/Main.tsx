import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div id="main" className="w-full space-y-6 bg-black px-1 antialiased">
    {props.meta}
    <h1 className="mt-12 text-6xl font-medium text-green-500">All events</h1>
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla unde
      doloribus deleniti accusamus laboriosam consequuntur, mollitia provident
      facilis sed iure distinctio exercitationem? Excepturi dolores quia omnis
      quibusdam, deleniti corporis esse.
    </p>
    <button className="rounded bg-green-500 p-3 px-4 font-medium uppercase text-white">
      Events
    </button>
  </div>
);

export { Main };
