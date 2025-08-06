import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HiOutlineHeart, HiOutlineGlobeAlt, HiOutlineHome, HiOutlineBookOpen } from 'react-icons/hi2'

export default function S30_ToneOfVoice() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tone of Voice
          </h2>
          <p className="text-lg text-gray-600">
            Голос бренда Baby&Me
          </p>
        </div>

        {/* Four Tone Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Respect for Generations */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-info mb-4">
                <HiOutlineHeart className="w-7 h-7 icon-info" />
              </div>
              <CardTitle className="text-xl text-gray-900">
                Уважение к опыту поколений
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700">
                Ценим мудрость бабушек и опыт мам. Каждое поколение вносит свой вклад в заботу о малыше.
              </p>
            </CardContent>
          </Card>

          {/* Modern with Traditions */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4">
                <HiOutlineGlobeAlt className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl text-gray-900">
                Современно, но с традициями
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700">
                Используем инновации, сохраняя проверенные временем ценности и подходы.
              </p>
            </CardContent>
          </Card>

          {/* Family Warmth */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-4">
                <HiOutlineHome className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-xl text-gray-900">
                Тепло семейного круга
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700">
                Создаем атмосферу доверия и поддержки, где каждая мама чувствует себя частью большой семьи.
              </p>
            </CardContent>
          </Card>

          {/* Trust Through Stories */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4">
                <HiOutlineBookOpen className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl text-gray-900">
                Доверие через истории
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700">
                Рассказываем реальные истории мам и их детей, показывая путь через поколения.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Key Message */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-center text-lg font-semibold text-gray-900">
              Мы говорим языком семьи, объединяющим поколения
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}