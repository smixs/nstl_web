import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiVideoCamera, HiUserGroup, HiChatBubbleBottomCenterText, HiSparkles, HiClock, HiBookmark } from 'react-icons/hi2'
import { FaLightbulb } from 'react-icons/fa'

export default function S10_MarketMechanics() {
  return (
    <SlideWrapper>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            6 работающих механик рынка
          </h2>
          <p className="text-lg text-gray-600">
            Проверенные инструменты повышения вовлеченности
          </p>
        </div>

        {/* Mechanics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Mechanic 1 */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4">
                <HiVideoCamera className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-lg">Видео-первый подход</CardTitle>
              <Badge variant="default" className="mt-2">+280% ER</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Reels 15-30 секунд</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Вертикальный формат</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Захват в первые 3 сек</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  Пример: Kabrita - 82% видео контента
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mechanic 2 */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-4">
                <HiUserGroup className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-lg">UGC-экосистема</CardTitle>
              <Badge variant="secondary" className="mt-2">+210% доверия</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Истории реальных мам</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Микро-инфлюенсеры</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Репосты с разрешения</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  Пример: 65% контента от пользователей
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mechanic 3 */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4">
                <HiChatBubbleBottomCenterText className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-lg">Диалоговый формат</CardTitle>
              <Badge variant="success" className="mt-2">+150% лояльности</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <p className="text-sm">Ответы в комментах</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <p className="text-sm">Q&A сессии в stories</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <p className="text-sm">Персональные DM</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  Время ответа: до 2 часов
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mechanic 4 */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-warning mb-4">
                <HiSparkles className="w-7 h-7 icon-warning" />
              </div>
              <CardTitle className="text-lg">Геймификация</CardTitle>
              <Badge variant="outline" className="mt-2">+180% участия</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <p className="text-sm">Челленджи для мам</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <p className="text-sm">Баллы за активность</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <p className="text-sm">Статусы и бейджи</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  Пример: #МамаЭксперт челлендж
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mechanic 5 */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-info mb-4">
                <HiClock className="w-7 h-7 icon-info" />
              </div>
              <CardTitle className="text-lg">Ритмичность</CardTitle>
              <Badge variant="outline" className="mt-2">+120% охвата</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-600">•</span>
                  <p className="text-sm">Постинг по расписанию</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-600">•</span>
                  <p className="text-sm">Пиковые часы активности</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-cyan-600">•</span>
                  <p className="text-sm">3-5 постов в неделю</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  Лучшее время: 12:00-14:00, 20:00-22:00
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mechanic 6 */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-4">
                <HiBookmark className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-lg">Save-worthy контент</CardTitle>
              <Badge variant="secondary" className="mt-2">Фокус на сохранениях</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Чек-листы и инструкции</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Научные факты о питании</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Возрастные нормы развития</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  Пример: Nutrilak — материалы для сохранения
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Formula & Implementation */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <FaLightbulb className="w-6 h-6 text-yellow-500" />
              <p className="text-center text-base font-medium text-gray-900">
                Формула успеха: Видео + UGC + Диалог + Игра + Ритм + Saves = ER 3%+
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-center text-sm text-gray-700">
                Каждая механика усиливает другую — важна комплексная реализация
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}