import { useInView } from '../hooks/useInView'

const interests = [
  {
    icon: '🎾',
    title: 'Tennis',
    description:
      'Competitive player since childhood. Team captain, coach, national & international tournaments.',
  },
  {
    icon: '🥊',
    title: 'Kickboxing',
    description:
      'Competitive athlete. Participated in the German National Championship.',
  },
  {
    icon: '🏎️',
    title: 'Motorsport',
    description: 'Lifelong passion for racing and automotive culture.',
  },
  {
    icon: '♟️',
    title: 'Chess',
    description: 'Strategic thinking and pattern recognition - on and off the board.',
  },
  {
    icon: '✈️',
    title: 'Travel',
    description:
      'Vienna · Toronto · Hong Kong - always chasing the next experience.',
  },
  {
    icon: '🤖',
    title: 'AI Enthusiast',
    description:
      'Coding with AI, implementing it in daily workflows, and exploring its many use cases across business and beyond.',
  },
]

export default function Beyond() {
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
            Beyond Work
          </p>
          <h2 className="text-[40px] font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-14">
            What drives me outside the office
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest) => (
              <div key={interest.title} className="bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-2xl p-6 transition-colors duration-300">
                <span className="text-3xl mb-4 block">{interest.icon}</span>
                <h3 className="text-[15px] font-semibold text-[#1D1D1F] dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-[13px] text-[#6E6E73] dark:text-[#8E8E93] leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
