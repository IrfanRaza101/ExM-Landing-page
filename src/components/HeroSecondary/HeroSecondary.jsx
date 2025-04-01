import { useContext, useRef } from 'react'
import { ThemeContext } from '../../App'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'

const Stat = ({ number, label, isDark }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Extract the numeric value and special characters
  const numericValue = number.replace(/[^0-9.]/g, '')
  const prefix = number.startsWith('$') ? '$' : ''
  const suffix = number.includes('+') ? '+' : number.includes('%') ? '%' : ''
  const hasBillion = number.includes('B')
  
  // Determine if we should show decimals based on the number
  const shouldShowDecimals = number.includes('$2.5B')

  return (
    <div ref={ref} className={`backdrop-blur-sm rounded-2xl p-6 ${
      isDark 
        ? "bg-white/5 border border-white/10"
        : "bg-white/60 border border-blue-100"
    }`}>
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2 flex items-center justify-center">
        <span className="flex items-center justify-center">
          {prefix}
          {isInView && (
            <CountUp 
              start={0} 
              end={parseFloat(numericValue)} 
              duration={2.5} 
              separator="," 
              decimal="."
              decimals={shouldShowDecimals ? 1 : 0}
            />
          )}
          {hasBillion ? 'B' : ''}
          {suffix}
        </span>
      </div>
      <div className={`${isDark ? "text-white/60" : "text-gray-600"} text-center`}>{label}</div>
    </div>
  )
}

const HeroSecondary = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <section className={`relative py-24 overflow-hidden ${
      isDark 
        ? "bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950" 
        : "bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100"
    }`}>
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-30 mix-blend-overlay ${
          isDark ? 'bg-mesh-pattern-dark' : 'bg-mesh-pattern-light'
        }`}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large glowing orbs */}
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full ${
          isDark 
            ? "bg-blue-500/10" 
            : "bg-blue-400/10"
        } blur-3xl animate-float`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full ${
          isDark 
            ? "bg-indigo-500/10" 
            : "bg-indigo-400/10"
        } blur-3xl animate-float-delayed`}></div>

        {/* Smaller floating elements */}
        <div className={`absolute top-1/4 right-1/3 w-32 h-32 rounded-full ${
          isDark 
            ? "bg-blue-400/20" 
            : "bg-blue-300/20"
        } blur-2xl animate-float-fast`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full ${
          isDark 
            ? "bg-indigo-400/20" 
            : "bg-indigo-300/20"
        } blur-2xl animate-float-fast-delayed`}></div>
      </div>

      {/* Stats Section - Moved outside the container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 animate-fadeInUp animate-delay-4">
        <Stat number="$2.5B+" label="Capital Raised" isDark={isDark} />
          <Stat number="547+" label="Active Investors" isDark={isDark} />
          <Stat number="95%" label="Success Rate" isDark={isDark} />
        </div>
      </div>

      {/* Content Container with Glass Effect */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        isDark 
          ? "bg-white/5" 
          : "bg-white/40"
      } backdrop-blur-sm rounded-3xl shadow-2xl`}>
        <div className="max-w-6xl mx-auto text-center space-y-12 py-12">
          {/* Main Heading */}
          <div className="opacity-0 animate-fadeInUp">
            <h2 className={`text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight leading-tight ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
              Ex MACHINA CONNECTS INVESTORS AND STRATEGIC BUYERS WITH A RICH DATASET OF
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> PE-BACKED</span>,
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> VC-BACKED</span>,
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> UNICORN</span>, AND OTHER HIGH-GROWTH AND UNDERVALUED COMPANIES
            </h2>
          </div>
          
          {/* Sub Heading */}
          <div className="opacity-0 animate-fadeInUp animate-delay-2">
            <h3 className={`text-xl md:text-2xl font-semibold ${
              isDark ? 'text-white/80' : 'text-gray-600'
            }`}>
              ENRICHED WITH ANALYTICS AND PREDICTIVE ALGORITHMS
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 opacity-0 animate-fadeInUp animate-delay-3">
            <button className={`px-8 py-4 rounded-full border ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-gray-200 text-gray-900 hover:bg-gray-100'
            } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}>
              TAKE A TOUR
            </button>
            <button className={`px-8 py-4 rounded-full border ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-gray-200 text-gray-900 hover:bg-gray-100'
            } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}>
              TAKE A SPIN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSecondary 