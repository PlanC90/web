import { Twitter, MessageCircle } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Community = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const twitterAccounts = [
    { handle: 'Paullweb3', name: 'Paullweb3', url: 'https://x.com/Paullweb3' },
    { handle: 'FredaDolly15116', name: 'FredaDolly15116', url: 'https://x.com/FredaDolly15116' },
    { handle: 'greg_miller05', name: 'greg_miller05', url: 'https://x.com/greg_miller05' },
    { handle: 'Diamondweb_3', name: 'Diamondweb_3', url: 'https://x.com/Diamondweb_3' },
    { handle: 'Olivelinex', name: 'Olivelinex', url: 'https://x.com/Olivelinex' },
    { handle: 'Brad_nft', name: 'Brad_nft', url: 'https://x.com/Brad_nft' },
    { handle: 'Bullify_X', name: 'Bullify_X', url: 'https://x.com/Bullify_X' },
    { handle: 'TrollmannGems', name: 'TrollmannGems', url: 'https://x.com/TrollmannGems' },
    { handle: 'kryptowhizz', name: 'kryptowhizz', url: 'https://x.com/kryptowhizz' },
    { handle: 'KryptOrbz', name: 'KryptOrbz', url: 'https://x.com/KryptOrbz' },
    { handle: 'formanite602', name: 'formanite602', url: 'https://x.com/formanite602' },
    { handle: 'Crypt0Rachel', name: 'Crypt0Rachel', url: 'https://x.com/Crypt0Rachel' },
    { handle: 'chainrexx', name: 'chainrexx', url: 'https://x.com/chainrexx' },
    { handle: 'Bulishbosslady', name: 'Bulishbosslady', url: 'https://x.com/Bulishbosslady' },
    { handle: 'Dee_Cryptt', name: 'Dee_Cryptt', url: 'https://x.com/Dee_Cryptt' },
    { handle: 'Crypto_Myth_', name: 'Crypto_Myth_', url: 'https://x.com/Crypto_Myth_' },
    { handle: 'defi_craft', name: 'defi_craft', url: 'https://x.com/defi_craft' },
    { handle: 'TimmyDefi', name: 'TimmyDefi', url: 'https://x.com/TimmyDefi' },
    { handle: 'BitHive602', name: 'BitHive602', url: 'https://x.com/BitHive602' },
    { handle: 'tokenovax', name: 'tokenovax', url: 'https://x.com/tokenovax' },
    { handle: 'Adya_crypt', name: 'Adya_crypt', url: 'https://x.com/Adya_crypt' },
    { handle: 'CrypttraderDave', name: 'CrypttraderDave', url: 'https://x.com/CrypttraderDave' },
    { handle: 'SaulWgmi', name: 'SaulWgmi', url: 'https://x.com/SaulWgmi' },
    { handle: 'BULLX132', name: 'BULLX132', url: 'https://x.com/BULLX132' },
    { handle: 'abgweb3', name: 'abgweb3', url: 'https://x.com/abgweb3' },
    { handle: 'cryptoeternall', name: 'cryptoeternall', url: 'https://x.com/cryptoeternall' },
    { handle: 'aleyweb3', name: 'aleyweb3', url: 'https://x.com/aleyweb3' },
    { handle: 'Ellaweb_3', name: 'Ellaweb_3', url: 'https://x.com/Ellaweb_3' },
    { handle: 'CRYPTOKRALI3', name: 'CRYPTOKRALI3', url: 'https://x.com/CRYPTOKRALI3' },
    { handle: 'SharkyWeb3', name: 'SharkyWeb3', url: 'https://x.com/SharkyWeb3' },
    { handle: 'btczayn', name: 'btczayn', url: 'https://x.com/btczayn' },
    { handle: 'zaygems', name: 'zaygems', url: 'https://x.com/zaygems' },
    { handle: 'PepeArmy2024', name: 'PepeArmy2024', url: 'https://x.com/PepeArmy2024' },
    { handle: 'DogeArmy2023', name: 'DogeArmy2023', url: 'https://x.com/DogeArmy2023' },
    { handle: 'Ucan_Coin', name: 'Ucan_Coin', url: 'https://x.com/Ucan_Coin' },
    { handle: 'shuglisam', name: 'shuglisam', url: 'https://x.com/shuglisam' },
    { handle: 'CryptooSeneR', name: 'CryptooSeneR', url: 'https://x.com/CryptooSeneR' },
    { handle: 'drarjantit', name: 'drarjantit', url: 'https://x.com/drarjantit' },
    { handle: 'Duffytrader', name: 'Duffytrader', url: 'https://x.com/Duffytrader' },
    { handle: 'asiancryptocall', name: 'asiancryptocall', url: 'https://x.com/asiancryptocall' },
    { handle: 'BlueOceanGloria', name: 'BlueOceanGloria', url: 'https://x.com/BlueOceanGloria' },
    { handle: 'CryptoWolvi', name: 'CryptoWolvi', url: 'https://x.com/CryptoWolvi' },
  ];

  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const chunkedAccounts = chunkArray(twitterAccounts, 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % chunkedAccounts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [chunkedAccounts.length]);

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

          <div className="mt-8 border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Supporters on X</h3>
            <div className="relative overflow-hidden rounded-lg">
              <div className="transition-transform duration-500" style={{ transform: `translateX(-${currentCard * 100}%)` }}>
                <div className="flex">
                  {chunkedAccounts.map((accountChunk, index) => (
                    <div key={index} className="flex-shrink-0 w-full flex justify-around">
                      {accountChunk.map((account, i) => (
                        <a
                          key={account.handle}
                          href={account.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-1/2 p-4 bg-gray-700/50 rounded-xl text-center ${i === 0 ? 'mr-2' : 'ml-2'}`}
                        >
                          <Twitter className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                          <p className="text-white font-bold">@{account.handle}</p>
                          <p className="text-gray-400">{account.name}</p>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Join the MemeX Army!</h3>
            <p className="text-gray-400 text-center">
              MemeX, founded on January 2, 2025, was immediately released to the community, who then formed the MemeX ARMY. In this short time, MemeX has surpassed 130,000+ holders. Join the MemeX ARMY community now!
            </p>
            <div className="text-center mt-4">
              <a href="https://t.me/memexarmyy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 font-bold">
                Join MemeX ARMY
              </a>
            </div>
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
