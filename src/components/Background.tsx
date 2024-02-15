import React,{ FC, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface BackgroundProps {
  options: ISourceOptions; // Accept options as a prop
}

const Background: FC<BackgroundProps> = React.memo(({ options }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Initialization logic
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options} // Fixed to use the prop directly
      />
    );
  }

  return null; // It's often more conventional to return null in React for conditional rendering
});

export default Background;