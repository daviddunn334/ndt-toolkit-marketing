const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20 bg-base-100 grid-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
          </span>
          <span className="text-sm font-medium text-base-content">Now available for iOS, Android & Web</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
          <span className="block text-primary">
            The Field-Ready NDT Toolkit
          </span>
          <span className="block text-base-content mt-2">
            Built for Pipeline Inspectors
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed font-medium text-secondary">
          Shear wave beam path, focal laws, skip distance, TOF, dent ovality, corrosion depth — all in one professional toolkit designed specifically for UT technicians and pipeline integrity crews.
        </p>
        
        {/* Supporting text */}
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-muted">
          Designed for real inspection workflows with fast inputs, clear outputs, and field-ready calculators you can trust on every jobsite.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://app.ndt-toolkit.com/#/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg btn-glow min-w-[220px]"
          >
            Launch the Toolkit
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#features"
            className="btn-outline-primary btn-lg min-w-[220px]"
          >
            View Tool Categories
          </a>
        </div>

        {/* Social Proof / Stats */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Built for UT Level II & III</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Works Offline in the Field</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Pipeline Integrity Focused</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
