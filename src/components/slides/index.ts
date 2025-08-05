import S01_Title from './S01_Title'
import S02_MainProblem from './S02_MainProblem'
import S03_ProblemDetails from './S03_ProblemDetails'
import S05_UniqueAdvantage from './S05_UniqueAdvantage'
import S13_Kabrita from './S13_Kabrita'
import S14_Nutrilak from './S14_Nutrilak'
import S15_Agusha from './S15_Agusha'
import S16_Nutrilon from './S16_Nutrilon'
import S17_Nuppi from './S17_Nuppi'
import S18_FrutoNyanya from './S18_FrutoNyanya'

export const slides = [
  S01_Title,
  S02_MainProblem,
  S03_ProblemDetails,
  S05_UniqueAdvantage,
  S13_Kabrita,
  S14_Nutrilak,
  S15_Agusha,
  S16_Nutrilon,
  S17_Nuppi,
  S18_FrutoNyanya,
] as const

export const slideNames = [
  'Титульный слайд',
  'Главная проблема',
  'Детализация проблемы',
  'Уникальное преимущество',
  'Профиль конкурента: Kabrita',
  'Профиль конкурента: Nutrilak',
  'Профиль конкурента: Agusha',
  'Профиль конкурента: Nutrilon',
  'Профиль конкурента: Nuppi',
  'Профиль конкурента: FrutoNyanya',
] as const