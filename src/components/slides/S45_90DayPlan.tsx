import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaTrophy, FaRobot, FaChartLine } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S44_90DayPlan() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            90-дневный план
          </h2>
          <p className="text-lg text-gray-600">
            Пошаговый запуск стратегии
          </p>
        </div>

        {/* 90-Day Timeline */}
        <div className="space-y-6 max-w-5xl mx-auto flex-1">
          {/* Days 1-30 */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-pink">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="icon-container-secondary">
                    <FaTrophy className="w-7 h-7 icon-secondary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Дни 1-30: Запуск конкурса амбассадоров
                  </CardTitle>
                </div>
                <Badge variant="secondary">Месяц 1</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 1-2</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Создание механики конкурса</li>
                    <li>• Подготовка призового фонда</li>
                    <li>• Обучение WHO Code</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 3</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Запуск конкурса</li>
                    <li>• Активация через influencers</li>
                    <li>• Мониторинг заявок</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 4</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Отбор финалистов</li>
                    <li>• Профессиональная съемка</li>
                    <li>• Подписание контрактов</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Days 31-60 */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-blue">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="icon-container-primary">
                    <FaRobot className="w-7 h-7 icon-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Дни 31-60: Внедрение AI-бота
                  </CardTitle>
                </div>
                <Badge variant="secondary">Месяц 2</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 5-6</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Разработка AI-алгоритмов</li>
                    <li>• Создание базы знаний</li>
                    <li>• Интеграция с Telegram</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 7</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Beta-тестирование</li>
                    <li>• Обучение модерации</li>
                    <li>• Настройка escalation</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 8</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Публичный запуск</li>
                    <li>• Промо-кампания</li>
                    <li>• Сбор первых отзывов</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Days 61-90 */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-green">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="icon-container-success">
                    <FaChartLine className="w-7 h-7 icon-success" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Дни 61-90: Оптимизация и масштабирование
                  </CardTitle>
                </div>
                <Badge variant="secondary">Месяц 3</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 9-10</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Анализ метрик</li>
                    <li>• A/B тесты контента</li>
                    <li>• Улучшение AI-ответов</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 11</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Масштабирование UGC</li>
                    <li>• Расширение аудитории</li>
                    <li>• Новые партнерства</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Неделя 12</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Финальный отчет</li>
                    <li>• Планы на следующий квартал</li>
                    <li>• Celebration амбассадоров</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Success Vision */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/10 to-soft-pink/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Результат через 90 дней
              </p>
              <p className="text-base text-gray-700">
                <strong>ER 1.80%+</strong> • <strong>60% видео</strong> • <strong>x10 DM</strong> • <strong>Активное сообщество</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}