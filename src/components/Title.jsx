import styles from "../style";

const Title = () => {
  return (
    <section id="titledescription" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <p className={'flex-1 font-poppins font-semibold xs:text-[52px] ss:text-[42px] sm:text-[42px] md:text-[50px] lg:text-[50px] xl:text-[50px] xxl:text-[50px] text-white'}>
            Andre Hall-Rodrigues 
          </p>
        </div>
        <p className={'font-poppins font-normal xs:text-[26px] md:text-[50px] lg:text-[32px] text-white w-full mt-4'}>
          Web Developer & Designer
        </p>
        <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[22.8px] w-1/2 mt-4`}>
        Expert in digital design with Adobe Suite and AI, along with modern front-end technologies like Tailwind, React, and jQuery.
        </p>
      </div>

      

    
    </section>
    
  );
};

export default Title;