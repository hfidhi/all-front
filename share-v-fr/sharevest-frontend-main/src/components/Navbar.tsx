import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const subsidiaries = [
  { name: 'AssetVest', description: 'Asset Management Solutions' },
  { name: 'RiskVest', description: 'Risk Assessment & Management' },
  { name: 'QuantumVest', description: 'Quantitative Investment Strategies' },
  { name: 'HedgeVest', description: 'Hedge Fund Solutions' },
  { name: 'PartVest', description: 'Partnership Opportunities' },
  { name: 'PrivateVest', description: 'Private Equity Solutions' },
  { name: 'RelVest', description: 'Relationship Management' },
  { name: 'DataVest', description: 'Data-Driven Insights' }
];

const ventures = [
  { name: 'ShareVest Realty', link: 'realty.sharevest.io' },
  { name: 'ShareVest Terra', link: 'terra.sharevest.io' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">ShareVest</span>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-current hover:text-gray-300">
                Home
              </button>
              
              <div className="relative group">
                <button 
                  className="flex items-center text-current hover:text-gray-300"
                  onMouseEnter={() => setActiveDropdown('subsidiaries')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Subsidiaries <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'subsidiaries' && (
                  <div className="absolute left-0 mt-2 w-64 bg-black text-white rounded-md shadow-lg py-2">
                    {subsidiaries.map((subsidiary) => (
                      <a
                        key={subsidiary.name}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-900"
                      >
                        <div className="font-medium">{subsidiary.name}</div>
                        <div className="text-xs text-gray-400">{subsidiary.description}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('methodology')} className="text-current hover:text-gray-300">
                Methodology
              </button>
              
              <button onClick={() => scrollToSection('values')} className="text-current hover:text-gray-300">
                Values
              </button>

              <div className="relative group">
                <button 
                  className="flex items-center text-current hover:text-gray-300"
                  onMouseEnter={() => setActiveDropdown('ventures')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Our Ventures <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'ventures' && (
                  <div className="absolute left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg py-2">
                    {ventures.map((venture) => (
                      <a
                        key={venture.name}
                        href={`https://${venture.link}`}
                        className="block px-4 py-2 text-sm hover:bg-gray-900"
                      >
                        {venture.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('growthfunds')} className="text-current hover:text-gray-300">
                GrowthFunds
              </button>
              
              <button onClick={() => scrollToSection('contact')} className="text-current hover:text-gray-300">
                Contact Us
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
              Invest Now
            </button>
            <button className="text-current hover:text-gray-300">
              Login
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-current hover:text-gray-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 hover:bg-gray-900"
            >
              Home
            </button>
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'subsidiaries' ? null : 'subsidiaries')}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-900"
              >
                Subsidiaries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'subsidiaries' && (
                <div className="pl-4">
                  {subsidiaries.map((subsidiary) => (
                    <a
                      key={subsidiary.name}
                      href="#"
                      className="block px-3 py-2 text-sm hover:bg-gray-900"
                    >
                      <div className="font-medium">{subsidiary.name}</div>
                      <div className="text-xs text-gray-400">{subsidiary.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('methodology')}
              className="block w-full text-left px-3 py-2 hover:bg-gray-900"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollToSection('values')}
              className="block w-full text-left px-3 py-2 hover:bg-gray-900"
            >
              Values
            </button>
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'ventures' ? null : 'ventures')}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-900"
              >
                Our Ventures <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'ventures' && (
                <div className="pl-4">
                  {ventures.map((venture) => (
                    <a
                      key={venture.name}
                      href={`https://${venture.link}`}
                      className="block px-3 py-2 text-sm hover:bg-gray-900"
                    >
                      {venture.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('growthfunds')}
              className="block w-full text-left px-3 py-2 hover:bg-gray-900"
            >
              GrowthFunds
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 hover:bg-gray-900"
            >
              Contact Us
            </button>
            <div className="px-3 py-2 space-y-2">
              <button className="w-full px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
                Invest Now
              </button>
              <button className="w-full px-6 py-2 text-white hover:bg-gray-900 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}