import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiSparkles, HiHeart, HiShieldCheck } from 'react-icons/hi2'
import { FaCrown, FaUsers, FaHandshake } from 'react-icons/fa'

export default function S07_CompetitiveLandscape() {
  return (
    <SlideWrapper>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Конкурентный ландшафт
          </h2>
          <p className="text-lg text-gray-600">
            Уникальное преимущество Nestle в генерационном доверии
          </p>
        </div>

        {/* Competitive Positioning */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Competitor Type 1 */}
            <Card className="hover:shadow-sm transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="icon-container-warning mb-4">
                  <HiSparkles className="w-7 h-7 icon-warning" />
                </div>
                <CardTitle className="text-base font-semibold">Новые игроки</CardTitle>
                <Badge variant="outline" className="mt-2">Kabrita, Nuppi</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <p className="text-sm">Агрессивный digital-маркетинг</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <p className="text-sm">Фокус на трендах и инновациях</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <p className="text-sm">Отсутствие долгой истории</p>
                </div>
                <div className="mt-4 pt-3 border-t">
                  <p className="text-xs text-gray-500">ER: 2.5-3.5%</p>
                </div>
              </CardContent>
            </Card>

            {/* Competitor Type 2 */}
            <Card className="hover:shadow-sm transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="icon-container-info mb-4">
                  <FaUsers className="w-7 h-7 icon-info" />
                </div>
                <CardTitle className="text-base font-semibold">Локальные бренды</CardTitle>
                <Badge variant="outline" className="mt-2">Nutrilon, Agusha</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-600">•</span>
                  <p className="text-sm">Близость к аудитории</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-600">•</span>
                  <p className="text-sm">Понимание локальных нужд</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-600">•</span>
                  <p className="text-sm">Ограниченная экспертиза</p>
                </div>
                <div className="mt-4 pt-3 border-t">
                  <p className="text-xs text-gray-500">ER: 1.8-2.2%</p>
                </div>
              </CardContent>
            </Card>

            {/* Nestle Advantage */}
            <Card className="hover:shadow-sm transition-all duration-300 border-2 border-blue-200">
              <CardHeader className="pb-4">
                <div className="icon-container-primary mb-4">
                  <FaCrown className="w-7 h-7 icon-primary" />
                </div>
                <CardTitle className="text-base font-semibold">Nestle Baby & Me</CardTitle>
                <Badge variant="default" className="mt-2">25 лет доверия</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm font-medium">3 поколения матерей</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm font-medium">Научная экспертиза</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm font-medium">Локальная адаптация</p>
                </div>
                <div className="mt-4 pt-3 border-t">
                  <p className="text-xs text-blue-600 font-medium">Цель ER: 1.8%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Generational Trust Visualization */}
        <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-6 max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="icon-container-secondary mb-3 mx-auto">
                <HiHeart className="w-6 h-6 icon-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Бабушки</h3>
              <p className="text-sm text-gray-600">Доверяли NAN для своих детей</p>
              <p className="text-xs text-gray-500 mt-1">1999-2009</p>
            </div>
            <div className="text-center">
              <div className="icon-container-primary mb-3 mx-auto">
                <FaHandshake className="w-6 h-6 icon-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Матери</h3>
              <p className="text-sm text-gray-600">Выросли на продуктах Nestle</p>
              <p className="text-xs text-gray-500 mt-1">2009-2019</p>
            </div>
            <div className="text-center">
              <div className="icon-container-success mb-3 mx-auto">
                <HiShieldCheck className="w-6 h-6 icon-success" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Новое поколение</h3>
              <p className="text-sm text-gray-600">Продолжают традицию доверия</p>
              <p className="text-xs text-gray-500 mt-1">2019-2025</p>
            </div>
          </div>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              <FaCrown className="w-5 h-5 inline mr-2 text-blue-600" />
              25 лет = 3 поколения доверия. Это наше главное конкурентное преимущество
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}