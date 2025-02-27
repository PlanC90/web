const About = () => {
      return (
        <section
          id="about"
          className="relative z-10 py-20 bg-gray-900/50"
          style={{
            backgroundImage: `url(https://cdn.glitch.global/ca9d0dbe-3fa5-474f-b1dc-2aeeef6f10e1/gorselweb.png)`,
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">About Earning Memex</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="list-disc list-inside text-gray-400 space-y-3">
                <li><span className="font-bold text-white">No Wallet Connection</span> – You can earn without sharing your personal information.</li>
                <li><span className="font-bold text-white">No Withdrawal Fees</span> – Withdraw your Memex completely free to your wallet.</li>
                <li><span className="font-bold text-white">Low Transfer Fees</span> – Thanks to the XEP network, it has the lowest transaction costs for a meme token.</li>
                <li><span className="font-bold text-white">Free Transfers</span> – Holders can easily and low-cost transfer Memex tokens among themselves.</li>
                <li><span className="font-bold text-white">Easy Access</span> – Earn MemeX by completing a single task on the Telegram bot or website.</li>
                <li><span className="font-bold text-white">Supply Reduction</span> – After the airdrop ends, a portion of the remaining supply will be burned with each exchange listing.</li>
              </ul>
              <p className="mt-6 text-center text-gray-400">
                You can request Memex tokens to your OmniXEP wallet for free and gain advantages by following my X account for future developments!
              </p>
            </div>
          </div>
        </section>
      );
    };

    export default About;
