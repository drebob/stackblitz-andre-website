import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello you!</h1>
      <p>This is the first version of my website :) whaoooooo </p>
    </div>
  );
};
