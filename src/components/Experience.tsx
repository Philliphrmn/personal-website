import { MapPin } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const experiences = [
  {
    company: 'Uniforce Consulting',
    role: 'Head of Business Development',
    period: 'Oct 2024 - Present',
    location: 'Vienna, Austria',
    current: true,
    bullets: [
      'Leading the Business Development department with 19 active members',
      'Acquired consulting projects with €70,000+ cumulative project volume',
      'Managed corporate partnerships with Accenture, Roland Berger, McKinsey & Simon Kucher',
      'Delivered consulting projects including a fleet optimization strategy (160 vehicles, €2M+ p.a.)',
    ],
  },
  {
    company: 'Deutscher Bundestag',
    role: 'Intern - Federal Ministry of Research, Technology & Space',
    period: 'Feb 2026',
    location: 'Berlin, Germany',
    current: false,
    bullets: [
      'Policy work at the Federal Ministry for Research, Technology and Space',
    ],
  },
  {
    company: 'Taxi 3033',
    role: 'Family Business - Operations & Finance',
    period: 'Aug 2019 - Aug 2024',
    location: 'Hof, Germany',
    current: false,
    bullets: [
      'Managed financial accounting, procurement, and day-to-day administrative operations',
      'Led employee training, HR management, and shift planning',
      'Actively supported the full company sale process - from business valuation and due diligence to closing',
    ],
  },
  {
    company: 'Graf von Westphalen',
    role: 'Intern - Corporate & Commercial Law',
    period: 'Oct - Nov 2023',
    location: 'Munich, Germany',
    current: false,
    bullets: [
      'Exposure to M&A, corporate law, and real estate transactions',
      'Accompanied client meetings and a buy-side acquisition process',
    ],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="bg-[#F5F5F7] dark:bg-[#2C2C2E] py-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#6E6E73] dark:text-[#8E8E93] text-[13px] font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-[40px] font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-14">
            Where I've worked
          </h2>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className={`bg-white dark:bg-[#3A3A3C] rounded-2xl p-8 transition-colors duration-300 ${
                  exp.current ? 'ring-1 ring-[#0071E3]/20' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[19px] font-semibold text-[#1D1D1F] dark:text-white">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="text-[11px] font-medium bg-[#0071E3]/10 text-[#0071E3] px-2.5 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-[15px] text-[#424245] dark:text-[#AEAEB2] mb-5">{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-[15px] text-[#6E6E73] dark:text-[#8E8E93] flex gap-2.5">
                          <span className="text-[#0071E3] shrink-0 mt-0.5">·</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 min-w-[140px]">
                    <span className="text-[14px] text-[#424245] dark:text-[#AEAEB2] font-medium">
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-[13px] text-[#6E6E73] dark:text-[#8E8E93]">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
