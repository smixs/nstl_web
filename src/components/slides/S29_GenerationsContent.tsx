import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaUsers, FaHistory } from 'react-icons/fa'
import { HiOutlineSparkles, HiOutlineHeart } from 'react-icons/hi2'

export default function S29_GenerationsContent() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Решение 4: Контент поколений
          </h2>
          <p className="text-lg text-gray-600">
            Связь трех поколений через контент
          </p>
        </div>

        {/* Three Content Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto flex-1">
          {/* Grandmother's Wisdom */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-soft-purple/10 to-transparent">
            <CardHeader className="pb-4">
              <div className="icon-container-info mb-4 mx-auto">
                <HiOutlineHeart className="w-7 h-7 icon-info" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                "Мамина мудрость"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 text-center">
                советы от бабушек
              </p>
              <div className="mt-4 bg-white/50 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic text-center">
                  Опыт поколений в каждом совете
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Time-tested */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-soft-blue/10 to-transparent">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4 mx-auto">
                <FaHistory className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                "Проверено временем"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 text-center">
                что не изменилось за 25 лет
              </p>
              <div className="mt-4 bg-white/50 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic text-center">
                  Вечные ценности материнства
                </p>
              </div>
            </CardContent>
          </Card>

          {/* New in Old */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-soft-green/10 to-transparent">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4 mx-auto">
                <HiOutlineSparkles className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                "Новое в старом"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 text-center">
                как бренды Nestle улучшаются, сохраняя основу доверия
              </p>
              <div className="mt-4 bg-white/50 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic text-center">
                  Инновации на фундаменте традиций
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Visual */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <FaUsers className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Бабушка</p>
              </div>
              <div className="text-2xl text-gray-300">→</div>
              <div className="text-center">
                <FaUsers className="w-10 h-10 text-gray-700 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Мама</p>
              </div>
              <div className="text-2xl text-gray-300">→</div>
              <div className="text-center">
                <FaUsers className="w-10 h-10 text-gray-800 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Малыш</p>
              </div>
            </div>
            <p className="text-center mt-4 text-base font-semibold text-gray-900">
              Доверие передается через поколения
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}