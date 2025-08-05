import SlideWrapper from '@/components/SlideWrapper'
import { HiOutlineUserGroup, HiOutlineSparkles } from 'react-icons/hi2'
import { FaCircle, FaHandshake, FaLightbulb } from 'react-icons/fa'

export default function S23_BigIdea() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <FaLightbulb className="text-soft-yellow w-10 h-10" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Big Idea
            </h2>
          </div>
          
          {/* Main Big Idea */}
          <div className="bg-gradient-to-r from-soft-blue/30 to-baby-pink/30 rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              "КРУГ ДОВЕРИЯ Baby & Me"
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-700">
              Где опыт поколений встречается с инновациями
            </p>
          </div>
        </div>

        {/* Visual representation */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-soft-blue/40 flex items-center justify-center">
              <div className="text-center">
                <HiOutlineUserGroup className="w-20 h-20 text-soft-blue mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Круг доверия</p>
              </div>
            </div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-full p-3 shadow-md">
                <HiOutlineSparkles className="w-8 h-8 text-soft-yellow" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-full p-3 shadow-md">
                <FaHandshake className="w-8 h-8 text-soft-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}