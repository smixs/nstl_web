import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BookmarkCheck,
  Timer,
  HeartHandshake,
  Instagram,
  BellRing,
  Mic,
  BarChart3,
  Save
} from 'lucide-react'

export default function S30_BabyMeBroadcast() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            EXTRA: Baby&Me Broadcast
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Отдельный инстаграм-канал с контентом, который мамы сохраняют
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            <Card className="hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur">
              <CardHeader className="pb-4 text-center">
                <div className="icon-container-info mb-4 mx-auto">
                  <BookmarkCheck className="w-7 h-7 icon-info" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  "Шпаргалки для мамы"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-gray-700 text-center">
                  календари прикорма на одной картинке
                </p>
                <div className="bg-gray-50 rounded-xl px-4 py-3 text-center shadow-sm">
                  <p className="text-sm text-gray-600">
                    Всё важное в телефоне под рукой
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur">
              <CardHeader className="pb-4 text-center">
                <div className="icon-container-primary mb-4 mx-auto">
                  <Timer className="w-7 h-7 icon-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  "15 минут на себя"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-gray-700 text-center">
                  быстрые рецепты, перекусы, идеи блюд
                </p>
                <div className="bg-gray-50 rounded-xl px-4 py-3 text-center shadow-sm">
                  <p className="text-sm text-gray-600">
                    Читаешь пока малыш спит
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur">
              <CardHeader className="pb-4 text-center">
                <div className="icon-container-success mb-4 mx-auto">
                  <HeartHandshake className="w-7 h-7 icon-success" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  "Мама, ты не одна"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-gray-700 text-center">
                  реальные истории мам и советы психологов
                </p>
                <div className="bg-gray-50 rounded-xl px-4 py-3 text-center shadow-sm">
                  <p className="text-sm text-gray-600">
                    Поддержка, которой не хватает
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <div className="bg-white/80 backdrop-blur rounded-3xl px-8 py-6 shadow-md max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex items-start gap-3">
                  <div className="icon-container-primary">
                    <Instagram className="w-6 h-6 icon-primary" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Broadcast-канал в Instagram
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-container-warning">
                    <BellRing className="w-6 h-6 icon-warning" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Новые посты прямо в Direct
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-container-info">
                    <Mic className="w-6 h-6 icon-info" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Голосовые мини-подкасты с ответами
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-container-success">
                    <BarChart3 className="w-6 h-6 icon-success" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Опросы и еженедельные подборки
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-container-secondary">
                    <Save className="w-6 h-6 icon-secondary" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Контент, который хочется сохранить
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-5 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-semibold text-gray-900">
              Baby&Me EXTRA - полезное без рекламы
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
