import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaTrophy, FaHashtag, FaPoll, FaUserFriends } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

export default function S38_EngagementMechanics() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Механики вовлечения
          </h2>
          <p className="text-lg text-gray-600">
            Инструменты активации аудитории
          </p>
        </div>

        {/* Engagement Mechanics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto flex-1">
          {/* Ambassador Contests */}
          <Card className="hover:shadow-lg transition-all duration-300 border-2 border-soft-pink">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-secondary">
                  <FaTrophy className="w-7 h-7 icon-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Конкурс амбассадоров
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    каждые 6 мес
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Регулярный отбор мам-блогеров
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• "Один день из жизни мамы"</li>
                <li>• Профессиональная съемка</li>
                <li>• Обучение WHO Code</li>
                <li>• Призы и контракты</li>
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-primary">
                  <FaHashtag className="w-7 h-7 icon-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Челленджи с хештегами
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Вирусный охват
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Тематические активности
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• #МамаБабушкаИЯ</li>
                <li>• #КругДоверияBabyMe</li>
                <li>• #25ЛетВместе</li>
                <li>• #ПоколенияNestle</li>
              </ul>
            </CardContent>
          </Card>

          {/* Polls in Stories */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-success">
                  <FaPoll className="w-7 h-7 icon-success" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    Голосования в Stories
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Интерактив
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Вовлечение через выбор
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Опросы о предпочтениях</li>
                <li>• Тесты для мам</li>
                <li>• Выбор темы контента</li>
                <li>• Q&A сессии</li>
              </ul>
            </CardContent>
          </Card>

          {/* UGC Rubrics */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-info">
                  <FaUserFriends className="w-7 h-7 icon-info" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">
                    UGC-рубрики
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    Сообщество
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 mb-3">
                Контент от подписчиков
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Истории мам</li>
                <li>• Советы от бабушек</li>
                <li>• Фото малышей</li>
                <li>• Лайфхаки родителей</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Metrics */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-soft-pink-dark">600-800</p>
                <p className="text-xs text-gray-600">новых подписчиков<br/>за конкурс</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-soft-blue-dark">+30%</p>
                <p className="text-xs text-gray-600">вовлеченность<br/>от челленджей</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-soft-green-dark">85%</p>
                <p className="text-xs text-gray-600">участие<br/>в опросах</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-soft-purple-dark">x10</p>
                <p className="text-xs text-gray-600">UGC контент<br/>от рубрик</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}