import { Mail, Phone, MapPin } from 'lucide-react'
import LinkedInIcon from './LinkedInIcon'
import { useInView } from '../hooks/useInView'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'phillipherrmann@icloud.com',
    href: 'mailto:phillipherrmann@icloud.com',
    accent: '#0071E3',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 171 965 0330',
    href: 'tel:+491719650330',
    accent: null,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'phillip-enzo-herrmann',
    href: 'https://www.linkedin.com/in/phillip-enzo-herrmann/',
    accent: '#0A66C2',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Vienna, Austria',
    href: null,
    accent: null,
  },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="bg-[#1D1D1F] dark:bg-black py-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#6E6E73] text-[13px] font-medium tracking-widest uppercase mb-6">
            Contact
          </p>
          <h2 className="text-[52px] md:text-[64px] font-bold text-white tracking-tight leading-[1.02] mb-4">
            Let's connect.
          </h2>
          <p className="text-[17px] text-[#86868B] mb-16 max-w-lg leading-relaxed">
            Whether it's a consulting opportunity, a collaboration, or just a
            conversation - I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {contacts.map(({ icon: Icon, label, value, href, accent }) => {
              const inner = (
                <>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: accent ?? 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#6E6E73] mb-0.5">{label}</p>
                    <p className="text-[15px] text-white font-medium">{value}</p>
                  </div>
                </>
              )

              if (href) {
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors p-5 rounded-2xl"
                  >
                    {inner}
                  </a>
                )
              }
              return (
                <div key={label} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl">
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
