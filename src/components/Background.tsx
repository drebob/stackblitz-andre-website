import { FC, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface BackgroundProps {
  options: ISourceOptions; // Accept options as a prop
}

const Background: FC<BackgroundProps> = ({ options: particlesOptions }) => {
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

  const options: ISourceOptions = useMemo(() => ({
    // Particles options
    background: {
      color: { value: "#9c27b0" },
    },
    particles: {
      number: {
        value: 70,
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.6,
      },
      size: {
        value: 3,
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 100,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect",
        },
      },
      modes: {
        connect: {
          distance: 180,
          lineLinked: {
            opacity: 0.5,
          },
          radius: 60,
        },
      },
    },
    detectRetina: true,
  }), []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />
    );
  }

  return null; // It's often more conventional to return null in React for conditional rendering
};

export default Background;