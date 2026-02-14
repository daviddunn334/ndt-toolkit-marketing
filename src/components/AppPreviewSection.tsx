import { motion } from "framer-motion";

type Screenshot = {
  src: string;
  alt: string;
  offsetClass?: string;
};

type AppPreviewSectionProps = {
  screenshots?: Screenshot[];
};

const defaultScreenshots: Screenshot[] = [
  {
    src: "/images/app-beam.png",
    alt: "Beam plot visualizer screen",
    offsetClass: "lg:translate-y-4",
  },
  {
    src: "/images/app-tools.png",
    alt: "Inspection tools dashboard screen",
    offsetClass: "lg:-translate-y-4",
  },
  {
    src: "/images/app-logger.png",
    alt: "Field logger workflow screen",
    offsetClass: "lg:translate-y-6",
  },
  {
    src: "/images/app-dashboard.png",
    alt: "Project analytics dashboard screen",
    offsetClass: "lg:-translate-y-2",
  },
];

const AppPreviewSection = ({ screenshots = defaultScreenshots }: AppPreviewSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-base-100/40 to-neutral/70 py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            App Preview
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#4e26d4] sm:text-4xl md:text-5xl">
            See NDT-ToolKit in Action
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Advanced tools designed for real field workflows.
          </p>
        </div>

        <motion.div
          className="mt-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {screenshots.slice(0, 3).map((shot) => (
              <motion.div
                key={shot.src}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="flex justify-center"
              >
                <div
                  className={`mockup-phone border-primary/40 bg-base-200 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(108,91,255,0.35)] ${
                    shot.offsetClass ?? ""
                  }`}
                >
                  <div className="camera" />
                  <div className="display">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPreviewSection;