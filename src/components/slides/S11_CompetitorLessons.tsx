import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiLightBulb, HiCheckCircle, HiXCircle } from 'react-icons/hi2'
import { FaExclamationTriangle, FaArrowRight } from 'react-icons/fa'

export default function S11_CompetitorLessons() {
  return (
    <SlideWrapper>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Уроки от конкурентов
          </h2>
          <p className="text-lg text-gray-600">
            Что взять, а чего избежать
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* What Works */}
          <Card className="hover:shadow-sm transition-all duration-300 border-t-4 border-green-500">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4">
                <HiCheckCircle className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl">Что работает</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <Badge variant="success" className="mt-0.5">Kabrita</Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Эмоциональные истории</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Реальные мамы делятся опытом в видео
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <Badge variant="success" className="mt-0.5">Nutrilon</Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Экспертный контент</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Педиатры объясняют сложное простым языком
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <Badge variant="success" className="mt-0.5">Agusha</Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Семейные активности</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Челленджи вовлекают всю семью
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <Badge variant="success" className="mt-0.5">Nuppi</Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Быстрая поддержка</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Ответы в DM за 15 минут
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Doesn't Work */}
          <Card className="hover:shadow-sm transition-all duration-300 border-t-4 border-red-500">
            <CardHeader className="pb-4">
              <div className="icon-container-warning mb-4">
                <HiXCircle className="w-7 h-7 text-red-600" />
              </div>
              <CardTitle className="text-xl">Чего избегать</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <FaExclamationTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Корпоративный тон</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Официальные пресс-релизы не работают
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <FaExclamationTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Игнорирование вопросов</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Неотвеченные комменты снижают доверие
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <FaExclamationTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Только продуктовые посты</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Монотонность снижает интерес
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <FaExclamationTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Редкие публикации</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Алгоритмы забывают неактивные аккаунты
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <HiLightBulb className="w-6 h-6 text-yellow-600 mr-2" />
            <h3 className="text-lg font-semibold">Ключевые инсайты</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">Человечность</p>
              <p className="text-xs text-gray-600 mt-1">
                Люди доверяют людям, а не брендам
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">Скорость</p>
              <p className="text-xs text-gray-600 mt-1">
                Быстрая реакция = высокая лояльность
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">Ценность</p>
              <p className="text-xs text-gray-600 mt-1">
                Полезный контент важнее продаж
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              <FaArrowRight className="w-5 h-5 inline mr-2 text-blue-600" />
              Лучшие практики + уникальность Nestle = выигрышная стратегия
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}