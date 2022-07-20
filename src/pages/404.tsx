// eslint-disable-next-line prettier/prettier
import Image from 'next/image';
import Link from 'next/link';

import gif from '@/public/404caveman.gif';

const Custom404 = () => {
  return (
    <section className="mt-24 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <h3 className="m-0">I think you are lost, this page does not exist.</h3>
      <Link rel="home" href={`/`} key="home">
        <a className="rounded bg-black p-3 px-4  text-3xl font-medium uppercase text-white">
          Home
        </a>
      </Link>
      <div>
        <Image src={gif} alt="gif of caveman" />
      </div>
    </section>
  );
};

export default Custom404;
