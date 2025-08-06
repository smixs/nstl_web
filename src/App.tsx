import { useState, useEffect, createContext } from 'react'
import { slides } from '@/components/slides'
import ProgressBar from '@/components/ProgressBar'
import PDFDownloadMenu from '@/components/PDFDownloadMenu'
import { cn } from '@/lib/utils'
import { BackgroundProvider } from '@/contexts/BackgroundContext'

export const SlideIndexContext = createContext<number>(0)

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPrintMode, setIsPrintMode] = useState(false)

  // Print mode detection (from URL parameter or browser print event)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const printParam = params.get('print')
    
    if (printParam === 'true') {
      setIsPrintMode(true)
    }
    
    const onBeforePrint = () => setIsPrintMode(true)
    const onAfterPrint = () => setIsPrintMode(false)
    
    window.addEventListener('beforeprint', onBeforePrint)
    window.addEventListener('afterprint', onAfterPrint)
    
    return () => {
      window.removeEventListener('beforeprint', onBeforePrint)
      window.removeEventListener('afterprint', onAfterPrint)
    }
  }, [])

  // Навигация с клавиатуры с фильтрацией форм
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Игнорировать навигацию при вводе в формы
      const target = e.target as HTMLElement
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable) {
        return
      }
      
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // URL синхронизация
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const slideParam = params.get('slide')
    if (slideParam) {
      const slideIndex = parseInt(slideParam) - 1
      if (slideIndex >= 0 && slideIndex < slides.length) {
        setCurrentSlide(slideIndex)
      }
    }
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.set('slide', String(currentSlide + 1))
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  }, [currentSlide])

  // Клик для следующего слайда
  const handleClick = () => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  }

  return (
    <BackgroundProvider totalSlides={slides.length}>
      <div className={cn("presentation min-h-screen bg-white", isPrintMode && "print-mode")}>
        {/* Прогресс бар */}
        {!isPrintMode && <ProgressBar current={currentSlide} total={slides.length} />}
        
        {/* PDF Download Menu */}
        {!isPrintMode && <PDFDownloadMenu />}
        
        {/* Подсказка навигации на первом слайде */}
        {currentSlide === 0 && !isPrintMode && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm print:hidden animate-pulse">
            Используйте стрелки ← → или кликните для навигации
          </div>
        )}

        {/* Рендерим только активный слайд (или все в режиме печати) */}
        {(isPrintMode ? slides : [slides[currentSlide]]).map((SlideComponent, index) => {
          const slideIndex = isPrintMode ? index : currentSlide
          return (
            <SlideIndexContext.Provider key={slideIndex} value={slideIndex}>
              <div
                className={cn(
                  "slide w-full min-h-screen cursor-pointer",
                  "print:static print:block print:!w-[267mm] print:!h-[180mm]",
                  isPrintMode || slideIndex === currentSlide ? "block" : "hidden"
                )}
                onClick={handleClick}
                role="button"
                aria-label={`Слайд ${slideIndex + 1}`}
              >
                <SlideComponent />
              </div>
            </SlideIndexContext.Provider>
          )
        })}
      </div>
    </BackgroundProvider>
  )
}

export default App