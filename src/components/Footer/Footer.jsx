import { useContext } from 'react'
import { ThemeContext } from '../../App'
import { FaLinkedin } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'

const Footer = () => {
  const { isDark } = useContext(ThemeContext)

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 py-8">
          {/* Left Column */}
          <div className="space-y-6 opacity-0 animate-fadeInUp">
            <h3 className="text-2xl font-semibold text-white">
              Contact Us
            </h3>
            <a 
              href="mailto:tilda.nguyen@exmachinacap.com"
              className="group inline-block text-lg text-gray-300 hover:text-blue-400 transition-all duration-300"
            >
              <span className="border-b border-transparent group-hover:border-current">
                tilda.nguyen@exmachinacap.com
              </span>
            </a>
          </div>

          {/* Right Column */}
          <div className="flex justify-start md:justify-end space-x-8 items-start opacity-0 animate-fadeInUp animate-delay-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Follow Us
              </h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaLinkedin className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                  <span className="border-b border-transparent group-hover:border-current">
                    LinkedIn
                  </span>
                </a>
                <button className="mt-1">
                  <BsThreeDots className="w-6 h-6 text-white/90 hover:text-blue-500 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 opacity-0 animate-fadeInUp animate-delay-2">
          <div className="space-y-4 text-sm">
            <p className="text-gray-400">
              Services provided by Ex Machina LLC are not intended as an advertisement offer for solicitation for the purchase or sale of any financial instrument. Access to our proprietary platform is subject to execution of the applicable user agreement and satisfaction of relevant user requirements decided by Ex Machina LLC in its sole discretion.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-6 border-t border-gray-400/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 opacity-0 animate-fadeInUp animate-delay-3">
          <p className="text-sm text-gray-400">
            © 2025 Ex Machina LLC. All rights reserved.
          </p>
          <p className="text-ml bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-medium font-['Dancing_Script']">
            Deus Ex Machina
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 