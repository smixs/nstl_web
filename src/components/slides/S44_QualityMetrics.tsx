import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaBookmark, FaEnvelope, FaClock, FaRedo } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S43_QualityMetrics() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Как измеряем качество
          </h2>
          <p className="text-lg text-gray-600">
            4 ключевые метрики глубокой вовлеченности
          </p>
        </div>

        {/* Quality Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Saves per Post */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="icon-container-primary">
                    <FaBookmark className="w-7 h-7 icon-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Количество сохранений на пост
                  </CardTitle>
                </div>
                <Badge variant="secondary">SAVE-worthy</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Мамы сохраняют только действительно полезное
              </p>
              <div className="bg-soft-blue/10 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Цель:</strong> Сохранения &gt; Лайков
                </p>
              </div>
            </CardContent>
          </Card>

          {/* DM Questions */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="icon-container-secondary">
                    <FaEnvelope className="w-7 h-7 icon-secondary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Количество вопросов в DM
                  </CardTitle>
                </div>
                <Badge variant="secondary">Доверие</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Индикатор готовности довериться бренду
              </p>
              <div className="bg-soft-pink/10 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Цель:</strong> +1000% рост через AI-бота
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bot Session Time */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="icon-container-success">
                    <FaClock className="w-7 h-7 icon-success" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Время, проведенное в боте
                  </CardTitle>
                </div>
                <Badge variant="secondary">Вовлеченность</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Показатель полезности и удобства AI-помощника
              </p>
              <div className="bg-soft-green/10 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Цель:</strong> Средняя сессия &gt;3 минут
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Repeat Users */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="icon-container-info">
                    <FaRedo className="w-7 h-7 icon-info" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Повторные обращения
                  </CardTitle>
                </div>
                <Badge variant="secondary">Лояльность</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Мамы возвращаются за новыми советами
              </p>
              <div className="bg-soft-purple/10 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Цель:</strong> 70% пользователей возвращаются
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Philosophy */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Философия качества
              </p>
              <p className="text-base text-gray-700">
                Мы измеряем не просто цифры, а <strong>реальную пользу</strong> для мам и их малышей
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}