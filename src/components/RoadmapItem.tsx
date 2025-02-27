import React from 'react';

    interface RoadmapItemProps {
      phase: string;
      description: string;
      timeline: string;
      isCurrent?: boolean;
    }

    const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, description, timeline, isCurrent }) => {
      return (
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full border-4 border-gray-600 bg-black"></div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-blue-500">{phase}</h3>
                <p className="text-gray-400">{description}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-gray-700 rounded-full text-gray-400 text-sm">
                  {timeline}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12"></div>
          </div>
        </div>
      );
    };

    export default RoadmapItem;
