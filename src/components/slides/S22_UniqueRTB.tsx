import SlideWrapper from '@/components/SlideWrapper'
import { HiOutlineGift, HiOutlineHeart } from 'react-icons/hi2'
import { FaHandsHelping, FaInfinity } from 'react-icons/fa'

export default function S22_UniqueRTB() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
            Уникальное RTB Nestle
          </h2>
          
          {/* Main Statement */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              МЫ НЕ ПРОДАЕМ ПРОДУКТ
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-nestle-blue">
              МЫ ПЕРЕДАЕМ ДОВЕРИЕ
            </h1>
          </div>
        </div>

        {/* Supporting Text */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-xl text-gray-700">
            <span className="font-semibold">От поколения к поколению</span>
            <FaInfinity className="text-soft-blue w-6 h-6" />
            <span className="font-semibold">+ современные инновации</span>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-auto">
          <div className="bg-gradient-to-r from-soft-blue/20 to-baby-pink/20 rounded-2xl px-8 py-8 shadow-sm max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-medium text-gray-900 italic">
                "Тот же NAN, что выбирала твоя мама, но лучше"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}