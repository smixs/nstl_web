import { ReactNode, useContext } from 'react'
import { cn } from '@/lib/utils'
import BackgroundShapes from '@/components/decorative/BackgroundShapes'
import { useBackground } from '@/contexts/BackgroundContext'
import { SlideIndexContext } from '@/App'

interface SlideWrapperProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'dark'
  showShapes?: boolean
  disableRandomBackground?: boolean
}

export default function SlideWrapper({ 
  children, 
  className,
  variant = 'default',
  showShapes = true,
  disableRandomBackground = false 
}: SlideWrapperProps) {
  const slideIndex = useContext(SlideIndexContext)
  const { getBackgroundForSlide } = useBackground()
  const backgroundImage = getBackgroundForSlide(slideIndex)

  const variants = {
    default: 'bg-background-main text-text-primary',
    gradient: 'bg-gradient-to-br from-nestle-blue via-nestle-blue-pastel to-nestle-light-blue text-white',
    dark: 'bg-text-primary text-white'
  }

  return (
    <div className={cn(
      "w-full h-screen flex flex-col overflow-hidden relative",
      variants[variant],
      className
    )}>
      {/* Random background image - only for default variant */}
      {variant === 'default' && !disableRandomBackground && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15
          }}
        />
      )}
      
      {/* Background decorative shapes */}
      {showShapes && variant === 'default' && <BackgroundShapes />}
      
      {/* Agency logo in top right corner */}
      <div className="absolute top-8 right-8 z-20 print:hidden">
        <img 
          src="/TDI_ai_color.png" 
          alt="TDI Agency" 
          className="h-10 w-auto opacity-30 hover:opacity-40 transition-opacity"
        />
      </div>
      
      {/* Main content area with 10% padding from edges */}
      <div className="flex-1 flex flex-col justify-center px-[10%] py-[10%] relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  )
}