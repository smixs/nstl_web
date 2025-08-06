import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaUsers, FaMicrophone, FaHistory, FaSeedling } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S31_ContentRubrics() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Контентные рубрики
          </h2>
          <p className="text-lg text-gray-600">
            4 ключевых направления контента
          </p>
        </div>

        {/* Content Rubrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Circle of Trust */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="icon-container-primary">
                  <FaUsers className="w-7 h-7 icon-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    "Круг доверия"
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Поколения
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                истории 3-х поколений
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic">
                  Бабушка, мама и малыш — единая история доверия к бренду
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mother's Voice */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="icon-container-secondary">
                  <FaMicrophone className="w-7 h-7 icon-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    "Голос мамы"
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    AI-помощник
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                аудио-вопросы и текстовые ответы
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic">
                  Записывай голосом — получай решение текстом
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How I Was Fed */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="icon-container-info">
                  <FaHistory className="w-7 h-7 icon-info" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    "Как меня кормили"
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Ностальгия
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                ностальгический контент
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic">
                  Воспоминания мам о своем детстве с продуктами Nestle
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Growing Together */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="icon-container-success">
                  <FaSeedling className="w-7 h-7 icon-success" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    "Растем вместе"
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Персонализация
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                персонализированные советы
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 italic">
                  Контент, адаптированный под возраст вашего малыша
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Visual */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/10 to-soft-pink/10 rounded-2xl p-4 max-w-3xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              Каждая рубрика создает эмоциональную связь между поколениями
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}