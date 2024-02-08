import * as React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background: React.FC = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    return Promise.resolve();
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 50,
          },
          links: {
            enable: true,
            opacity: 0.5,
          },
          move: {
            enable: true,
          },
        },
      }}
      
    />
  );
};

export default Background;