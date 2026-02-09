import React from 'react';
import { Megaphone } from 'lucide-react';

const Announcement: React.FC = () => {
  return (
    <div className="bg-brand-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative flex items-center">
        {/* Gradient fade on left */}
        <div className="absolute left-0 w-12 h-full bg-linear-to-r from-brand-600 to-transparent z-10" />
        
        {/* Icon and text container */}
        <div className="shrink-0 px-4 py-2.5 bg-brand-600 flex items-center gap-2 z-20">
          <Megaphone className="h-4 w-4 animate-bounce" />
          <span className="font-medium hidden sm:inline">Event:</span>
        </div>

        {/* Scrolling text container */}
        <div className="overflow-hidden flex-1">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Repeat the text multiple times to ensure continuous scrolling */}
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="inline-block px-4">
                  Dumroo.ai is exhibiting at The AI Show @ ASU+GSV, San Diego, California. April 5-7, 2025. VISIT US AT BOOTH G26 (K12 ZONE)!
                </span>
                <span className="inline-block px-4">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Gradient fade on right */}
        <div className="absolute right-0 w-12 h-full bg-linear-to-l from-brand-600 to-transparent z-10" />
      </div>
    </div>
  );
};

export default Announcement;