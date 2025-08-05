import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiXCircle, HiCheckCircle, HiShieldCheck } from 'react-icons/hi'

export default function S04_WHOCodeRedZone() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Красная зона WHO Code
          </h2>
          <p className="text-lg text-gray-600">
            Что запрещено и что разрешено в маркетинге детского питания
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Запрещено */}
          <Card className="hover:shadow-sm transition-all duration-300 border-red-100">
            <CardHeader className="pb-4">
              <div className="icon-container-warning mb-4">
                <HiXCircle className="w-7 h-7 icon-warning" />
              </div>
              <CardTitle className="text-xl text-red-700">НЕЛЬЗЯ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-red-600">•</span>
                <p className="text-sm text-gray-700">Смеси 1-2 ступени (0-12 мес)</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-red-600">•</span>
                <p className="text-sm text-gray-700">Прямая реклама заменителей грудного молока</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-red-600">•</span>
                <p className="text-sm text-gray-700">Промо-акции для младенческих смесей</p>
              </div>
              <Badge variant="destructive" className="mt-4">Строгий запрет</Badge>
            </CardContent>
          </Card>

          {/* Разрешено */}
          <Card className="hover:shadow-sm transition-all duration-300 border-green-100">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4">
                <HiCheckCircle className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl text-green-700">МОЖНО</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-green-600">•</span>
                <p className="text-sm text-gray-700">Тоддлеры 3-4 ступень (12+ мес)</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600">•</span>
                <p className="text-sm text-gray-700">Продукты прикорма (6+ мес)</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600">•</span>
                <p className="text-sm text-gray-700">Образовательный контент для мам</p>
              </div>
              <Badge variant="success" className="mt-4">Разрешено WHO</Badge>
            </CardContent>
          </Card>

          {/* Новое */}
          <Card className="hover:shadow-sm transition-all duration-300 border-blue-100">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4">
                <HiShieldCheck className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl text-blue-700">НОВОЕ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base font-medium text-gray-900 mb-2">
                Агентство = фильтр безопасности
              </p>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <p className="text-sm text-gray-700">Проверка всего UGC контента</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <p className="text-sm text-gray-700">Обучение амбассадоров</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <p className="text-sm text-gray-700">Юридическая защита бренда</p>
              </div>
              <Badge variant="default" className="mt-4">Полная защита</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Вывод */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              WHO Code — это не препятствие, а возможность выстроить доверительные отношения с аудиторией
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}