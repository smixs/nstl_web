import SlideWrapper from '@/components/SlideWrapper'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiOutlineChartBar, HiOutlineUsers, HiOutlineChat, HiOutlineShieldCheck } from 'react-icons/hi2'
import { FaChartLine, FaVideo, FaLanguage, FaShieldAlt, FaExclamationTriangle, FaUsers, FaRegLightbulb, FaBrain, FaBalanceScale, FaChartPie } from 'react-icons/fa'

export default function S12_NestlePosition() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Анализ собственного аккаунта: NESTLE BABY & ME
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left Column - Instagram Preview */}
          <div>
            <ImagePlaceholder 
              src="/competitors/nestle.webp"
              alt="Nestle Baby & Me Instagram Profile"
              aspectRatio="3/4"
              className="w-full shadow-lg"
            />
          </div>

          {/* Right Column - Metrics and Analysis */}
          <div className="space-y-4">
            {/* Key Metrics */}
            <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <HiOutlineChartBar className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-semibold">Ключевые метрики (22 месяца, 100 постов)</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-600">46,109</p>
                  <p className="text-xs text-gray-600">Подписчики</p>
                  <Badge variant="secondary" className="mt-1 text-xs">лидер рынка</Badge>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-700">1.20%</p>
                  <p className="text-xs text-gray-600">ER</p>
                  <Badge variant="outline" className="mt-1 text-xs">3-е место</Badge>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-green-600">78%</p>
                  <p className="text-xs text-gray-600">Comment Rate</p>
                  <Badge variant="secondary" className="mt-1 text-xs">высокое доверие</Badge>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-600">90%</p>
                  <p className="text-xs text-gray-600">WHO Compliance</p>
                  <Badge variant="secondary" className="mt-1 text-xs">преимущество</Badge>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FaShieldAlt className="text-green-600 w-4 h-4" />
                  Сильные стороны
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <FaVideo className="text-green-600 mt-0.5 flex-shrink-0 w-3 h-3" />
                  <div>
                    <span className="font-semibold">Видео-контент:</span>
                    <span className="text-xs text-gray-600 block">85% успешных постов = Video/Reel (+123.7% прироста)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaChartLine className="text-green-600 mt-0.5 flex-shrink-0 w-3 h-3" />
                  <div>
                    <span className="font-semibold">Product Expertise:</span>
                    <span className="text-xs text-gray-600 block">самый эффективный контент (726.5 средняя вовлеченность)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaLanguage className="text-green-600 mt-0.5 flex-shrink-0 w-3 h-3" />
                  <div>
                    <span className="font-semibold">Билингвальность:</span>
                    <span className="text-xs text-gray-600 block">60% постов на двух языках</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaShieldAlt className="text-green-600 mt-0.5 flex-shrink-0 w-3 h-3" />
                  <div>
                    <span className="font-semibold">Высокое доверие:</span>
                    <span className="text-xs text-gray-600 block">подтверждается Comment Rate 78%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Points */}
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FaExclamationTriangle className="text-orange-600 w-4 h-4" />
                  Точки роста
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Низкая интеграция брендов:</span>
                  <span className="text-xs text-gray-600 block">только 13% постов объединяют NAN + Baby&Me</span>
                </div>
                <div>
                  <span className="font-semibold">Недоиспользование науки:</span>
                  <span className="text-xs text-gray-600 block">только 3% scientific authority контента</span>
                </div>
                <div>
                  <span className="font-semibold">Нестабильность:</span>
                  <span className="text-xs text-gray-600 block">Consistency Score -0.23</span>
                </div>
                <div>
                  <span className="font-semibold">Перекос контента:</span>
                  <span className="text-xs text-gray-600 block">доминирует менее эффективный parenting support (60%)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Conclusion */}
        <div className="mt-auto">
          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaRegLightbulb className="text-orange-500 w-5 h-5" />
              <p className="text-base font-semibold text-gray-900">Главный вывод</p>
            </div>
            <p className="text-sm text-gray-700">
              Крупнейшая аудитория + высокое доверие, но недоиспользование научного потенциала
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}