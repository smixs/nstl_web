import React from 'react';
import { HiOutlineShieldCheck } from 'react-icons/hi';

const S38_Block5Divider: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-12">
      <div className="text-center max-w-4xl mx-auto">
        {/* Block Number */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-0.5 bg-nestle-blue mr-4"></div>
          <span className="text-5xl font-light text-nestle-blue">05</span>
          <div className="w-24 h-0.5 bg-nestle-blue ml-4"></div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <HiOutlineShieldCheck className="w-20 h-20 text-nestle-blue" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-medium text-gray-900 mb-4">
          БЕЗОПАСНОСТЬ И КОНТРОЛЬ
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 font-light">
          Система безопасности UGC • Защита от рисков • Compliance процесс
        </p>

        {/* Bottom accent */}
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-0.5 bg-nestle-blue"></div>
        </div>
      </div>
    </div>
  );
};

export default S38_Block5Divider;