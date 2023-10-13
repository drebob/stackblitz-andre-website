import { FC } from 'react';
import VideoHeader from './components/VideoHeader';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is the first version of my website :) whaoooooo </p>
      <VideoHeader />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
