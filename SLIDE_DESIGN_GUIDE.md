# Slide Design Guide for Nestle Baby & Me Presentation

## 🚫 КРИТИЧЕСКИ ВАЖНОЕ ПРАВИЛО

### **КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО ИЗМЕНЯТЬ ТЕКСТЫ ИЗ ОРИГИНАЛЬНОГО ДОКУМЕНТА!**

⚠️ **ПОЛНЫЙ ЗАПРЕТ**: Все тексты, метрики, данные и формулировки из файла `NESTLE_UZBEKISTAN_стратигия_презентация.md` должны копироваться **ТОЧНО** как написано, без каких-либо изменений, интерпретаций или "улучшений".

❌ **ЗАПРЕЩЕНО**:
- Менять формулировки
- Переписывать тексты "своими словами"  
- Изменять цифры и метрики
- Добавлять или убирать слова
- Менять структуру предложений

✅ **ТРЕБУЕТСЯ**:
- Копировать тексты ДОСЛОВНО из оригинального документа
- Сохранять все числа, проценты и метрики как есть
- Использовать точные заголовки из документа
- При любых сомнениях - сверяться с оригиналом

## 🎨 Core Design Principles

### 1. Structure Template
Every slide MUST follow this exact structure:

```tsx
import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
// Import icons from react-icons (hi2, hi, fa)

export default function S##_SlideName() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        {/* Content here */}
      </div>
    </SlideWrapper>
  )
}
```

**Note**: Background patterns are now DISCOURAGED. Keep slides simple and clean without backgrounds.

### 2. Background Rules

#### ⚠️ CRITICAL UPDATE (2025-08-05):
**AVOID using backgrounds with `transparent` keyword in gradients!** This can cause PNG checkerboard pattern artifacts on some displays.

#### Recommended Approach:
1. **NO BACKGROUND (PREFERRED)** - Keep slides simple and clean
   ```tsx
   export default function S##_SlideName() {
     return (
       <SlideWrapper>
         <div className="flex flex-col h-full">
           {/* Content directly without background */}
         </div>
       </SlideWrapper>
     )
   }
   ```

2. **Solid Gradient Background (IF NEEDED)**
   ```tsx
   style={{
     backgroundImage: 'linear-gradient(135deg, #0066CC 0%, #FFE6F0 100%)',
     opacity: 0.05
   }}
   ```

3. **Radial Gradient (USE WITH CAUTION)**
   - Replace `transparent` with specific color values
   - Use rgba with full opacity instead of transparent keyword

#### Deprecated Patterns (DO NOT USE):
❌ **Geometric Pattern with transparent** - Creates checkerboard artifacts
```tsx
// BAD - Do not use!
style={{
  backgroundImage: `
    linear-gradient(45deg, rgba(34, 197, 94, 0.03) 25%, transparent 25%),
  `
}}
```

**IMPORTANT**: Background opacity MUST be between 0.03-0.1 to not interfere with content readability!

### 3. Typography Hierarchy

```tsx
// Main Title (h2)
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
  Title Here
</h2>

// Subtitle
<p className="text-lg text-gray-600">
  Subtitle here
</p>

// Card Title
<CardTitle className="text-xl">Card Title</CardTitle>
// or for smaller cards
<CardTitle className="text-base font-semibold">Section Title</CardTitle>

// Body Text
<p className="text-sm text-gray-500">Body text</p>
```

### 4. Color System (Working Implementation)

**Color System Overview:**
- Tailwind colors defined in `tailwind.config.js` (soft-blue, soft-pink, etc.)
- CSS variables defined in `/src/styles/variables.css`
- Utility classes defined in `/src/styles/color-utilities.css`

**Semantic Color Classes (from color-utilities.css):**
- Primary: `bg-primary`, `text-primary`, `icon-primary`
- Secondary: `bg-secondary`, `text-secondary`, `icon-secondary`
- Success: `bg-success`, `text-success`, `icon-success`
- Warning: `bg-warning`, `text-warning`, `icon-warning`
- Info: `bg-info`, `text-info`, `icon-info`

**Icon Container Classes (pre-defined):**
```tsx
<div className="icon-container-primary mb-4">
  <IconName className="w-7 h-7 icon-primary" />
</div>
```

**Badge Variants:**
```tsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="destructive">Error</Badge>
```

**Working with Colors:**
```tsx
// Use semantic classes
<h2 className="text-primary">Title</h2>

// Use Tailwind gray scale
<p className="text-gray-600">Subtitle</p>

// Direct CSS variable usage (when needed)
<div style={{ backgroundColor: 'var(--color-primary)' }}>

// Badge backgrounds
<Badge className="bg-primary-soft text-primary">Custom Badge</Badge>
```

**Text Colors:**
- Headers: `text-gray-900`
- Subtitles: `text-gray-600`
- Muted text: `text-gray-500`
- Primary accent: `text-primary`
- Secondary accent: `text-secondary`

### 5. Icon System

**Icon Requirements:**
1. ALWAYS use icons from `react-icons` library
2. Preferred libraries in order:
   - `react-icons/hi2` (HeroIcons v2)
   - `react-icons/hi` (HeroIcons v1)
   - `react-icons/fa` (FontAwesome)

**Icon Container Pattern:**
```tsx
// Use predefined classes (RECOMMENDED)
<div className="icon-container-primary mb-4">
  <IconName className="w-7 h-7 icon-primary" />
</div>

// Available container classes:
// icon-container-primary
// icon-container-secondary
// icon-container-success
// icon-container-warning
// icon-container-info
```

**Small Icons in Text:**
```tsx
<div className="flex items-center space-x-2">
  <IconName className="w-4 h-4 text-gray-500" />
  <span className="text-gray-600">Label</span>
</div>
```

### 6. Card Design Pattern

**Standard Card:**
```tsx
<Card className="hover:shadow-md transition-all duration-300">
  <CardHeader className="pb-4">
    {/* Use predefined icon container */}
    <div className="icon-container-primary mb-4">
      <IconName className="w-7 h-7 icon-primary" />
    </div>
    <CardTitle className="text-xl">Title</CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    {/* Content */}
  </CardContent>
</Card>
```

**Metric Display Pattern:**
```tsx
<div className="flex items-center justify-between">
  <span className="text-gray-600">Label</span>
  <Badge variant="default">Value</Badge>
</div>

// or with custom color
<div className="flex items-center justify-between">
  <span className="text-gray-600">Metric</span>
  <Badge className="bg-green-100 text-green-700">High</Badge>
</div>
```

### 7. Layout Patterns

**Three Column Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {/* Cards */}
</div>
```

**Two Column Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {/* Cards */}
</div>
```

**Bottom Conclusion Box:**
```tsx
<div className="mt-auto pt-8">
  <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
    <p className="text-center text-base font-medium text-gray-900">
      Conclusion text
    </p>
  </div>
</div>
```

### 8. Animation Classes

Available animations (already defined in CSS):
- `animate-fadeIn`
- `animate-slideUp`
- `animate-slideLeft`
- `animate-slideRight`
- `animation-delay-200`
- `animation-delay-400`
- `animation-delay-600`

### 9. Common Icon Mappings

- **Users/Audience**: `HiUsers`, `HiUserGroup`
- **Charts/Metrics**: `HiChartBar`, `FaChartLine`, `HiTrendingDown`
- **Calendar/Time**: `HiCalendar`, `HiClock`
- **Communication**: `HiChatAlt2`, `FaRegCommentDots`
- **Success/Failure**: `HiCheckCircle`, `HiXCircle`
- **Heart/Love**: `HiHeart`
- **Crown/Premium**: `FaCrown`

### 10. Slide Creation Checklist

- [ ] Import all necessary components and icons
- [ ] Add background pattern/image with low opacity (0.03-0.1)
- [ ] Use z-0 for background, z-10 for content
- [ ] Follow typography hierarchy
- [ ] Use consistent color scheme
- [ ] Add icons in colored containers for visual appeal
- [ ] Use hover:shadow-md for interactive cards
- [ ] Apply proper spacing (space-y-4/6/8)
- [ ] Add Badge components for metrics
- [ ] Include bottom conclusion box if needed
- [ ] Test that all icons are properly imported

### 11. Special Patterns

**Progress Bar Visualization:**
```tsx
<div className="relative h-16 bg-gray-50 rounded-xl overflow-hidden shadow-inner">
  <div 
    className="absolute bottom-0 left-0 bg-[color]-600 transition-all duration-1000 ease-out"
    style={{ height: '100%', width: '[percentage]%' }}
  >
    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-xs">
      [percentage]%
    </span>
  </div>
</div>
```

**List with Icons:**
```tsx
<div className="flex items-start space-x-2">
  <span className="text-[color]-600">•</span>
  <p className="text-sm">List item text</p>
</div>
```

### 12. DO NOT:

- ❌ Use emojis in titles or important text (only in conclusion boxes)
- ❌ Use shadow-lg (use shadow-md instead)
- ❌ Use complex glass effects or backdrop filters
- ❌ Use opacity higher than 0.1 for backgrounds
- ❌ Forget to add z-index to background and content (z-0 for bg, z-10 for content)
- ❌ Mix different icon libraries in the same component
- ❌ Use hard-coded colors - use existing utility classes or Tailwind colors

### 13. Working Slide Template (Based on Real Implementation)

```tsx
import SlideWrapper from '@/components/SlideWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HiChartBar, HiUsers } from 'react-icons/hi2'
import { FaChartLine } from 'react-icons/fa'

export default function S##_SlideName() {
  return (
    <SlideWrapper>
      {/* Background Pattern - choose one */}
      
      {/* Option 1: Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0066CC 0%, #FFE6F0 100%)',
          opacity: 0.05
        }}
      />
      
      {/* Option 2: Radial Gradients */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 102, 204, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 230, 240, 0.2) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Option 3: Geometric Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(34, 197, 94, 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(34, 197, 94, 0.03) 25%, transparent 25%)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Slide Title
          </h2>
          <p className="text-lg text-gray-600">
            Subtitle description
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="icon-container-primary mb-4">
                <HiUsers className="w-7 h-7 icon-primary" />
              </div>
              <CardTitle className="text-xl">Card Title</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Metric</span>
                <Badge variant="default">Value</Badge>
              </div>
              <p className="text-sm text-gray-500 pt-2">
                Description text
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Conclusion */}
        <div className="mt-auto pt-8">
          <div className="bg-gray-50 rounded-2xl px-8 py-6 shadow-sm max-w-4xl mx-auto">
            <p className="text-center text-base font-medium text-gray-900">
              📊 Key takeaway or conclusion
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
```

## Remember: Consistency is Key! 🎯

Every slide should feel like part of the same presentation. Follow these rules strictly to maintain visual harmony and professional appearance.