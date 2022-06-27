import React from 'react';

const Info = () => {
  return (
    <div className="flex max-w-lg flex-col items-start space-y-4 rounded border-2 border-black bg-green-500 p-8 text-black shadow-lg">
      <div>
        <h3 className="text-2xl">Featured Event</h3>
      </div>
      <span className="text-xs text-black">30/06/2022</span>
      <p className="text-black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        debitis repellendus consequatur quam corrupti illum rerum officiis
        repudiandae
      </p>
      <button className="rounded bg-black p-3 px-5 font-medium uppercase text-white">
        Read more
      </button>
    </div>
  );
};

export default Info;
