# Color Migration Guide

## 🎨 Глобальная система цветов

Теперь все цвета определены глобально в `/src/styles/variables.css` и `/src/styles/color-utilities.css`.

## ✅ Что уже сделано:

1. **Создана система CSS переменных** в `variables.css`
2. **Созданы утилиты** в `color-utilities.css`
3. **Обновлены компоненты**:
   - Badge - использует варианты
   - ProgressBar - использует CSS переменные
4. **Частично обновлены слайды**:
   - S05_UniqueAdvantage - использует глобальные классы
   - S03_ProblemDetails - использует icon-container классы
   - S01_Title - использует CSS переменные

## 🔄 Как мигрировать остальные слайды:

### 1. Замена иконок в контейнерах:
```tsx
// Было:
<div className="w-14 h-14 rounded-2xl bg-blue-200 flex items-center justify-center shadow-md mb-4">
  <HiUsers className="w-7 h-7 text-blue-600" />
</div>

// Стало:
<div className="icon-container-primary mb-4">
  <HiUsers className="w-7 h-7 icon-primary" />
</div>
```

### 2. Замена Badge:
```tsx
// Было:
<Badge className="bg-blue-100 text-blue-700">46K</Badge>

// Стало:
<Badge variant="default">46K</Badge>
// или
<Badge variant="success">Позитив</Badge>
<Badge variant="destructive">Проблема</Badge>
```

### 3. Замена цветов текста:
```tsx
// Было:
<h2 className="text-blue-600">Заголовок</h2>

// Стало (варианты):
<h2 className="text-primary">Заголовок</h2>
// или
<h2 className="text-[var(--color-primary-dark)]">Заголовок</h2>
```

### 4. Замена фоновых цветов:
```tsx
// Было:
<div className="bg-pink-400">

// Стало:
<div className="bg-[var(--color-secondary)]">
```

## 🎯 Семантические классы:

- **Primary** (голубой) - основной бренд, главная информация
- **Secondary** (розовый) - акценты, проблемы
- **Success** (зеленый) - позитив, успех
- **Warning** (оранжевый) - внимание, предупреждение
- **Info** (фиолетовый) - дополнительная информация

## 📝 Чек-лист для каждого слайда:

- [ ] Заменить все хардкод цвета на глобальные классы или CSS переменные
- [ ] Использовать icon-container-* классы для иконок
- [ ] Использовать Badge с variant вместо custom классов
- [ ] Проверить что нет классов типа bg-blue-600, text-pink-700 и т.д.
- [ ] Использовать семантические названия (primary, secondary) вместо конкретных цветов

## ⚡ Быстрые команды для поиска:

```bash
# Найти хардкод цвета
grep -r "bg-blue-\|bg-pink-\|bg-green-\|bg-orange-\|bg-purple-\|text-blue-\|text-pink-" src/components/slides/

# Найти Badge с классами
grep -r "Badge className=" src/components/slides/

# Найти контейнеры с иконками
grep -r "rounded-2xl.*flex.*items-center.*justify-center" src/components/slides/
```

## 🚀 Результат:

После миграции все цвета будут управляться из одного места, и изменение темы будет требовать только обновления CSS переменных!