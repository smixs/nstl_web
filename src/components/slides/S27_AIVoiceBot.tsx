import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HiOutlineMicrophone, HiOutlineDocument } from 'react-icons/hi2'
import { FaRobot, FaTelegram, FaInstagram } from 'react-icons/fa'

export default function S27_AIVoiceBot() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Решение 2: Голосовой AI-помощник
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            <span className="font-semibold block">Проблема:</span>
            мамам нужно быстрое решение возникающих проблем с малышом. Мама всегда занята, у неё нет времени долго искать и читать статьи.
          </p>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-baby-pink/20 to-soft-purple/20 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
          <p className="text-lg text-gray-800">
            <span className="font-bold">Решение:</span> AI помощник с поддержкой голосового ввода, который отвечает на вопросы мамы
          </p>
        </div>

        {/* Revolution Banner */}
        <div className="bg-gradient-to-r from-soft-green to-green-pastel text-gray-900 rounded-2xl p-8 mb-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Революция: Говори голосом — читай ответ
          </h3>
          <div className="flex items-center justify-center gap-4 mt-4">
            <HiOutlineMicrophone className="w-10 h-10 text-baby-pink" />
            <span className="text-3xl">→</span>
            <FaRobot className="w-10 h-10 text-soft-blue" />
            <span className="text-3xl">→</span>
            <HiOutlineDocument className="w-10 h-10 text-soft-green" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Where */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-center">Где:</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-center gap-4 mb-3">
                <div className="icon-container-primary">
                  <FaTelegram className="w-6 h-6 icon-primary" />
                </div>
                <div className="icon-container-secondary">
                  <FaInstagram className="w-6 h-6 icon-secondary" />
                </div>
              </div>
              <p className="text-base text-gray-700">
                Telegram + Instagram Direct
              </p>
            </CardContent>
          </Card>

          {/* How */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-center">Как:</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="icon-container-success mb-3 mx-auto">
                <HiOutlineMicrophone className="w-6 h-6 icon-success" />
              </div>
              <p className="text-base text-gray-700">
                Записал голосовое → получил текст с решением
              </p>
            </CardContent>
          </Card>

          {/* Why cool */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-center">Почему круто:</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="icon-container-info mb-3 mx-auto">
                <FaRobot className="w-6 h-6 icon-info" />
              </div>
              <p className="text-base text-gray-700">
                Руки заняты малышом
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-auto pt-6">
          <div className="text-center text-gray-600">
            <p className="text-sm">Мгновенные ответы на все вопросы мамы</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}