import logoMain from '../assets/logo_main.png';

const Navbar = () => {
  return (
    <nav className="navbar glass-navbar fixed top-0 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-base-200 flex items-center justify-center shadow-sm border border-white/5">
            <img src={logoMain} alt="NDT ToolKit" className="w-14 h-14 object-contain" />
          </div>
          <span className="text-xl font-bold text-base-content">
            NDT-ToolKit
          </span>
        </div>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a href="#features" className="nav-pill">
              Features
            </a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        <a 
          href="https://app.ndt-toolkit.com/#/login" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm hidden sm:inline-flex text-secondary hover:text-base-content"
        >
          Login
        </a>
        <a 
          href="https://app.ndt-toolkit.com/#/signup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm btn-glow"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
