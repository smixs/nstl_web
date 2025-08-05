import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';

const S20_Block3Divider: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-12">
      <div className="text-center max-w-4xl mx-auto">
        {/* Block Number */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-0.5 bg-nestle-blue mr-4"></div>
          <span className="text-5xl font-light text-nestle-blue">03</span>
          <div className="w-24 h-0.5 bg-nestle-blue ml-4"></div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <HiOutlineLightBulb className="w-20 h-20 text-nestle-blue" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-medium text-gray-900 mb-4">
          СТРАТЕГИЯ РЕШЕНИЯ
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 font-light">
          Стратегическое преимущество • Big Idea • 4 стратегических решения
        </p>

        {/* Bottom accent */}
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-0.5 bg-nestle-blue"></div>
        </div>
      </div>
    </div>
  );
};

export default S20_Block3Divider;