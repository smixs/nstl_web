import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaShieldAlt, FaGraduationCap, FaGavel, FaBuilding } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S39_UGCSafety() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Система безопасности UGC
          </h2>
          <p className="text-lg text-gray-600">
            Полный контроль на каждом этапе
          </p>
        </div>

        {/* Safety System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* 3-Step Verification */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-blue">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-primary">
                  <FaShieldAlt className="w-7 h-7 icon-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    3-ступенчатая проверка контента
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Фильтрация
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">1</Badge>
                  <span className="text-sm text-gray-700">Автоматическая модерация AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">2</Badge>
                  <span className="text-sm text-gray-700">Ручная проверка агентством</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">3</Badge>
                  <span className="text-sm text-gray-700">Финальное утверждение бренда</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WHO Code Training */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-success">
                  <FaGraduationCap className="w-7 h-7 icon-success" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Обучение амбассадоров WHO Code
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Образование
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-dark mt-0.5">•</span>
                  <span>Обязательный онбординг для всех участников</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-dark mt-0.5">•</span>
                  <span>Чек-листы запрещенного контента</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-dark mt-0.5">•</span>
                  <span>Примеры правильного контента</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Legal Support */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-info">
                  <FaGavel className="w-7 h-7 icon-info" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Юридическое сопровождение
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Защита
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-purple-dark mt-0.5">•</span>
                  <span>Контракты с амбассадорами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-purple-dark mt-0.5">•</span>
                  <span>Права на использование контента</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-purple-dark mt-0.5">•</span>
                  <span>Защита персональных данных</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Agency Responsibility */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-secondary">
                  <FaBuilding className="w-7 h-7 icon-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Ответственность на агентстве
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Гарантия
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-pink-dark mt-0.5">•</span>
                  <span>Полная ответственность за контент</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-pink-dark mt-0.5">•</span>
                  <span>Страхование рисков</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-pink-dark mt-0.5">•</span>
                  <span>SLA по времени реакции</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Key Message */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-center text-lg font-semibold text-gray-900">
              100% безопасность бренда при работе с UGC
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}