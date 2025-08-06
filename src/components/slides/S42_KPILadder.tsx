import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaChartLine, FaVideo, FaCommentDots, FaEnvelope } from 'react-icons/fa'
import { Progress } from '@/components/ui/progress'
import { HiOutlineArrowRight } from 'react-icons/hi2'

export default function S42_KPILadder() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            KPI лестница
          </h2>
          <p className="text-lg text-gray-600">
            Целевые показатели на 6 месяцев
          </p>
        </div>

        {/* KPI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Engagement Rate */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-blue">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-primary">
                  <FaChartLine className="w-7 h-7 icon-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Engagement Rate
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">1.20%</span>
                  <HiOutlineArrowRight className="w-6 h-6 text-gray-400" />
                  <span className="text-2xl font-bold text-green-600">1.80%+</span>
                </div>
                <Progress value={75} className="h-3" />
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>+50%</strong> прирост за 6 месяцев
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Share */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-secondary">
                  <FaVideo className="w-7 h-7 icon-secondary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Video share
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">35%</span>
                  <HiOutlineArrowRight className="w-6 h-6 text-gray-400" />
                  <span className="text-2xl font-bold text-green-600">60%</span>
                </div>
                <Progress value={58} className="h-3" />
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    Приоритет на <strong>Reels</strong> контент
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comment Rate */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-success">
                  <FaCommentDots className="w-7 h-7 icon-success" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Comment Rate
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">78%</span>
                  <HiOutlineArrowRight className="w-6 h-6 text-gray-400" />
                  <span className="text-2xl font-bold text-green-600">78%+</span>
                </div>
                <Progress value={78} className="h-3" />
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Поддержать</strong> высокий уровень доверия
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DM Growth */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-info">
                  <FaEnvelope className="w-7 h-7 icon-info" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  DM
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-600">Текущий</span>
                  <HiOutlineArrowRight className="w-6 h-6 text-gray-400" />
                  <span className="text-2xl font-bold text-purple-600">x10</span>
                </div>
                <Progress value={90} className="h-3" />
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Рост в 10 раз</strong> благодаря AI-боту
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Success Formula */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/10 to-soft-pink/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Формула успеха
              </p>
              <p className="text-base text-gray-700">
                <span className="font-bold text-soft-blue-dark">60% видео</span> + 
                <span className="font-bold text-soft-pink-dark mx-2">AI помощник</span> + 
                <span className="font-bold text-soft-green-dark">UGC контент</span> = 
                <span className="font-bold text-gray-900 ml-2">Цель достигнута</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}