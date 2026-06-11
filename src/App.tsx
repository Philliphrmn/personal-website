import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Beyond from './components/Beyond'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Beyond />
      <Contact />
      <footer className="bg-[#1D1D1F] dark:bg-black border-t border-[#333336] py-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[13px] text-[#6E6E73]">© 2026 Phillip Herrmann</p>
          <p className="text-[13px] text-[#6E6E73]">Vienna, Austria</p>
        </div>
      </footer>
    </div>
  )
}
