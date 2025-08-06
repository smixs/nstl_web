import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HiOutlineVideoCamera, HiOutlineViewColumns, HiOutlineSparkles, HiOutlineDocumentText } from 'react-icons/hi2'
import { Progress } from '@/components/ui/progress'

export default function S32_InstagramFormats() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Форматы для Instagram
          </h2>
          <p className="text-lg text-gray-600">
            Оптимальное распределение контента
          </p>
        </div>

        {/* Content Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Reels */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-pink">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="icon-container-secondary">
                  <HiOutlineVideoCamera className="w-7 h-7 icon-secondary" />
                </div>
                <span className="text-2xl font-bold text-soft-pink-dark">60%</span>
              </div>
              <CardTitle className="text-xl text-gray-900">
                Reels
              </CardTitle>
              <Progress value={60} className="h-2 mt-2" />
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-2">
                60% контента (приоритет алгоритмов)
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Истории мам и малышей</li>
                <li>• Советы экспертов</li>
                <li>• UGC контент</li>
              </ul>
            </CardContent>
          </Card>

          {/* Carousels */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="icon-container-primary">
                  <HiOutlineViewColumns className="w-7 h-7 icon-primary" />
                </div>
                <span className="text-2xl font-bold text-soft-blue-dark">20%</span>
              </div>
              <CardTitle className="text-xl text-gray-900">
                Карусели
              </CardTitle>
              <Progress value={20} className="h-2 mt-2" />
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-2">
                чек-листы и инструкции
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Пошаговые гайды</li>
                <li>• Инфографика</li>
                <li>• Save-worthy контент</li>
              </ul>
            </CardContent>
          </Card>

          {/* Stories */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="icon-container-success">
                  <HiOutlineSparkles className="w-7 h-7 icon-success" />
                </div>
                <span className="text-2xl font-bold text-soft-green-dark">15%</span>
              </div>
              <CardTitle className="text-xl text-gray-900">
                Stories
              </CardTitle>
              <Progress value={15} className="h-2 mt-2" />
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-2">
                behind the scenes амбассадоров
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Жизнь амбассадоров</li>
                <li>• Опросы и голосования</li>
                <li>• Быстрые советы</li>
              </ul>
            </CardContent>
          </Card>

          {/* Posts */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="icon-container-info">
                  <HiOutlineDocumentText className="w-7 h-7 icon-info" />
                </div>
                <span className="text-2xl font-bold text-soft-purple-dark">5%</span>
              </div>
              <CardTitle className="text-xl text-gray-900">
                Посты
              </CardTitle>
              <Progress value={5} className="h-2 mt-2" />
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-2">
                только для важных анонсов
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Новости бренда</li>
                <li>• Важные объявления</li>
                <li>• Запуск конкурсов</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Key Message */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-900">
                Приоритет — видео контент
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold text-soft-pink-dark">+123.7%</span> вовлеченности от Reels
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}