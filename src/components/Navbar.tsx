import logoMain from '../assets/logo_main.png';

const Navbar = () => {
  return (
    <nav className="navbar glass-navbar fixed top-0 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-[#2b234c] flex items-center justify-center shadow-sm border border-[#2b234c]">
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
          className="hidden sm:inline-flex rounded-full border border-yellow-400/60 bg-yellow-500/10 px-4 py-2 text-base font-semibold text-yellow-300 transition hover:bg-yellow-400/20 hover:text-yellow-200"
        >
          Login
        </a>
        <a 
          href="https://app.ndt-toolkit.com/#/signup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-full border border-[#00d390]/70 bg-[#00d390]/10 px-4 py-2 text-base font-semibold text-[#00d390] transition hover:bg-[#00d390]/20 hover:text-[#9df5d5]"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
