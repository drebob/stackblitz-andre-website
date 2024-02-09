import { FC, useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import './style.css';
import { Experience, About, Title, SocialMedia, Nav } from './components';
import { ISourceOptions } from '@tsparticles/engine';

// Define your background options outside the component
const backgroundOptions: { [key: string]: ISourceOptions } = {
  background1: {
    background: {
      color: { value: "#0d47a1" },
    },
    particles: {
      number: {
        value: 80,
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  },
  background2: {
    background: {
      color: { value: "#ff5722" },
    },
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: 4,
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 200,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          size: 8,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
      },
    },
  },
  background3: {
    background: {
      color: { value: "#4caf50" },
    },
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.4,
      },
      size: {
        value: 5,
      },
      move: {
        enable: true,
        speed: 6,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  },
  background4: {
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
  },
};



export const App: FC = () => {
  const [activeBackground, setActiveBackground] = useState<string>('background1');
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 } // Adjust threshold and rootMargin as needed
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }

      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []); 

  return (
    <div className="relative bg-black-gradient mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Background options={backgroundOptions[activeBackground]} />
      <div className="relative z-10">
        <div className={`lg:flex lg:justify-between lg:gap-4`}>
          <div className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:justify-between lg:flex-col lg:py-24`}>

            <div>
              <Title />
              <Nav activeSection={activeSection} />
              <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0"><button className='className="block hover:text-slate-200' onClick={() => setActiveBackground('background1')}>BG 1</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='className="block hover:text-slate-200' onClick={() => setActiveBackground('background2')}>BG 2</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='className="block hover:text-slate-200' onClick={() => setActiveBackground('background3')}>BG 3</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='className="block hover:text-slate-200' onClick={() => setActiveBackground('background4')}>BG 4</button></li>
              </ul>
              <SocialMedia />
            </div>
            <div>

            </div>
          </div>
          <div className={'lg:w-1/2'}>
          <div ref={aboutRef}><About /></div>
      <div ref={experienceRef}><Experience /></div>
          </div>
        </div>
      </div>
    </div>

  )


};