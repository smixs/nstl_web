import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HiOutlineShieldCheck, HiOutlineLightBulb, HiOutlineHeart } from 'react-icons/hi2'
import { FaUsers, FaHandsHelping, FaHistory } from 'react-icons/fa'

export default function S24_Positioning() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Позиционирование Baby&Me
          </h2>
        </div>

        {/* Three Positioning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Role */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4">
                <FaHistory className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl text-gray-900">Роль</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium">
                Хранитель семейных традиций здоровья
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-secondary mb-4">
                <HiOutlineLightBulb className="w-7 h-7 icon-secondary" />
              </div>
              <CardTitle className="text-xl text-gray-900">Миссия</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium">
                "То, что проверено поколениями, улучшено для вашего малыша"
              </p>
            </CardContent>
          </Card>

          {/* Promise */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-success mb-4">
                <FaHandsHelping className="w-7 h-7 icon-success" />
              </div>
              <CardTitle className="text-xl text-gray-900">Обещание</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 font-medium">
                Доверие, переданное от мамы к маме
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Visual representation */}
        <div className="mt-auto pt-8">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <FaUsers className="w-12 h-12 text-soft-blue mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Поколения</p>
              </div>
              <div className="text-4xl text-gray-300">+</div>
              <div className="text-center">
                <HiOutlineShieldCheck className="w-12 h-12 text-soft-green mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Доверие</p>
              </div>
              <div className="text-4xl text-gray-300">=</div>
              <div className="text-center">
                <HiOutlineHeart className="w-12 h-12 text-baby-pink mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Baby&Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}