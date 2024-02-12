import styles from "../style";

const Title = () => {
  return (
    <section id="titledescription" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <p className={'flex-1 font-poppins font-semibold xs:text-[72px] md:text-[40px] text-white'}>
            
            
            Andre Hall-Rodrigues 
          </p>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[72px] md:text-[40px] lg:text-[32px] text-white w-full text-gradient">
          Web Developer
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Expert in digital design with Adobe Suite and AI, along with modern front-end technologies like Tailwind, React, and jQuery.
        </p>
      </div>

      

    
    </section>
    
  );
};

export default Title;