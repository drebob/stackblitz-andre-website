import * as React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background: React.FC = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // Handle loaded particles
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // Your particles configuration
      }}
    />
  );
};

export default Background;

