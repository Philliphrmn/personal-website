import { useState, useEffect } from 'react'
import { Sun, Moon, Download, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Experience', 'Education', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border-b border-[#D2D2D7]/50 dark:border-[#48484A]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[15px] text-[#424245] dark:text-[#AEAEB2] hover:text-[#0071E3] dark:hover:text-[#0071E3] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full text-[#424245] dark:text-[#AEAEB2] hover:bg-[#F5F5F7] dark:hover:bg-[#2C2C2E] transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href="/cv.pdf"
            download
            className="hidden md:flex items-center gap-1.5 border border-[#D2D2D7] dark:border-[#48484A] text-[#424245] dark:text-[#AEAEB2] text-[14px] font-medium px-4 py-2 rounded-full hover:border-[#0071E3] hover:text-[#0071E3] transition-colors duration-200"
          >
            <Download size={13} />
            CV
          </a>

          <a
            href="mailto:phillipherrmann@icloud.com"
            className="hidden md:flex items-center bg-[#0071E3] text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-[#0077ED] transition-colors duration-200"
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-full text-[#424245] dark:text-[#AEAEB2] hover:bg-[#F5F5F7] dark:hover:bg-[#2C2C2E] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#D2D2D7]/50 dark:border-[#48484A]/50 px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[16px] text-[#424245] dark:text-[#AEAEB2] hover:text-[#0071E3] dark:hover:text-[#0071E3] py-2.5 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-[#D2D2D7]/50 dark:border-[#48484A]/50 mt-2">
            <a
              href="/cv.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 border border-[#D2D2D7] dark:border-[#48484A] text-[#424245] dark:text-[#AEAEB2] text-[14px] font-medium px-4 py-2 rounded-full hover:border-[#0071E3] hover:text-[#0071E3] transition-colors duration-200"
            >
              <Download size={13} />
              CV
            </a>
            <a
              href="mailto:phillipherrmann@icloud.com"
              onClick={() => setMenuOpen(false)}
              className="flex items-center bg-[#0071E3] text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-[#0077ED] transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
