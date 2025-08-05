import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react'
import { backgroundImages } from '@/lib/constants'

interface BackgroundContextType {
  getBackgroundForSlide: (slideIndex: number) => string
  refreshBackgrounds: () => void
}

const BackgroundContext = createContext<BackgroundContextType | null>(null)

interface BackgroundProviderProps {
  children: ReactNode
  totalSlides?: number
}

export function BackgroundProvider({ children, totalSlides = 44 }: BackgroundProviderProps) {
  const [backgroundMap, setBackgroundMap] = useState<Map<number, string>>(new Map())

  const getRandomBackground = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length)
    return backgroundImages[randomIndex]
  }, [])

  // Pre-generate backgrounds for all slides to avoid setState during render
  useEffect(() => {
    const newMap = new Map<number, string>()
    for (let i = 0; i < totalSlides; i++) {
      newMap.set(i, getRandomBackground())
    }
    setBackgroundMap(newMap)
  }, [totalSlides, getRandomBackground])

  const getBackgroundForSlide = useCallback((slideIndex: number) => {
    return backgroundMap.get(slideIndex) || backgroundImages[0]
  }, [backgroundMap])

  const refreshBackgrounds = useCallback(() => {
    const newMap = new Map<number, string>()
    for (let i = 0; i < totalSlides; i++) {
      newMap.set(i, getRandomBackground())
    }
    setBackgroundMap(newMap)
  }, [totalSlides, getRandomBackground])

  return (
    <BackgroundContext.Provider value={{ getBackgroundForSlide, refreshBackgrounds }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  const context = useContext(BackgroundContext)
  if (!context) {
    throw new Error('useBackground must be used within BackgroundProvider')
  }
  return context
}