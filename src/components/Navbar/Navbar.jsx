import { useState, useContext } from 'react'
import { FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from 'react-icons/fi'
import { ThemeContext } from '../../App'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { isDark, toggleTheme } = useContext(ThemeContext)

  const products = [
    'Private and Public Database Platform',
    'Market Research',
    'Virtual Data Room',
    'Deal Monitoring',
    'M&A and Tax Advisory Services',
    'AI-powered and Due Diligence',
    'AI-powered and Valuation'
  ]

  const clients = [
    'Investors',
    'Companies',
    'Service Providers'
  ]

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${
        isDark 
          ? 'bg-white/10' 
          : 'bg-white'
      } backdrop-blur-md rounded-full mt-4 max-w-6xl shadow-lg`}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4">
            <img 
              src="/images/logo.png"  
              alt="Machine Logo" 
              className={`h-24 ${!isDark ? 'brightness-0' : ''}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                className={`flex items-center space-x-1 font-medium py-2 px-4 rounded-full ${
                  isDark 
                    ? 'text-white hover:text-blue-400 hover:bg-white/10' 
                    : 'text-black hover:text-blue-600 hover:bg-gray-50'
                } transition-colors duration-200`}
                onClick={() => toggleDropdown('products')}
              >
                <span>Our Products</span>
                <FiChevronDown className={`ml-2 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products' && (
                <div className={`absolute top-full left-0 mt-2 w-72 ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } rounded-2xl shadow-xl py-3 border ${
                  isDark ? 'border-gray-800' : 'border-gray-100'
                } transform opacity-100 scale-100 transition-all duration-200`}>
                  <div className={`absolute top-0 left-6 -mt-2 w-4 h-4 ${
                    isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                  } border-t border-l transform rotate-45`} />
                  {products.map((product, index) => (
                    <a 
                      key={index}
                      href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block px-6 py-2 ${
                        isDark 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                          : 'text-black hover:text-blue-600 hover:bg-gray-50'
                      } first:rounded-t-2xl last:rounded-b-2xl transition-colors duration-200`}
                    >
                      {product}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Clients Dropdown */}
            <div className="relative">
              <button 
                className={`flex items-center space-x-1 font-medium py-2 px-4 rounded-full ${
                  isDark 
                    ? 'text-white hover:text-blue-400 hover:bg-white/10' 
                    : 'text-black hover:text-blue-600 hover:bg-gray-50'
                } transition-colors duration-200`}
                onClick={() => toggleDropdown('clients')}
              >
                <span>Our Clients</span>
                <FiChevronDown className={`ml-2 transition-transform duration-200 ${activeDropdown === 'clients' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'clients' && (
                <div className={`absolute top-full left-0 mt-2 w-56 ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } rounded-2xl shadow-xl py-3 border ${
                  isDark ? 'border-gray-800' : 'border-gray-100'
                }`}>
                  <div className={`absolute top-0 left-6 -mt-2 w-4 h-4 ${
                    isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                  } border-t border-l transform rotate-45`} />
                  {clients.map((client, index) => (
                    <a 
                      key={index}
                      href={`#${client.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block px-6 py-2 ${
                        isDark 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                          : 'text-black hover:text-blue-600 hover:bg-gray-50'
                      } first:rounded-t-2xl last:rounded-b-2xl transition-colors duration-200`}
                    >
                      {client}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#demo" className={`font-medium py-2 px-4 rounded-full ${
              isDark 
                ? 'text-white hover:text-blue-400 hover:bg-white/10' 
                : 'text-black hover:text-blue-600 hover:bg-gray-50'
            } transition-colors duration-200`}>Demo</a>

            {/* Theme Toggle and Login Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full border ${
                  isDark 
                    ? 'border-white/20 hover:bg-white/10' 
                    : 'border-gray-200 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              <button className={`px-8 py-2.5 rounded-full border ${
                isDark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-gray-200 text-gray-900 hover:bg-gray-100'
              } transition-colors duration-200`}>
                Login / Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark 
                  ? 'hover:bg-white/10' 
                  : 'hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${
                isDark 
                  ? 'hover:bg-white/10' 
                  : 'hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden ${
          isDark ? 'bg-gray-900/95' : 'bg-white'
        } backdrop-blur-md rounded-2xl mt-2 mx-4 shadow-lg border ${
          isDark ? 'border-gray-800' : 'border-gray-100'
        }`}>
          <div className="px-8 py-4 space-y-3">
            {/* Products Dropdown Mobile */}
            <div>
              <button 
                onClick={() => toggleDropdown('products')}
                className={`flex items-center justify-between w-full ${
                  isDark ? 'text-gray-300' : 'text-black'
                } py-2 px-4 rounded-full hover:bg-gray-50`}
              >
                <span className="font-medium">Our Products</span>
                <FiChevronDown className={`transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products' && (
                <div className="mt-2 pl-4 space-y-2">
                  {products.map((product, index) => (
                    <a 
                      key={index}
                      href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block py-2 px-4 ${
                        isDark 
                          ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800' 
                          : 'text-black hover:text-blue-600 hover:bg-gray-50'
                      } rounded-full transition-colors duration-200`}
                    >
                      {product}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Clients Dropdown Mobile */}
            <div>
              <button 
                onClick={() => toggleDropdown('clients')}
                className={`flex items-center justify-between w-full ${
                  isDark ? 'text-gray-300' : 'text-black'
                } py-2 px-4 rounded-full hover:bg-gray-50`}
              >
                <span className="font-medium">Our Clients</span>
                <FiChevronDown className={`transition-transform duration-200 ${activeDropdown === 'clients' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'clients' && (
                <div className="mt-2 pl-4 space-y-2">
                  {clients.map((client, index) => (
                    <a 
                      key={index}
                      href={`#${client.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block py-2 px-4 ${
                        isDark 
                          ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800' 
                          : 'text-black hover:text-blue-600 hover:bg-gray-50'
                      } rounded-full transition-colors duration-200`}
                    >
                      {client}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#demo" className={`block ${
              isDark ? 'text-gray-300' : 'text-black'
            } font-medium py-2 px-4 rounded-full hover:bg-gray-50`}>Demo</a>
            
            <button className={`w-full border ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-gray-200 text-gray-900 hover:bg-gray-100'
            } px-8 py-2.5 rounded-full transition-colors shadow-md hover:shadow-lg`}>
              Login/Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
