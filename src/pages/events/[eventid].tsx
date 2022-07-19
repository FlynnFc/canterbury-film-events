import { Avatar } from '@mui/material';
import React, { useState } from 'react';

const Eventid = () => {
  const [userIsGoing, setUserIsGoing] = useState<boolean>(false);

  const buttonHandler = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setUserIsGoing((userIsGoing) => !userIsGoing);
  };

  return (
    <div className="m-auto my-4 flex max-w-2xl flex-col justify-center space-y-6 rounded-2xl bg-white p-10">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl font-semibold underline decoration-green-500 decoration-4 underline-offset-4">
            Event Title
          </h1>
          <Avatar />
        </div>
        <h3 className="text-base">{new Date().toString()}</h3>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          neque quas doloribus quaerat quod itaque quidem eveniet alias
          voluptate veritatis. Quos, perspiciatis sit repellendus non quis
          pariatur vero quisquam. Nisi.
        </p>
      </div>
      <div>
        <button
          onClick={buttonHandler}
          className={
            !userIsGoing
              ? 'rounded  bg-white border-2 border-black hover:bg-black hover:text-white p-3 px-4 font-medium uppercase text-black transition ease-in-out delay-150 '
              : 'rounded  bg-black border-2 border-black p-3 px-4 font-medium uppercase text-white "animate-bounce'
          }
        >
          {userIsGoing ? 'I am coming ☑️' : 'I want to go'}
        </button>
      </div>
      <div className="flex justify-evenly">
        <span>Instagram</span>
        <span>Facebook</span>
        <span>website</span>
        <span>Twitter</span>
      </div>
    </div>
  );
};

export default Eventid;
