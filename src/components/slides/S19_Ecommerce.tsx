import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiOutlineTruck, HiOutlineShoppingCart, HiOutlineCurrencyDollar } from 'react-icons/hi2'
import { FaBoxOpen, FaChartLine, FaTruckLoading } from 'react-icons/fa'

export default function S19_Ecommerce() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            E-COMMERCE: Тихая революция последней мили
          </h2>
          <div className="bg-gray-100 rounded-xl p-4 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-gray-800">
              Битва за потребителя выигрывается в момент доставки
            </p>
          </div>
        </div>

        {/* Analysis Box */}
        <div className="bg-soft-blue/10 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
          <p className="text-base text-gray-700 font-medium">
            <span className="font-bold text-gray-900">Анализ 500,000+ отзывов показал:</span>
          </p>
          <p className="text-lg text-gray-900 font-semibold mt-2">
            Восприятие продукта = Качество + Опыт получения
          </p>
        </div>

        {/* 3 Insights */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            3 ИНСАЙТА, МЕНЯЮЩИХ ПРАВИЛА ИГРЫ
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Insight 1 */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="icon-container-warning mb-3">
                <FaBoxOpen className="w-6 h-6 icon-warning" />
              </div>
              <CardTitle className="text-base font-bold">1. "ЭФФЕКТ МЯТОЙ БАНКИ"</CardTitle>
              <p className="text-lg font-bold text-gray-900 mt-2">
                Логистика — это новый состав
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-gray-600">• Помятая банка = символ подделки и риск для ребенка</p>
              <p className="text-gray-600">• Негатив от плохой доставки аннулирует позитив от лучшего состава</p>
              <p className="text-gray-600">• Бренд, решивший "последнюю милю", получит беспрецедентную лояльность</p>
            </CardContent>
          </Card>

          {/* Insight 2 */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="icon-container-primary mb-3">
                <HiOutlineShoppingCart className="w-6 h-6 icon-primary" />
              </div>
              <CardTitle className="text-base font-bold">2. СЕГМЕНТАЦИЯ ПО "БОЛИ", НЕ ПО ЦЕНЕ</CardTitle>
              <p className="text-lg font-bold text-gray-900 mt-2">
                Мамы покупают не смесь, а решение проблемы
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-gray-700"><span className="font-bold">Kabrita</span> = "чистая кожа без аллергии"</p>
              <p className="text-gray-700"><span className="font-bold">NAN Comfort</span> = "спокойный сон без колик"</p>
              <p className="text-gray-700"><span className="font-bold">Nutrilak</span> = "доступное качество"</p>
              <p className="text-gray-600 pt-2">Четкая артикуляция проблемы &gt; общие слова о "гармоничном развитии"</p>
            </CardContent>
          </Card>

          {/* Insight 3 */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="icon-container-success mb-3">
                <HiOutlineCurrencyDollar className="w-6 h-6 icon-success" />
              </div>
              <CardTitle className="text-base font-bold">3. ДОВЕРИЕ ИМЕЕТ ВАЛЮТНЫЙ КУРС</CardTitle>
              <p className="text-lg font-bold text-gray-900 mt-2">
                Врач → Uzum → Цена
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-gray-600">• <span className="font-bold">Врач</span> — главный эмитент доверия при выборе</p>
              <p className="text-gray-600">• <span className="font-bold">E-commerce платформы</span> — второй источник через "оригинальность"</p>
              <p className="text-gray-600">• <span className="font-bold">"Арзон нарх"</span> — сигнал доступности и честности</p>
              <p className="text-gray-600">• <span className="font-bold">Любое сомнение</span> ("запах не тот") = мгновенная потеря клиента</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Insight */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-soft-blue/20 to-baby-pink/20 rounded-2xl px-8 py-6 shadow-sm max-w-5xl mx-auto">
            <p className="text-center text-base font-semibold text-gray-700 mb-2">
              Главный инсайт
            </p>
            <p className="text-center text-xl font-bold text-gray-900">
              "В мире тревог молодая мама ищет то, чему доверяла ее собственная мама"
            </p>
            <p className="text-center text-base font-semibold text-nestle-blue mt-3">
              NAN — единственный бренд, который связывает поколения
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}