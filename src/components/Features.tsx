import { useState } from 'react';

interface Calculator {
  name: string;
  description: string;
  microDescription: string;
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
    color: 'from-purple-500/10 to-purple-900/5',
    calculators: [
      { name: 'Trigonometric Beam Path', description: 'Calculate shear-wave beam paths using right-triangle trigonometry', microDescription: 'Shear wave geometry', icon: '📐' },
      { name: 'Beam Divergence', description: 'Determine beam spread and divergence angle', microDescription: 'Beam spread angles', icon: '📡' },
      { name: 'Beam Index Offset', description: 'Calculate probe index offsets for improved positioning', microDescription: 'Probe positioning offsets', icon: '📏' },
      { name: 'Beam Plot Math', description: 'Visualize and compute beam path geometry', microDescription: 'Path geometry visualization', icon: '📊' },
      { name: 'Sound Path Length', description: 'Calculate true sound path length through material', microDescription: 'Material path distance', icon: '📉' },
      { name: 'Surface Distance / Depth', description: 'Convert between surface distance and true depth', microDescription: 'Depth conversions', icon: '🔄' },
      { name: 'Skip Distance', description: 'Calculate surface distance for multiple legs', microDescription: 'Multi-leg calculations', icon: '↔️' }
    ]
  },
  {
    category: 'Snell\'s Law & Angle Calculations',
    tagline: 'Wave refraction and mode analysis',
    icon: '📏',
    color: 'from-teal-500/10 to-teal-900/5',
    calculators: [
      { name: 'Snell\'s Law', description: 'Calculate refracted angles across material boundaries', microDescription: 'Material refraction angles', icon: '∠' },
      { name: 'Critical Angle', description: 'Determine first and second critical angles', microDescription: 'Critical angle thresholds', icon: '🎯' },
      { name: 'Mode Conversion', description: 'Calculate longitudinal-to-shear wave conversions', microDescription: 'Wave type conversions', icon: '🔀' }
    ]
  },
  {
    category: 'Phased Array & Advanced UT',
    tagline: 'PA focal laws and element control',
    icon: '📡',
    color: 'from-blue-500/10 to-blue-900/5',
    calculators: [
      { name: 'Active Aperture', description: 'Determine effective aperture size for phased array', microDescription: 'Array aperture sizing', icon: '⚡' },
      { name: 'Resolution vs Aperture', description: 'How aperture size affects defect detectability', microDescription: 'Detectability analysis', icon: '🔬' },
      { name: 'Dynamic Near Field', description: 'Calculate near field length for probe selection', microDescription: 'Near field zones', icon: '📍' },
      { name: 'Element Time Delay', description: 'Generate precise element delay timing', microDescription: 'Element delay timing', icon: '⏱️' },
      { name: 'Wedge Delay Time', description: 'Calculate wedge delay timing for calibration', microDescription: 'Calibration delays', icon: '⌚' },
      { name: 'Sweep Simulator', description: 'Model and simulate sweep behavior', microDescription: 'Sweep behavior models', icon: '🌊' }
    ]
  },
  {
    category: 'Pipeline Integrity Calculations',
    tagline: 'Corrosion assessment & code compliance',
    icon: '🛢',
    color: 'from-orange-500/10 to-orange-900/5',
    calculators: [
      { name: 'Dent Ovality', description: 'Calculate dent ovality and deformation severity', microDescription: 'Deformation severity metrics', icon: '⚠️' },
      { name: 'Pit Depth', description: 'Measure corrosion pit depth and remaining wall', microDescription: 'Corrosion depth analysis', icon: '🕳️' },
      { name: 'Depth Percentages', description: 'Calculate wall loss percentages from measured depth', microDescription: 'Wall loss calculations', icon: '📊' },
      { name: 'ABS + ES Calculator', description: 'Calculate ABS and ES values for defect evaluation', microDescription: 'Defect evaluation values', icon: '🧮' },
      { name: 'SOC / EOC', description: 'Start of Corrosion and End of Corrosion metrics', microDescription: 'Corrosion location metrics', icon: '📍' },
      { name: 'B31G Calculator', description: 'Remaining strength calculations for corroded pipe', microDescription: 'Remaining strength per B31G', icon: '💪' }
    ]
  },
  {
    category: 'Velocity & Measurement Tools',
    tagline: 'TOF and precision measurements',
    icon: '🧮',
    color: 'from-green-500/10 to-green-900/5',
    calculators: [
      { name: 'Time-of-Flight (TOF)', description: 'Calculate ultrasonic travel time using sound path', microDescription: 'Travel time calculations', icon: '⏰' },
      { name: 'Beam Divergence & Index', description: 'Fine-tune inspection geometry and positioning', microDescription: 'Geometry fine-tuning', icon: '🎚️' }
    ]
  },
  {
    category: 'Field Productivity Tools',
    tagline: 'Time tracking and crew management',
    icon: '⏱',
    color: 'from-yellow-500/10 to-yellow-900/5',
    calculators: [
      { name: 'Time Clock', description: 'Track and calculate work hours in the field', microDescription: 'Work hour tracking', icon: '🕐' }
    ]
  }
];

const Features = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredCategories = calculatorCategories.map(category => ({
    ...category,
    calculators: category.calculators.filter(calc =>
      searchQuery === '' ||
      calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.calculators.length > 0);

  return (
    <section id="features" className="py-20 px-4 bg-base-200/70 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-base-content">
            Core Calculation Suite
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-[#afbbc8] mb-3">
            Professional UT & Pipeline Calculations — Fast, Offline, Field-Ready
          </p>
          <p className="text-base max-w-3xl mx-auto text-[#afbbc8]/90">
            Built for ultrasonic technicians and integrity crews. Instantly access beam math, code references, and inspection calculators without spreadsheets.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search calculators (beam path, B31G, Snell's law…)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-base-100/50 backdrop-blur-sm border border-[#5821d3]/30 rounded-xl text-base-content placeholder-[#afbbc8]/60 focus:outline-none focus:border-[#5821d3] focus:ring-2 focus:ring-[#5821d3]/20 transition-all"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#afbbc8]/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.has(categoryIndex);
            const displayCalculators = isExpanded ? category.calculators : category.calculators.slice(0, 4);
            const hasMore = category.calculators.length > 4;

            return (
              <div
                key={categoryIndex}
                className={`glass-card rounded-xl border border-[#5821d3]/20 bg-gradient-to-br ${category.color} backdrop-blur-sm overflow-hidden group hover:border-[#5821d3]/40 hover:shadow-lg hover:shadow-[#5821d3]/10 transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="p-6 border-b border-base-300/30">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-3xl">{category.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-base-content mb-1 leading-tight">
                        {category.category}
                      </h3>
                      <p className="text-[#afbbc8] text-sm">{category.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Tool List */}
                <div className="p-4 space-y-1">
                  {displayCalculators.map((calc, calcIndex) => (
                    <div
                      key={calcIndex}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-base-100/30 transition-colors cursor-pointer group/item"
                    >
                      <span className="text-lg mt-0.5 flex-shrink-0">{calc.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-base-content text-sm leading-tight group-hover/item:text-[#20d390] transition-colors">
                          {calc.name}
                        </div>
                        <div className="text-xs text-[#afbbc8]/70 mt-0.5 leading-snug">
                          {calc.microDescription}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Link */}
                {hasMore && (
                  <div className="px-4 pb-4">
                    <button
                      onClick={() => toggleCategory(categoryIndex)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[#5821d3]/20 hover:border-[#5821d3]/40 hover:bg-base-100/20 text-sm font-medium text-[#afbbc8] hover:text-base-content transition-all"
                    >
                      {isExpanded ? (
                        <>
                          Show less
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          View all {category.calculators.length} tools
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
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
