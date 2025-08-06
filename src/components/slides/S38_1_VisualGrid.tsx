import SlideWrapper from '@/components/SlideWrapper'

export default function S38_1_VisualGrid() {
  return (
    <SlideWrapper>
      <div className="flex h-full w-full justify-center items-center p-8">
        <img 
          src="/setka.webp"
          alt="Визуальная сетка примеров контента"
          className="max-h-full max-w-full object-contain"
          style={{ maxHeight: 'calc(100vh - 8rem)' }}
        />
      </div>
    </SlideWrapper>
  )
}