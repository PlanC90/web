import React from 'react';

interface RoadmapItemProps {
  phase: string;
  description: string;
  timeline: string;
  isCurrent?: boolean;
  position: 'left' | 'right';
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, description, timeline, isCurrent, position }) => {
  return (
    <div className={`relative ${position === 'left' ? 'md:mr-12' : 'md:ml-12'}`}>
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full border-4 border-gray-600 bg-black"></div>
      <div className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors ${position === 'left' ? 'md:text-right' : 'md:text-left'}`}>
        <h3 className="text-xl font-bold mb-2 text-blue-500">{phase}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="mt-4 inline-block px-3 py-1 bg-gray-700 rounded-full text-gray-400 text-sm">
          {timeline}
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const roadmapData = [
    { phase: "Phase 1: Launch & Airdrop", description: "Website launch, community building, and free airdrop distribution to early adopters.", timeline: "Current Phase", position: 'right', isCurrent: true },
    { phase: "Phase 2: 1 Million Holders", description: "Achieve a milestone of 1 million Memex token holders.", timeline: "Q2 2025", position: 'left' },
    { phase: "Phase 3: Web3 Wallet Integrations", description: "Integrate Memex with popular Web3 wallets for seamless access and utility.", timeline: "Q3 2025", position: 'right' },
    { phase: "Phase 4: Exchange Listings", description: "Listing on decentralized exchanges, followed by tier 2 and tier 1 centralized exchanges.", timeline: "Q4 2025", position: 'left' },
    { phase: "Phase 5: Real-World Adoption", description: "Merchant partnerships, payment integrations, and real-world use cases development.", timeline: "Q1 2026", position: 'right' },
    { phase: "Phase 6: Ecosystem Expansion", description: "Development of additional utilities, cross-chain integration, and global expansion.", timeline: "Q2 2026", position: 'left' }
  ];

  return (
    <section id="roadmap" className="relative z-10 py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Roadmap</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>

          <div className="space-y-24">
            {roadmapData.map((item, index) => (
              <RoadmapItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* MemeX Army Section */}
        <div
          className="mt-16 p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 text-center"
          style={{
            backgroundImage: `url(https://cdn.glitch.global/ca9d0dbe-3fa5-474f-b1dc-2aeeef6f10e1/gorselweb.png)`,
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <h3 className="text-3xl font-bold mb-4 text-blue-500">
            <span role="img" aria-label="army">
              🛡️
            </span>{" "}
            Join the MemeX Army!{" "}
            <span role="img" aria-label="community">
              🤝
            </span>
          </h3>
          <p className="text-gray-400 text-lg mb-6">
            MemeX was renounced to the community on January 2, 2025, and in this short time, over 130,000 people have become MemeX holders, freely withdrawing it to their wallets.
            It has been greatly loved by the community, and they have formed a community called the MemeX ARMY.
          </p>
          <p className="text-gray-400 text-lg mb-6">
            If you want to join the MemeX ARMY, here are the Telegram links:
          </p>
          <a
            href="https://t.me/memexarmyy"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold px-6 py-3 rounded-full transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join MemeX ARMY on Telegram{" "}
            <span role="img" aria-label="telegram">
              🚀
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
