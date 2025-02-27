import React from 'react';

    const Tokenomics = () => {
      return (
        <section id="tokenomics" className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Tokenomics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Side: Total Supply and Allocation Percentages */}
              <div className="flex flex-col justify-between">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-xl opacity-20"></div>
                  <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold mb-6 text-blue-500 text-center">Total Supply</h3>
                    <p className="text-4xl font-bold mb-8 text-center break-words">30,000,000,000,000 MEMEX</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Airdrop</span>
                        <span className="font-bold text-lg">20%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Marketing</span>
                        <span className="font-bold text-lg">16.7%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '16.7%' }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Development</span>
                        <span className="font-bold text-lg">20%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Burn</span>
                        <span className="font-bold text-lg">43.3%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '43.3%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Token Distribution Details */}
              <div className="flex flex-col justify-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Token Distribution</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700">
                      <h4 className="font-bold text-md">Airdrop Allocation</h4>
                      <p className="text-gray-400 text-sm">6,000,000,000,000 MEMEX (20%)</p>
                      <p className="text-gray-500 text-xs mt-1">Free distribution to early community members.</p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700">
                      <h4 className="font-bold text-md">Marketing & Promotion</h4>
                      <p className="text-gray-400 text-sm">5,000,000,000,000 MEMEX (16.7%)</p>
                      <p className="text-gray-500 text-xs mt-1">Used for exchange listings, partnerships, and community growth.</p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700">
                      <h4 className="font-bold text-md">Development & Team</h4>
                      <p className="text-gray-400 text-sm">6,000,000,000,000 MEMEX (20%)</p>
                      <p className="text-gray-500 text-xs mt-1">Allocated for ongoing development and team incentives.</p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700">
                      <h4 className="font-bold text-md">Burn Allocation</h4>
                      <p className="text-gray-400 text-sm">13,000,000,000,000 MEMEX (43.3%)</p>
                      <p className="text-gray-500 text-xs mt-1">To reduce supply and increase scarcity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center mx-4 lg:mx-0 lg:absolute lg:bottom-0 lg:left-0 lg:w-full">
              <p className="text-blue-400 font-medium text-sm">
                <span className="font-bold">Note:</span> Token burns will occur in phases to create deflationary pressure and increase token value over time.
              </p>
            </div>
          </div>
        </section>
      );
    };

    export default Tokenomics;
