import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiChartBar, HiArrowTrendingUp } from 'react-icons/hi2'
import { HiLightningBolt } from 'react-icons/hi'
import { FaChartLine, FaExclamationTriangle, FaTrophy } from 'react-icons/fa'

export default function S08_MarketLandscape() {
  return (
    <SlideWrapper>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Рыночный ландшафт: Битва за вовлеченность
          </h2>
          <p className="text-lg text-gray-600">
            Анализ текущей ситуации и возможностей роста
          </p>
        </div>

        {/* Market Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {/* Current Situation */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-warning mb-4">
                <FaExclamationTriangle className="w-7 h-7 icon-warning" />
              </div>
              <CardTitle className="text-xl">Текущая ситуация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">ER Nestle</span>
                <Badge variant="destructive">1.20%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Средний ER рынка</span>
                <Badge variant="outline">2.50%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Лидеры рынка</span>
                <Badge variant="success">3.50%+</Badge>
              </div>
              <div className="mt-4 pt-3 border-t">
                <p className="text-sm text-gray-500">
                  Отставание от рынка на 52%
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Market Dynamics */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4">
                <HiArrowTrendingUp className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl">Динамика рынка</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Рост видео-контента: +300%</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">UGC-контент: +250%</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Персонализация: +180%</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">AI-инструменты: +150%</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t">
                <p className="text-sm text-gray-500">
                  Ключевые тренды 2025
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Opportunities */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4">
                <FaTrophy className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl">Возможности</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm">Неиспользованное доверие</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm">Готовая база 46K</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm">Уникальная экспертиза</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm">3 поколения историй</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t">
                <p className="text-sm text-green-700 font-medium">
                  Потенциал роста: +50%
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Engagement Battle Visualization */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-center mb-4">Поле битвы за вовлеченность</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <HiChartBar className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium">Традиционный контент</p>
              <p className="text-xs text-gray-500">ER: 0.5-1.0%</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-1/4 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <FaChartLine className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm font-medium">Качественный контент</p>
              <p className="text-xs text-gray-500">ER: 1.0-2.0%</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <HiLightningBolt className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-sm font-medium">Интерактивный контент</p>
              <p className="text-xs text-gray-500">ER: 2.0-3.0%</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <FaTrophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Персонализированный</p>
              <p className="text-xs text-gray-500">ER: 3.0%+</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full w-full bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              <HiLightningBolt className="w-5 h-5 inline mr-2 text-orange-500" />
              Рынок изменился. Простого присутствия недостаточно — нужна глубокая вовлеченность
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}