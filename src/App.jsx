import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeroSecondary from './components/HeroSecondary/HeroSecondary'
import Footer from './components/Footer/Footer'
import backgroundImage from './assets/Background image.png'

export const ThemeContext = createContext()

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-900'}`}>
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950'
                : 'bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950'
            }`} />
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent' 
                : 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent'
            }`} />
          </div>

          {/* Content */}
          <div className="relative">
            <Navbar />
            <Hero />
            
            {/* Secondary hero section with background image */}
            <section className="relative py-20">
              {isDark && (
                <>
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-950/90" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/90" />
                </>
              )}
              <div className="relative">
                <HeroSecondary />
              </div>
            </section>

            {/* Footer section with background image */}
            <section className={`relative ${!isDark && 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'}`}>
              {isDark && (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
              )}
              <div className="relative">
                <Footer />
              </div>
            </section>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App