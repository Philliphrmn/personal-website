import { useInView } from '../hooks/useInView'

const education = [
  {
    abbr: 'WU Vienna',
    full: 'Wirtschaftsuniversität Wien',
    degree: 'BSc Business & Economics',
    period: 'Oct 2024 - Present',
    location: 'Vienna, Austria',
    details: [
      '98 ECTS completed · GPA 1.18',
      'Specializations: Strategy & Managerial Accounting, Finance',
    ],
    upcoming: false,
  },
  {
    abbr: 'HKUST',
    full: 'Hong Kong University of Science and Technology',
    degree: 'Exchange Semester',
    period: 'Sep 2026 - Jan 2027',
    location: 'Hong Kong',
    details: ['Confirmed exchange semester'],
    upcoming: true,
  },
]


export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="bg-[#F5F5F7] dark:bg-[#2C2C2E] py-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#6E6E73] dark:text-[#8E8E93] text-[13px] font-medium tracking-widest uppercase mb-3">
            Education
          </p>
          <h2 className="text-[40px] font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-14">
            Academic background
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {education.map((edu) => (
              <div key={edu.abbr} className="bg-white dark:bg-[#3A3A3C] rounded-2xl p-8 transition-colors duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-[28px] font-bold text-[#1D1D1F] dark:text-white tracking-tight">
                      {edu.abbr}
                    </h3>
                    <p className="text-[13px] text-[#6E6E73] dark:text-[#8E8E93] mt-0.5">{edu.full}</p>
                  </div>
                  {edu.upcoming && (
                    <span className="text-[11px] font-medium text-[#424245] dark:text-[#AEAEB2] px-2.5 py-0.5 rounded-full border border-[#D2D2D7] dark:border-[#48484A]">
                      Upcoming
                    </span>
                  )}
                </div>
                <p className="text-[17px] font-semibold text-[#1D1D1F] dark:text-white mb-1.5">
                  {edu.degree}
                </p>
                <p className="text-[14px] text-[#424245] dark:text-[#AEAEB2] mb-5">
                  {edu.period} · {edu.location}
                </p>
                <ul className="space-y-1.5">
                  {edu.details.map((d, i) => (
                    <li key={i} className="text-[14px] text-[#6E6E73] dark:text-[#8E8E93] flex gap-2">
                      <span className="text-[#0071E3] shrink-0">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
