import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaExclamationTriangle, FaRobot, FaUserShield } from 'react-icons/fa'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { Badge } from '@/components/ui/badge'

export default function S40_RiskProtection() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Защита от рисков
          </h2>
          <p className="text-lg text-gray-600">
            План действий на каждый сценарий
          </p>
        </div>

        {/* Risk Scenarios */}
        <div className="space-y-6 max-w-5xl mx-auto flex-1">
          {/* Risk 1: Ambassador Violation */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <FaUserShield className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-lg text-gray-900">
                  Что если амбассадор нарушит правила
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-red-700">Риск</p>
                  <p className="text-xs text-gray-600 mt-1">Публикация запрещенного контента</p>
                </div>
                <div className="flex justify-center">
                  <HiOutlineArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-700">План действий</p>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• Немедленное удаление контента</li>
                    <li>• Расторжение контракта</li>
                    <li>• Публичное заявление бренда</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk 2: Bot Error */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <FaRobot className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-lg text-gray-900">
                  Что если бот даст неверный совет
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-red-700">Риск</p>
                  <p className="text-xs text-gray-600 mt-1">Некорректная медицинская рекомендация</p>
                </div>
                <div className="flex justify-center">
                  <HiOutlineArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-700">План действий</p>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• Disclaimer в каждом ответе</li>
                    <li>• Эскалация к педиатру</li>
                    <li>• Страхование ответственности</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk 3: Negative Feedback */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <FaExclamationTriangle className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-lg text-gray-900">
                  Что если возникнет волна негатива
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-red-700">Риск</p>
                  <p className="text-xs text-gray-600 mt-1">Массовые жалобы на продукт</p>
                </div>
                <div className="flex justify-center">
                  <HiOutlineArrowRight className="w-6 h-6 text-gray-400" />
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-700">План действий</p>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• Crisis management протокол</li>
                    <li>• Привлечение экспертов</li>
                    <li>• Открытый диалог с аудиторией</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Protection Levels */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Уровень 1</Badge>
                <p className="text-sm font-medium text-gray-700">Превентивные<br/>меры</p>
              </div>
              <div className="text-xl text-gray-300">→</div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Уровень 2</Badge>
                <p className="text-sm font-medium text-gray-700">Быстрое<br/>реагирование</p>
              </div>
              <div className="text-xl text-gray-300">→</div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Уровень 3</Badge>
                <p className="text-sm font-medium text-gray-700">Crisis<br/>management</p>
              </div>
              <div className="text-xl text-gray-300">→</div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">✓</Badge>
                <p className="text-sm font-medium text-gray-700">Репутация<br/>защищена</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}