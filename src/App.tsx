import { FC, useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import './style.css';
import { Experience, About, Title, SocialMedia, Nav, CursorEffect } from './components';
import { ISourceOptions } from '@tsparticles/engine';


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
          distance: 25,
          duration: 0.4,
        },
      },
    },

    particles: {
      number: {
        value: 500,
      },
      color: {
        value: "#99f6e4",
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
          value: "#99f6e4",
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
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: "#99f6e4",
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: 4,
      },
      links: {
        enable: true,
        color: "#99f6e4",
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
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: "#99f6e4",
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
    particles: {
      number: {
        value: 70,
      },
      color: {
        value: "#99f6e4",
      },
      opacity: {
        value: 0.6,
      },
      size: {
        value: 3,
      },
      links: {
        enable: true,
        color: "#99f6e4",
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
  background5: {
    particles: {
      number: {
        value: 0,
      },
    },
  },
};

export const App: FC = () => {
  const [activeBackground, setActiveBackground] = useState<string>('background1');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Calculate dynamic threshold based on section height
    const calculateDynamicThreshold = (section) => {
      const viewportHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      // If the section height is greater than the viewport height, use a lower threshold
      if (sectionHeight > viewportHeight * 2) {
        return 0.25; // Adjust this value as needed
      } else {
        return 0.5; // Default threshold if section fits in the viewport
      }
    };


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

    // Disconnect previous observers and re-observe with dynamic threshold
    sections.forEach((section) => {
      observer.unobserve(section);
      const dynamicThreshold = calculateDynamicThreshold(section);
      const observerWithDynamicThreshold = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
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
        { rootMargin: '0px', threshold: dynamicThreshold }
      );
      observerWithDynamicThreshold.observe(section);
    });

    // Cleanup function to disconnect all observers
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []); // Dependency array remains empty to run once on mount

  return (
    <div className={'z-0 relative bg-black-gradient mx-auto min-h-screen px-12 py-12 font-sans md:px-12 md:py-20 lg:px-40 lg:py-0 xl:px-60'}>
      <CursorEffect />
      <Background options={backgroundOptions[activeBackground]} />
      <div className="relative z-10">
        <div className={`lg:flex lg:justify-between lg:gap-4`}>
          <div className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:justify-between lg:flex-col lg:py-24 xl:ml-9`}>
            <Title />
            <Nav activeSection={activeSection} />
            <SocialMedia />
          </div>
          <div className={'lg:w-1/2 lg:pb-24 xl:mb-9"'}>
            <About />
            <Experience />
            <section id="background" className={'flex flex-col invisible h-0 pt-0 md:visible md:pt-24 md:h-auto'}>
              <div className="sticky top-0 z-20 -ml-12 mb-4 w-screen bg-slate-900/75 px-12 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Backgrounds
                </h2>
              </div>
              <div className="text-center block m-auto pb-3 items-baseline font-medium text-xl leading-tight text-slate-200 group/link text-base">
                Click a button below to change your background
              </div>
              <ul className="flex flex-wrap justify-center items-center w-3/4 m-auto" aria-label="Background choices">
                <li><button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 m-1 text-md font-medium leading-5 text-teal-300' onClick={() => setActiveBackground('background1')}>Drifting Stars</button></li>
                <li><button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 m-1 text-md font-medium leading-5 text-teal-300 ' onClick={() => setActiveBackground('background2')}>Nodes</button></li>
                <li><button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 m-1 text-md font-medium leading-5 text-teal-300 ' onClick={() => setActiveBackground('background3')}>Air Traffic</button></li>
                <li><button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 m-1 text-md font-medium leading-5 text-teal-300 ' onClick={() => setActiveBackground('background4')}>Constellations</button></li>
                <li><button className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 m-1 text-md font-medium leading-5 text-teal-300 ' onClick={() => setActiveBackground('background5')}>Clean</button></li>
              </ul>
            </section>
            <div className={'w-1/2 m-auto pt-16 text-dimWhite leading-6 text-sm'}>
              <p>Built with <a href="https://tailwindcss.com/" className="font-semibold" target="_blank" aria-label="Tailwind Documentation (opens in new tab)">Tailwind CSS</a>, <a href="https://react.dev/" className="font-semibold" aria-label="Official React Documentation (opens in new tab)" target="_blank">React</a>, and <a href="https://particles.js.org/" className="font-semibold" aria-label="Official tsParticles Documentation (opens in new tab)">tsParticles</a>. Coded in <a href="https://code.visualstudio.com/" className="font-semibold" aria-label="Official Visual Studio Code Website(opens in new tab)" target="_blank">Visual Studio Code</a> within the <a href="https://stackblitz.com/" className="font-semibold" target="_blank" aria-label="Official StackBlitz Website(opens in new tab)">StackBlitz</a> online development environment. Deployed with <a href="https://vercel.com/" className="font-semibold">Vercel.</a>  </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )


};

