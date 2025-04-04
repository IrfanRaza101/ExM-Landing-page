import { useContext } from 'react'
import { ThemeContext } from '../../App'
import backgroundImage from '../../assets/Background image.png'

const Hero = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className="min-h-screen flex items-center relative">
      {/* Background Image for Light Mode */}
      {isDark && (
        <div 
          
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
     
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Main Headings */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 opacity-0 animate-fadeInUp mt-12">
            {/* First Heading */}
            <div className="text-center">
              <h1 className={`text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight ${isDark ? 'text-white/90' : 'text-white drop-shadow-lg'}`}>
                COMPREHENSIVE DATA,{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">CAPTURED</span>
              </h1>
            </div>

            {/* Vertical Line */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className={`w-px h-24 ${
                isDark 
                  ? "bg-gradient-to-b from-blue-400/50 via-blue-400 to-blue-400/50"
                  : "bg-gradient-to-b from-white/50 via-white to-white/50"
              }`}></div>
            </div>

            {/* Second Heading */}
            <div className="text-center">
              <h1 className={`text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight ${isDark ? 'text-white/90' : 'text-white drop-shadow-lg'}`}>
                CAPITAL RAISING,{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">TRANSFORMED</span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto opacity-0 animate-fadeInUp animate-delay-2 py-8">
            <p className={`text-xl md:text-2xl leading-relaxed font-light ${
              isDark ? 'text-white/80' : 'text-white/90 drop-shadow-lg'
            }`}>
              Leveraging our AI-powered platform, we strategically partner with our clients to provide tailored solutions and execute deals efficiently
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero