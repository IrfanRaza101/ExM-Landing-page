import { useContext } from 'react'
import { ThemeContext } from '../../App'
import { FaLinkedin } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'

const Footer = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <footer className={`relative py-16 overflow-hidden ${
      isDark 
        ? "bg-gradient-to-b from-transparent via-black/30 to-black/50" 
        : "bg-gradient-to-b from-transparent via-gray-50/30 to-gray-100/50"
    }`}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 py-12">
          {/* Left Column */}
          <div className="space-y-6 opacity-0 animate-fadeInUp">
            <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h3>
            <a 
              href="mailto:tilda.nguyen@exmachinacap.com"
              className={`group inline-block text-lg transition-all duration-300 ${
                isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="border-b border-transparent group-hover:border-current">
                tilda.nguyen@exmachinacap.com
              </span>
            </a>
          </div>

          {/* Right Column */}
          <div className="flex justify-start md:justify-end space-x-8 items-start opacity-0 animate-fadeInUp animate-delay-1">
            <div className="space-y-6">
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Follow Us
              </h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 ${
                    isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  } transition-colors duration-200`}
                >
                  <FaLinkedin className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                  <span className="border-b border-transparent group-hover:border-current">
                    LinkedIn
                  </span>
                </a>
                <button className="mt-1">
                  <BsThreeDots className={`w-6 h-6 ${isDark ? 'text-white/90' : 'text-gray-900'} hover:text-blue-500 transition-colors`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-12 opacity-0 animate-fadeInUp animate-delay-2">
          <div className="space-y-4 text-sm">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Services provided by Ex Machina LLC are not intended as an advertisement offer for solicitation for the purchase or sale of any financial instrument.
            </p>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Access to our proprietary platform is subject to execution of the applicable user agreement and satisfaction of relevant user requirements decided by Ex Machina LLC in its sole discretion.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={`mt-8 pt-8 border-t ${
          isDark ? 'border-gray-800/50' : 'border-gray-200/50'
        } flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 opacity-0 animate-fadeInUp animate-delay-3`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2025 Ex Machina LLC. All rights reserved.
          </p>
          <p className={`text-sm bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent font-medium`}>
            Deus Ex Machina
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 