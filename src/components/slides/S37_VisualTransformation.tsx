import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { FaBook, FaUsers, FaAd, FaHandsHelping } from 'react-icons/fa'

export default function S37_VisualTransformation() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Визуальная трансформация
          </h2>
          <p className="text-lg text-gray-600">
            Новый подход к визуальному контенту
          </p>
        </div>

        {/* Transformation Grid */}
        <div className="space-y-6 max-w-5xl mx-auto flex-1">
          {/* From Catalog to Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <Card className="hover:shadow-lg transition-all duration-300 bg-gray-50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <FaBook className="w-6 h-6 text-gray-500" />
                  <CardTitle className="text-lg text-gray-700">
                    От каталога
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Статичные продуктовые фото
                </p>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <HiOutlineArrowRight className="w-8 h-8 text-soft-blue-dark" />
            </div>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-blue">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <FaUsers className="w-6 h-6 text-soft-blue-dark" />
                  <CardTitle className="text-lg text-gray-900">
                    к историям
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 font-medium">
                  Живые истории реальных семей
                </p>
              </CardContent>
            </Card>
          </div>

          {/* From Stock to Reality */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <Card className="hover:shadow-lg transition-all duration-300 bg-gray-50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <FaBook className="w-6 h-6 text-gray-500" />
                  <CardTitle className="text-lg text-gray-700">
                    От stock-фото
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Идеальные постановочные кадры
                </p>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <HiOutlineArrowRight className="w-8 h-8 text-soft-pink-dark" />
            </div>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-pink">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <FaUsers className="w-6 h-6 text-soft-pink-dark" />
                  <CardTitle className="text-lg text-gray-900">
                    к реальной жизни
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 font-medium">
                  Настоящие моменты материнства
                </p>
              </CardContent>
            </Card>
          </div>

          {/* From Advertising to Value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <Card className="hover:shadow-lg transition-all duration-300 bg-gray-50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <FaAd className="w-6 h-6 text-gray-500" />
                  <CardTitle className="text-lg text-gray-700">
                    От рекламы
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Прямая продажа продукта
                </p>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <HiOutlineArrowRight className="w-8 h-8 text-soft-green-dark" />
            </div>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-green">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <FaHandsHelping className="w-6 h-6 text-soft-green-dark" />
                  <CardTitle className="text-lg text-gray-900">
                    к пользе
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 font-medium">
                  Решение реальных проблем мам
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Key Message */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/10 to-soft-pink/10 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-center text-lg font-semibold text-gray-900">
              Аутентичность и польза — новые драйверы вовлеченности
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}