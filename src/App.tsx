import { useState } from 'react';
import { Twitter, MessageCircle, Download, ArrowRight } from 'lucide-react';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import About from './components/About';
import Roadmap from './components/Roadmap';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadClick = () => {
    const deviceType = navigator.userAgent.toLowerCase();
    const walletUrls = {
      android: 'https://play.google.com/store/apps/details?id=com.electraprotocol.omnixep.wallet',
      ios: 'https://apps.apple.com/us/app/omnixep-wallet/id6739203200',
      windows: 'https://github.com/ElectraProtocol/Electra-Protocol-data/releases/download/omnixep-launcher-1.0.0/OmniXEP-Pro-Windows-installer.exe',
      mac: 'https://github.com/ElectraProtocol/Electra-Protocol-data/releases/download/omnixep-launcher-1.0.0/OmniXEP-Pro-macOS-installer.dmg',
      unknown: 'https://play.google.com/store/apps/details?id=com.electraprotocol.omnixep.wallet'
    };
    window.location.href = walletUrls[deviceType] || walletUrls.unknown;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.glitch.global/cdada319-8cc1-41a7-ab15-329ec6fc30a0/memexlogo.jpg"
              alt="MemeX Logo"
              className="w-14 h-14 object-cover rounded-full border-2 border-blue-500 shadow-lg shadow-blue-500/30"
              style={{ clipPath: 'circle(35%)' }}
            />
            <span className="font-bold text-2xl tracking-tight">MEMEX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#tokenomics" className="hover:text-blue-400 transition-colors">Tokenomics</a></li>
              <li><a href="#community" className="hover:text-blue-400 transition-colors">Community</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900 p-4 md:hidden z-50">
              <ul className="flex flex-col gap-4">
                <li><a href="#features" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a></li>
                <li><a href="#tokenomics" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Tokenomics</a></li>
                <li><a href="#community" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</a></li>
                <li><a href="#about" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
              </ul>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="animate-pulse inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
            🔥 Airdrop Live Now! 🔥
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Super Fast, Super Cheap, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Super Fun! 🚀</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-4">
            The next generation meme token with real-world utility. Ultra-fast transfers,
            near-zero fees, and a community-driven ecosystem.
          </p>
          <p className="text-xl text-blue-400 max-w-3xl mx-auto mb-10 font-bold">
            MemeX: A 100% Decentralized Community Project on the Electraprotocol Network!
          </p>

          {/* Holder Count */}
          <div className="text-6xl font-extrabold text-blue-400 mb-8">
            130,000+ Holders
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://memex1.planc.space"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center"
            >
              Claim 2,000,000 Tokens <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button
              onClick={handleDownloadClick}
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              <Download className="mr-2 w-5 h-5" /> Download Wallet
            </button>
            <a
              href="https://electraprotocol.network/omni/property/199/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              Contract
            </a>
          </div>

          {/* Token Image */}
          <div className="relative mb-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
            <div className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30 ml-4 relative z-10" style={{ clipPath: 'circle(35%)' }}>
              <img
                src="https://cdn.glitch.global/cdada319-8cc1-41a7-ab15-329ec6fc30a0/memexlogo.jpg"
                alt="MemeX Logo"
                className="w-full h-full object-cover rounded-full"
                style={{ clipPath: 'circle(35%)' }}
              />
            </div>
            <img
              src="https://www.electraprotocol.com/wp-content/uploads/2021/12/electra-protocol-symbol-blue-color-normal.png"
              alt="MemeX Token"
              className="relative z-10 w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50"
              style={{ clipPath: 'circle(35%)' }}
            />
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* Tokenomics Section */}
        <Tokenomics />

        {/* Roadmap Section */}
        <Roadmap />

        {/* Community Section */}
        <Community />

        {/* About Section */}
        <About />

        {/* CTA Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Don't miss out on your chance to claim 2,000,000 MEMEX tokens in our limited-time airdrop.
            </p>

            <a
              href="https://memex1.planc.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Claim Your Airdrop Now
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-gray-900/80 py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-gray-400">Follow us on social media</p>
            <div className="flex justify-center gap-8 mt-4">
              <a href="https://twitter.com/MemeXToken" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
              </a>
              <a href="https://t.me/memextoken" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 text-blue-400 hover:text-blue-500" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">&copy; 2025 MemeX. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
