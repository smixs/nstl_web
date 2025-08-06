import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiOutlineHeart, HiOutlineMicrophone, HiOutlineAcademicCap, HiOutlineUsers, HiOutlineArrowTrendingUp, HiOutlineEye, HiOutlineChatBubbleLeftRight, HiOutlineLightBulb, HiOutlineBuildingLibrary, HiOutlineMap } from 'react-icons/hi2'
import { FaArrowRight, FaBookmark, FaVideo, FaRobot, FaMicroscope, FaBaby } from 'react-icons/fa'

export default function S25_Transformation() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Позиция Nestle: От советника к доверенному эксперту поколений
          </h2>
          <p className="text-lg text-gray-600">
            Трансформация метрики вовлеченности в поколенческую связь
          </p>
        </div>

        {/* Before → After Transformation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Before - Left Side */}
          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900">
                БЫЛО: Профессиональный советник
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <HiOutlineEye className="w-4 h-4 text-orange-600" />
                <span className="text-sm"><strong>ER:</strong> 1.20%</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineArrowTrendingUp className="w-4 h-4 text-orange-600" />
                <span className="text-sm">Фокус на охватах</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineChatBubbleLeftRight className="w-4 h-4 text-orange-600" />
                <span className="text-sm">Разовый контент</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLightBulb className="w-4 h-4 text-orange-600" />
                <span className="text-sm">Корпоративные посты</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineUsers className="w-4 h-4 text-orange-600" />
                <span className="text-sm">Подписчики-наблюдатели</span>
              </div>
            </CardContent>
          </Card>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="icon-container-primary">
              <FaArrowRight className="w-6 h-6 icon-primary" />
            </div>
          </div>

          {/* After - Right Side */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-gray-900">
                СТАЛО: Круг доверия семей
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <HiOutlineEye className="w-4 h-4 text-green-600" />
                <span className="text-sm"><strong>Цель ER:</strong> 1.80%</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBookmark className="w-4 h-4 text-green-600" />
                <Badge variant="secondary" className="text-xs">✓ Фокус на сохранениях</Badge>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineUsers className="w-4 h-4 text-green-600" />
                <Badge variant="secondary" className="text-xs">✓ Истории 3-х поколений</Badge>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineLightBulb className="w-4 h-4 text-green-600" />
                <Badge variant="secondary" className="text-xs">✓ Решение реальных проблем</Badge>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineHeart className="w-4 h-4 text-green-600" />
                <Badge variant="secondary" className="text-xs">✓ Сообщество мам-амбассадоров</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Components of New Role */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Компоненты новой роли
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Component 1 */}
            <Card className="hover:shadow-sm transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HiOutlineBuildingLibrary className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-semibold text-gray-900">
                    Хранитель опыта
                  </h4>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>25 лет традиций</div>
                  <div>Связь поколений</div>
                </div>
              </CardContent>
            </Card>

            {/* Component 2 */}
            <Card className="hover:shadow-sm transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaRobot className="w-4 h-4 text-pink-600" />
                  <h4 className="text-sm font-semibold text-gray-900">
                    AI-помощник
                  </h4>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>Голосовой бот 24/7</div>
                  <div>Мгновенные ответы</div>
                </div>
              </CardContent>
            </Card>

            {/* Component 3 */}
            <Card className="hover:shadow-sm transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaMicroscope className="w-4 h-4 text-green-600" />
                  <h4 className="text-sm font-semibold text-gray-900">
                    Научный авторитет
                  </h4>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>5HMO инновации</div>
                  <div>Доказательная база</div>
                </div>
              </CardContent>
            </Card>

            {/* Component 4 */}
            <Card className="hover:shadow-sm transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HiOutlineMap className="w-4 h-4 text-purple-600" />
                  <h4 className="text-sm font-semibold text-gray-900">
                    Персональный гид
                  </h4>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>Растем с малышом</div>
                  <div>Контент по возрасту</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Changes */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
            Ключевые изменения
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaVideo className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">Контент:</span>
              </div>
              <p className="text-xs text-gray-600">60% видео → 40% save-worthy</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <HiOutlineChatBubbleLeftRight className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-semibold text-gray-900">Тон:</span>
              </div>
              <p className="text-xs text-gray-600">От бренда к подруге-эксперту</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaBookmark className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-900">Цель:</span>
              </div>
              <p className="text-xs text-gray-600">Сохранения + вопросы в DM</p>
            </div>
          </div>
        </div>

        {/* Final Conclusion */}
        <div className="mt-auto">
          <div className="bg-soft-blue rounded-2xl px-6 py-4 text-center shadow-sm">
            <div className="flex items-center justify-center gap-2">
              <FaBaby className="w-5 h-5 text-blue-700" />
              <p className="text-sm text-gray-700">
                <strong>Baby & Me</strong> — круг доверия, где мама находит ответы, проверенные тремя поколениями
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}