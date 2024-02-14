import { FC, useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import './style.css';
import { Experience, About, Title, SocialMedia, Nav } from './components';
import { ISourceOptions } from '@tsparticles/engine';

// Define your background options outside the component
const backgroundOptions: { [key: string]: ISourceOptions } = {
  background1: {
    autoPlay: true,
    background: {
      "color": {
        "value": "#bada55"
    },
      opacity: 0,
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    detectRetina: true,
    absorbers: {
      orbits: true,
      destroy: true,
      opacity: 1,
      color: "#000",
      size: {
        value: 5,
        limit: 10,
        random: false,
        density: 50
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "attract",
        },
      },
        modes: {
          attract: {
          density: 5000
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
      },
    },
    
    particles: {
      number: {
        value: 500,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
      },
      size: {
        value: {
          min: 1,
          max: 2,
        },
      },
      links: {
        color: {
          value: "#b4d455",
        },
      },
      move: {
        direction: "top",
        enable: true,
        speed: 0.5,
      },
    },
    pauseOnBlur: true,
    zLayers: 100,
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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Assuming your sections have a 'section' tag
  const navLinks = document.querySelectorAll('.nav a'); // Your nav links

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);

          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.parentElement.classList.add('active');
            } else {
              link.parentElement.classList.remove('active');
            }
          });
        }
      });
    },
    { rootMargin: '0px', threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
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
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background1')}>BG 1</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background2')}>BG 2</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background3')}>BG 3</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background4')}>BG 4</button></li>
              </ul>
              <SocialMedia />
            </div>
            <div>

            </div>
          </div>
          <div className={'lg:w-1/2'}>
          <div><About /></div>
      <div><Experience /></div>
          </div>
        </div>
      </div>
    </div>

  )


};