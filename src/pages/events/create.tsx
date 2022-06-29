import type { ChangeEvent } from 'react';
import { useState } from 'react';
// import { useState } from 'react';

const Create = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  // const [formResults, setFormResults] = useState({});

  const titleHander = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const fixedVal = val.split(' ').join('-');
    setCurrentTitle(() => fixedVal);
  };

  return (
    <section className="flex items-center justify-center">
      <div className="mx-4 mt-4 flex max-w-2xl flex-col rounded-2xl bg-white p-10 md:mx-auto">
        <div className="mb-10 space-y-2">
          <h1 className="text-2xl font-semibold">Creating a new event</h1>
          <p className="text-slate-400">
            Once you create your event a moderator will verify its legitimacy
            and then publish to the events page. This can sometimes take 2-3
            days.
          </p>
        </div>{' '}
        <form
          action={`${currentTitle}`}
          method="post"
          className="flex flex-col space-y-2"
        >
          <label htmlFor="title" className="text-xl font-medium">
            Event Title
          </label>
          <input
            required
            onChange={(e) => titleHander(e)}
            type="text"
            className="rounded-lg border-2 border-gray-300 p-2"
            placeholder="event title"
          />
          <label htmlFor="last" className="text-xl font-medium">
            Description
          </label>
          <input
            required
            type="text"
            className="rounded-lg border-2 border-gray-300 p-2"
            placeholder="description "
          />
          <div className="flex w-full flex-col">
            <label htmlFor="first" className="mt-2 text-xl font-medium">
              Contact email
            </label>
            <p className="text-slate-400">This will not be shared</p>
            <input
              required
              type="email"
              className="mt-2 rounded-lg border-2 border-gray-300 p-2"
              placeholder="email"
            />
          </div>
          <div id="socials">
            <div className="flex w-full flex-col">
              <label htmlFor="first" className="my-2 text-xl font-medium">
                Socials
              </label>
              <div className="mb-4 flex w-full flex-wrap justify-start">
                <input
                  type="url"
                  className="box-border w-full  rounded-t-lg border-2 border-b-0 border-gray-300 p-2"
                  placeholder="instagram"
                />
                <input
                  type="url"
                  className="box-border w-full   border-2 border-gray-300 p-2"
                  placeholder="facebook"
                />
                <input
                  type="url"
                  className="box-border w-full  border-x-2  border-gray-300 p-2"
                  placeholder="twitter"
                />
                <input
                  type="url"
                  className="box-border w-full  rounded-b-lg border-2 border-gray-300 p-2"
                  placeholder="website"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="rounded-lg border-2 border-black bg-green-500 p-2"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
};
export default Create;
