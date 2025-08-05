import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiUserGroup } from 'react-icons/hi2'
import { HiTrendingDown, HiChatAlt2 } from 'react-icons/hi'

export default function S03_ProblemDetails() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Детализация проблемы
          </h2>
          <p className="text-lg text-gray-600">
            Низкокачественный ER и низкий LTV аудитории
          </p>
        </div>

        {/* Карточки с проблемами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Карточка 1 - Низкий ER */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-4">
                <HiTrendingDown className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-xl">Низкий ER</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Текущий ER</span>
                <Badge variant="destructive">1.20%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Рынок</span>
                <Badge variant="success">2.21%</Badge>
              </div>
              <p className="text-sm text-gray-500 pt-2">
                Отставание от конкурентов почти в 2 раза
              </p>
            </CardContent>
          </Card>

          {/* Карточка 2 - Массовая аудитория */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-warning mb-4">
                <HiUserGroup className="w-7 h-7 icon-warning" />
              </div>
              <CardTitle className="text-xl">Массовая аудитория</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Подписчики</span>
                <Badge>46K</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Активные</span>
                <Badge variant="secondary">~552</Badge>
              </div>
              <p className="text-sm text-gray-500 pt-2">
                Только 1.2% аудитории вовлечена
              </p>
            </CardContent>
          </Card>

          {/* Карточка 3 - Низкий LTV */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-info mb-4">
                <HiChatAlt2 className="w-7 h-7 icon-info" />
              </div>
              <CardTitle className="text-xl">Низкий LTV</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Saves</span>
                <Badge variant="secondary">Низкие</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">DM вопросы</span>
                <Badge variant="secondary">Редкие</Badge>
              </div>
              <p className="text-sm text-gray-500 pt-2">
                Контент не создает долгосрочную ценность
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Вывод */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              Основная проблема: контент не резонирует с аудиторией, 
              не создает ценность и не вызывает желание взаимодействовать
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}