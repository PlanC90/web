import { Zap, Rocket, ShoppingCart, Flame } from 'lucide-react';

    const Features = () => {
      return (
        <section id="features" className="relative z-10 py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Why Choose <span className="text-blue-500">MemeX</span>?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-transform border border-gray-700 hover:border-blue-500/50">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="text-blue-500 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Free Airdrop</h3>
                <p className="text-gray-400">Claim 2,000,000 tokens now. Limited time offer for early adopters.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-transform border border-gray-700 hover:border-blue-500/50">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="text-blue-500 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ultra-Low Fees</h3>
                <p className="text-gray-400">Almost zero gas fees for transfers. Save money on every transaction.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-transform border border-gray-700 hover:border-blue-500/50">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Flame className="text-blue-500 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Instant Transfers</h3>
                <p className="text-gray-400">The fastest meme token on blockchain. Transfers complete in seconds.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-transform border border-gray-700 hover:border-blue-500/50">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <ShoppingCart className="text-blue-500 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-World Usability</h3>
                <p className="text-gray-400">Spend it in stores & online. Growing merchant adoption network.</p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Features;
