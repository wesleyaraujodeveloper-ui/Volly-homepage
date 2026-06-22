import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      {/* Phone Frame */}
      <div className="relative w-[400px] h-[800px] shrink-0 bg-volly-bg rounded-[3rem] shadow-2xl overflow-hidden border-[14px] border-gray-800">
        
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
          <div className="w-40 h-6 bg-gray-800 rounded-b-3xl"></div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-volly-bg relative overflow-y-auto overflow-x-hidden pb-16">
          {children}
        </div>

      </div>
    </div>
  );
};
