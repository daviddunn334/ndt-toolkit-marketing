interface Calculator {
  name: string;
  description: string;
  icon: string;
}

interface CalculatorCategory {
  category: string;
  tagline: string;
  icon: string;
  color: string;
  calculators: Calculator[];
}

const calculatorCategories: CalculatorCategory[] = [
  {
    category: 'Beam Geometry & Ultrasonic Math',
    tagline: 'Essential UT beam calculations',
    icon: '🔊',
    color: 'bg-purple-900/30 border-purple-500',
    calculators: [
      { name: 'Trigonometric Beam Path Calculator', description: 'Calculate shear-wave beam paths using right-triangle trigonometry', icon: '📐' },
      { name: 'Beam Divergence Calculator', description: 'Determine beam spread and divergence angle', icon: '📡' },
      { name: 'Beam Index Offset Calculator', description: 'Calculate probe index offsets for improved positioning', icon: '📏' },
      { name: 'Beam Plot Math', description: 'Visualize and compute beam path geometry', icon: '📊' },
      { name: 'Sound Path Length Calculator', description: 'Calculate true sound path length through material', icon: '📉' },
      { name: 'Surface Distance / Depth Converter', description: 'Convert between surface distance and true depth', icon: '🔄' },
      { name: 'Skip Distance Calculator', description: 'Calculate surface distance for multiple legs', icon: '↔️' }
    ]
  },
  {
    category: 'Snell\'s Law & Angle Calculations',
    tagline: 'Wave refraction and mode analysis',
    icon: '📏',
    color: 'bg-teal-900/30 border-teal-500',
    calculators: [
      { name: 'Snell\'s Law Calculator', description: 'Calculate refracted angles across material boundaries', icon: '∠' },
      { name: 'Critical Angle Calculator', description: 'Determine first and second critical angles', icon: '🎯' },
      { name: 'Mode Conversion Calculator', description: 'Calculate longitudinal-to-shear wave conversions', icon: '🔀' }
    ]
  },
  {
    category: 'Phased Array & Advanced UT Tools',
    tagline: 'PA focal laws and element control',
    icon: '📡',
    color: 'bg-blue-900/30 border-blue-500',
    calculators: [
      { name: 'Active Aperture Calculator', description: 'Determine effective aperture size for phased array', icon: '⚡' },
      { name: 'Resolution vs Aperture Math', description: 'How aperture size affects defect detectability', icon: '🔬' },
      { name: 'Dynamic Near Field Calculator', description: 'Calculate near field length for probe selection', icon: '📍' },
      { name: 'Element Time Delay Calculator', description: 'Generate precise element delay timing', icon: '⏱️' },
      { name: 'Wedge Delay Time Calculator', description: 'Calculate wedge delay timing for calibration', icon: '⌚' },
      { name: 'Sweep Simulator Math', description: 'Model and simulate sweep behavior', icon: '🌊' }
    ]
  },
  {
    category: 'Velocity, Time & Measurement Tools',
    tagline: 'TOF and measurement calculations',
    icon: '🧮',
    color: 'bg-green-900/30 border-green-500',
    calculators: [
      { name: 'Time-of-Flight (TOF) Calculator', description: 'Calculate ultrasonic travel time using sound path', icon: '⏰' },
      { name: 'Beam Divergence & Index Tools', description: 'Fine-tune inspection geometry and positioning', icon: '🎚️' }
    ]
  },
  {
    category: 'Pipeline Integrity Calculations',
    tagline: 'Corrosion, dents, and remaining strength',
    icon: '🛢',
    color: 'bg-orange-900/30 border-orange-500',
    calculators: [
      { name: 'Dent Ovality Calculator', description: 'Calculate dent ovality and deformation severity', icon: '⚠️' },
      { name: 'Pit Depth Calculator', description: 'Measure corrosion pit depth and remaining wall', icon: '🕳️' },
      { name: 'Depth Percentages Calculator', description: 'Calculate wall loss percentages from measured depth', icon: '📊' },
      { name: 'ABS + ES Calculator', description: 'Calculate ABS and ES values for defect evaluation', icon: '🧮' },
      { name: 'SOC / EOC Calculator', description: 'Start of Corrosion and End of Corrosion metrics', icon: '📍' },
      { name: 'B31G Calculator', description: 'Remaining strength calculations for corroded pipe', icon: '💪' }
    ]
  },
  {
    category: 'Field Productivity Tools',
    tagline: 'Time tracking and crew management',
    icon: '⏱',
    color: 'bg-yellow-900/30 border-yellow-500',
    calculators: [
      { name: 'Time Clock Calculator', description: 'Track and calculate work hours in the field', icon: '🕐' }
    ]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-base-200/70 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-base-content">
            📐 Core Calculation Suite
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-[#afbbc8] mb-3">
            Every Critical UT & Pipeline Calculation in One Professional Toolkit
          </p>
          <p className="text-lg max-w-3xl mx-auto text-[#afbbc8]">
            Built specifically for ultrasonic technicians and pipeline integrity crews, this suite covers real-world inspection math — from beam geometry to corrosion evaluation — without spreadsheets or manual trig.
          </p>
        </div>

        {/* Calculator Categories */}
        <div className="space-y-8">
          {calculatorCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-card rounded-xl overflow-hidden border-2 border-[#5821d3] ${category.color}`}
            >
              {/* Category Header */}
              <div className="p-6 border-b border-base-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-base-content">
                      {category.category}
                    </h3>
                    <p className="text-[#eef9ff] text-sm mt-1">{category.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Calculators List */}
              <div className="overflow-hidden">
                {category.calculators.slice(0, 2).map((calc, calcIndex) => (
                  <div
                    key={calcIndex}
                    className={`flex gap-4 border-b border-base-300 px-6 py-5 ${
                      calcIndex % 2 === 0 ? 'bg-[#28373f]' : 'bg-base-200/60'
                    } hover:bg-base-300/40 transition-colors`}
                  >
                    <span className="text-2xl">{calc.icon}</span>
                    <div>
                      <div className="font-semibold text-base-content text-lg">
                        {calc.name}
                      </div>
                      <div className="text-sm text-white mt-1">
                        {calc.description}
                      </div>
                    </div>
                  </div>
                ))}

                {category.calculators.length > 2 && (
                  <div className="collapse collapse-arrow border-t border-base-300 bg-base-200/50">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-semibold text-base-content px-6 py-4">
                      Show {category.calculators.length - 2} more tools
                    </div>
                    <div className="collapse-content px-0 pb-4">
                      {category.calculators.slice(2).map((calc, calcIndex) => (
                        <div
                          key={calcIndex}
                          className={`flex gap-4 border-t border-base-300 px-6 py-5 ${
                            calcIndex % 2 === 0 ? 'bg-[#28373f]' : 'bg-base-200/60'
                          }`}
                        >
                          <span className="text-2xl">{calc.icon}</span>
                          <div>
                            <div className="font-semibold text-base-content text-lg">
                              {calc.name}
                            </div>
                            <div className="text-sm text-white mt-1">
                              {calc.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Why This Matters Section */}
        <div className="mt-16 glass-card p-8 md:p-10 rounded-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-base-content mb-6 text-center">
            ⚙️ Why This Matters
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-base-content">Eliminate spreadsheet dependency</h4>
                <p className="text-[#eef9ff] text-sm">No more Excel files or manual formulas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-base-content">Reduce manual calculation errors</h4>
                <p className="text-[#eef9ff] text-sm">Automated, field-tested calculations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-base-content">Perform critical UT math in seconds</h4>
                <p className="text-[#eef9ff] text-sm">Instant results, no manual trig</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-base-content">Designed for Level II & III technicians</h4>
                <p className="text-[#eef9ff] text-sm">Professional-grade tools</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-base-content">Built specifically for pipeline inspections</h4>
                <p className="text-[#eef9ff] text-sm">Industry-focused solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-bold text-base-content">Works offline in the field</h4>
                <p className="text-[#eef9ff] text-sm">No internet required</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-teal-900/20 p-6 rounded-lg border border-purple-500/30 text-center">
            <p className="text-xl md:text-2xl font-bold text-base-content mb-2">
              This isn't generic engineering software.
            </p>
            <p className="text-lg text-[#20d390]">
              It's the actual math you perform in the field — organized, optimized, and ready when you need it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://app.ndt-toolkit.com/#/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#4e26d4]/70 bg-[#4e26d4]/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-[#4e26d4]/30"
            >
              Get Started Free
            </a>
            <a 
              href="https://app.ndt-toolkit.com/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#28b9fe]/70 bg-[#28b9fe]/10 px-6 py-3 text-base font-semibold text-[#28b9fe] transition hover:bg-[#28b9fe]/20 hover:text-[#b9e7ff]"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
