import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const submitHandler = (event: { preventDefault: () => void }) => {
    toast.error('Sorry! Signing in is disbaled');
    event.preventDefault();
  };

  return (
    <section className="flex items-center justify-center">
      <Toaster></Toaster>
      <div className="mx-4 mt-4 flex max-w-2xl flex-col rounded-2xl bg-white p-10 md:mx-auto">
        <div className="mb-5 space-y-2">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-slate-400">
            Once you have signed in you can create new events, RSVP to others
            and view all recent movie releases
          </p>
        </div>{' '}
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          <div>
            <div className="flex w-full flex-col">
              <label htmlFor="title" className="text-xl font-medium">
                Username
              </label>
              <input
                required
                type="text"
                className="rounded-lg border-2 border-gray-300 p-2"
                placeholder="username"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="first" className="mt-2 text-xl font-medium">
                Email
              </label>
              <input
                required
                type="email"
                className="mt-2 rounded-lg border-2 border-gray-300 p-2"
                placeholder="email"
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-lg border-2 border-black bg-green-500 p-2"
          >
            Continue
          </button>
        </form>{' '}
      </div>
    </section>
  );
};

export default Form;
