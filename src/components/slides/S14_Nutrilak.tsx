import SlideWrapper from '@/components/SlideWrapper'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiChartBar, HiCalendar, HiCheckCircle, HiXCircle } from 'react-icons/hi2'
import { FaChartLine, FaRegCommentDots } from 'react-icons/fa'

export default function S14_Nutrilak() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Заголовок */}
        <div className="text-center mb-6 flex-shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            NUTRILAK
          </h2>
          <p className="text-lg text-gray-600">
            @nutrilak_uz
          </p>
        </div>

        {/* Основная сетка - занимает оставшееся пространство */}
        <div className="grid grid-cols-3 gap-8 flex-grow min-h-0">
          {/* Левая колонка - метрики */}
          <div className="flex flex-col space-y-4 h-full">
            <Card className="flex-grow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">Показатели</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HiChartBar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Подписчики</span>
                  </div>
                  <span className="font-bold">30,035</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaChartLine className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">ER</span>
                  </div>
                  <span className="font-bold text-green-600">1.44%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HiCalendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Частота</span>
                  </div>
                  <span className="font-bold">1 пост/нед</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaRegCommentDots className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Comment Rate</span>
                  </div>
                  <span className="font-bold">58%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-grow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">Позиционирование</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center h-full">
                <p className="text-sm italic">
                  "Российский производитель полного цикла с научным подходом"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Средняя колонка - скриншот */}
          <div className="h-full">
            <ImagePlaceholder
              src="/competitors/nutrilak.webp"
              alt="Скриншот Instagram страницы Nutrilak"
              aspectRatio="3/4"
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>

          {/* Правая колонка - анализ */}
          <div className="flex flex-col space-y-4 h-full">
            <Card className="flex-grow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-green-600 flex items-center space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-green-600" />
                  <span>Что работает</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <p className="text-sm">Системный подход — контент как учебник</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <p className="text-sm">92% на узбекском — максимальная локализация</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <p className="text-sm">Save-worthy материалы — мамы сохраняют</p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-grow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-pink-600 flex items-center space-x-2">
                  <HiXCircle className="w-5 h-5 text-pink-600" />
                  <span>Что не работает</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Слишком длинные тексты (1460 симв.)</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Мало эмоций и личных историй</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">CTA снижают ER на -31%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Стратегия */}
        <div className="mt-6 flex-shrink-0">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-200 text-blue-700 px-4 py-2">Стратегия</Badge>
              <p className="text-base font-medium text-gray-900">
                Построение образа "тихого авторитета" через педиатров (B2B2C)
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}