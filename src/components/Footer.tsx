import logoMain from '../assets/logo_main.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-20 h-20 rounded-2xl bg-base-200 flex items-center justify-center shadow-sm border border-white/5">
                <img src={logoMain} alt="NDT ToolKit" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-base-content">
                NDT-ToolKit
              </h3>
            </div>
            <p className="text-secondary">
              Professional NDT tools for the modern field technician
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-base-content">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-secondary hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/daviddunn334/ndt-toolkit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/daviddunn334/ndt-toolkit/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-base-content">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy.html" className="text-secondary hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service.html" className="text-secondary hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center text-muted">
          <p>© {currentYear} NDT-ToolKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
