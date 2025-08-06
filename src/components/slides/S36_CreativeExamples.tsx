import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HiOutlineVideoCamera, HiOutlineSparkles, HiOutlineViewColumns } from 'react-icons/hi2'
import { Badge } from '@/components/ui/badge'

export default function S35_CreativeExamples() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Примеры креативов
          </h2>
          <p className="text-lg text-gray-600">
            Топовые форматы контента
          </p>
        </div>

        {/* Creative Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto flex-1">
          {/* Reels Example */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-4 mx-auto">
                <HiOutlineVideoCamera className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                Reels
              </CardTitle>
              <div className="flex justify-center mt-2">
                <Badge variant="secondary">Видео</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base font-semibold text-gray-800 text-center mb-3">
                "Бабушка, мама и я выбираем NAN"
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 text-center">
                  3 поколения в одном видео рассказывают о своем выборе
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Stories Example */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4 mx-auto">
                <HiOutlineSparkles className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                Stories
              </CardTitle>
              <div className="flex justify-center mt-2">
                <Badge variant="secondary">Интерактив</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base font-semibold text-gray-800 text-center mb-3">
                "Спроси голосом — читай ответ"
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 text-center">
                  Демонстрация работы AI-бота через голосовые сообщения
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Example */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4 mx-auto">
                <HiOutlineViewColumns className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl text-center text-gray-900">
                Карусель
              </CardTitle>
              <div className="flex justify-center mt-2">
                <Badge variant="secondary">Образование</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base font-semibold text-gray-800 text-center mb-3">
                "Что изменилось за 20 лет в NAN"
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 text-center">
                  Инфографика об эволюции продукта с сохранением основы
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Visual */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/10 to-soft-pink/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-soft-pink-dark">60%</p>
                <p className="text-sm text-gray-600">Reels контент</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-soft-blue-dark">+123%</p>
                <p className="text-sm text-gray-600">Вовлеченность</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-soft-green-dark">x10</p>
                <p className="text-sm text-gray-600">Сохранения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}