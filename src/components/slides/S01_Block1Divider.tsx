import React from 'react';
import { HiOutlineDocumentReport } from 'react-icons/hi';

const S01_Block1Divider: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-12">
      <div className="text-center max-w-4xl mx-auto">
        {/* Block Number */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-1 bg-blue-600 mr-4"></div>
          <span className="text-6xl font-light text-blue-600">01</span>
          <div className="w-24 h-1 bg-blue-600 ml-4"></div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <HiOutlineDocumentReport className="w-24 h-24 text-blue-600" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-medium text-gray-900 mb-4">
          ПРОБЛЕМА И КОНТЕКСТ
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 font-light">
          Главная проблема • WHO Code • Наше преимущество
        </p>

        {/* Bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-16 h-1 bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default S01_Block1Divider;