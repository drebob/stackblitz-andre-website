import { FC } from 'react';
import { Projects } from './components/Projects';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is the first version of my website :) whaoooooo </p>
      <Projects />
    </div>
  );
};
