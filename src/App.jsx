import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeroSecondary from './components/HeroSecondary/HeroSecondary'
import Footer from './components/Footer/Footer'

export const ThemeContext = createContext()

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950' 
                : 'bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100'
            }`} />
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent' 
                : 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent'
            }`} />
          </div>

          {/* Content */}
          <div className="relative">
            <Navbar />
            <Hero />
            
            {/* Secondary hero section with simpler background */}
            <section className={`relative py-20 ${
              isDark 
                ? 'bg-gray-800/50' 
                : 'bg-gray-50/50'
            }`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-b from-gray-900/30 to-gray-800/30' 
                  : 'bg-gradient-to-b from-white/30 to-gray-50/30'
              }`} />
              <HeroSecondary />
            </section>

            {/* Footer section with matching theme */}
            <section className={`relative ${
              isDark 
                ? 'bg-gray-900/80' 
                : 'bg-white/80'
            }`}>
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-t from-gray-900 to-gray-800' 
                  : 'bg-gradient-to-t from-white to-gray-50'
              }`} />
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App