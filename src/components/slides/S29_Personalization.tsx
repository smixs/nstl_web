import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { HiOutlineCalendar, HiOutlineBell, HiOutlineClock } from 'react-icons/hi2'
import { FaBaby, FaRobot } from 'react-icons/fa'

export default function S28_Personalization() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Решение 3: Персонализация бота
          </h2>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
          {/* Input birth date */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="icon-container-primary mb-4 mx-auto">
                <HiOutlineCalendar className="w-7 h-7 icon-primary" />
              </div>
              <p className="text-base text-gray-700">
                Вводишь дату рождения при старте
              </p>
            </CardContent>
          </Card>

          {/* Bot remembers */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="icon-container-secondary mb-4 mx-auto">
                <FaRobot className="w-7 h-7 icon-secondary" />
              </div>
              <p className="text-base text-gray-700">
                Бот запоминает и растет вместе с малышом
              </p>
            </CardContent>
          </Card>

          {/* Auto reminders */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="icon-container-success mb-4 mx-auto">
                <HiOutlineBell className="w-7 h-7 icon-success" />
              </div>
              <p className="text-base text-gray-700">
                Автоматические напоминания по возрасту
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Examples of reminders */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Автоматические напоминания по возрасту:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 6 months reminder */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-soft-blue/20 flex items-center justify-center">
                    <FaBaby className="w-6 h-6 text-soft-blue" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <HiOutlineClock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-600">6 месяцев</span>
                  </div>
                  <p className="text-base text-gray-800 font-medium">
                    "Вашему малышу 6 месяцев — время первого прикорма"
                  </p>
                </div>
              </div>
            </div>

            {/* 8 months reminder */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-baby-pink/20 flex items-center justify-center">
                    <FaBaby className="w-6 h-6 text-baby-pink" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <HiOutlineClock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-600">8 месяцев</span>
                  </div>
                  <p className="text-base text-gray-800 font-medium">
                    "8 месяцев — готовимся к первым шагам"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-green to-green-pastel text-gray-900 rounded-xl px-6 py-4 max-w-2xl mx-auto text-center">
            <p className="text-lg font-medium">
              Персональный помощник, который знает вашего малыша
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}