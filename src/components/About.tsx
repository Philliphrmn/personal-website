import { useInView } from '../hooks/useInView'

const stats = [
  { value: '0', label: 'Fucks Given' },
  { value: 'All', label: 'Feminist Literature Read' },
  { value: '$1B', label: 'Future Net Worth' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="bg-[#1D1D1F] dark:bg-black py-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#6E6E73] text-[13px] font-medium tracking-widest uppercase mb-6">
            About
          </p>
          <h2 className="text-[40px] md:text-[52px] font-semibold text-white leading-tight tracking-tight max-w-3xl mb-10">
            Born in a small town. Built for big things.
          </h2>
          <p className="text-[17px] text-[#86868B] leading-relaxed max-w-2xl mb-16">
            I grew up in Hof, a small city in Bavaria, where I spent my childhood and teenage years competing in sports at a professional level. After graduating Abitur with a 1.1, I decided to leave everything familiar behind and move to Vienna alone - chasing a new challenge and a bigger stage. I'm drawn to business, innovation, and the intersection of the two. Whether it's consulting strategy, the next big startup idea, or where AI is taking us - I want to be where things are being built.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[#333336]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[42px] md:text-[52px] font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </p>
                <p className="text-[13px] text-[#6E6E73] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
