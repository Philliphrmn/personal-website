import { useInView } from '../hooks/useInView'

const projects = [
  {
    tag: 'Strategy · Operations',
    title: 'Fleet Optimization Strategy',
    client: 'Facility Management Company',
    description:
      'Developed a data-driven strategy to optimize a fleet of 160 vehicles with €2M+ annual budget — identifying cost reduction opportunities and operational efficiency gains.',
    metric: '€2M+',
    metricLabel: 'Annual Budget Optimized',
  },
  {
    tag: 'Strategy · Market Research',
    title: 'Go-to-Market Benchmark Analysis',
    client: 'HR Tech Startup',
    description:
      'Conducted a comprehensive competitive benchmark analysis to sharpen the go-to-market strategy and market entry positioning of an early-stage HR tech company.',
    metric: 'GTM',
    metricLabel: 'Strategy Developed',
  },
  {
    tag: 'Business Development',
    title: 'Corporate Partnership Program',
    client: 'Uniforce Consulting',
    description:
      'Built and managed strategic partnerships with McKinsey, Roland Berger, Accenture, and Simon Kucher — organizing knowledge workshops for 19 active members.',
    metric: '4',
    metricLabel: 'Top Firms Partnered',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-white dark:bg-[#1C1C1E] py-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#6E6E73] dark:text-[#8E8E93] text-[13px] font-medium tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-[40px] font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-14">
            Selected consulting work
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-2xl p-7 flex flex-col transition-colors duration-300"
              >
                <span className="text-[11px] font-semibold text-[#0071E3] tracking-wider uppercase mb-5">
                  {project.tag}
                </span>
                <h3 className="text-[18px] font-semibold text-[#1D1D1F] dark:text-white mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#6E6E73] dark:text-[#8E8E93] mb-4">{project.client}</p>
                <p className="text-[14px] text-[#424245] dark:text-[#AEAEB2] leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-6 pt-5 border-t border-[#E8E8ED] dark:border-[#48484A]">
                  <p className="text-[28px] font-bold text-[#1D1D1F] dark:text-white tracking-tight leading-none">
                    {project.metric}
                  </p>
                  <p className="text-[12px] text-[#6E6E73] dark:text-[#8E8E93] mt-1">{project.metricLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
