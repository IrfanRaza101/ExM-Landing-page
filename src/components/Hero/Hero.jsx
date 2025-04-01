import { useContext } from 'react'
import { ThemeContext } from '../../App'

const Hero = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className="min-h-screen flex items-center">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Main Headings */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 opacity-0 animate-fadeInUp mt-12">
            {/* First Heading */}
            <div className="text-center">
              <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                COMPREHENSIVE DATA,{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">CAPTURED</span>
              </h1>
            </div>

            {/* Vertical Line */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className={`w-px h-24 ${
                isDark 
                  ? "bg-gradient-to-b from-blue-400/50 via-blue-400 to-blue-400/50"
                  : "bg-gradient-to-b from-blue-600/30 via-blue-600 to-blue-600/30"
              }`}></div>
            </div>

            {/* Second Heading */}
            <div className="text-center">
              <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                CAPITAL RAISING,{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">TRANSFORMED</span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto opacity-0 animate-fadeInUp animate-delay-2 py-8">
            <p className={`text-xl md:text-2xl leading-relaxed font-light ${
              isDark ? 'text-white/80' : 'text-gray-600'
            }`}>
              Leveraging our AI-powered platform, we strategically partner with our clients to provide tailored solutions and execute deals efficiently
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp animate-delay-3">
            <button className={`px-8 py-3 rounded-full border ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-gray-200 text-gray-900 hover:bg-gray-100'
            } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}>
              Get Started
            </button>
            <button className={`px-8 py-3 rounded-full border ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-gray-200 text-gray-900 hover:bg-gray-100'
            } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero