import styles, { layout } from "../style";
import Button from "./Button";



const About = () =>  (
  <section id="about" className={'flex md:flex-row flex-col pt-24'}>
      <div className="sticky top-0 z-20 -ml-12 mb-4 w-screen bg-slate-900/75 px-12 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      About
    </h2>
  </div>
    <div className={layout.sectionInfo}>
      <p className={`font-bSans font-normal text-dimWhite text-[17.5px] leading-[26.8px]`}>
      My journey in graphic and web design started with personalizing my MySpace profile and evolved into a career crafting digital experiences for diverse industries. I’ve designed and developed websites for <a href="retail1031.com" className="font-semibold" target="_blank" aria-label="Retail 1031 (opens in a new tab)">commercial real estate</a>, a <a href="" className="font-semibold" target="_blank" aria-label="Petosa Accordions (opens in a new tab)">century-old accordion manufacturer</a>, and most recently <a href="brownies.com com" className="font-semibold" target="_blank" aria-label="Fairytale Brownies(opens in a new tab)">brownies.com</a>.
      </p>
      <p className={`font-bSans font-normal text-dimWhite text-[17.5px] leading-[26.8px] mt-5`}>
        My role involves not just web design but also merchandising, data analytics, and collaborating with back-end developers. Although I wear many hats, my main priority is creating user-friendly, attractive websites that stand out, aiming for improved user engagement and conversion rates.
        </p>
        <p className={`font-bSans font-normal text-dimWhite text-[17.5px] leading-[26.8px] mt-5`}>
           When I'm not at a computer, I'm probably playing piano, playing video games, exercising, or spending quality time with friends and my dog, Brutus. 
      </p>
    </div>
  </section>
);

export default About;