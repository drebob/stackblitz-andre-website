import '../style.css';


const Nav = ({ activeSection }) => {

  return (

    <nav className="nav lg:block xs:hidden" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
      <li className={activeSection === 'about' ? 'active' : ''}>
          <a className="group flex items-center py-3" href="#about">
            <span className="nav-indicator mr-4 h-px w-8 bg-zinc-400 transition-all group-hover:w-16 group-hover:bg-slate-100 group-focus-visible:w-16 group-focus-visible:bg-slate-100 motion-reduce:transition-none" />
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-slate-100 group-focus-visible:text-slate-100">
              About
            </span>
          </a>
        </li>
        <li className={activeSection === 'experience' ? 'active' : ''}>
          <a className="group flex items-center py-3" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-zinc-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
        </li>
        <li className={activeSection === 'background' ? 'active' : ''}>
          <a className="group flex items-center py-3" href="#background">
            <span className="nav-indicator mr-4 h-px w-8 bg-zinc-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Backgrounds
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;