import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { HiOutlineDocumentText, HiOutlineUsers, HiOutlineCamera, HiOutlineHome, HiOutlineChatBubbleLeftRight, HiOutlineBookmark, HiOutlineCircleStack } from 'react-icons/hi2'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function S38_VisualTransformation() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Визуальная трансформация
          </h2>
          <p className="text-lg text-gray-600">
            Усиление существующей концепции "Круга доверия"
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Transformations in Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* From Posts-Advice to Stories */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-center justify-center">
                  <HiOutlineDocumentText className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700">От постов-советов</span>
                  <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
                  <HiOutlineUsers className="w-5 h-5 text-nestle-blue" />
                  <span className="text-sm text-gray-900 font-medium">к историям поколений</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600 text-center">
                  Экспертные рекомендации → Живые истории реальных семей
                </p>
              </CardContent>
            </Card>

            {/* From Stock Photo to Real Life */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-center justify-center">
                  <HiOutlineCamera className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700">От stock-фото</span>
                  <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
                  <HiOutlineHome className="w-5 h-5 text-baby-pink" />
                  <span className="text-sm text-gray-900 font-medium">к реальной жизни</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600 text-center">
                  Идеальные постановочные кадры → Настоящие моменты материнства
                </p>
              </CardContent>
            </Card>

            {/* From One-time Value to Save-worthy */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-center justify-center">
                  <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700">От разовой пользы</span>
                  <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
                  <HiOutlineBookmark className="w-5 h-5 text-success-green" />
                  <span className="text-sm text-gray-900 font-medium">к save-worthy контенту</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600 text-center">
                  Общие советы → Чек-листы, которые хочется сохранить
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Visual Principles */}
          <Card className="border-2 border-nestle-blue/20">
            <CardHeader>
              <CardTitle className="text-xl text-center text-gray-900">Ключевые визуальные принципы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Circles DNA */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <HiOutlineCircleStack className="w-6 h-6 text-nestle-blue" />
                    <span className="font-semibold text-gray-900">Круги — наша ДНК</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Символ банки NAN</li>
                    <li>• Круг доверия семьи</li>
                    <li>• Связь поколений</li>
                  </ul>
                </div>

                {/* UGC Priority */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <HiOutlineCamera className="w-6 h-6 text-baby-pink" />
                    <span className="font-semibold text-gray-900">UGC в приоритете</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Живые фото мам-амбассадоров</li>
                    <li>• Истории трех поколений</li>
                    <li>• Неидеальная, но настоящая жизнь</li>
                  </ul>
                </div>

                {/* Save-worthy Formats */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <HiOutlineBookmark className="w-6 h-6 text-success-green" />
                    <span className="font-semibold text-gray-900">Save-worthy форматы</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Чек-листы для сохранения</li>
                    <li>• Пошаговые инструкции</li>
                    <li>• Полезные памятки</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Horizontal Image Container */}
          <Card className="border-2 border-baby-pink/20">
            <CardContent className="p-6">
              <ImagePlaceholder 
                src="/setka1.png"
                alt="Визуальная трансформация - примеры контента"
                className="w-full h-auto rounded-lg shadow-md"
                aspectRatio="21/7"
              />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Key Message */}
        <div className="mt-6">
          <Card className="bg-gradient-to-r from-nestle-blue/10 to-baby-pink/10 border-none">
            <CardContent className="p-6">
              <p className="text-center text-lg font-semibold text-gray-900">
                Аутентичность и польза — новые драйверы вовлеченности
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SlideWrapper>
  )
}