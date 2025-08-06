import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaClipboardCheck, FaSearch, FaBolt } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S41_ComplianceProcess() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Compliance процесс
          </h2>
          <p className="text-lg text-gray-600">
            Постоянный контроль соответствия
          </p>
        </div>

        {/* Compliance Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto flex-1">
          {/* Weekly Reports */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4 mx-auto">
                <FaClipboardCheck className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                Еженедельные отчеты по контенту
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Что проверяем:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Количество публикаций</li>
                    <li>• Соответствие WHO Code</li>
                    <li>• Качество UGC контента</li>
                    <li>• Тональность комментариев</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Badge variant="secondary">Каждый понедельник</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monitoring Mentions */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4 mx-auto">
                <FaSearch className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                Мониторинг упоминаний запрещенных продуктов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Отслеживаем:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Смеси 0-6 месяцев</li>
                    <li>• Стадии 1-2</li>
                    <li>• Прямые рекомендации</li>
                    <li>• Сравнения с ГВ</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Badge variant="secondary">24/7 мониторинг</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Response */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-4 mx-auto">
                <FaBolt className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                Быстрое реагирование на нарушения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">SLA по реакции:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Критичные: 15 минут</li>
                    <li>• Высокие: 1 час</li>
                    <li>• Средние: 4 часа</li>
                    <li>• Низкие: 24 часа</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Badge variant="secondary">Горячая линия</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Process Flow */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/10 to-soft-pink/10 rounded-2xl p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-soft-blue-dark">100%</p>
                <p className="text-sm text-gray-600">контента проверено</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-soft-pink-dark">0</p>
                <p className="text-sm text-gray-600">нарушений WHO Code</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-soft-green-dark">15 мин</p>
                <p className="text-sm text-gray-600">время реакции</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}