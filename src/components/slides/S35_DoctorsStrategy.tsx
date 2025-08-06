import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaUserMd, FaGraduationCap, FaBroadcastTower, FaComments } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S34_DoctorsStrategy() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Работа с педиатрами
          </h2>
          <p className="text-lg text-gray-600">
            Построение экспертного авторитета
          </p>
        </div>

        {/* Strategy Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Unbranded Content */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-blue">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-primary">
                  <FaUserMd className="w-7 h-7 icon-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Unbranded контент only
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    WHO Code compliance
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Никакой прямой рекламы продукта
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Образовательные материалы</li>
                <li>• Научные исследования</li>
                <li>• Общие рекомендации по питанию</li>
              </ul>
            </CardContent>
          </Card>

          {/* Focus on Education */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-success">
                  <FaGraduationCap className="w-7 h-7 icon-success" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Фокус на образовании
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Экспертность
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Повышение компетенций педиатров
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Новые исследования в питании</li>
                <li>• Международные рекомендации</li>
                <li>• Best practices в педиатрии</li>
              </ul>
            </CardContent>
          </Card>

          {/* Regular Live Sessions */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-secondary">
                  <FaBroadcastTower className="w-7 h-7 icon-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Регулярные эфиры
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Вовлечение
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Прямой контакт с экспертами
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Еженедельные Q&A сессии</li>
                <li>• Разбор клинических случаев</li>
                <li>• Обсуждение новых трендов</li>
              </ul>
            </CardContent>
          </Card>

          {/* Q&A with Subscribers */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-info">
                  <FaComments className="w-7 h-7 icon-info" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Ответы на вопросы подписчиков
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Доверие
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Экспертные консультации для мам
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Топ-вопросы от аудитории</li>
                <li>• Развенчивание мифов</li>
                <li>• Практические советы</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Key Message */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-center text-lg font-semibold text-gray-900">
              Педиатры — ключевые амбассадоры доверия к бренду
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}