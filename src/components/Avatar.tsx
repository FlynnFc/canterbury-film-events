import type { FC } from 'react';
import React from 'react';

interface Props {
  imgsource: string;
  firstname?: string;
  age?: number;
}

export const Avatar: FC<Props> = ({ imgsource, firstname }) => {
  return (
    <div className="h-12 w-12 rounded-full bg-black">
      <img alt="" src={imgsource} />
    </div>
  );
};
