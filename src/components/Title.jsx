import styles from "../style";

const Title = () => {
  return (
    <section id="titledescription" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={'flex-1 font-bSans font-semibold xs:text-[52px] ss:text-[42px] sm:text-[42px] md:text-[50px] lg:text-[50px] xl:text-[50px] xxl:text-[50px] text-white'}>
            Andre Hall-Rodrigues 
          </h1>
        </div>
        <p className={'font-bSans font-normal xs:text-[26px] md:text-[50px] lg:text-[32px] text-white w-full mt-4'}>
          Web Developer & Designer
        </p>
        <p className={`font-bSans font-normal text-dimWhite text-[16px] leading-[22.8px] w-1/2 mt-4`}>
        Expert in digital design with <a href="adobe.com" className="font-semibold text-white" target="blank" aria-label="Official Adobe Website(opens in new tab)">Adobe Suite</a> and <a href="https://openai.com/" className="font-semibold text-white" aria-label="Official ChatGPT Website(opens in new tab)" target="_blank">AI</a>, along with modern front-end technologies like <a href="https://tailwindcss.com/" className="font-semibold text-white" target="_blank" aria-label="Official Tailwind Documentation(opens in new tab)">Tailwind CSS</a>, <a href="https://react.dev/" className="font-semibold text-white" aria-label="Official React Documentation (opens in new tab)" target="_blank">React</a>, and <a href="https://jquery.com/" className="font-semibold text-white" target="_blank" aria-label="Official jQuery Website(opens in new tab)">jQuery</a>.
        </p>
      </div>

      

    
    </section>
    
  );
};

export default Title;