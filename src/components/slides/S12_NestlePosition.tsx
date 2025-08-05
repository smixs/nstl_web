import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiArrowRight, HiShoppingBag, HiHeart } from 'react-icons/hi2'
import { FaUserMd, FaHandHoldingHeart, FaCompass } from 'react-icons/fa'

export default function S12_NestlePosition() {
  return (
    <SlideWrapper>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Позиция Nestle: От витрины к советнику
          </h2>
          <p className="text-lg text-gray-600">
            Трансформация роли бренда в жизни семей
          </p>
        </div>

        {/* Transformation Journey */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* From: Product Showcase */}
            <Card className="hover:shadow-sm transition-all duration-300 border-2 border-gray-300">
              <CardHeader className="pb-4">
                <div className="icon-container-info mb-4">
                  <HiShoppingBag className="w-7 h-7 text-gray-600" />
                </div>
                <CardTitle className="text-lg">Было: Витрина продуктов</CardTitle>
                <Badge variant="outline" className="mt-2">ER: 1.20%</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">•</span>
                    <p className="text-sm text-gray-600">Фокус на характеристиках</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">•</span>
                    <p className="text-sm text-gray-600">Односторонняя коммуникация</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">•</span>
                    <p className="text-sm text-gray-600">Корпоративный язык</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">•</span>
                    <p className="text-sm text-gray-600">Дистанция с аудиторией</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="flex justify-center items-center py-8 md:py-0">
              <div className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-full p-4">
                <HiArrowRight className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* To: Trusted Advisor */}
            <Card className="hover:shadow-sm transition-all duration-300 border-2 border-blue-400">
              <CardHeader className="pb-4">
                <div className="icon-container-primary mb-4">
                  <FaUserMd className="w-7 h-7 icon-primary" />
                </div>
                <CardTitle className="text-lg">Стало: Доверенный советник</CardTitle>
                <Badge variant="default" className="mt-2">Цель ER: 1.80%</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <p className="text-sm font-medium">Фокус на решениях</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <p className="text-sm font-medium">Диалог и поддержка</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <p className="text-sm font-medium">Язык заботы</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <p className="text-sm font-medium">Часть сообщества</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* New Role Components */}
        <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-6 max-w-5xl mx-auto mb-8">
          <h3 className="text-lg font-semibold text-center mb-6">Компоненты новой роли</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="icon-container-primary mb-3 mx-auto">
                <FaCompass className="w-5 h-5 icon-primary" />
              </div>
              <p className="text-sm font-medium">Навигатор</p>
              <p className="text-xs text-gray-600 mt-1">
                Помогаем выбрать путь
              </p>
            </div>
            
            <div className="text-center">
              <div className="icon-container-secondary mb-3 mx-auto">
                <HiHeart className="w-5 h-5 icon-secondary" />
              </div>
              <p className="text-sm font-medium">Поддержка</p>
              <p className="text-xs text-gray-600 mt-1">
                Всегда рядом 24/7
              </p>
            </div>
            
            <div className="text-center">
              <div className="icon-container-success mb-3 mx-auto">
                <FaHandHoldingHeart className="w-5 h-5 icon-success" />
              </div>
              <p className="text-sm font-medium">Опыт</p>
              <p className="text-xs text-gray-600 mt-1">
                25 лет экспертизы
              </p>
            </div>
            
            <div className="text-center">
              <div className="icon-container-warning mb-3 mx-auto">
                <FaUserMd className="w-5 h-5 icon-warning" />
              </div>
              <p className="text-sm font-medium">Эксперт</p>
              <p className="text-xs text-gray-600 mt-1">
                Научная база знаний
              </p>
            </div>
          </div>
        </div>

        {/* Key Changes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-1">Контент</p>
            <p className="text-xs text-gray-600">80% советы → 20% продукт</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-1">Тон</p>
            <p className="text-xs text-gray-600">Мама-подруга, не корпорация</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-1">Цель</p>
            <p className="text-xs text-gray-600">Помощь, не продажа</p>
          </div>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              <FaHandHoldingHeart className="w-5 h-5 inline mr-2 text-blue-600" />
              Baby & Me — не бренд, который продает. Это друг, который помогает растить
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}