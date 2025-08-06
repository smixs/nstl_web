import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { HiOutlineUserGroup, HiOutlineMicrophone, HiOutlineCalendar, HiOutlineUsers } from 'react-icons/hi2'

export default function S25_StrategicSolutions() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            4 стратегических решения
          </h2>
        </div>

        {/* Four Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Solution 1: UGC Contest */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="icon-container-primary mb-4">
                <HiOutlineUserGroup className="w-8 h-8 icon-primary" />
              </div>
              <div className="flex items-start gap-2 mb-3">
                <span className="text-4xl font-bold text-soft-blue">1</span>
                <h3 className="text-xl font-bold text-gray-900 pt-2">
                  UGC-конкурс
                </h3>
              </div>
              <p className="text-base text-gray-700">
                UGC-конкурс с полным аутсорсом модерации
              </p>
            </CardContent>
          </Card>

          {/* Solution 2: AI Voice Bot */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="icon-container-secondary mb-4">
                <HiOutlineMicrophone className="w-8 h-8 icon-secondary" />
              </div>
              <div className="flex items-start gap-2 mb-3">
                <span className="text-4xl font-bold text-baby-pink">2</span>
                <h3 className="text-xl font-bold text-gray-900 pt-2">
                  AI-бот
                </h3>
              </div>
              <p className="text-base text-gray-700">
                AI-бот нового поколения с голосовым вводом
              </p>
            </CardContent>
          </Card>

          {/* Solution 3: Personalization */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="icon-container-success mb-4">
                <HiOutlineCalendar className="w-8 h-8 icon-success" />
              </div>
              <div className="flex items-start gap-2 mb-3">
                <span className="text-4xl font-bold text-soft-green">3</span>
                <h3 className="text-xl font-bold text-gray-900 pt-2">
                  Персонализация
                </h3>
              </div>
              <p className="text-base text-gray-700">
                Персонализация по возрасту ребенка
              </p>
            </CardContent>
          </Card>

          {/* Solution 4: Generations Content */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="icon-container-info mb-4">
                <HiOutlineUsers className="w-8 h-8 icon-info" />
              </div>
              <div className="flex items-start gap-2 mb-3">
                <span className="text-4xl font-bold text-soft-purple">4</span>
                <h3 className="text-xl font-bold text-gray-900 pt-2">
                  Контент поколений
                </h3>
              </div>
              <p className="text-base text-gray-700">
                Контент "3 поколения"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}