import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

function App() {
  return (
    <div className="min-h-screen text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="text-center p-8 border-t border-white/10 mt-12 text-gray-400">
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://github.com/Divyamsingh05" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
            <span className="sr-only">GitHub</span>
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/divyam-singh-262b3227b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-all duration-300 hover:scale-110">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={30} />
          </a>
          <a href="https://instagram.com/itz_divyamm_07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-all duration-300 hover:scale-110">
            <span className="sr-only">Instagram</span>
            <FaInstagram size={30} />
          </a>
          <a href="https://wa.me/91-9879224703" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#25D366] transition-all duration-300 hover:scale-110">
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp size={30} />
          </a>
        </div>
        <p>© 2026 Divyam Singh. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
