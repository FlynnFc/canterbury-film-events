import type { FC } from 'react';
import React from 'react';

interface Props {
  imgsource: string;
  firstname: string;
  age?: number;
}

export const Avatar: FC<Props> = ({ imgsource, firstname }) => {
  return (
    <div>
      This is a profile picture
      <h1>{firstname}</h1>
      <img alt="Profile picture" src={imgsource} />
    </div>
  );
};
