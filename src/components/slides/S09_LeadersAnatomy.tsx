import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiVideoCamera, HiUsers, HiChatBubbleLeftRight } from 'react-icons/hi2'
import { FaCrown, FaMedal, FaTrophy } from 'react-icons/fa'

export default function S09_LeadersAnatomy() {
  return (
    <SlideWrapper>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Анатомия лидеров: ТОП-3 анализ
          </h2>
          <p className="text-lg text-gray-600">
            Что делает бренды успешными в digital
          </p>
        </div>

        {/* Top 3 Leaders Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Leader 1 - Kabrita */}
          <Card className="hover:shadow-sm transition-all duration-300 border-t-4 border-yellow-500">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="icon-container-warning">
                  <FaCrown className="w-6 h-6 icon-warning" />
                </div>
                <Badge className="bg-yellow-100 text-yellow-700">#1</Badge>
              </div>
              <CardTitle className="text-xl">Kabrita</CardTitle>
              <Badge variant="success" className="mt-2">ER: 4.2%</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Followers</span>
                  <span className="text-sm font-medium">28K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reels доля</span>
                  <Badge variant="outline">82%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">UGC контент</span>
                  <Badge variant="outline">65%</Badge>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <p className="text-sm font-semibold mb-2">Ключевые факторы:</p>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <HiVideoCamera className="w-4 h-4 text-yellow-600" />
                    <span className="text-xs">Эмоциональные истории</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiUsers className="w-4 h-4 text-yellow-600" />
                    <span className="text-xs">Мамы-амбассадоры</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiChatBubbleLeftRight className="w-4 h-4 text-yellow-600" />
                    <span className="text-xs">Быстрые ответы в DM</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leader 2 - Nutrilon */}
          <Card className="hover:shadow-sm transition-all duration-300 border-t-4 border-gray-400">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="icon-container-info">
                  <FaMedal className="w-6 h-6 icon-info" />
                </div>
                <Badge className="bg-gray-100 text-gray-700">#2</Badge>
              </div>
              <CardTitle className="text-xl">Nutrilon</CardTitle>
              <Badge variant="default" className="mt-2">ER: 3.8%</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Followers</span>
                  <span className="text-sm font-medium">5,2K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reels доля</span>
                  <Badge variant="outline">75%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Эксперт контент</span>
                  <Badge variant="outline">45%</Badge>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <p className="text-sm font-semibold mb-2">Ключевые факторы:</p>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <HiVideoCamera className="w-4 h-4 text-gray-600" />
                    <span className="text-xs">Обучающие видео</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiUsers className="w-4 h-4 text-gray-600" />
                    <span className="text-xs">Педиатры-эксперты</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiChatBubbleLeftRight className="w-4 h-4 text-gray-600" />
                    <span className="text-xs">Вебинары для мам</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leader 3 - Agusha */}
          <Card className="hover:shadow-sm transition-all duration-300 border-t-4 border-orange-400">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="icon-container-secondary">
                  <FaTrophy className="w-6 h-6 icon-secondary" />
                </div>
                <Badge className="bg-orange-100 text-orange-700">#3</Badge>
              </div>
              <CardTitle className="text-xl">Agusha</CardTitle>
              <Badge variant="secondary" className="mt-2">ER: 3.5%</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Followers</span>
                  <span className="text-sm font-medium">8,9K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reels доля</span>
                  <Badge variant="outline">68%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Игровой контент</span>
                  <Badge variant="outline">55%</Badge>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <p className="text-sm font-semibold mb-2">Ключевые факторы:</p>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <HiVideoCamera className="w-4 h-4 text-orange-600" />
                    <span className="text-xs">Развлекательный формат</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiUsers className="w-4 h-4 text-orange-600" />
                    <span className="text-xs">Семейные челленджи</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiChatBubbleLeftRight className="w-4 h-4 text-orange-600" />
                    <span className="text-xs">Конкурсы и розыгрыши</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Common Success Factors */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-center mb-4">Общие факторы успеха лидеров</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-2">70%+</Badge>
              <p className="text-xs text-gray-600">Видео контент</p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="mb-2">24h</Badge>
              <p className="text-xs text-gray-600">Ответы в комментах</p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="mb-2">3-5x</Badge>
              <p className="text-xs text-gray-600">Постов в неделю</p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="mb-2">50%+</Badge>
              <p className="text-xs text-gray-600">User content</p>
            </div>
          </div>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              <FaCrown className="w-5 h-5 inline mr-2 text-yellow-600" />
              Лидеры создают сообщества, а не просто публикуют контент
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}