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
      <VideoHeader />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
