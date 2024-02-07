import styles, { layout } from "../style";
import Button from "./Button";



const About = () =>  (
  <section id="about" className={'flex md:flex-row flex-col pt-24'}>
    <div className={layout.sectionInfo}>
      <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[22.8px]`}>
      My journey in graphic and web design started with personalizing my MySpace profile and evolved into a career crafting digital experiences for diverse industries. I’ve designed and developed websites for commercial real estate, drone photography, and a century-old accordion manufacturer. Currently, I'm the lead front-end designer and developer for Fairytale Brownies, responsible for maintaining and updating Brownies.com.
      </p>
      <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[22.8px] mt-5`}>
        My role involves not just web design but also merchandising, data analytics, and collaborating with back-end developers. Although I wear many hats, my main priority is creating user-friendly, attractive websites that stand out, aiming for improved user engagement and conversion rates.
        </p>
        <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[22.8px] mt-5`}>
           When I'm not at a computer, I balance my life with music, swimming, and spending quality time with friends and my dog. I also teach piano as a side-gig and thoroughly enjoy playing many different types of music.
      </p>

    </div>

   
  </section>
);

export default About;