import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaTelegramPlane, FaRobot, FaArrowRight, FaBullseye } from 'react-icons/fa'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

export default function S33_TelegramStrategy() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Telegram-стратегия
          </h2>
          <p className="text-lg text-gray-600">
            Экосистема поддержки для мам
          </p>
        </div>

        {/* Telegram Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Channel */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-primary">
                  <FaTelegramPlane className="w-7 h-7 icon-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Канал
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-3">
                дайджесты и эксклюзивы
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue-dark mt-0.5">•</span>
                  <span>Еженедельные подборки советов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue-dark mt-0.5">•</span>
                  <span>Эксклюзивный контент для подписчиков</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue-dark mt-0.5">•</span>
                  <span>Анонсы и новости первыми</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Bot */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-secondary">
                  <FaRobot className="w-7 h-7 icon-secondary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Бот
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-3">
                AI-решение проблем
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-pink-dark mt-0.5">•</span>
                  <span>Голосовой ввод вопросов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-pink-dark mt-0.5">•</span>
                  <span>Мгновенные текстовые ответы</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-pink-dark mt-0.5">•</span>
                  <span>Персонализация по возрасту малыша</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Integration */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-success">
                  <FaArrowRight className="w-7 h-7 icon-success" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Интеграция
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-3">
                переход из Instagram
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-dark mt-0.5">•</span>
                  <span>Seamless переход между платформами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-dark mt-0.5">•</span>
                  <span>Единая база знаний</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-dark mt-0.5">•</span>
                  <span>Синхронизация контента</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Goal */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-info">
                  <FaBullseye className="w-7 h-7 icon-info" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Цель
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium mb-3">
                стать ежедневным помощником
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-purple-dark mt-0.5">•</span>
                  <span>24/7 поддержка для мам</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-purple-dark mt-0.5">•</span>
                  <span>Решение проблем в реальном времени</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-purple-dark mt-0.5">•</span>
                  <span>Постоянный контакт с брендом</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Visual */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/10 to-soft-pink/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <HiOutlineChatBubbleLeftRight className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Instagram</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <FaTelegramPlane className="w-8 h-8 text-soft-blue-dark mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Telegram</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">Ежедневная<br/>поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}