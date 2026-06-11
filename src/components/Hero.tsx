import { ArrowDown } from 'lucide-react'
import LinkedInIcon from './LinkedInIcon'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#1C1C1E] flex items-center pt-14 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[13px] text-[#424245] dark:text-[#AEAEB2] font-medium">
                4th Semester · WU Vienna
              </span>
            </div>

            <h1 className="text-[58px] md:text-[72px] font-bold text-[#1D1D1F] dark:text-white leading-[1.02] tracking-tight">
              Phillip<br />Herrmann
            </h1>
            <p className="text-[19px] text-[#424245] dark:text-[#AEAEB2] font-light tracking-tight">
              Business Student · Consultant · Athlete
            </p>
            <p className="text-[17px] text-[#6E6E73] dark:text-[#8E8E93] leading-relaxed max-w-md">
              Studying Business & Economics at WU Vienna, leading Business
              Development at Uniforce Consulting, and driven by strategy,
              entrepreneurship, and real-world impact.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:phillipherrmann@icloud.com"
                className="border border-[#D2D2D7] dark:border-[#48484A] text-[#424245] dark:text-[#AEAEB2] text-[15px] font-medium px-6 py-3 rounded-full hover:border-[#0071E3] hover:text-[#0071E3] transition-colors duration-200"
              >
                phillipherrmann@icloud.com
              </a>
              <a
                href="https://www.linkedin.com/in/phillip-enzo-herrmann/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#D2D2D7] dark:border-[#48484A] text-[#424245] dark:text-[#AEAEB2] text-[15px] font-medium px-6 py-3 rounded-full hover:border-[#0071E3] hover:text-[#0071E3] transition-colors duration-200"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 md:w-80 rounded-3xl overflow-hidden shadow-2xl" style={{ height: '24rem' }}>
                <img
                  src="/phillip.png"
                  alt="Phillip Herrmann"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-72 md:w-80 rounded-3xl bg-[#F5F5F7] dark:bg-[#2C2C2E]" style={{ height: '24rem' }} />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <a href="#about" className="animate-bounce text-[#6E6E73] dark:text-[#8E8E93] hover:text-[#424245] transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
