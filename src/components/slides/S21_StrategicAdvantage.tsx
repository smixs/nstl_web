import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { HiOutlineHeart } from 'react-icons/hi2'
import { FaUsers, FaHandHoldingHeart } from 'react-icons/fa'

export default function S21_StrategicAdvantage() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">
            Наше стратегическое преимущество
          </h2>
          <div className="bg-gradient-to-r from-soft-blue/20 to-baby-pink/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              25 ЛЕТ = 3 ПОКОЛЕНИЯ ДОВЕРИЯ
            </h1>
          </div>
        </div>

        {/* Three Generations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto flex-1">
          {/* Generation 1 */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-soft-blue/10 to-transparent">
            <CardContent className="p-6 text-center">
              <div className="icon-container-primary mb-4 mx-auto">
                <FaUsers className="w-8 h-8 icon-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Сегодняшние мамы
              </h3>
              <p className="text-lg text-gray-700">
                выросли на Nestogen и NAN
              </p>
            </CardContent>
          </Card>

          {/* Generation 2 */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-baby-pink/20 to-transparent">
            <CardContent className="p-6 text-center">
              <div className="icon-container-secondary mb-4 mx-auto">
                <FaHandHoldingHeart className="w-8 h-8 icon-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Их мамы
              </h3>
              <p className="text-lg text-gray-700">
                кормили Gerber и NAN
              </p>
            </CardContent>
          </Card>

          {/* Generation 3 */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-soft-green/20 to-transparent">
            <CardContent className="p-6 text-center">
              <div className="icon-container-success mb-4 mx-auto">
                <HiOutlineHeart className="w-8 h-8 icon-success" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Их бабушки
              </h3>
              <p className="text-lg text-gray-700">
                помнят первые банки Nestle
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Emphasis */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-soft-green to-green-pastel text-gray-900 rounded-2xl px-8 py-6 shadow-lg max-w-4xl mx-auto">
            <p className="text-center text-2xl font-bold">
              ТАКОГО НЕТ НИ У КОГО НА РЫНКЕ
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}