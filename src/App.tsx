import { useState, useEffect } from 'react';
import { Twitter, MessageCircle, Download, ArrowRight, ArrowUp } from 'lucide-react';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import About from './components/About';
import Roadmap from './components/Roadmap';
import translations from './translate.json'; // Import translations

// Define language options
const languageOptions = {
  en: { name: 'English', flag: '🇺🇸🇬🇧' },
  tr: { name: 'Türkçe', flag: '🇹🇷' },
  es: { name: 'Español', flag: '🇪🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Almanca', flag: '🇩🇪' },
  ja: { name: 'Japanese', flag: '🇯🇵' },
  ar: { name: 'Arabic', flag: '🇦🇪' },
  bn: { name: 'Bengali', flag: '🇧🇩' },
  pt: { name: 'Português', flag: '🇵🇹🇧🇷' },
  ru: { name: 'Russian', flag: '🇷🇺' },
  hi: { name: 'Hindi', flag: '🇮🇳' },
  ha: { name: 'Hausa', flag: '🇳🇪' },
  zh: { name: 'Çince (Mandarin)', flag: '🇨🇳' },
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [language, setLanguage] = useState('en'); // Default language

  const handleDownloadClick = () => {
    const deviceType = navigator.userAgent.toLowerCase();
    let targetUrl = 'https://play.google.com/store/apps/details?id=com.electraprotocol.omnixep.wallet';

    if (deviceType.includes('android')) {
      targetUrl = 'https://play.google.com/store/apps/details?id=com.electraprotocol.omnixep.wallet';
    } else if (deviceType.includes('ios') || deviceType.includes('iphone') || deviceType.includes('ipad')) {
      targetUrl = 'https://apps.apple.com/us/app/omnixep-wallet/id6739203200';
    } else if (deviceType.includes('windows')) {
      targetUrl = 'https://github.com/ElectraProtocol/Electra-Protocol-data/releases/download/omnixep-launcher-1.0.0/OmniXEP-Pro-Windows-installer.exe';
    } else if (deviceType.includes('mac')) {
      targetUrl = 'https://github.com/ElectraProtocol/Electra-Protocol-data/releases/download/omnixep-launcher-1.0.0/OmniXEP-Pro-macOS-installer.dmg';
    }

    window.location.href = targetUrl;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to translate text
  const translate = (key) => {
    return translations[language]?.[key] || key;
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
          <nav className="hidden md:flex items-center gap-8">
            <li><a href="#features" className="hover:text-blue-400 transition-colors">{translate("Features")}</a></li>
            <li><a href="#tokenomics" className="hover:text-blue-400 transition-colors">{translate("Tokenomics")}</a></li>
            <li><a href="#community" className="hover:text-blue-400 transition-colors">{translate("Community")}</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">{translate("About")}</a></li>
          </nav>

          {/* Language selector */}
          <div className="hidden md:flex items-center">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 text-white rounded-md p-2"
            >
              {Object.entries(languageOptions).map(([key, value]) => (
                <option key={key} value={key}>
                 {languageOptions[language].flag} {languageOptions[language].name}
                </option>
              ))}
            </select>
          </div>

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
                <li><a href="#features" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{translate("Features")}</a></li>
                <li><a href="#tokenomics" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{translate("Tokenomics")}</a></li>
                <li><a href="#community" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{translate("Community")}</a></li>
                <li><a href="#about" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{translate("About")}</a></li>
              </ul>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="animate-pulse inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
            {translate("🔥 Airdrop Live Now! 🔥")}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {translate("Super Fast, Super Cheap, Super Fun! 🚀")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-4">
            The next generation meme token with real-world utility. Ultra-fast transfers,
            near-zero fees, and a community-driven ecosystem.
          </p>
          <p className="text-xl text-blue-400 max-w-3xl mx-auto mb-10 font-bold">
            {translate("MemeX: A 100% Decentralized Community Project on the Electraprotocol Network!")}
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
              <Download className="mr-2 w-5 h-5" /> {translate("Download Wallet")}
            </button>
            <a
              href="https://electraprotocol.network/omni/property/199/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              {translate("Contract")}
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

        {/* Vision Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{translate("Our Founder's Vision")}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              {translate("MemeX: The Blockchain Ecosystem of the Future")}
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Memex is more than just a token; it is a project aimed at building a large global community, integrating into multiple blockchain networks with a multi-chain structure, and achieving listings on all exchanges. With true adoption, it seeks to differentiate itself from other coins and tokens by enabling accessibility even in small village markets in local and international regions, allowing purchases with minimal gas fees.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              In line with this vision, Memex would distribute tokens to 1 million people for free to ensure widespread adoption and will eventually evolve into a Layer 2 solution known as MemexChain. This new chain will host millions of tokens and offer unique use cases.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              For example, a business with three vehicles can pre-purchase fixed-price XBenzin tokens at a discount and distribute them to its employees, allowing seamless fuel purchases. Similarly, a school cafeteria can sell fixed-price, pre-discounted XKantin tokens, enabling students to make quick purchases while allowing the cafeteria owner to foresee sales and manage stock more efficiently.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              One of Memex’s greatest ambitions is to rank among the top 100 cryptocurrencies, then climb into the top 10, proving itself as the most functional meme token. A determined leader and a committed team can achieve anything. Perhaps by the time these words are read, our goals will have been accomplished, and I will have passed the torch to the next generation of leaders.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              It must not be forgotten that Memex is the product of a global team of dedicated individuals. Our team members, professionals from different countries, are devoted to strengthening Memex with the most advanced blockchain technologies.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Another major goal of Memex is to bring together truly honest and competent projects, unifying blockchain ecosystems under Memex to create the most powerful and advanced token — not copying others but setting the standard for innovation.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              To have a say in the Memex community, holding the highest amount of tokens will become essential in the future. Yes, Memex may be a meme token, but it has committed itself to being the most functional of all meme tokens.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Additionally, MemexChain will introduce various solutions to make NFTs more usable. Visual content marketplaces will be able to license each image with MemexChain NFT, ensuring the protection of digital assets. Companies will be able to send invoices as NFTs, guaranteeing their authenticity and preventing any modifications. These technologies will make MemexChain a real-world utility blockchain, far beyond a mere speculative asset.
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Memex is ready to revolutionize the blockchain world! 🚀
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              “Memex for Everyone”
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              MemeX😊Vision
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{translate("Ready to Join the Revolution?")}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Don't miss out on your chance to claim 2,000,000 MEMEX tokens in our limited-time airdrop.
            </p>

            <a
              href="https://memex1.planc.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              {translate("Claim Your Airdrop Now")}
            </a>
          </div>
        </section>

        {/* Features Section */}
        <Features translate={translate} language={language} />

        {/* Tokenomics Section */}
        <Tokenomics />

        {/* Roadmap Section */}
        <Roadmap />

        {/* Community Section */}
        <Community />

        {/* About Section */}
        <About />

        {/* Footer */}
        <footer className="relative z-10 bg-gray-900/80 py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-gray-400">Legal Disclaimer</p>
            <p className="text-sm text-gray-400 mt-2">
              None of the information on this website should be construed as providing legal or financial advice. Please note there are always risks associated with smart contracts. MemeX is not a registered broker, analyst or investment advisor. If you have purchased $MemeX, you agree that you are not purchasing a security or investment. The MemeX team can not be held liable for any losses or taxes you may incur. You also agree that the team is representing the token is community members, and cannot modify the contract due to it being renounced. Do conduct your own due diligence and consult your financial advisor before making any investment decision.
            </p>
            <p className="text-lg text-gray-400 mt-6">{translate("Follow us on social media")}</p>
            <div className="flex justify-center gap-8 mt-4">
              <a href="https://twitter.com/MemeXToken" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
              </a>
              <a href="https://t.me/memextoken" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 text-blue-400 hover:text-blue-500" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">&copy; 2025 MemeX. All rights reserved.</p>
            <p className="text-sm text-gray-400">🚀 Powered by Electra Protocol, ensuring the lowest fees, fastest transactions, and ultimate security!</p>
          </div>
        </footer>
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 rounded-full shadow-lg transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
