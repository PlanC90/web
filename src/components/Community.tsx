import { Twitter, MessageCircle } from 'lucide-react';

    const Community = () => {
      return (
        <section id="community" className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Join Our Community</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
              MemeX is
              <span className="font-bold text-blue-400"> a 100% decentralized community project</span>, managed by volunteers from all over the world. No team tokens, no VCs, just a passionate community building the future of meme tokens with real utility. It is a fully decentralized community project on the Electraprotocol network.
            </p>

            <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://x.com/memexairdrop" className="flex flex-col items-center p-6 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all transform hover:-translate-y-1">
                  <Twitter className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold">Twitter</h3>
                  <p className="text-gray-400 text-center mt-2">Follow for updates and announcements</p>
                </a>

                <a href="https://t.me/memexairdropchannel" className="flex flex-col items-center p-6 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all transform hover:-translate-y-1">
                  <MessageCircle className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold">Telegram</h3>
                  <p className="text-gray-400 text-center mt-2">Join our active community chat</p>
                </a>
              </div>

              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
                <p className="text-blue-400 font-medium">
                  Join now and be part of the fastest-growing meme token community!
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Community;
