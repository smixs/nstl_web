import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiUsers, HiAcademicCap, HiShieldCheck } from 'react-icons/hi2'

export default function S06_TwoMothers() {
  return (
    <SlideWrapper>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Две матери — два подхода к выбору
          </h2>
          <p className="text-lg text-gray-600">
            Понимание целевой аудитории через архетипы
          </p>
        </div>

        {/* Two Types of Mothers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Striving Researchers */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mb-4">
                <img 
                  src="/TA/researcher.webp" 
                  alt="Стремящаяся исследователь"
                  className="w-16 h-16 rounded-full object-cover mx-auto shadow-md"
                />
              </div>
              <CardTitle className="text-xl">Стремящиеся исследователи</CardTitle>
              <Badge variant="default" className="mt-2">60%</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Изучают каждую этикетку и состав</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Читают отзывы и исследования</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Консультируются с несколькими педиатрами</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <p className="text-sm">Сравнивают цены и ищут оптимальное решение</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 mt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <HiAcademicCap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">Ключевая потребность:</span>
                </div>
                <p className="text-sm text-blue-700">
                  Экспертная информация и подтверждение правильности выбора
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Uncompromising Pioneers */}
          <Card className="hover:shadow-sm transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="mb-4">
                <img 
                  src="/TA/noncompromisse.webp" 
                  alt="Бескомпромиссная первопроходец"
                  className="w-16 h-16 rounded-full object-cover mx-auto shadow-md"
                />
              </div>
              <CardTitle className="text-xl">Бескомпромиссные первопроходцы</CardTitle>
              <Badge variant="secondary" className="mt-2">40%</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Выбирают премиум без компромиссов</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Доверяют репутации бренда</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Готовы платить за инновации</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <p className="text-sm">Первыми пробуют новые продукты</p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-3 mt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <HiShieldCheck className="w-4 h-4 text-pink-600" />
                  <span className="text-sm font-semibold text-pink-700">Ключевая потребность:</span>
                </div>
                <p className="text-sm text-pink-700">
                  Уверенность в премиальном качестве и эксклюзивности
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Insights */}
        <div className="mt-auto pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-6">
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-medium text-gray-900">Общее:</p>
              <p className="text-sm text-gray-600">Высокая вовлеченность в выбор</p>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-medium text-gray-900">Различие:</p>
              <p className="text-sm text-gray-600">Подход к принятию решений</p>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-medium text-gray-900">Возможность:</p>
              <p className="text-sm text-gray-600">Единая платформа доверия</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              <HiUsers className="w-5 h-5 inline mr-2 text-blue-600" />
              Обе группы объединяет желание дать детям лучшее — различается только путь к решению
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}