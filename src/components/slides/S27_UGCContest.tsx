import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaTrophy, FaVideo, FaShieldAlt } from 'react-icons/fa'
import { HiOutlineCheckCircle } from 'react-icons/hi2'

export default function S26_UGCContest() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Решение 1: Конкурс на амбассадора UGC
          </h2>
          <p className="text-lg font-semibold text-gray-600">Проблема:</p>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-600 text-center">
                Инфлюенсеры дорогие и нестабильные. Долгосрочные отношения с "мамочками" сложно поддерживать - дети вырастают, лояльность невысокая.
              </p>
            </div>
          </div>
        </div>

        {/* Insight */}
        <div className="bg-gradient-to-r from-soft-blue/20 to-baby-pink/20 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
          <p className="text-lg text-gray-800">
            <span className="font-bold">Инсайт:</span> многие мамы в период ухода за маленькими детьми хотят стать блогером. Мы поможем им это сделать.
          </p>
        </div>

        {/* Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-3 mx-auto">
                <FaTrophy className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl text-center">Регулярный конкурс</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700">
                Регулярный конкурс UGC на отбор амбассадоров брендов Nestle
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-3 mx-auto">
                <FaVideo className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-xl text-center">Механика конкурса</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-semibold mb-2">
                "Мама, бабушка и я" — 3 поколения в одном видео
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Бабушка рассказывает, как кормила дочь</li>
                <li>• Мама показывает, как кормит внука</li>
                <li>• Baby & Me как связующее звено поколений</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How it works */}
        <div className="bg-gray-50 rounded-2xl p-6 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HiOutlineCheckCircle className="w-6 h-6 text-soft-green" />
            Как работает:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-soft-blue font-bold">•</span>
              <p className="text-sm text-gray-700">
                Проводим раз в полгода конкурс на лучший рилс "Один день из жизни мамы и её ребенка"
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-soft-blue font-bold">•</span>
              <p className="text-sm text-gray-700">
                Агентство проводит полный цикл: отбор, брифинг по WHO Code, съемка и монтаж, юридическая проверка
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-soft-blue font-bold">•</span>
              <p className="text-sm text-gray-700">
                Выбираем победителей, вручаем призы, объясняем об амбассадорстве бренда
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-soft-blue font-bold">•</span>
              <p className="text-sm text-gray-700">
                Только готовый контент к публикации на нашей странице
              </p>
            </div>
          </div>
        </div>

        {/* Safety badge */}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <FaShieldAlt className="w-5 h-5 text-soft-green" />
            <span className="text-sm font-medium">Полное соответствие WHO Code</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}