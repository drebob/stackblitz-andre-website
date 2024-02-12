import styles from "../style";

const Title = () => {
  return (
    <section id="titledescription" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <p className={'flex-1 font-poppins font-semibold xs:text-[52px] xs:leading-[20px] ss:text-[42px] sm:text-[42px] md:text-[50px] lg:text-[50px] xl:text-[50px] xxl:text-[50px] text-white'}>
            
            
            Andre <br className={'sm:hidden'}/>Hall-Rodrigues 
          </p>
          
        </div>

        <p className={'font-poppins font-semibold xs:text-[38px] md:text-[50px] lg:text-[32px] text-white w-full'}>
          Web Developer
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Expert in digital design with Adobe Suite and AI, along with modern front-end technologies like Tailwind, React, and jQuery.
        </p>
      </div>

      

    
    </section>
    
  );
};

export default Title;