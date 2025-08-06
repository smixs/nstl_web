import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaMicrophone, FaRobot, FaShieldAlt, FaGavel } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S36_CommunityManagement() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Community Management 3.0
          </h2>
          <p className="text-lg text-gray-600">
            Новый уровень взаимодействия с аудиторией
          </p>
        </div>

        {/* Community Management Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Voice Messages */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-secondary">
                  <FaMicrophone className="w-7 h-7 icon-secondary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Голосовые сообщения в Direct
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Удобство для занятых мам
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Быстрый голосовой вопрос</li>
                <li>• Текстовый ответ эксперта</li>
                <li>• Экономия времени мамы</li>
              </ul>
            </CardContent>
          </Card>

          {/* AI Bot First Line */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-primary">
                  <FaRobot className="w-7 h-7 icon-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  AI-бот как первая линия
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Мгновенные ответы 24/7
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Автоматические ответы на FAQ</li>
                <li>• Персонализация по возрасту</li>
                <li>• Эскалация сложных вопросов</li>
              </ul>
            </CardContent>
          </Card>

          {/* UGC Moderation */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-success">
                  <FaShieldAlt className="w-7 h-7 icon-success" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Модерация UGC агентством
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Полный контроль качества
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Проверка WHO Code</li>
                <li>• Отбор лучшего контента</li>
                <li>• Работа с амбассадорами</li>
              </ul>
            </CardContent>
          </Card>

          {/* Legal Filter */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-info">
                  <FaGavel className="w-7 h-7 icon-info" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Юридический фильтр контента
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                100% безопасность бренда
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Правовая экспертиза</li>
                <li>• Соответствие регуляциям</li>
                <li>• Защита от рисков</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Process Flow */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">1</Badge>
                <p className="text-sm font-medium text-gray-700">AI-фильтр</p>
              </div>
              <div className="text-xl text-gray-300">→</div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">2</Badge>
                <p className="text-sm font-medium text-gray-700">Модерация</p>
              </div>
              <div className="text-xl text-gray-300">→</div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">3</Badge>
                <p className="text-sm font-medium text-gray-700">Юр.проверка</p>
              </div>
              <div className="text-xl text-gray-300">→</div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">✓</Badge>
                <p className="text-sm font-medium text-gray-700">Публикация</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}