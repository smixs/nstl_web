import SlideWrapper from '@/components/SlideWrapper'
import { HiSparkles } from 'react-icons/hi2'

export default function S01_Title() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-3xl shadow-soft p-8">
              <img 
                src="/images/logo.avif" 
                alt="Baby&Me Logo" 
                className="h-24 w-auto"
              />
            </div>
          </div>
          
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              NESTLE BABY & ME UZBEKISTAN
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
              Стратегия цифровой трансформации 2025
            </h2>
            <p className="text-xl text-gray-600 italic">
              От доброго советника к доверенному эксперту поколений
            </p>
          </div>
          
          {/* Bottom accent */}
          <div className="flex justify-center items-center space-x-2 mt-12 text-secondary">
            <HiSparkles className="w-6 h-6" />
            <span className="text-lg font-medium">Digital Transformation Strategy</span>
            <HiSparkles className="w-6 h-6" />
          </div>
        </div>
        
        {/* Navigation hint */}
        <div className="absolute bottom-8 right-[10%] text-gray-400 text-sm animate-bounce">
          Используйте стрелки ← → или кликните для навигации
        </div>
      </div>
    </SlideWrapper>
  )
}