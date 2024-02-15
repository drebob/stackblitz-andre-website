import '../style.css';


const BGButtons = () => {

  return (

     <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background1')}>BG 1</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background2')}>BG 2</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background3')}>BG 3</button></li>
                <li className="mr-5 text-xs shrink-0"><button className='block hover:text-slate-200 bg-white p-2 rounded font-bold' onClick={() => setActiveBackground('background4')}>BG 4</button></li>
              </ul>
    
  );
};

export default BGButtons;